import { useEffect, useState } from 'react';
import { Check, Infinity as InfinityIcon } from 'lucide-react';

/**
 * Comparativa de planes leida en vivo desde Supabase (RPC `public_pricing`).
 *
 * Es la fuente de verdad: cuando el agente activa una funcion para un plan en
 * `plans_limits`, esta seccion la refleja sin tocar codigo. Las tarjetas de
 * arriba siguen siendo copy comercial escrito a mano.
 *
 * Sin dependencias nuevas: se llama a la RPC con fetch y la clave anonima.
 */

const SUPABASE_URL = 'https://cnaryvdbvvouxzlqlcuh.supabase.co';
const SUPABASE_ANON =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' +
  '.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNuYXJ5dmRidnZvdXh6bHFsY3VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2ODA5ODcsImV4cCI6MjA2MjI1Njk4N30' +
  '.xJi9sr6OCOzsIgxVb_0gnKtx1Y-9uxDTj7k7ldcMCrk';

interface Caracteristica {
  etiqueta: string;
  tipo: 'numero' | 'booleano' | 'texto';
  valor: number | boolean | null;
  ilimitado: boolean;
  sufijo: string;
}

interface PlanPrecio {
  plan: string;
  nombre: string;
  descripcion: string | null;
  precio_mensual: number;
  precio_anual_al_mes: number;
  destacado: boolean;
  caracteristicas: Caracteristica[] | null;
}

function formatoPrecio(n: number) {
  return n === 0 ? '0 €' : `${n.toString().replace('.', ',')} €`;
}

export function PricingLive() {
  const [planes, setPlanes] = useState<PlanPrecio[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    let vivo = true;
    fetch(`${SUPABASE_URL}/rest/v1/rpc/public_pricing`, {
      method: 'POST',
      headers: {
        apikey: SUPABASE_ANON,
        Authorization: `Bearer ${SUPABASE_ANON}`,
        'Content-Type': 'application/json',
      },
      body: '{}',
    })
      .then((r) => (r.ok ? r.json() : []))
      .then((d) => {
        if (vivo && Array.isArray(d)) setPlanes(d);
      })
      .catch(() => {
        /* si falla, la seccion simplemente no se pinta */
      })
      .finally(() => vivo && setCargando(false));
    return () => {
      vivo = false;
    };
  }, []);

  if (cargando || planes.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-[#0F1A33] mb-3">
          Qué incluye cada plan
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Límites y funciones reales de cada plan, tal y como están configurados en la aplicación.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {planes.map((p) => (
          <div
            key={p.plan}
            className="p-6 bg-white"
            style={{
              borderRadius: '20px',
              border: p.destacado ? '2px solid #2D6BFF' : '1px solid rgba(0,0,0,0.08)',
              boxShadow: p.destacado
                ? '0 16px 40px -20px rgba(45,107,255,0.45)'
                : '0 10px 30px -18px rgba(0,0,0,0.15)',
            }}
          >
            <div className="flex items-baseline justify-between mb-1">
              <h3 className="text-lg font-bold text-[#0F1A33]">{p.nombre}</h3>
              {p.destacado && (
                <span className="text-[11px] font-semibold text-[#2D6BFF] bg-blue-50 px-2 py-0.5 rounded-full">
                  Más elegido
                </span>
              )}
            </div>

            <p className="text-2xl font-bold text-[#0F1A33] mb-1">
              {formatoPrecio(p.precio_anual_al_mes)}
              <span className="text-sm font-normal text-slate-500"> /mes</span>
            </p>
            {p.precio_mensual > p.precio_anual_al_mes && (
              <p className="text-xs text-slate-400 mb-4">
                pagando un año · {formatoPrecio(p.precio_mensual)}/mes si pagas mes a mes
              </p>
            )}
            {p.precio_mensual === 0 && <p className="text-xs text-slate-400 mb-4">para siempre</p>}

            <ul className="space-y-2 mt-4">
              {(p.caracteristicas ?? []).map((c) => (
                <li key={c.etiqueta} className="flex items-start gap-2 text-sm text-slate-600">
                  {c.ilimitado ? (
                    <InfinityIcon className="w-4 h-4 text-[#2D6BFF] shrink-0 mt-0.5" />
                  ) : (
                    <Check className="w-4 h-4 text-[#2D6BFF] shrink-0 mt-0.5" />
                  )}
                  <span>
                    {c.etiqueta}
                    {c.tipo === 'numero' && (
                      <strong className="text-[#0F1A33]">
                        {c.ilimitado ? ': ilimitado' : `: ${c.valor}${c.sufijo}`}
                      </strong>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
