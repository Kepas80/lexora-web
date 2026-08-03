/**
 * Gestión del consentimiento de cookies.
 *
 * Criterios que cumple (Guía de cookies de la AEPD, art. 22.2 LSSI y RGPD):
 *  - Nada de analítica ni marketing se carga antes de un consentimiento afirmativo.
 *  - Rechazar cuesta exactamente lo mismo que aceptar: un clic en la primera capa.
 *  - Sin casillas premarcadas y sin muro de cookies: la web funciona igual si rechazas.
 *  - La decisión se puede cambiar en cualquier momento y caduca a los 24 meses.
 */

const CLAVE = 'lexora_consent_v1';
const MESES_VALIDEZ = 24;

export type Categoria = 'analitica' | 'marketing';

export interface Consentimiento {
  analitica: boolean;
  marketing: boolean;
  fecha: string;
  version: number;
}

export const CONSENT_VERSION = 1;

/** Devuelve el consentimiento guardado, o null si no hay o ya caducó. */
export function leerConsentimiento(): Consentimiento | null {
  try {
    const raw = localStorage.getItem(CLAVE);
    if (!raw) return null;
    const c = JSON.parse(raw) as Consentimiento;
    if (c.version !== CONSENT_VERSION) return null;

    const caducidad = new Date(c.fecha);
    caducidad.setMonth(caducidad.getMonth() + MESES_VALIDEZ);
    if (caducidad < new Date()) return null;

    return c;
  } catch {
    return null;
  }
}

export function guardarConsentimiento(analitica: boolean, marketing: boolean): Consentimiento {
  const c: Consentimiento = {
    analitica,
    marketing,
    fecha: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
  try {
    localStorage.setItem(CLAVE, JSON.stringify(c));
  } catch {
    /* modo incógnito con almacenamiento bloqueado: seguimos sin persistir */
  }
  aplicarConsentimiento(c);
  return c;
}

/** Borra la decisión para que vuelva a preguntarse. */
export function revocarConsentimiento() {
  try {
    localStorage.removeItem(CLAVE);
  } catch {
    /* noop */
  }
}

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    uetq?: any[];
  }
}

const GA_ID = 'G-RPRHZ3N9WS';
let gaCargado = false;
let bingCargado = false;

function gtag(...args: any[]) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

function cargarScript(src: string) {
  const s = document.createElement('script');
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

/** Traduce la decisión a Consent Mode v2 y carga los scripts autorizados. */
export function aplicarConsentimiento(c: Consentimiento) {
  gtag('consent', 'update', {
    analytics_storage: c.analitica ? 'granted' : 'denied',
    ad_storage: c.marketing ? 'granted' : 'denied',
    ad_user_data: c.marketing ? 'granted' : 'denied',
    ad_personalization: c.marketing ? 'granted' : 'denied',
  });

  if (c.analitica && !gaCargado) {
    gaCargado = true;
    cargarScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`);
    gtag('js', new Date());
    gtag('config', GA_ID, { anonymize_ip: true });
  }

  if (c.marketing && !bingCargado) {
    bingCargado = true;
    cargarScript('https://bat.bing.com/bat.js');
    window.uetq = window.uetq || [];
    window.uetq.push('ev', 'pageLoad');
  }
}

/** Se llama una vez al arrancar la app. */
export function inicializarConsentimiento(): Consentimiento | null {
  const c = leerConsentimiento();
  if (c) aplicarConsentimiento(c);
  return c;
}

/** Permite reabrir el panel desde el pie de página. */
export const EVENTO_ABRIR_PREFERENCIAS = 'lexora:abrir-preferencias-cookies';

export function abrirPreferenciasCookies() {
  window.dispatchEvent(new CustomEvent(EVENTO_ABRIR_PREFERENCIAS));
}
