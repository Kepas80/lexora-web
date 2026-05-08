import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'wouter';

const SUPABASE_CALLBACK_URL = 'https://cnaryvdbvvouxzlqlcuh.supabase.co/functions/v1/tiktok-oauth-callback';
const REDIRECT_URI = 'https://www.lexoraflashcards.com/tiktok/callback';

type Status = 'loading' | 'success' | 'error';

export function TikTokCallback() {
  const [, navigate] = useLocation();
  const [status, setStatus] = useState<Status>('loading');
  const [errorMsg, setErrorMsg] = useState('');
  const called = useRef(false);

  useEffect(() => {
    if (called.current) return;
    called.current = true;

    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const state = params.get('state');
    const error = params.get('error');

    if (error) {
      setErrorMsg(params.get('error_description') || error);
      setStatus('error');
      return;
    }

    if (!code) {
      setErrorMsg('No se recibió el código de autorización de TikTok.');
      setStatus('error');
      return;
    }

    // Optional: verify state to prevent CSRF
    const savedState = localStorage.getItem('tiktok_oauth_state');
    if (savedState && state && savedState !== state) {
      setErrorMsg('Estado OAuth inválido. Inténtalo de nuevo.');
      setStatus('error');
      return;
    }
    localStorage.removeItem('tiktok_oauth_state');

    // Exchange code for token
    fetch(SUPABASE_CALLBACK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, redirect_uri: REDIRECT_URI }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          throw new Error(data.error);
        }
        localStorage.setItem('tiktok_session', JSON.stringify(data));
        setStatus('success');
        setTimeout(() => navigate('/tiktok'), 1500);
      })
      .catch((err) => {
        setErrorMsg(err instanceof Error ? err.message : 'Error al autenticar con TikTok.');
        setStatus('error');
      });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-sm">
        {status === 'loading' && (
          <>
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-black flex items-center justify-center shadow-lg">
              <TikTokIcon />
            </div>
            <div className="w-8 h-8 mx-auto border-3 border-[#2D6BFF]/20 border-t-[#2D6BFF] rounded-full animate-spin mb-4" style={{ borderWidth: 3 }}></div>
            <p className="text-[#0F1A33] font-semibold">Conectando con TikTok…</p>
            <p className="text-sm text-slate-500 mt-1">Verificando tu cuenta</p>
          </>
        )}

        {status === 'success' && (
          <>
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-[#0F1A33] font-bold text-lg">¡Cuenta conectada!</p>
            <p className="text-sm text-slate-500 mt-1">Redirigiendo a Lexora…</p>
          </>
        )}

        {status === 'error' && (
          <>
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-red-100 flex items-center justify-center shadow">
              <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <p className="text-[#0F1A33] font-bold text-lg">Error al conectar</p>
            <p className="text-sm text-red-500 mt-1 mb-5">{errorMsg}</p>
            <a
              href="/tiktok"
              className="inline-flex items-center px-5 py-2.5 bg-[#2D6BFF] text-white text-sm font-semibold rounded-xl hover:bg-blue-600 transition-colors"
            >
              Volver e intentarlo
            </a>
          </>
        )}
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
