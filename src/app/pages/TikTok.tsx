import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const TIKTOK_CLIENT_KEY = 'sbawxemwp8rwq9bdiz';
const REDIRECT_URI = 'https://www.lexoraflashcards.com/tiktok/callback';
const SUPABASE_FUNCTION_URL = 'https://cnaryvdbvvouxzlqlcuh.supabase.co/functions/v1/tiktok-post-video';

interface TikTokUser {
  open_id: string;
  display_name?: string;
  avatar_url?: string;
  username?: string;
}

interface TikTokSession {
  access_token: string;
  open_id: string;
  user: TikTokUser | null;
}

export function TikTok() {
  const [session, setSession] = useState<TikTokSession | null>(null);
  const [videoUrl, setVideoUrl] = useState('');
  const [videoTitle, setVideoTitle] = useState('Lexora Flashcards – Estudia más rápido con IA');
  const [posting, setPosting] = useState(false);
  const [publishResult, setPublishResult] = useState<{ publish_id?: string; error?: string } | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('tiktok_session');
    if (stored) {
      try {
        setSession(JSON.parse(stored));
      } catch {
        localStorage.removeItem('tiktok_session');
      }
    }
  }, []);

  function handleConnect() {
    const state = crypto.randomUUID();
    localStorage.setItem('tiktok_oauth_state', state);

    const params = new URLSearchParams({
      client_key: TIKTOK_CLIENT_KEY,
      response_type: 'code',
      scope: 'user.info.basic,video.publish',
      redirect_uri: REDIRECT_URI,
      state,
    });

    window.location.href = `https://www.tiktok.com/v2/auth/authorize/?${params.toString()}`;
  }

  function handleDisconnect() {
    localStorage.removeItem('tiktok_session');
    setSession(null);
    setPublishResult(null);
    setVideoUrl('');
  }

  async function handlePublish(e: React.FormEvent) {
    e.preventDefault();
    if (!session || !videoUrl.trim()) return;

    setPosting(true);
    setPublishResult(null);

    try {
      const res = await fetch(SUPABASE_FUNCTION_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_token: session.access_token,
          video_url: videoUrl.trim(),
          title: videoTitle.trim() || 'Lexora Flashcards – Estudia más rápido con IA',
          privacy_level: 'SELF_ONLY',
        }),
      });

      const data = await res.json();
      if (data.error) {
        setPublishResult({ error: data.error });
      } else {
        setPublishResult({ publish_id: data.publish_id });
        setVideoUrl('');
      }
    } catch (err) {
      setPublishResult({ error: err instanceof Error ? err.message : 'Network error' });
    } finally {
      setPosting(false);
    }
  }

  return (
    <>
      <Helmet>
        <title>Lexora × TikTok — Publica tus flashcards en TikTok</title>
        <meta name="description" content="Conecta tu cuenta de TikTok con Lexora y publica tus vídeos de estudio directamente desde la app." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="pt-24 sm:pt-28 pb-20 bg-white min-h-screen">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <img src="/icon-512.png" alt="Lexora" className="w-14 h-14 rounded-2xl shadow-md flex-shrink-0" width={56} height={56} />
            <div>
              <p className="text-sm font-semibold text-[#2D6BFF] uppercase tracking-wider">Lexora × TikTok</p>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#0F1A33]">Integración TikTok</h1>
            </div>
          </div>

          {!session ? (
            /* ── NOT CONNECTED ── */
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-black flex items-center justify-center shadow-lg">
                <TikTokIcon />
              </div>
              <h2 className="text-xl font-bold text-[#0F1A33] mb-2">Conecta tu cuenta de TikTok</h2>
              <p className="text-slate-500 mb-6 leading-relaxed">
                Autoriza a Lexora para iniciar sesión con TikTok y publicar vídeos de flashcards en tu perfil directamente desde la app.
              </p>

              <div className="mb-6 text-left bg-white border border-slate-200 rounded-xl p-4 space-y-2">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Permisos solicitados</p>
                <PermissionRow icon="👤" label="user.info.basic" desc="Ver tu nombre y foto de perfil" />
                <PermissionRow icon="📤" label="video.publish" desc="Publicar vídeos en tu cuenta" />
              </div>

              <button
                onClick={handleConnect}
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-semibold rounded-xl hover:bg-zinc-800 transition-colors shadow-md"
              >
                <TikTokIcon size={20} />
                Iniciar sesión con TikTok
              </button>

              <p className="mt-4 text-xs text-slate-400">
                Al conectar aceptas la{' '}
                <a href="/privacypolicy" className="text-[#2D6BFF] hover:underline">política de privacidad</a>
                {' '}y los{' '}
                <a href="/terms-of-the-service" className="text-[#2D6BFF] hover:underline">términos de servicio</a>
                {' '}de Lexora.
              </p>
            </div>
          ) : (
            /* ── CONNECTED ── */
            <div className="space-y-6">
              {/* Profile card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-center gap-4">
                {session.user?.avatar_url ? (
                  <img
                    src={session.user.avatar_url}
                    alt={session.user.display_name || 'TikTok user'}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-[#2D6BFF]/20"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <TikTokIcon size={24} />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                      Conectado
                    </span>
                  </div>
                  <p className="text-lg font-bold text-[#0F1A33] mt-1 truncate">
                    {session.user?.display_name || session.user?.username || 'Usuario TikTok'}
                  </p>
                  {session.user?.username && (
                    <p className="text-sm text-slate-500 truncate">@{session.user.username}</p>
                  )}
                </div>
                <button
                  onClick={handleDisconnect}
                  className="flex-shrink-0 text-sm text-slate-400 hover:text-red-500 transition-colors font-medium"
                >
                  Desconectar
                </button>
              </div>

              {/* Publish form */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <h2 className="text-lg font-bold text-[#0F1A33] mb-1">Publicar vídeo en TikTok</h2>
                <p className="text-sm text-slate-500 mb-5">Introduce la URL pública de tu vídeo para subirlo a TikTok.</p>

                <form onSubmit={handlePublish} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0F1A33] mb-1.5">
                      URL del vídeo <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="url"
                      value={videoUrl}
                      onChange={(e) => setVideoUrl(e.target.value)}
                      placeholder="https://ejemplo.com/video.mp4"
                      required
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm text-[#0F1A33] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2D6BFF]/30 focus:border-[#2D6BFF]"
                    />
                    <p className="mt-1 text-xs text-slate-400">
                      El vídeo debe ser una URL pública y directamente accesible (mp4, mov…).
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0F1A33] mb-1.5">
                      Título del vídeo
                    </label>
                    <input
                      type="text"
                      value={videoTitle}
                      onChange={(e) => setVideoTitle(e.target.value)}
                      maxLength={150}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm text-[#0F1A33] focus:outline-none focus:ring-2 focus:ring-[#2D6BFF]/30 focus:border-[#2D6BFF]"
                    />
                  </div>

                  <div className="bg-slate-50 rounded-xl px-4 py-3 text-xs text-slate-500 flex items-start gap-2">
                    <span className="text-base leading-none mt-0.5">🔒</span>
                    <span>La visibilidad se establece en <strong>Solo yo</strong> para la demo. Los vídeos no son públicos hasta que tú los publiques desde TikTok.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={posting || !videoUrl.trim()}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#2D6BFF] text-white font-semibold rounded-xl hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
                  >
                    {posting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        Publicando…
                      </>
                    ) : (
                      <>
                        <TikTokIcon size={18} />
                        Publicar en TikTok
                      </>
                    )}
                  </button>
                </form>

                {/* Result */}
                {publishResult && (
                  <div className={`mt-4 rounded-xl p-4 text-sm ${publishResult.error ? 'bg-red-50 border border-red-200 text-red-700' : 'bg-emerald-50 border border-emerald-200 text-emerald-700'}`}>
                    {publishResult.error ? (
                      <p><strong>Error:</strong> {publishResult.error}</p>
                    ) : (
                      <p>
                        <strong>✓ Vídeo enviado correctamente</strong><br />
                        <span className="text-xs text-emerald-600 font-mono mt-1 block">publish_id: {publishResult.publish_id}</span>
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function PermissionRow({ icon, label, desc }: { icon: string; label: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 py-1">
      <span className="text-base flex-shrink-0">{icon}</span>
      <div>
        <p className="text-xs font-semibold text-[#0F1A33] font-mono">{label}</p>
        <p className="text-xs text-slate-500">{desc}</p>
      </div>
    </div>
  );
}

function TikTokIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.28 8.28 0 0 0 4.84 1.55V6.79a4.85 4.85 0 0 1-1.07-.1z" />
    </svg>
  );
}
