/**
 * Vercel Edge Function — Lexora TikTok Video Proxy
 *
 * Sirve vídeos almacenados en Supabase Storage bajo el dominio verificado
 * lexoraflashcards.com, permitiendo que TikTok Content Posting API
 * (PULL_FROM_URL) los descargue sin error url_ownership_unverified.
 *
 * Uso:  GET /api/video?f=FILENAME.mp4
 *
 * El archivo debe existir en:
 *   Supabase Storage → social-media/tiktok/FILENAME.mp4
 */

export const config = {
  runtime: 'edge',
};

const SUPABASE_STORAGE_BASE =
  'https://cnaryvdbvvouxzlqlcuh.supabase.co/storage/v1/object/public/social-media/tiktok';

export default async function handler(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const f = searchParams.get('f');

  // Validar nombre de archivo — solo .mp4, sin path traversal
  if (
    !f ||
    f.includes('/') ||
    f.includes('\\') ||
    f.includes('..') ||
    !/\.mp4$/i.test(f) ||
    f.length > 200
  ) {
    return new Response('Bad request: invalid filename', { status: 400 });
  }

  const storageUrl = `${SUPABASE_STORAGE_BASE}/${encodeURIComponent(f)}`;

  let upstream: Response;
  try {
    upstream = await fetch(storageUrl, {
      headers: { 'User-Agent': 'LexoraVideoProxy/1.0' },
    });
  } catch {
    return new Response('Upstream fetch failed', { status: 502 });
  }

  if (!upstream.ok) {
    return new Response(`Not found (${upstream.status})`, {
      status: upstream.status === 404 ? 404 : 502,
    });
  }

  const headers = new Headers();
  headers.set('content-type', upstream.headers.get('content-type') || 'video/mp4');
  const cl = upstream.headers.get('content-length');
  if (cl) headers.set('content-length', cl);
  headers.set('cache-control', 'no-store, no-cache, must-revalidate');
  headers.set('accept-ranges', 'bytes');

  return new Response(upstream.body, { status: 200, headers });
}
