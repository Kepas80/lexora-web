export function Centros() {
  const F = [
    ['Licencias por asientos', 'Todos los alumnos y profesores con IA Pro incluido durante el curso, con un unico contrato para el centro.'],
    ['Codigos por clase y de profesor', 'Cada clase tiene su codigo: los alumnos entran directos a su grupo. Los profesores entran con su propio codigo, sin gestion manual.'],
    ['Panel del profesor', 'Progreso de cada alumno por nombre: sets creados, sesiones de estudio y ultima actividad. Exportable a CSV.'],
    ['Tareas y examenes', 'El profesor asigna sets con fecha limite y lanza examenes con nota automatica. Ve el % de la clase que lo ha completado.'],
    ['Biblioteca del centro', 'Los profesores publican su material y todos los alumnos lo tienen en su app al instante.'],
    ['Estadisticas por clase', 'Compara grupos: alumnos activos, sesiones y nota media por clase.'],
  ];
  return (
    <div className="pt-28 pb-20 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-[#0F1A33]">Lexora para centros</h1>
      <p className="mt-4 text-lg text-slate-600 max-w-2xl">
        Colegios, universidades y academias: flashcards con IA y repeticion espaciada para todo el centro,
        con panel del profesor, tareas y examenes. Sin tarjetas de credito de alumnos: una licencia anual por asientos.
      </p>
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {F.map(([t, d]) => (
          <div key={t} className="border border-slate-200 rounded-2xl p-6">
            <h3 className="font-semibold text-[#0F1A33]">{t}</h3>
            <p className="mt-2 text-slate-600 text-sm">{d}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 bg-[#0F1A33] rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-white">Pide una demo o presupuesto</h2>
        <p className="mt-2 text-slate-300">Precio por asiento segun volumen. Te respondemos en menos de 24h.</p>
        <a href="/contact" className="inline-block mt-5 bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold px-8 py-3 rounded-xl">
          Contactar
        </a>
      </div>
    </div>
  );
}
