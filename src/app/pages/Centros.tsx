import { motion } from 'motion/react';
import { GraduationCap, KeyRound, LayoutDashboard, ClipboardCheck, Library, BarChart3 } from 'lucide-react';

export function Centros() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: 'easeOut' }
  };

  const features = [
    { icon: GraduationCap, gradient: 'from-blue-600 via-indigo-600 to-violet-600',
      title: 'Licencias por asientos',
      desc: 'Todos los alumnos y profesores con IA Pro incluido durante el curso. Un unico contrato anual para el centro, sin tarjetas de alumnos.' },
    { icon: KeyRound, gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      title: 'Codigos por clase y de profesor',
      desc: 'Cada clase tiene su codigo: los alumnos entran directos a su grupo. Los profesores entran con su propio codigo, sin gestion manual.' },
    { icon: LayoutDashboard, gradient: 'from-orange-500 via-amber-500 to-yellow-500',
      title: 'Panel del profesor',
      desc: 'Progreso de cada alumno por nombre: sets creados, sesiones de estudio y ultima actividad. Exportable a CSV en un clic.' },
    { icon: ClipboardCheck, gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      title: 'Tareas y examenes',
      desc: 'Asigna sets con fecha limite y lanza examenes con nota automatica. Ve el porcentaje de la clase que lo ha completado.' },
    { icon: Library, gradient: 'from-sky-500 via-blue-500 to-indigo-500',
      title: 'Biblioteca del centro',
      desc: 'Los profesores publican su material y todos los alumnos lo tienen en su app al instante, siempre actualizado.' },
    { icon: BarChart3, gradient: 'from-rose-500 via-pink-500 to-fuchsia-500',
      title: 'Estadisticas por clase',
      desc: 'Compara grupos de un vistazo: alumnos activos, sesiones de estudio y nota media por clase.' },
  ];

  return (
    <div className="bg-white text-[#0F1A33] selection:bg-[#2D6BFF]/20">
      {/* Hero */}
      <section className="pt-32 pb-24 px-6 md:pt-40 md:pb-32 text-center relative overflow-hidden bg-[#0F1A33]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[15%] right-[10%] w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.p {...fadeIn} className="text-sm font-semibold tracking-widest uppercase text-[#7DA5FF] mb-4">
            Lexora para centros
          </motion.p>
          <motion.h1 {...fadeIn} className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            La memoria de tu centro,<br />potenciada con IA
          </motion.h1>
          <motion.p {...fadeIn} className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Colegios, universidades y academias: flashcards con IA y repeticion espaciada
            para todo el centro, con panel del profesor, tareas y examenes.
          </motion.p>
          <motion.div {...fadeIn} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold px-8 py-4 rounded-2xl transition-colors shadow-lg">
              Pide una demo
            </a>
            <a href="#funciones" className="border border-white/20 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/10 transition-colors">
              Ver funciones
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="funciones" className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Todo lo que necesita tu centro</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Del codigo de clase al informe para direccion, sin fricciones.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-5 shadow-md`}>
                <f.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.h2 {...fadeIn} className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-14">
            En marcha en un dia
          </motion.h2>
          <div className="space-y-6">
            {[
              ['1', 'Contratais la licencia', 'Nos contais cuantos alumnos y profesores sois y activamos vuestro centro con su licencia anual.'],
              ['2', 'Repartis los codigos', 'Cada profesor recibe su codigo y cada clase el suyo. Los alumnos entran solos, con su nombre, directos a su grupo.'],
              ['3', 'A estudiar', 'Los profesores comparten material, asignan tareas y examenes, y siguen el progreso real de cada alumno.'],
            ].map(([n, t2, d]) => (
              <motion.div key={n} {...fadeIn} className="flex gap-5 items-start bg-white border border-slate-200 rounded-3xl p-6">
                <div className="w-10 h-10 shrink-0 rounded-full bg-[#2D6BFF] text-white font-bold flex items-center justify-center">{n}</div>
                <div>
                  <h3 className="font-semibold text-lg">{t2}</h3>
                  <p className="text-slate-600 text-sm mt-1">{d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#0F1A33] text-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[15%] w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full" />
        </div>
        <motion.div {...fadeIn} className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Pide una demo o presupuesto</h2>
          <p className="mt-4 text-lg text-slate-300">Precio por asiento segun volumen. Te respondemos en menos de 24 horas.</p>
          <a href="/contact" className="inline-block mt-8 bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold px-10 py-4 rounded-2xl transition-colors shadow-lg">
            Contactar
          </a>
        </motion.div>
      </section>
    </div>
  );
}
