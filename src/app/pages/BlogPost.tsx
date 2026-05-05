import { Link, useRoute } from 'wouter';
import { Helmet } from 'react-helmet-async';

const posts = [
  {
    slug: 'como-memorizar-rapido-examen',
    title: 'Cómo Memorizar Rápido para un Examen: 7 Técnicas que Realmente Funcionan',
    date: '16 Abr 2026',
    category: 'Técnicas de Estudio',
    excerpt: 'Aprende 7 técnicas de memorización respaldadas por la ciencia para estudiar más rápido y retener más antes de tu próximo examen.',
    readTime: '5 min',
    metaTitle: 'Cómo Memorizar Rápido para un Examen | 7 Técnicas 2026',
    metaDescription: 'Aprende cómo memorizar rápido para un examen con 7 técnicas probadas por la ciencia. Desde repetición espaciada hasta flashcards con IA. ¡Empieza hoy!'
  },
  {
    slug: 'como-estudiar-mejor',
    title: 'Cómo Estudiar Mejor: Técnicas Científicas para Memorizar Más y Agotarte Menos',
    date: '6 Abr 2026',
    category: 'Técnicas de estudio',
    excerpt: 'Descubre las técnicas científicas para estudiar mejor, memorizar más rápido y aprobar sin agotarte.',
    readTime: '7 min',
    metaTitle: 'Cómo Estudiar Mejor: Técnicas Científicas (2026)',
    metaDescription: 'Descubre las técnicas científicas para estudiar mejor y memorizar más. Repetición espaciada, recuperación activa, intercalado.'
  },
  {
    slug: 'alternativas-quizlet-gratis-ia-2026',
    title: 'Las 7 Mejores Alternativas a Quizlet Gratis con IA en 2026',
    date: '12 Abr 2026',
    category: 'Comparativas',
    excerpt: 'Descubre las mejores alternativas a Quizlet gratis con inteligencia artificial para estudiar en 2026. Compara apps de flashcards y elige la ideal para ti.',
    readTime: '9 min',
    metaTitle: '7 Mejores Alternativas a Quizlet Gratis con IA (2026)',
    metaDescription: 'Descubre las mejores alternativas a Quizlet gratis con inteligencia artificial para estudiar en 2026. Compara apps de flashcards y elige la ideal para ti.'
  },
  {
    slug: 'repeticion-espaciada',
    title: 'Repetición Espaciada: Qué Es y Cómo Usarla para Memorizar Más [Guía 2026]',
    date: '24 Mar 2026',
    category: 'Técnicas de estudio',
    excerpt: 'Descubre qué es la repetición espaciada y cómo aplicarla para memorizar el doble en la mitad de tiempo. Guía completa con técnicas científicas y flashcards.',
    readTime: '6 min',
    metaTitle: 'Repetición Espaciada: Qué Es y Cómo Usarla [Guía 2026]',
    metaDescription: 'Descubre qué es la repetición espaciada y cómo aplicarla con flashcards para memorizar el doble en la mitad de tiempo.'
  },
  { 
    slug: 'alternativa-anki-flashcards-ia', 
    title: 'Alternativa a Anki: Por Qué Lexora es la Mejor Opción con IA en 2026', 
    date: '26 Mar 2026', 
    category: 'Comparativas', 
    excerpt: 'Anki ha sido durante años el rey de las flashcards digitales. Pero en 2026 existen alternativas con IA que aprenden de ti. Descubre por qué Lexora supera a Anki.', 
    readTime: '7 min',
    metaTitle: 'Alternativa a Anki: Por Qué Lexora es la Mejor Opción con IA en 2026',
    metaDescription: 'Anki ha sido el rey de las flashcards. Descubre por qué Lexora con IA es la alternativa más inteligente en 2026.'
  },
  { 
    slug: 'como-estudiar-oposiciones-flashcards', 
    title: 'Cómo Estudiar Oposiciones con Flashcards: El Método que Funciona en 2026', 
    date: '28 Mar 2026', 
    category: 'Técnicas de estudio', 
    excerpt: 'Preparar oposiciones requiere memorizar miles de conceptos. Las flashcards con repetición espaciada son el método más eficaz para aprobar.', 
    readTime: '8 min',
    metaTitle: 'Cómo Estudiar Oposiciones con Flashcards: El Método que Funciona en 2026',
    metaDescription: 'Prepara tus oposiciones con flashcards y repetición espaciada. El método más eficaz para memorizar miles de conceptos.'
  }
];

const postContent: Record<string, JSX.Element> = {
  'como-memorizar-rapido-examen': (
    <>
      {/* Intro */}
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        El examen es mañana. Tienes cientos de páginas de apuntes, conceptos que apenas entiendes y la sensación de que <strong className="text-white">no vas a llegar a tiempo</strong>. La buena noticia: no necesitas leerlo todo. Con las técnicas correctas, puedes memorizar <strong className="text-white">más en menos tiempo</strong> y recordarlo el día del examen. Aquí te enseñamos las <strong className="text-white">7 técnicas de memorización rápida</strong> respaldadas por la ciencia que realmente funcionan.
      </p>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">1. Repetición espaciada: el secreto mejor guardado de la ciencia</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          La <strong className="text-white">repetición espaciada</strong> es el método más efectivo para transferir información de la memoria a corto plazo a la memoria a largo plazo. En lugar de estudiar todo en una sola sesión, distribuyes los repasos en intervalos de tiempo crecientes.
        </p>
        <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5 mb-4">
          <p className="text-sm font-semibold text-[#6C63FF] mb-2 uppercase tracking-widest">Evidencia científica</p>
          <p className="text-gray-300 text-sm">Un estudio de la Universidad de California demostró que estudiantes que usaron repetición espaciada retuvieron <strong className="text-white">3 veces más información</strong> después de 30 días comparado con quienes estudiaron todo de golpe.</p>
        </div>
        <p className="text-gray-300 leading-relaxed mb-4">
          <strong className="text-white">Intervalos recomendados:</strong>
        </p>
        <ul className="text-gray-300 space-y-2 mb-4 ml-6 list-disc">
          <li>Primera revisión: <strong className="text-white">20 minutos después</strong> de aprender</li>
          <li>Segunda revisión: <strong className="text-white">1 día después</strong></li>
          <li>Tercera revisión: <strong className="text-white">3 días después</strong></li>
          <li>Cuarta revisión: <strong className="text-white">1 semana después</strong></li>
        </ul>
        <p className="text-gray-300 leading-relaxed">
          Herramientas como <strong className="text-white">Lexora</strong> usan inteligencia artificial para calcular automáticamente estos intervalos según tu rendimiento individual, ahorrándote el trabajo de planificar manualmente los repasos.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">2. Recall activo: no releas, recuerda</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Releer es la técnica de estudio más popular y también <strong className="text-white">la menos efectiva</strong>. El recall activo (recuperación activa) consiste en intentar recordar la información sin mirar los apuntes.
        </p>
        <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5 mb-4">
          <p className="text-sm font-semibold text-[#6C63FF] mb-2 uppercase tracking-widest">Estudio publicado en Science</p>
          <p className="text-gray-300 text-sm">Estudiantes que practicaron recall activo recordaron <strong className="text-white">50% más información</strong> en el examen final comparado con quienes solo releyeron el material.</p>
        </div>
        <p className="text-gray-300 leading-relaxed mb-4">
          <strong className="text-white">Cómo aplicarlo:</strong>
        </p>
        <ol className="text-gray-300 space-y-2 mb-4 ml-6 list-decimal">
          <li>Lee un concepto o sección</li>
          <li>Cierra el libro o apuntes</li>
          <li>Intenta escribir todo lo que recuerdas</li>
          <li>Compara con el material original</li>
          <li>Identifica lo que olvidaste y repítelo</li>
        </ol>
        <p className="text-gray-300 leading-relaxed">
          La mejor forma de practicar recall activo es <strong className="text-white">convertir tus apuntes en preguntas tipo flashcard</strong>. En lugar de leer "La mitocondria genera ATP", crea la pregunta: "¿Qué orgánulo celular genera ATP?"
        </p>
      </section>

      {/* Section 3 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">3. Fragmentación (chunking): divide y vencerás</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Nuestra <strong className="text-white">memoria de trabajo</strong> solo puede retener entre 4 y 7 elementos a la vez. El chunking consiste en agrupar información en "paquetes" más manejables.
        </p>
        <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5 mb-4">
          <p className="text-sm font-semibold text-[#6C63FF] mb-2 uppercase tracking-widest">Ejemplo práctico</p>
          <p className="text-gray-300 text-sm mb-2">En lugar de memorizar: <span className="text-white">1 4 9 2 1 7 7 6</span></p>
          <p className="text-gray-300 text-sm">Agrúpalo como: <strong className="text-white">1492 - 1776</strong> (descubrimiento de América y declaración de independencia de EE.UU.)</p>
        </div>
        <p className="text-gray-300 leading-relaxed mb-4">
          <strong className="text-white">Cómo aplicarlo a tus estudios:</strong>
        </p>
        <ul className="text-gray-300 space-y-2 mb-4 ml-6 list-disc">
          <li>Agrupa conceptos relacionados en categorías</li>
          <li>Crea acrónimos (ejemplo: PEMDAS para orden de operaciones)</li>
          <li>Usa números o fechas como anclas para información relacionada</li>
        </ul>
      </section>

      {/* Section 4 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">4. La técnica Feynman: explica como si enseñaras</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Richard Feynman, premio Nobel de Física, creó esta técnica: <strong className="text-white">si no puedes explicar algo de forma simple, no lo entiendes realmente</strong>.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          <strong className="text-white">Los 4 pasos:</strong>
        </p>
        <div className="space-y-3 mb-4">
          <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5">
            <p className="font-semibold text-white mb-1">1. Elige un concepto</p>
            <p className="text-gray-400 text-sm">Selecciona el tema que necesitas memorizar.</p>
          </div>
          <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5">
            <p className="font-semibold text-white mb-1">2. Explícalo con palabras simples</p>
            <p className="text-gray-400 text-sm">Imagina que se lo explicas a un niño de 12 años. Evita jerga técnica.</p>
          </div>
          <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5">
            <p className="font-semibold text-white mb-1">3. Identifica lagunas</p>
            <p className="text-gray-400 text-sm">Donde te trabes o uses términos complicados, ahí tienes una laguna de conocimiento.</p>
          </div>
          <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5">
            <p className="font-semibold text-white mb-1">4. Vuelve al material</p>
            <p className="text-gray-400 text-sm">Revisa las partes que no pudiste explicar y repite el proceso.</p>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">5. Mnemotecnia visual: convierte datos en imágenes</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Nuestro cerebro procesa imágenes <strong className="text-white">60,000 veces más rápido</strong> que texto. La mnemotecnia visual aprovecha esto para memorizar información de forma casi instantánea.
        </p>
        <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5 mb-4">
          <p className="text-sm font-semibold text-[#6C63FF] mb-2 uppercase tracking-widest">Técnica del palacio de memoria</p>
          <p className="text-gray-300 text-sm">Visualiza un lugar que conoces bien (tu casa). Coloca mentalmente los conceptos que necesitas memorizar en diferentes habitaciones. Cuando necesites recordar, "caminas" por tu casa mental y recuperas la información.</p>
        </div>
        <p className="text-gray-300 leading-relaxed mb-4">
          <strong className="text-white">Consejos para crear imágenes memorables:</strong>
        </p>
        <ul className="text-gray-300 space-y-2 mb-4 ml-6 list-disc">
          <li>Haz las imágenes <strong className="text-white">exageradas y absurdas</strong> — cuanto más ridículas, más memorables</li>
          <li>Añade <strong className="text-white">movimiento y emoción</strong></li>
          <li>Conecta conceptos abstractos con objetos físicos que puedas visualizar</li>
        </ul>
      </section>

      {/* Section 6 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">6. Sesiones cortas con descansos (técnica Pomodoro)</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Tu cerebro no puede mantener la concentración máxima durante horas. La <strong className="text-white">técnica Pomodoro</strong> maximiza tu productividad con ciclos de estudio y descanso.
        </p>
        <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5 mb-4">
          <p className="text-sm font-semibold text-[#6C63FF] mb-3 uppercase tracking-widest">Cómo funciona</p>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>⏱️ <strong className="text-white">25 minutos de estudio intenso</strong> sin distracciones</li>
            <li>☕ <strong className="text-white">5 minutos de descanso</strong></li>
            <li>🔁 Repite 4 veces</li>
            <li>🛋️ Después del cuarto ciclo, toma <strong className="text-white">15-30 minutos de descanso largo</strong></li>
          </ul>
        </div>
        <div className="bg-[#1E1E3A] border border-yellow-900/30 rounded-xl p-5 mb-4">
          <p className="font-semibold text-white mb-1">⚠️ Durante los descansos:</p>
          <p className="text-gray-400 text-sm">NO uses redes sociales ni vídeos de YouTube. Tu cerebro necesita desconectar, no cambiar de tarea. Camina, estira, toma agua o mira por la ventana.</p>
        </div>
      </section>

      {/* Section 7 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">7. Flashcards con IA: la combinación perfecta</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Las flashcards combinan <strong className="text-white">recall activo + repetición espaciada</strong>, las dos técnicas más efectivas según la ciencia. Y con IA, crear flashcards profesionales pasa de horas a segundos.
        </p>
        <div className="bg-gradient-to-br from-[#6C63FF]/10 to-[#4F46E5]/5 border border-[#6C63FF]/20 rounded-xl p-6 mb-4">
          <p className="text-white font-semibold mb-3">Cómo Lexora acelera tu memorización:</p>
          <ol className="text-gray-300 space-y-2 text-sm list-none">
            <li className="flex gap-2"><span className="text-[#6C63FF]">1.</span><span>Subes tus PDFs, apuntes o diapositivas</span></li>
            <li className="flex gap-2"><span className="text-[#6C63FF]">2.</span><span>La IA genera flashcards de alta calidad automáticamente</span></li>
            <li className="flex gap-2"><span className="text-[#6C63FF]">3.</span><span>El algoritmo calcula cuándo repasar cada tarjeta según tu curva de olvido</span></li>
            <li className="flex gap-2"><span className="text-[#6C63FF]">4.</span><span>Estudias 15-20 minutos diarios y memorizas 3x más en 60% menos tiempo</span></li>
          </ol>
        </div>
        <p className="text-gray-300 leading-relaxed">
          En lugar de crear manualmente 200 flashcards (que puede tomar 3-4 horas), Lexora las genera en <strong className="text-white">menos de 1 minuto</strong>. Y lo mejor: las preguntas están formuladas para maximizar la retención según principios de la ciencia cognitiva.
        </p>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-white">Conclusión: estudia menos, recuerda más</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Memorizar rápido para un examen no se trata de estudiar más horas. Se trata de usar las técnicas correctas. La ciencia ha demostrado que <strong className="text-white">repetición espaciada, recall activo, chunking, técnica Feynman, mnemotecnia visual, Pomodoro y flashcards con IA</strong> son las herramientas más efectivas para retener información.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          El problema es que aplicarlas manualmente requiere disciplina y tiempo. Por eso herramientas como Lexora marcan la diferencia: automatizan el proceso científico para que tú solo tengas que aparecer 15 minutos al día.
        </p>
        <div className="text-center bg-gradient-to-br from-[#6C63FF]/20 to-[#4F46E5]/10 border border-[#6C63FF]/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-3">¿Listo para memorizar 3x más rápido?</h3>
          <p className="text-gray-400 mb-6">Crea tus flashcards con IA y deja que la ciencia haga el trabajo por ti.</p>
          <a
            href="https://lexoraflashcards.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#6C63FF] hover:bg-[#5a52d5] text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg"
          >
            Prueba Lexora gratis →
          </a>
        </div>
      </section>
    </>
  ),
  'como-estudiar-mejor': (
    <>
      {/* Intro */}
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        ¿Estudias durante horas y al día siguiente ya no recuerdas nada? No es culpa tuya — es culpa de cómo estudias. Las <strong className="text-white">técnicas científicas de estudio</strong> son la clave para memorizar de forma duradera y eficiente. En esta guía te explicamos tres de las más efectivas: repetición espaciada, recuperación activa e intercalado.
      </p>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">Repetición Espaciada</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          La repetición espaciada (en inglés, <em>spaced repetition</em>) es un método de aprendizaje que consiste en revisar la información en intervalos de tiempo crecientes. En lugar de repasar todo el temario el día antes del examen, la repasas varias veces a lo largo de días o semanas.
        </p>
        <p className="text-gray-300 leading-relaxed">
          El concepto fue descrito por primera vez por el psicólogo Hermann Ebbinghaus en el siglo XIX con su famosa <strong className="text-white">curva del olvido</strong>: olvidamos el 70% de lo que aprendemos en las primeras 24 horas si no lo repasamos. La repetición espaciada combate exactamente este fenómeno.
        </p>
        <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-6 mb-4">
          <p className="text-sm font-semibold text-[#6C63FF] mb-3 uppercase tracking-widest">Ejemplo de intervalos</p>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>📅 <strong className="text-white">Día 1:</strong> Aprendes el concepto por primera vez</li>
            <li>📅 <strong className="text-white">Día 2:</strong> Primera repetición (antes de olvidarlo)</li>
            <li>📅 <strong className="text-white">Día 5:</strong> Segunda repetición</li>
            <li>📅 <strong className="text-white">Día 12:</strong> Tercera repetición</li>
            <li>📅 <strong className="text-white">Día 30:</strong> Cuarta repetición — ya forma parte de tu memoria a largo plazo</li>
          </ul>
        </div>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">Recuperación Activa</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          La recuperación activa es un método que consiste en intentar recordar la información antes de verla. En lugar de leer una respuesta y luego memorizarla, intentas recordarla de memoria. Esto fortalece la conexión neuronal y mejora la retención a largo plazo.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Por ejemplo, en lugar de leer una definición y luego memorizarla, intentas recordar la definición antes de verla. Si no la recuerdas, la lees y luego intentas recordarla de nuevo.
        </p>
      </section>

      {/* Section 3 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">Intercalado</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          El intercalado es un método que consiste en mezclar diferentes temas o conceptos en una misma sesión de estudio. En lugar de estudiar un tema completo antes de pasar al siguiente, alternas entre temas. Esto mejora la capacidad de discriminación y la retención a largo plazo.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Por ejemplo, si estás estudiando matemáticas y ciencias, en lugar de estudiar matemáticas durante una hora y luego ciencias durante otra hora, alternas entre ambos temas en la misma sesión.
        </p>
      </section>

      {/* Section 4 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">Cómo aplicar estas técnicas con flashcards</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          La forma más efectiva de practicar estas técnicas es con <strong className="text-white">flashcards inteligentes</strong>. El método funciona así:
        </p>
        <ol className="text-gray-300 space-y-3 mb-4 list-none">
          <li className="flex gap-3"><span className="text-[#6C63FF] font-bold">1.</span><span>Creas una tarjeta con una pregunta por un lado y la respuesta por el otro.</span></li>
          <li className="flex gap-3"><span className="text-[#6C63FF] font-bold">2.</span><span>El sistema te muestra la pregunta y tú intentas recordar la respuesta.</span></li>
          <li className="flex gap-3"><span className="text-[#6C63FF] font-bold">3.</span><span>Evalúas qué tan bien la recordaste (fácil, difícil, fallé).</span></li>
          <li className="flex gap-3"><span className="text-[#6C63FF] font-bold">4.</span><span>El algoritmo decide cuándo volver a mostrarte esa tarjeta según tu respuesta.</span></li>
        </ol>
        <p className="text-gray-300 leading-relaxed">
          Herramientas como <strong className="text-white">Lexora</strong> automatizan todo este proceso: generan las flashcards por ti a partir de tus apuntes y calculan automáticamente los intervalos óptimos de repaso.
        </p>
      </section>

      {/* Section 5 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">Consejos para sacarle el máximo partido</h2>
        <div className="space-y-4">
          <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5">
            <p className="font-semibold text-white mb-1">✅ Estudia en sesiones cortas cada día</p>
            <p className="text-gray-400 text-sm">15-20 minutos diarios son mucho más efectivos que 3 horas una vez a la semana.</p>
          </div>
          <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5">
            <p className="font-semibold text-white mb-1">✅ No te saltes los repasos programados</p>
            <p className="text-gray-400 text-sm">El momento del repaso está calculado para justo antes de que olvides. Si lo pospones, el sistema pierde efectividad.</p>
          </div>
          <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5">
            <p className="font-semibold text-white mb-1">✅ Una idea por flashcard</p>
            <p className="text-gray-400 text-sm">Las tarjetas simples y concretas funcionan mucho mejor que las que intentan cubrir demasiado.</p>
          </div>
          <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5">
            <p className="font-semibold text-white mb-1">✅ Combínala con el recuerdo activo</p>
            <p className="text-gray-400 text-sm">Intenta recordar la respuesta antes de verla. El esfuerzo de recuperación es lo que consolida la memoria.</p>
          </div>
          <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5">
            <p className="font-semibold text-white mb-1">✅ Intercala temas diferentes</p>
            <p className="text-gray-400 text-sm">Alterna entre diferentes temas en la misma sesión para mejorar la discriminación y la retención.</p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-white">Conclusión</h2>
        <p className="text-gray-300 leading-relaxed">
          Las técnicas científicas de estudio llevan más de 100 años respaldadas por la ciencia y son, sin duda, algunas de las más poderosas que existen. Si todavía no las estás usando, estás dejando capacidad de memoria sobre la mesa. Empieza hoy con Lexora y transforma tus apuntes en flashcards inteligentes que te ayudan a memorizar el doble en la mitad de tiempo.
        </p>
      </section>
    </>
  ),
  'alternativas-quizlet-gratis-ia-2026': (
    <>
      {/* Intro */}
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        <strong className="text-white">Quizlet</strong> ha sido durante años la app de flashcards más popular del mundo. Millones de estudiantes la usan cada día para memorizar vocabulario, conceptos y temarios. Pero en 2026, la inteligencia artificial ha transformado la forma en que estudiamos. Ahora existen alternativas a Quizlet que no solo ofrecen flashcards, sino que generan contenido automáticamente, adaptan el aprendizaje a tu ritmo y te ayudan a memorizar más rápido. En esta guía analizamos las <strong className="text-white">7 mejores alternativas a Quizlet gratis con IA</strong> para que elijas la que mejor se adapta a tus necesidades.
      </p>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">¿Por qué buscar alternativas a Quizlet en 2026?</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Quizlet sigue siendo una herramienta excelente, pero tiene algunas limitaciones importantes que han llevado a muchos usuarios a buscar opciones más modernas:
        </p>
        <div className="space-y-3 mb-4">
          <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5">
            <p className="font-semibold text-white mb-1">❌ Crear flashcards es manual y lento</p>
            <p className="text-gray-400 text-sm">Tienes que escribir cada tarjeta a mano. Para estudiantes con cientos de páginas de apuntes, esto puede tomar horas.</p>
          </div>
          <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5">
            <p className="font-semibold text-white mb-1">❌ Funciones premium cada vez más limitadas</p>
            <p className="text-gray-400 text-sm">Quizlet Plus cuesta cada vez más y muchas funciones útiles están detrás del paywall.</p>
          </div>
          <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5">
            <p className="font-semibold text-white mb-1">❌ No usa inteligencia artificial avanzada</p>
            <p className="text-gray-400 text-sm">Aunque Quizlet ha añadido algunas funciones de IA, no aprovecha todo el potencial de GPT-4 y modelos modernos.</p>
          </div>
        </div>
        <p className="text-gray-300 leading-relaxed">
          Por suerte, en 2026 existen alternativas gratuitas que superan a Quizlet en automatización, personalización y eficacia.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">Las 7 mejores alternativas a Quizlet con IA</h2>
        
        <h3 className="text-xl font-bold mb-3 text-white mt-6">1. Lexora — La mejor alternativa con IA generativa</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          <strong className="text-white">Lexora</strong> es la alternativa más moderna a Quizlet. Su principal ventaja es la <strong className="text-white">generación automática de flashcards con inteligencia artificial</strong>. Simplemente subes tus apuntes, PDFs o diapositivas, y Lexora crea flashcards de alta calidad en segundos. El algoritmo de repetición espaciada se adapta a tu ritmo de aprendizaje individual, priorizando las tarjetas que más te cuestan.
        </p>
        <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5 mb-4">
          <p className="text-sm font-semibold text-[#6C63FF] mb-3 uppercase tracking-widest">Ventajas de Lexora</p>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>✅ Generación automática de flashcards con IA (GPT-4)</li>
            <li>✅ Repetición espaciada adaptativa basada en machine learning</li>
            <li>✅ Captura de contenido con la cámara para crear tarjetas al instante</li>
            <li>✅ Interfaz moderna y multiplataforma (web, iOS, Android)</li>
            <li>✅ 100% gratis sin límites en el plan básico</li>
          </ul>
        </div>
        <p className="text-gray-300 leading-relaxed mb-4">
          <strong className="text-white">Ideal para:</strong> Estudiantes que quieren ahorrar tiempo creando flashcards y necesitan un sistema inteligente que se adapte a su ritmo.
        </p>

        <h3 className="text-xl font-bold mb-3 text-white mt-8">2. Anki — El clásico para usuarios avanzados</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          <strong className="text-white">Anki</strong> es la herramienta de repetición espaciada de código abierto más popular. Aunque no tiene funciones nativas de IA, su algoritmo de repetición es extremadamente potente y personalizable. Es perfecto para usuarios que valoran el control total sobre cada parámetro del sistema.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          <strong className="text-white">Ventajas:</strong> Gratuito, código abierto, altamente personalizable, funciona offline.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          <strong className="text-white">Desventajas:</strong> Curva de aprendizaje empinada, interfaz anticuada, crear tarjetas es manual.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          <strong className="text-white">Ideal para:</strong> Estudiantes avanzados de medicina, idiomas o oposiciones que ya tienen experiencia con flashcards.
        </p>

        <h3 className="text-xl font-bold mb-3 text-white mt-8">3. Brainscape — Flashcards con confianza cognitiva</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          <strong className="text-white">Brainscape</strong> usa un sistema basado en "confianza cognitiva": en lugar de marcar una tarjeta como "correcta" o "incorrecta", evalúas del 1 al 5 qué tan bien la recordaste. Esto permite intervalos más precisos de repetición.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          <strong className="text-white">Ventajas:</strong> Algoritmo basado en ciencia cognitiva, gran biblioteca de mazos compartidos.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          <strong className="text-white">Desventajas:</strong> Plan gratuito muy limitado, no tiene generación automática con IA.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          <strong className="text-white">Ideal para:</strong> Estudiantes que quieren un enfoque científico y no les importa pagar por funciones premium.
        </p>

        <h3 className="text-xl font-bold mb-3 text-white mt-8">4. RemNote — Flashcards integradas con tus apuntes</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          <strong className="text-white">RemNote</strong> combina toma de notas y flashcards en una sola herramienta. Mientras escribes tus apuntes, puedes convertir cualquier concepto en flashcard con un simple atajo de teclado. Incluye repetición espaciada integrada.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          <strong className="text-white">Ventajas:</strong> Perfecto para estudiantes que toman apuntes digitales, sincronización en tiempo real.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          <strong className="text-white">Desventajas:</strong> Curva de aprendizaje alta, requiere cambiar tu flujo de trabajo.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          <strong className="text-white">Ideal para:</strong> Estudiantes universitarios que quieren una herramienta todo-en-uno para apuntes y repaso.
        </p>

        <h3 className="text-xl font-bold mb-3 text-white mt-8">5. Knowt — Generación de flashcards desde PDFs</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          <strong className="text-white">Knowt</strong> permite importar PDFs y diapositivas de PowerPoint para generar flashcards automáticamente. También convierte apuntes de Quizlet en mazos con repetición espaciada.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          <strong className="text-white">Ventajas:</strong> Importación de Quizlet, generación automática desde documentos.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          <strong className="text-white">Desventajas:</strong> Calidad de generación automática inferior a Lexora, funciones premium caras.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          <strong className="text-white">Ideal para:</strong> Estudiantes que quieren migrar desde Quizlet sin perder su contenido.
        </p>

        <h3 className="text-xl font-bold mb-3 text-white mt-8">6. StudySmarter — Flashcards colaborativas</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          <strong className="text-white">StudySmarter</strong> es una plataforma europea que combina flashcards, planificación de estudio y colaboración con compañeros. Tiene una gran comunidad de estudiantes compartiendo mazos.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          <strong className="text-white">Ventajas:</strong> Planificador de estudio integrado, función de estadísticas avanzadas.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          <strong className="text-white">Desventajas:</strong> Interfaz sobrecargada, publicidad en el plan gratuito.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          <strong className="text-white">Ideal para:</strong> Estudiantes universitarios que estudian en grupo.
        </p>

        <h3 className="text-xl font-bold mb-3 text-white mt-8">7. Memrise — Para aprender idiomas con contexto real</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          <strong className="text-white">Memrise</strong> está más enfocado en idiomas que Quizlet. Usa vídeos de hablantes nativos, memes visuales y repetición espaciada para ayudarte a memorizar vocabulario en contexto.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          <strong className="text-white">Ventajas:</strong> Excelente para idiomas, contenido audiovisual de calidad.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          <strong className="text-white">Desventajas:</strong> No sirve para otras materias, menos flexible que Quizlet.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          <strong className="text-white">Ideal para:</strong> Estudiantes de idiomas que quieren inmersión cultural junto con flashcards.
        </p>
      </section>

      {/* Section 3 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">Tabla comparativa: Quizlet vs alternativas</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left mb-4 border border-[#1E1E3A] rounded-xl overflow-hidden">
            <thead className="bg-[#12122A] text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">App</th>
                <th className="px-4 py-3 font-semibold">IA Generativa</th>
                <th className="px-4 py-3 font-semibold">Repetición Espaciada</th>
                <th className="px-4 py-3 font-semibold">Plan Gratuito</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-t border-[#1E1E3A]">
                <td className="px-4 py-3 font-semibold text-[#6C63FF]">Lexora</td>
                <td className="px-4 py-3">✅ Sí (GPT-4)</td>
                <td className="px-4 py-3">✅ Adaptativa</td>
                <td className="px-4 py-3">✅ Completo</td>
              </tr>
              <tr className="border-t border-[#1E1E3A] bg-[#12122A]/50">
                <td className="px-4 py-3">Quizlet</td>
                <td className="px-4 py-3">⚠️ Limitada</td>
                <td className="px-4 py-3">❌ Básica</td>
                <td className="px-4 py-3">⚠️ Con anuncios</td>
              </tr>
              <tr className="border-t border-[#1E1E3A]">
                <td className="px-4 py-3">Anki</td>
                <td className="px-4 py-3">❌ No</td>
                <td className="px-4 py-3">✅ Avanzada</td>
                <td className="px-4 py-3">✅ Completo</td>
              </tr>
              <tr className="border-t border-[#1E1E3A] bg-[#12122A]/50">
                <td className="px-4 py-3">Brainscape</td>
                <td className="px-4 py-3">❌ No</td>
                <td className="px-4 py-3">✅ Científica</td>
                <td className="px-4 py-3">⚠️ Muy limitado</td>
              </tr>
              <tr className="border-t border-[#1E1E3A]">
                <td className="px-4 py-3">Knowt</td>
                <td className="px-4 py-3">��️ Básica</td>
                <td className="px-4 py-3">✅ Sí</td>
                <td className="px-4 py-3">⚠️ Limitado</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">¿Cuál es la mejor alternativa a Quizlet para ti?</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          La respuesta depende de tus necesidades específicas:
        </p>
        <div className="space-y-4">
          <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5">
            <p className="font-semibold text-white mb-2">🚀 Si quieres ahorrar tiempo creando flashcards</p>
            <p className="text-gray-400 text-sm">Elige <strong className="text-white">Lexora</strong>. Su IA genera flashcards de calidad profesional en segundos a partir de tus apuntes.</p>
          </div>
          <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5">
            <p className="font-semibold text-white mb-2">🎓 Si estudias medicina u oposiciones</p>
            <p className="text-gray-400 text-sm">Prueba <strong className="text-white">Anki</strong> si no te importa la curva de aprendizaje, o <strong className="text-white">Lexora</strong> si prefieres algo más moderno.</p>
          </div>
          <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5">
            <p className="font-semibold text-white mb-2">🌍 Si aprendes idiomas</p>
            <p className="text-gray-400 text-sm">Combina <strong className="text-white">Lexora</strong> para vocabulario técnico y <strong className="text-white">Memrise</strong> para práctica conversacional.</p>
          </div>
          <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5">
            <p className="font-semibold text-white mb-2">📚 Si tomas muchos apuntes digitales</p>
            <p className="text-gray-400 text-sm">Considera <strong className="text-white">RemNote</strong> para integrar notas y flashcards en una sola herramienta.</p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-white">Conclusión: El futuro de las flashcards es con IA</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Quizlet fue pionero en digitalizar las flashcards, pero en 2026 la inteligencia artificial ha cambiado las reglas del juego. Ya no tiene sentido pasar horas creando tarjetas manualmente cuando una IA puede hacerlo por ti en segundos con la misma (o mejor) calidad.
        </p>
        <p className="text-gray-300 leading-relaxed">
          De todas las alternativas a Quizlet que hemos analizado, <strong className="text-white">Lexora</strong> es la que mejor combina facilidad de uso, potencia de IA y un plan gratuito completo. Si estás buscando una forma más inteligente de estudiar en 2026, prueba Lexora hoy mismo.
        </p>
      </section>
    </>
  ),
  'repeticion-espaciada': (
    <>
      {/* Intro */}
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        ¿Estudias durante horas y al día siguiente ya no recuerdas nada? No es culpa tuya — es culpa de cómo estudias. La <strong className="text-white">repetición espaciada</strong> es la técnica científicamente más respaldada para memorizar de forma duradera. En esta guía te explicamos qué es, cómo funciona y cómo puedes aplicarla hoy mismo con Lexora.
      </p>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">¿Qué es la repetición espaciada?</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          La repetición espaciada (en inglés, <em>spaced repetition</em>) es un método de aprendizaje que consiste en revisar la información en intervalos de tiempo crecientes. En lugar de repasar todo el temario el día antes del examen, la repasas varias veces a lo largo de días o semanas.
        </p>
        <p className="text-gray-300 leading-relaxed">
          El concepto fue descrito por primera vez por el psicólogo Hermann Ebbinghaus en el siglo XIX con su famosa <strong className="text-white">curva del olvido</strong>: olvidamos el 70% de lo que aprendemos en las primeras 24 horas si no lo repasamos. La repetición espaciada combate exactamente este fenómeno.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">¿Cómo funciona la curva del olvido?</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Cada vez que revisas un concepto justo antes de olvidarlo, tu cerebro lo "reconstruye" y lo almacena con más fuerza. Esto se llama <strong className="text-white">efecto de espaciado</strong>. Con cada repetición, el intervalo hasta el siguiente repaso se alarga: primero al día siguiente, luego en 3 días, luego en una semana, y así sucesivamente.
        </p>
        <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-6 mb-4">
          <p className="text-sm font-semibold text-[#6C63FF] mb-3 uppercase tracking-widest">Ejemplo de intervalos</p>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>📅 <strong className="text-white">Día 1:</strong> Aprendes el concepto por primera vez</li>
            <li>📅 <strong className="text-white">Día 2:</strong> Primera repetición (antes de olvidarlo)</li>
            <li>📅 <strong className="text-white">Día 5:</strong> Segunda repetición</li>
            <li>📅 <strong className="text-white">Día 12:</strong> Tercera repetición</li>
            <li>📅 <strong className="text-white">Día 30:</strong> Cuarta repetición — ya forma parte de tu memoria a largo plazo</li>
          </ul>
        </div>
      </section>

      {/* Section 3 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">¿Por qué es más efectiva que el estudio masivo?</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          El estudio masivo (<em>cramming</em>) funciona a corto plazo, pero el conocimiento desaparece rápido. La repetición espaciada, en cambio, construye memoria a largo plazo. Estudios de la Universidad de California demuestran que los estudiantes que usan repetición espaciada retienen hasta <strong className="text-white">3 veces más información</strong> que los que estudian todo junto.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Además, al distribuir el estudio en sesiones cortas y frecuentes, reduces el agotamiento mental y aumentas la motivación.
        </p>
      </section>

      {/* Section 4 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">Cómo aplicar la repetición espaciada con flashcards</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          La forma más efectiva de practicar la repetición espaciada es con <strong className="text-white">flashcards inteligentes</strong>. El método funciona así:
        </p>
        <ol className="text-gray-300 space-y-3 mb-4 list-none">
          <li className="flex gap-3"><span className="text-[#6C63FF] font-bold">1.</span><span>Creas una tarjeta con una pregunta por un lado y la respuesta por el otro.</span></li>
          <li className="flex gap-3"><span className="text-[#6C63FF] font-bold">2.</span><span>El sistema te muestra la pregunta y tú intentas recordar la respuesta.</span></li>
          <li className="flex gap-3"><span className="text-[#6C63FF] font-bold">3.</span><span>Evalúas qué tan bien la recordaste (fácil, difícil, fallé).</span></li>
          <li className="flex gap-3"><span className="text-[#6C63FF] font-bold">4.</span><span>El algoritmo decide cuándo volver a mostrarte esa tarjeta según tu respuesta.</span></li>
        </ol>
        <p className="text-gray-300 leading-relaxed">
          Herramientas como <strong className="text-white">Lexora</strong> automatizan todo este proceso: generan las flashcards por ti a partir de tus apuntes y calculan automáticamente los intervalos óptimos de repaso.
        </p>
      </section>

      {/* Section 5 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">Consejos para sacarle el máximo partido</h2>
        <div className="space-y-4">
          <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5">
            <p className="font-semibold text-white mb-1">✅ Estudia en sesiones cortas cada día</p>
            <p className="text-gray-400 text-sm">15-20 minutos diarios son mucho más efectivos que 3 horas una vez a la semana.</p>
          </div>
          <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5">
            <p className="font-semibold text-white mb-1">✅ No te saltes los repasos programados</p>
            <p className="text-gray-400 text-sm">El momento del repaso está calculado para justo antes de que olvides. Si lo pospones, el sistema pierde efectividad.</p>
          </div>
          <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5">
            <p className="font-semibold text-white mb-1">✅ Una idea por flashcard</p>
            <p className="text-gray-400 text-sm">Las tarjetas simples y concretas funcionan mucho mejor que las que intentan cubrir demasiado.</p>
          </div>
          <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5">
            <p className="font-semibold text-white mb-1">✅ Combínala con el recuerdo activo</p>
            <p className="text-gray-400 text-sm">Intenta recordar la respuesta antes de verla. El esfuerzo de recuperación es lo que consolida la memoria.</p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-white">Conclusión</h2>
        <p className="text-gray-300 leading-relaxed">
          La repetición espaciada lleva más de 100 años respaldada por la ciencia y es, sin duda, una de las técnicas de estudio más poderosas que existen. Si todavía no la estás usando, estás dejando capacidad de memoria sobre la mesa. Empieza hoy con Lexora y transforma tus apuntes en flashcards inteligentes que te ayudan a memorizar el doble en la mitad de tiempo.
        </p>
      </section>
    </>
  ),

  'alternativa-anki-flashcards-ia': (
    <>
      {/* Intro */}
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        Durante años, <strong className="text-white">Anki</strong> ha sido la referencia indiscutible en el mundo de las flashcards digitales. Su algoritmo de repetición espaciada es potente y su personalización infinita. Pero en 2026, la inteligencia artificial ha revolucionado la forma en que estudiamos. Ahora existen alternativas que no solo replican lo que hace Anki, sino que lo superan en varios aspectos clave. Te presento <strong className="text-white">Lexora</strong>, la alternativa moderna a Anki potenciada por IA.
      </p>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">¿Por qué buscar alternativas a Anki?</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          No nos malinterpretes: Anki es una herramienta increíble. Es de código abierto, gratuita y ha ayudado a millones de estudiantes en todo el mundo. Sin embargo, tiene algunos puntos débiles que se han vuelto más evidentes con el paso del tiempo:
        </p>
        <div className="space-y-3 mb-4">
          <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5">
            <p className="font-semibold text-white mb-1">❌ Curva de aprendizaje empinada</p>
            <p className="text-gray-400 text-sm">Configurar Anki correctamente requiere tiempo y conocimientos técnicos. Los ajustes del algoritmo son complejos y poco intuitivos para usuarios nuevos.</p>
          </div>
          <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5">
            <p className="font-semibold text-white mb-1">❌ Crear tarjetas es manual y lento</p>
            <p className="text-gray-400 text-sm">Tienes que escribir cada tarjeta a mano. Para estudiantes con cientos de páginas de apuntes, esto puede llevar horas.</p>
          </div>
          <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5">
            <p className="font-semibold text-white mb-1">❌ Interfaz anticuada</p>
            <p className="text-gray-400 text-sm">La experiencia de usuario de Anki no ha evolucionado mucho en la última década. La versión móvil de iOS es de pago y la sincronización puede dar problemas.</p>
          </div>
        </div>
        <p className="text-gray-300 leading-relaxed">
          Estos problemas no son insuperables, pero sí representan barreras de entrada para muchos estudiantes que solo quieren una forma rápida y efectiva de memorizar contenido.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">Cómo Lexora supera a Anki con IA</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Lexora toma todo lo bueno de Anki (repetición espaciada, personalización, eficacia científica) y le añade las capacidades de la inteligencia artificial moderna. El resultado es una experiencia de estudio más inteligente, rápida y adaptada a ti.
        </p>
        
        <h3 className="text-xl font-bold mb-3 text-white mt-6">1. Generación automática de flashcards con IA</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          En lugar de escribir cada tarjeta a mano, simplemente subes tus apuntes, PDFs o diapositivas. La IA de Lexora analiza el contenido, identifica los conceptos clave y genera automáticamente flashcards de alta calidad. Lo que antes te tomaba 2 horas ahora toma 2 minutos.
        </p>

        <h3 className="text-xl font-bold mb-3 text-white mt-6">2. Algoritmo adaptativo que aprende de ti</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          El algoritmo de Anki es estático: aplica la misma fórmula para todos los usuarios. Lexora, en cambio, utiliza machine learning para ajustarse a tu ritmo de aprendizaje individual. Si tiendes a olvidar conceptos visuales más rápido que los textuales, Lexora lo detecta y adapta los intervalos en consecuencia.
        </p>

        <h3 className="text-xl font-bold mb-3 text-white mt-6">3. Interfaz moderna y multiplataforma</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          Lexora está diseñada desde cero para 2026. Funciona perfectamente en web, iOS y Android con sincronización instantánea y una interfaz limpia y minimalista. Todo incluido en el plan gratuito, sin costes ocultos.
        </p>

        <h3 className="text-xl font-bold mb-3 text-white mt-6">4. Soporte para imágenes, audio y diagramas</h3>
        <p className="text-gray-300 leading-relaxed">
          Mientras que añadir multimedia en Anki puede ser engorroso, Lexora permite capturar contenido directamente con la cámara, grabar audio o importar diagramas con un solo clic. Ideal para estudiar anatomía, idiomas o cualquier materia visual.
        </p>
      </section>

      {/* Section 3 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">¿Cuándo sigue siendo mejor Anki?</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Seamos honestos: Anki sigue siendo la mejor opción en algunos casos específicos:
        </p>
        <ul className="text-gray-300 space-y-2 mb-4">
          <li className="flex gap-3"><span className="text-[#6C63FF]">•</span><span>Si ya llevas años usando Anki y tienes miles de tarjetas creadas</span></li>
          <li className="flex gap-3"><span className="text-[#6C63FF]">•</span><span>Si necesitas control total sobre cada parámetro del algoritmo</span></li>
          <li className="flex gap-3"><span className="text-[#6C63FF]">•</span><span>Si prefieres soluciones completamente offline y de código abierto</span></li>
        </ul>
        <p className="text-gray-300 leading-relaxed">
          Pero si estás empezando ahora o si valoras la velocidad y la automatización por encima de la personalización extrema, Lexora es la mejor alternativa en 2026.
        </p>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-white">Conclusión: El futuro de las flashcards es con IA</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Anki construyó los cimientos del aprendizaje con flashcards digitales, y siempre le estaremos agradecidos por ello. Pero la tecnología ha avanzado. En 2026, la inteligencia artificial permite crear flashcards 10 veces más rápido, adaptar los algoritmos a cada estudiante y ofrecer experiencias de usuario que antes eran imposibles.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Lexora no es solo una alternativa a Anki — es la evolución natural de lo que las flashcards pueden ser. Si estás buscando una forma más inteligente, rápida y efectiva de estudiar, dale una oportunidad a Lexora. Es gratis, no requiere tarjeta de crédito y puedes empezar en menos de un minuto.
        </p>
      </section>
    </>
  ),

  'como-estudiar-oposiciones-flashcards': (
    <>
      {/* Intro */}
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        Preparar oposiciones es uno de los desafíos más exigentes a los que te puedes enfrentar como estudiante. Hablamos de memorizar <strong className="text-white">miles de artículos legales</strong>, casos prácticos, jurisprudencia, teoría administrativa y temarios interminables. La mayoría de opositores estudian durante años y aún así suspenden. ¿El problema? No es la falta de esfuerzo, sino el método. En esta guía te enseño cómo estudiar oposiciones con flashcards y repetición espaciada, el sistema que está ayudando a miles de opositores a aprobar en menos tiempo.
      </p>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">¿Por qué las oposiciones son tan difíciles de memorizar?</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          El problema principal de las oposiciones no es la cantidad de información (aunque es mucha), sino la <strong className="text-white">naturaleza del contenido</strong>:
        </p>
        <ul className="text-gray-300 space-y-3 mb-4">
          <li className="flex gap-3"><span className="text-[#6C63FF]">•</span><span><strong className="text-white">Muy técnico y árido:</strong> Artículos legales, procedimientos administrativos, normativas... no es contenido que tu cerebro retenga de forma natural.</span></li>
          <li className="flex gap-3"><span className="text-[#6C63FF]">•</span><span><strong className="text-white">Altísima densidad:</strong> Cada frase puede contener información que tienes que memorizar al pie de la letra.</span></li>
          <li className="flex gap-3"><span className="text-[#6C63FF]">•</span><span><strong className="text-white">Necesitas retención a largo plazo:</strong> No basta con recordarlo una semana: tienes que retenerlo durante meses o incluso años.</span></li>
        </ul>
        <p className="text-gray-300 leading-relaxed">
          Por eso los métodos tradicionales (leer y releer, subrayar, hacer resúmenes) no funcionan. Tu cerebro olvida el 70% de lo que lees en las primeras 24 horas si no lo repasas de forma estratégica.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">Cómo funcionan las flashcards para oposiciones</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Las <strong className="text-white">flashcards con repetición espaciada</strong> son el método más eficaz científicamente probado para memorizar información densa a largo plazo. El sistema funciona así:
        </p>
        <ol className="text-gray-300 space-y-3 mb-4 list-none">
          <li className="flex gap-3"><span className="text-[#6C63FF] font-bold">1.</span><span>Conviertes cada concepto, artículo o definición del temario en una pregunta corta.</span></li>
          <li className="flex gap-3"><span className="text-[#6C63FF] font-bold">2.</span><span>El sistema te muestra la pregunta y tú intentas recordar la respuesta de memoria.</span></li>
          <li className="flex gap-3"><span className="text-[#6C63FF] font-bold">3.</span><span>Evalúas si la recordaste bien, con dificultad o fallaste.</span></li>
          <li className="flex gap-3"><span className="text-[#6C63FF] font-bold">4.</span><span>El algoritmo programa el próximo repaso: si fallaste, la verás pronto; si acertaste fácilmente, la verás en varios días.</span></li>
        </ol>
        <p className="text-gray-300 leading-relaxed">
          Esto asegura que repasas cada concepto justo antes de olvidarlo, consolidando la información en tu memoria a largo plazo con el mínimo esfuerzo posible.
        </p>
      </section>

      {/* Section 3 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">Cómo crear flashcards efectivas para tu oposición</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          No todas las flashcards son iguales. Para oposiciones, estas son las claves:
        </p>
        
        <h3 className="text-xl font-bold mb-3 text-white mt-6">✅ Una idea por tarjeta</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          No intentes meter todo un artículo complejo en una sola tarjeta. Divide la información en preguntas atómicas y específicas.
        </p>
        <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5 mb-4">
          <p className="text-sm font-semibold text-[#6C63FF] mb-2 uppercase tracking-widest">Ejemplo</p>
          <p className="text-gray-300 text-sm mb-2"><strong className="text-white">❌ Mal:</strong> "¿Qué dice el artículo 14 de la Constitución?"</p>
          <p className="text-gray-300 text-sm"><strong className="text-white">✅ Bien:</strong> "¿Qué derecho fundamental reconoce el artículo 14 de la CE?" → "La igualdad ante la ley"</p>
        </div>

        <h3 className="text-xl font-bold mb-3 text-white mt-6">✅ Usa contexto práctico</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          En lugar de preguntar conceptos abstractos, enmárcalos en situaciones reales o casos prácticos. Tu cerebro retiene mejor información con contexto.
        </p>

        <h3 className="text-xl font-bold mb-3 text-white mt-6">✅ Incluye números y literalidad cuando sea necesario</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          En oposiciones muchas veces tienes que recordar plazos exactos, porcentajes o redacciones literales. Haz tarjetas específicas para esos detalles.
        </p>

        <h3 className="text-xl font-bold mb-3 text-white mt-6">✅ Automatiza con IA</h3>
        <p className="text-gray-300 leading-relaxed">
          Crear manualmente flashcards para un temario de 40 temas puede llevarte semanas. Herramientas como <strong className="text-white">Lexora</strong> generan automáticamente flashcards de calidad a partir de tus PDFs y apuntes, ahorrándote cientos de horas.
        </p>
      </section>

      {/* Section 4 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">Plan de estudio con flashcards para oposiciones</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Así es como deberías estructurar tu preparación:
        </p>
        
        <div className="space-y-4 mb-4">
          <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5">
            <p className="font-semibold text-white mb-2">📖 Fase 1: Primera lectura y comprensión (Días 1-3)</p>
            <p className="text-gray-400 text-sm">Lee el tema completo una vez para entender la estructura. No intentes memorizarlo aún.</p>
          </div>
          <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5">
            <p className="font-semibold text-white mb-2">🃏 Fase 2: Crear flashcards (Día 4)</p>
            <p className="text-gray-400 text-sm">Convierte los conceptos clave en flashcards (o automatízalo con Lexora). Este es el momento de procesar la información activamente.</p>
          </div>
          <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5">
            <p className="font-semibold text-white mb-2">🔄 Fase 3: Repetición espaciada (Días 5 en adelante)</p>
            <p className="text-gray-400 text-sm">Dedica 20-30 minutos cada día a repasar las tarjetas programadas. El sistema te mostrará automáticamente las que necesitas repasar ese día.</p>
          </div>
          <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5">
            <p className="font-semibold text-white mb-2">➕ Fase 4: Expandir y refinar (Continuo)</p>
            <p className="text-gray-400 text-sm">A medida que avanzas, añade nuevas tarjetas de temas posteriores y refina las que te cuestan más.</p>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">Errores comunes al usar flashcards para oposiciones</h2>
        <div className="space-y-3">
          <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5">
            <p className="font-semibold text-white mb-1">❌ Crear tarjetas demasiado largas</p>
            <p className="text-gray-400 text-sm">Si la respuesta ocupa más de 2-3 líneas, probablemente deberías dividirla en varias tarjetas.</p>
          </div>
          <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5">
            <p className="font-semibold text-white mb-1">❌ Saltarse los repasos programados</p>
            <p className="text-gray-400 text-sm">La repetición espaciada solo funciona si eres consistente. Mejor 15 minutos cada día que 2 horas una vez a la semana.</p>
          </div>
          <div className="bg-[#12122A] border border-[#1E1E3A] rounded-xl p-5">
            <p className="font-semibold text-white mb-1">❌ No combinar con otros métodos</p>
            <p className="text-gray-400 text-sm">Las flashcards son excelentes para memorización pura, pero complementa con casos prácticos, simulacros y test para afianzar.</p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-white">Conclusión: Las flashcards son tu mejor aliado para aprobar</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Preparar oposiciones no es una carrera de velocidad, es una maratón. Y en una maratón, la estrategia es tan importante como el esfuerzo. Las flashcards con repetición espaciada te permiten memorizar de forma eficiente, reducir el tiempo de estudio y aumentar drásticamente tu retención a largo plazo.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Miles de opositores ya están usando este método para aprobar sus exámenes en menos tiempo. Si estás preparando cualquier tipo de oposición (Justicia, Educación, Administrativo del Estado, Policía, etc.), las flashcards pueden marcar la diferencia entre aprobar y volver a intentarlo el año que viene. Empieza hoy con Lexora y transforma tu forma de estudiar.
        </p>
      </section>
    </>
  )
};

export function BlogPost() {
  const [match, params] = useRoute('/blog/:slug');
  const slug = params?.slug || '';
  
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0A0A1A] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post no encontrado</h1>
          <Link href="/blog" className="text-[#6C63FF] hover:underline">← Volver al blog</Link>
        </div>
      </div>
    );
  }

  const content = postContent[slug];

  return (
    <div className="min-h-screen bg-[#0A0A1A] text-white">
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
      </Helmet>
      <div className="max-w-3xl mx-auto px-6 py-20">

        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
          <span className="mx-2">›</span>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-400">{post.title.split(':')[0]}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <span className="text-xs font-semibold text-[#6C63FF] bg-[#6C63FF]/10 px-3 py-1 rounded-full uppercase tracking-widest">{post.category}</span>
          <h1 className="text-4xl font-bold mt-4 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime} lectura</span>
            <span>·</span>
            <span>Por el equipo de Lexora</span>
          </div>
        </header>

        {/* Content */}
        {content}

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#6C63FF]/20 to-[#4F46E5]/10 border border-[#6C63FF]/30 rounded-2xl p-8 text-center mb-12">
          <h3 className="text-2xl font-bold mb-3">¿Listo para memorizar el doble?</h3>
          <p className="text-gray-400 mb-6">Crea tus flashcards con repetición espaciada integrada. Gratis.</p>
          <a
            href="https://lexoraflashcards.com"
            className="inline-block bg-[#6C63FF] hover:bg-[#5a52d5] text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg"
          >
            Empieza gratis en Lexora →
          </a>
        </div>

        {/* Back link */}
        <div className="border-t border-[#1E1E3A] pt-8">
          <Link href="/blog" className="text-[#6C63FF] hover:underline text-sm font-semibold">
            ← Volver al blog
          </Link>
        </div>

      </div>
    </div>
  );
}