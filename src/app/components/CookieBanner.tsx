import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import {
  EVENTO_ABRIR_PREFERENCIAS,
  guardarConsentimiento,
  inicializarConsentimiento,
  leerConsentimiento,
} from '../legal/consent';

/**
 * Aviso de cookies discreto: barra inferior, sin capa oscura y sin bloquear la
 * navegación. Aceptar y rechazar están al mismo nivel, como exige la AEPD.
 */
export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [panel, setPanel] = useState(false);
  const [analitica, setAnalitica] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const guardado = inicializarConsentimiento();
    if (!guardado) setVisible(true);

    const abrir = () => {
      const c = leerConsentimiento();
      setAnalitica(c?.analitica ?? false);
      setMarketing(c?.marketing ?? false);
      setPanel(true);
      setVisible(true);
    };
    window.addEventListener(EVENTO_ABRIR_PREFERENCIAS, abrir);
    return () => window.removeEventListener(EVENTO_ABRIR_PREFERENCIAS, abrir);
  }, []);

  if (!visible) return null;

  const decidir = (a: boolean, m: boolean) => {
    guardarConsentimiento(a, m);
    setVisible(false);
    setPanel(false);
  };

  const btnBase =
    'px-4 py-2 text-sm font-semibold rounded-full transition-colors whitespace-nowrap';

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-4 pointer-events-none"
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
    >
      <div
        className="pointer-events-auto mx-auto max-w-3xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-xl rounded-2xl p-4 sm:p-5"
      >
        {!panel ? (
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <p className="text-sm text-slate-600 leading-snug flex-1">
              Usamos cookies propias necesarias para que Lexora funcione y, solo si nos das permiso,
              cookies de análisis para saber qué mejorar.{' '}
              <Link href="/cookies" className="text-[#2D6BFF] hover:underline font-medium">
                Más información
              </Link>
              .
            </p>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => decidir(false, false)}
                className={`${btnBase} bg-slate-100 text-slate-700 hover:bg-slate-200`}
              >
                Rechazar
              </button>
              <button
                onClick={() => decidir(true, false)}
                className={`${btnBase} bg-[#2D6BFF] text-white hover:bg-[#1F55D6]`}
              >
                Aceptar
              </button>
              <button
                onClick={() => setPanel(true)}
                className="text-sm text-slate-500 hover:text-slate-800 underline underline-offset-2 whitespace-nowrap"
              >
                Configurar
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-base font-bold text-[#0F1A33] mb-3">Preferencias de cookies</h2>

            <div className="space-y-3 mb-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-slate-400"
                />
                <div>
                  <p className="text-sm font-semibold text-[#0F1A33]">Necesarias</p>
                  <p className="text-xs text-slate-500 leading-snug">
                    Sesión, seguridad y tus preferencias de idioma o tema. Sin ellas no puedes
                    iniciar sesión, por eso no se pueden desactivar.
                  </p>
                </div>
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={analitica}
                  onChange={(e) => setAnalitica(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-[#2D6BFF] focus:ring-[#2D6BFF]"
                />
                <div>
                  <p className="text-sm font-semibold text-[#0F1A33]">Análisis</p>
                  <p className="text-xs text-slate-500 leading-snug">
                    Google Analytics con IP anonimizada. Nos dice qué páginas se usan para decidir
                    qué mejorar.
                  </p>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-[#2D6BFF] focus:ring-[#2D6BFF]"
                />
                <div>
                  <p className="text-sm font-semibold text-[#0F1A33]">Marketing</p>
                  <p className="text-xs text-slate-500 leading-snug">
                    Medición de campañas publicitarias (Microsoft Advertising).
                  </p>
                </div>
              </label>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => decidir(analitica, marketing)}
                className={`${btnBase} bg-[#2D6BFF] text-white hover:bg-[#1F55D6]`}
              >
                Guardar preferencias
              </button>
              <button
                onClick={() => decidir(false, false)}
                className={`${btnBase} bg-slate-100 text-slate-700 hover:bg-slate-200`}
              >
                Rechazar todo
              </button>
              <button
                onClick={() => decidir(true, true)}
                className={`${btnBase} bg-slate-100 text-slate-700 hover:bg-slate-200`}
              >
                Aceptar todo
              </button>
              <Link
                href="/cookies"
                className="text-sm text-slate-500 hover:text-slate-800 underline underline-offset-2 ml-auto"
              >
                Política de cookies
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
