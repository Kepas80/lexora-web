import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import {
  Scale,
  Repeat,
  FileText,
  Mic,
  CalendarClock,
  Users,
  Brain,
  ClipboardCheck,
} from 'lucide-react';

const APP_URL = 'https://dashboard.lexoraflashcards.com/register';

const features = [
  {
    icon: FileText,
    title: 'Del BOE a tus tarjetas',
    desc: 'Sube el temario oficial en PDF y Lexora extrae las preguntas clave de cada tema. Sin copiar y pegar artículos a mano.',
  },
  {
    icon: Repeat,
    title: 'Repaso espaciado de verdad',
    desc: 'El algoritmo decide qué tema te toca hoy según lo que estás a punto de olvidar. Es la única forma de sostener 60 temas durante meses.',
  },
  {
    icon: CalendarClock,
    title: 'Cuenta atrás del examen',
    desc: 'Fija la fecha de tu convocatoria y ten siempre delante cuánto queda y cómo vas de preparación por bloque.',
  },
  {
    icon: Mic,
    title: 'Examen oral con IA',
    desc: 'Cántate el tema en voz alta y recibe corrección. Útil para oposiciones con exposición oral y para detectar lo que crees saber.',
  },
  {
    icon: ClipboardCheck,
    title: 'Supuestos prácticos con IA',
    desc: 'Casos prácticos generados a partir de tu propio temario, para el bloque que más gente suspende.',
  },
  {
    icon: Users,
    title: 'Grupos de estudio',
    desc: 'Comparte mazos con tu grupo de preparación o tu academia y estudiad sobre el mismo material.',
  },
];

const bloques = [
  {
    title: 'Administración General del Estado',
    desc: 'Auxiliar y Administrativo, Gestión, Tramitación Procesal, Justicia.',
  },
  {
    title: 'Seguridad y Fuerzas Armadas',
    desc: 'Policía Nacional, Guardia Civil, policías locales y autonómicas.',
  },
  {
    title: 'Sanidad',
    desc: 'Enfermería, TCAE, celador, matrona y resto de categorías del SNS.',
  },
  {
    title: 'Educación',
    desc: 'Maestros y profesores de Secundaria, con temarios por especialidad.',
  },
];

export function Oposiciones() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-white">
      <Helmet>
        <title>Estudiar oposiciones con IA | Flashcards del temario oficial — Lexora</title>
        <meta
          name="description"
          content="Convierte el temario oficial de tu oposición en flashcards con IA y repásalo con repetición espaciada. Cuenta atrás del examen, examen oral y supuestos prácticos. Plan gratuito."
        />
        <link rel="canonical" href="https://www.lexoraflashcards.com/oposiciones" />
      </Helmet>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 mb-20">
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-[#2D6BFF]">
          <Scale className="h-7 w-7" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-[#0F1A33] sm:text-5xl">
          Estudiar oposiciones con{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D6BFF] to-[#4EA3FF]">
            inteligencia artificial
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          El problema de una oposición no es entender el temario: es recordarlo entero el día del
          examen, meses después de haberlo leído. Lexora convierte tu temario oficial en flashcards
          y te las devuelve justo antes de que se te olviden.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={APP_URL}
            className="rounded-lg bg-[#2D6BFF] px-8 py-3 text-sm font-bold text-white hover:bg-blue-600 transition-colors"
          >
            Empezar gratis
          </a>
          <Link
            href="/precios"
            className="rounded-lg border border-slate-300 px-8 py-3 text-sm font-bold text-[#0F1A33] hover:border-[#2D6BFF] hover:text-[#2D6BFF] transition-colors"
          >
            Ver precios
          </Link>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          Plan gratuito permanente, sin tarjeta. No es una prueba que caduca.
        </p>
      </section>

      {/* Por qué la repetición espaciada */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-20">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#2D6BFF]">
            <Brain className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold text-[#0F1A33] mb-4">
            Por qué leer el temario diez veces no funciona
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              Un temario de oposición tiene entre 30 y 100 temas. Si estudias el tema 1 en enero y
              el examen es en octubre, cuando llegues al tema 60 el primero se habrá evaporado. La
              relectura da sensación de dominio sin producir memoria: reconoces el texto, pero no
              puedes reproducirlo en una hoja en blanco.
            </p>
            <p>
              La repetición espaciada ataca exactamente eso. En vez de repasar todo cada semana,
              cada tarjeta vuelve a aparecer en el momento en que estás a punto de olvidarla: al día
              siguiente, luego a los tres días, luego a la semana, luego al mes. El esfuerzo total
              baja y la retención sube, porque no gastas tiempo repasando lo que ya tienes sólido.
            </p>
            <p>
              Es el mismo principio que usan quienes preparan el MIR o un idioma con Anki, pero sin
              tener que fabricar las tarjetas a mano ni pelearse con la configuración.
            </p>
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-3xl font-bold text-[#0F1A33] text-center mb-4">
          Lo que usa un opositor en Lexora
        </h2>
        <p className="mx-auto max-w-2xl text-center text-slate-600 mb-12">
          No es una app genérica de tarjetas con una etiqueta de oposiciones encima.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-[#2D6BFF]/30 hover:shadow-lg"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#2D6BFF] group-hover:scale-110 transition-transform">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0F1A33] mb-3">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cómo se usa */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-3xl font-bold text-[#0F1A33] text-center mb-12">
          Cómo se monta una oposición en Lexora
        </h2>
        <ol className="space-y-8">
          {[
            {
              n: '1',
              t: 'Un mazo por tema, no un mazo gigante',
              d: 'Sube el PDF de cada tema por separado. Así puedes ver qué bloques llevas verdes y cuáles en rojo, en vez de tener un único porcentaje que no dice nada.',
            },
            {
              n: '2',
              t: 'Revisa las primeras tarjetas',
              d: 'La IA acierta mucho, pero el temario legal tiene matices (plazos, excepciones, números de artículo). Corrige lo que no cuadre antes de empezar a memorizarlo mal.',
            },
            {
              n: '3',
              t: 'Repasa todos los días, aunque sean 15 minutos',
              d: 'La repetición espaciada se rompe si desapareces una semana. Vale más un cuarto de hora diario que tres horas el domingo.',
            },
            {
              n: '4',
              t: 'Usa el examen oral antes del simulacro',
              d: 'Decir el tema en voz alta revela los huecos que el reconocimiento visual esconde. Es incómodo, y por eso funciona.',
            },
          ].map((s) => (
            <li key={s.n} className="flex gap-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2D6BFF] text-sm font-bold text-white">
                {s.n}
              </span>
              <div>
                <h3 className="text-lg font-bold text-[#0F1A33] mb-2">{s.t}</h3>
                <p className="text-slate-600 leading-relaxed">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Bloques */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-3xl font-bold text-[#0F1A33] text-center mb-4">
          Sirve para cualquier convocatoria
        </h2>
        <p className="mx-auto max-w-2xl text-center text-slate-600 mb-12">
          Lexora no trae temarios cerrados: trabaja sobre el tuyo, sea de la administración que sea.
          Por eso vale igual para un temario estatal que para uno autonómico o local.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {bloques.map((b) => (
            <div key={b.title} className="rounded-2xl border border-slate-200 bg-white p-8">
              <h3 className="text-lg font-bold text-[#0F1A33] mb-2">{b.title}</h3>
              <p className="text-slate-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-3xl font-bold text-[#0F1A33] text-center mb-12">Preguntas frecuentes</h2>
        <div className="space-y-6">
          {[
            {
              q: '¿Me puedo fiar de unas flashcards generadas por IA para un temario legal?',
              a: 'Con una condición: revísalas. La IA genera la tarjeta a partir de tu PDF, así que el contenido sale de tu temario y no de internet, pero puede simplificar un matiz o confundir un plazo. Dedica cinco minutos a repasar el mazo recién generado antes de empezar a memorizarlo.',
            },
            {
              q: '¿Sustituye a mi academia o a mi preparador?',
              a: 'No. Una academia te da temario actualizado, corrección y método; Lexora se ocupa de que lo que ya has estudiado no se te olvide. Son capas distintas y la mayoría de opositores usan las dos.',
            },
            {
              q: '¿Puedo usarlo gratis?',
              a: 'Sí. El plan gratuito incluye repetición espaciada, estadísticas y 50 tarjetas generadas con IA al mes. Es suficiente para probar el método con un tema completo antes de pagar nada.',
            },
            {
              q: '¿Y si mi oposición cambia de temario a mitad de preparación?',
              a: 'Como cada tema es un mazo independiente, sustituyes solo los afectados y conservas el historial de repaso del resto.',
            },
          ].map((f) => (
            <div key={f.q} className="rounded-2xl border border-slate-200 bg-white p-8">
              <h3 className="text-lg font-bold text-[#0F1A33] mb-3">{f.q}</h3>
              <p className="text-slate-600 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-[#2D6BFF] to-[#4EA3FF] p-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Empieza por un tema</h2>
          <p className="mx-auto max-w-xl text-white/90 mb-8">
            Sube el PDF del tema que peor llevas, genera sus tarjetas y repásalas una semana. Si a
            los siete días lo recuerdas sin releer, ya sabes si el método te sirve.
          </p>
          <a
            href={APP_URL}
            className="inline-block rounded-lg bg-white px-8 py-3 text-sm font-bold text-[#2D6BFF] hover:bg-slate-100 transition-colors"
          >
            Crear cuenta gratis
          </a>
        </div>
      </section>
    </div>
  );
}
