import { Building2, GraduationCap, Users } from 'lucide-react';

export function Solutions() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-white">
      <section className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8 mb-20">
        <h1 className="text-4xl font-bold tracking-tight text-[#0F1A33] sm:text-5xl">
          Soluciones para <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D6BFF] to-[#4EA3FF]">Instituciones</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          Empodera a tus estudiantes o empleados con la herramienta de aprendizaje más avanzada.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2">
        {/* Schools */}
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-10 transition-all hover:border-[#2D6BFF]/30 hover:shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-[#2D6BFF] group-hover:scale-110 transition-transform">
              <GraduationCap className="h-7 w-7" />
            </div>
            <h2 className="text-2xl font-bold text-[#0F1A33] mb-4">Educación</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Herramientas diseñadas para potenciar el aprendizaje en aulas y campus universitarios.
            </p>
            <ul className="space-y-4 text-slate-600 mb-10 font-medium">
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#2D6BFF]"></span> Licencias por volumen para estudiantes</li>
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#2D6BFF]"></span> Panel de control para profesores</li>
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#2D6BFF]"></span> Creación de contenido curricular centralizado</li>
            </ul>
          </div>
        </div>

        {/* Business */}
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-10 transition-all hover:border-[#4EA3FF]/30 hover:shadow-xl">
           <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-sky-50 text-[#4EA3FF] group-hover:scale-110 transition-transform">
              <Building2 className="h-7 w-7" />
            </div>
            <h2 className="text-2xl font-bold text-[#0F1A33] mb-4">Empresas</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Capacitación corporativa eficiente y medible para equipos de alto rendimiento.
            </p>
            <ul className="space-y-4 text-slate-600 mb-10 font-medium">
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#4EA3FF]"></span> Onboarding de empleados automatizado</li>
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#4EA3FF]"></span> Capacitación continua y certificaciones</li>
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#4EA3FF]"></span> Analíticas de rendimiento del equipo</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
          <h3 className="text-xl font-bold text-[#0F1A33] mb-6 text-center">Solicita más información</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nombre</label>
                <input type="text" className="w-full rounded-lg border-slate-300 focus:border-[#2D6BFF] focus:ring-[#2D6BFF] px-3 py-2 text-sm" placeholder="Tu nombre" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" className="w-full rounded-lg border-slate-300 focus:border-[#2D6BFF] focus:ring-[#2D6BFF] px-3 py-2 text-sm" placeholder="tu@email.com" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Organización / Empresa</label>
              <input type="text" className="w-full rounded-lg border-slate-300 focus:border-[#2D6BFF] focus:ring-[#2D6BFF] px-3 py-2 text-sm" placeholder="Nombre de la institución" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Sector</label>
              <select className="w-full rounded-lg border-slate-300 focus:border-[#2D6BFF] focus:ring-[#2D6BFF] px-3 py-2 text-sm">
                  <option value="" disabled selected>Selecciona una opción</option>
                  <option value="education">Educación</option>
                  <option value="business">Empresas</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Mensaje</label>
              <textarea rows={4} className="w-full rounded-lg border-slate-300 focus:border-[#2D6BFF] focus:ring-[#2D6BFF] px-3 py-2 text-sm" placeholder="Cuéntanos qué necesitas..."></textarea>
            </div>

            <button type="submit" className="w-full rounded-lg bg-[#2D6BFF] px-6 py-3 text-sm font-bold text-white hover:bg-blue-600 transition-colors">
              Enviar solicitud
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
