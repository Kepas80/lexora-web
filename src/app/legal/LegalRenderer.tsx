import type { LegalDoc } from './legalContent';
import { DOCUMENTOS } from './legalContent';

/** Renderiza cualquiera de los documentos legales con el estilo de la web. */
export function LegalRenderer({ doc }: { doc: LegalDoc }) {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-[#0F1A33] sm:text-4xl mb-2">
          {doc.titulo}
        </h1>
        <p className="text-xl text-[#2D6BFF] mb-2 font-medium">{doc.bajada}</p>
        <p className="text-sm text-slate-400 mb-10">
          Última actualización: {doc.actualizado}
        </p>

        <div className="prose prose-slate max-w-none">
          {doc.secciones.map((s) => (
            <section className="mb-8" key={s.h}>
              <h2 className="text-lg font-bold text-[#0F1A33] mb-3">{s.h}</h2>
              {s.p.map((t, i) => (
                <p className="text-slate-600 leading-relaxed mb-3" key={i}>
                  {t}
                </p>
              ))}
              {s.ul && (
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  {s.ul.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <nav className="mt-14 pt-8 border-t border-slate-200">
          <p className="text-sm font-semibold text-[#0F1A33] mb-3">Otros documentos legales</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {DOCUMENTOS.filter((d) => d.id !== doc.id).map((d) => (
              <li key={d.id}>
                <a href={`/${d.slug}`} className="text-[#2D6BFF] hover:underline">
                  {d.titulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
