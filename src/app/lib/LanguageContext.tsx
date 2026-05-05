import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  'nav.about': { es: '¿Qué es?', en: 'About' },
  'nav.features': { es: 'Funcionalidades', en: 'Features' },
  'nav.method': { es: 'Método', en: 'Method' },
  'nav.pricing': { es: 'Precios', en: 'Pricing' },
  'nav.login': { es: 'Iniciar sesión', en: 'Log in' },
  'nav.start': { es: 'Empezar gratis', en: 'Start for free' },
  'nav.solutions': { es: 'Soluciones', en: 'Solutions' },
  'nav.contact': { es: 'Contacto', en: 'Contact' },
  'nav.terms': { es: 'Términos', en: 'Terms' },
  'nav.privacy': { es: 'Privacidad', en: 'Privacy' },

  // Hero Section
  'hero.title': { es: 'Lexora es la forma moderna, inteligente y divertida de aprender.', en: 'Lexora is the modern, smart, and fun way to learn.' },
  'hero.subtitle': { es: 'Deja atrás los métodos obsoletos. Bienvenido a una experiencia de estudio diseñada para tu cerebro.', en: 'Leave obsolete methods behind. Welcome to a study experience designed for your brain.' },

  // Main Hero (Home)
  'hero.start_demo': { es: 'Comienza la demo', en: 'Start demo' },
  'hero.generating': { es: 'IA Generando...', en: 'AI Generating...' },
  'hero.flashcard_1': { es: 'Flashcard 1', en: 'Flashcard 1' },
  'hero.q_mito': { es: '¿Qué es la mitocondria?', en: 'What is the mitochondria?' },
  'hero.a_mito': { es: 'La central energética de la célula.', en: 'The powerhouse of the cell.' },
  'hero.ready': { es: 'Listo. Tus flashcards están creadas.', en: 'Ready. Your flashcards are created.' },
  'hero.create_mine': { es: 'Crear mis flashcards gratis', en: 'Create my flashcards for free' },
  'hero.first_card_time': { es: 'Tu primera tarjeta lista en 2 segundos.', en: 'Your first card ready in 2 seconds.' },
  'hero.new_ai': { es: 'Nueva IA v2.0', en: 'New AI v2.0' },
  'hero.title_1': { es: 'Flashcards inteligentes', en: 'Smart flashcards' },
  'hero.title_2': { es: 'para estudiar mejor', en: 'to study better' },
  'hero.desc': { es: 'Lexora combina inteligencia artificial y diseño cognitivo para ayudarte a memorizar más rápido. Genera sets completos en segundos.', en: 'Lexora combines artificial intelligence and cognitive design to help you memorize faster. Generate full sets in seconds.' },
  'hero.start_free': { es: 'Empezar gratis', en: 'Start for free' },
  'hero.watch_demo': { es: 'Ver demo', en: 'Watch demo' },
  'hero.gen_ai': { es: 'IA Generativa', en: 'Generative AI' },
  'hero.neuro': { es: 'Neurociencia', en: 'Neuroscience' },
  'hero.full_text': { es: 'La mitocondria es la central energética de la célula.', en: 'The mitochondria is the powerhouse of the cell.' },

  // Features Grid
  'features.more_info': { es: 'Más información', en: 'More info' },
  'features.start_now': { es: 'Empezar ahora', en: 'Start now' },
  'features.1.title': { es: 'Crea y personaliza', en: 'Create and customize' },
  'features.1.subtitle': { es: 'Construye sets de flashcards únicos', en: 'Build unique flashcard sets' },
  'features.1.desc': { es: 'Construye sets de flashcards únicos, ajustados a tus materias y a tu forma de estudiar. Genera tarjetas con IA o créalas desde cero a tu manera.', en: 'Build unique flashcard sets, tailored to your subjects and study style. Generate cards with AI or create them from scratch your way.' },
  'features.2.title': { es: 'Modos de estudio flexibles', en: 'Flexible study modes' },
  'features.2.subtitle': { es: 'Elige el modo que mejor encaja con el momento', en: 'Choose the mode that fits the moment' },
  'features.2.desc': { es: 'Estudio, Ejercicio, Pro o Listas Inteligentes. Elige el modo que mejor encaja con el momento: repasar, poner a prueba tu memoria o preparar un examen importante.', en: 'Study, Exercise, Pro, or Smart Lists. Choose the mode that fits the moment: review, test your memory, or prepare for an important exam.' },
  'features.3.title': { es: 'Estudiar jugando', en: 'Study by playing' },
  'features.3.subtitle': { es: 'Convierte el estudio en un juego.', en: 'Turn studying into a game.' },
  'features.3.desc': { es: 'Estudiar jugando: Convierte el estudio en un juego: crea retos con tus flashcards y comprueba si de verdad dominas el temario antes del examen.', en: 'Study by playing: Turn studying into a game: create challenges with your flashcards and verify if you really master the syllabus before the exam.' },
  'features.4.title': { es: 'Aprendizaje libre', en: 'Free learning' },
  'features.4.subtitle': { es: 'Crea flashcards ilimitadas, importa desde excel o IA, sube PDF', en: 'Create unlimited flashcards, import from Excel or AI, upload PDF' },
  'features.4.desc': { es: 'Aprendizaje libre: Crea flashcards ilimitadas, importa desde excel o IA, sube PDF, personaliza estilos y organiza tu estudio sin restricciones.', en: 'Free learning: Create unlimited flashcards, import from Excel or AI, upload PDF, customize styles, and organize your study without restrictions.' },

  // What Is Section
  'whatis.title': { es: 'Los básicos de Lexora.', en: 'The basics of Lexora.' },
  'whatis.1.eyebrow': { es: 'Personalización', en: 'Customization' },
  'whatis.1.title': { es: 'Crea a tu manera', en: 'Create your way' },
  'whatis.1.desc': { es: 'Genera sets con IA o impórtalos desde tus propios apuntes PDF.', en: 'Generate sets with AI or import them from your own PDF notes.' },
  'whatis.2.eyebrow': { es: 'Flexibilidad', en: 'Flexibility' },
  'whatis.2.title': { es: 'Modos de estudio', en: 'Study modes' },
  'whatis.2.desc': { es: 'Desde repaso rápido hasta simulacros de examen intensivos.', en: 'From quick review to intensive exam simulations.' },
  'whatis.3.eyebrow': { es: 'Gamificación', en: 'Gamification' },
  'whatis.3.title': { es: 'Aprende jugando', en: 'Learn by playing' },
  'whatis.3.desc': { es: 'Supera retos, gana rachas y compite para dominar el temario.', en: 'Overcome challenges, earn streaks, and compete to master the syllabus.' },
  'whatis.4.eyebrow': { es: 'Organización', en: 'Organization' },
  'whatis.4.title': { es: 'Orden total', en: 'Total order' },
  'whatis.4.desc': { es: 'Carpetas, etiquetas y filtros para mantener todo bajo control.', en: 'Folders, tags, and filters to keep everything under control.' },
  'whatis.5.eyebrow': { es: 'Sincronización', en: 'Synchronization' },
  'whatis.5.title': { es: 'Donde quieras', en: 'Anywhere' },
  'whatis.5.desc': { es: 'Tu estudio sincronizado en tiempo real entre móvil y web.', en: 'Your study synchronized in real-time between mobile and web.' },
  'whatis.6.eyebrow': { es: 'Progreso', en: 'Progress' },
  'whatis.6.title': { es: 'Analíticas', en: 'Analytics' },
  'whatis.6.desc': { es: 'Visualiza tu avance y predice cuándo olvidarás cada concepto.', en: 'Visualize your progress and predict when you will forget each concept.' },

  // Pillars Section
  'pillars.title': { es: 'Descubre todo lo que puedes hacer.', en: 'Discover everything you can do.' },
  'pillars.details': { es: 'Más detalles en la documentación', en: 'More details in documentation' },
  'pillars.explore': { es: 'Explorar función', en: 'Explore feature' },
  'pillars.1.eyebrow': { es: 'Intuitivo', en: 'Intuitive' },
  'pillars.1.title': { es: 'Interfaz clara', en: 'Clear interface' },
  'pillars.1.short': { es: 'Encuentra todo donde lo esperas.', en: 'Find everything where you expect it.' },
  'pillars.1.full': { es: 'Una app pensada para que encuentres todo donde lo esperas. Navegación sencilla, sin menús complicados ni distracciones. Diseñada siguiendo los principios de la carga cognitiva para que tu cerebro se centre solo en aprender.', en: 'An app designed for you to find everything where you expect it. Simple navigation, no complicated menus or distractions. Designed following cognitive load principles so your brain focuses only on learning.' },
  'pillars.2.eyebrow': { es: 'Personalizable', en: 'Customizable' },
  'pillars.2.title': { es: 'A tu ritmo', en: 'At your pace' },
  'pillars.2.short': { es: 'Estudio adaptado a tu nivel.', en: 'Study adapted to your level.' },
  'pillars.2.full': { es: 'Crea sets por asignaturas, temas o bloques. Ajusta la dificultad y el orden de las tarjetas según tu nivel actual. El algoritmo de Lexora aprende de tus fallos para optimizar cada sesión.', en: 'Create sets by subjects, topics, or blocks. Adjust difficulty and card order according to your current level. Lexora\'s algorithm learns from your mistakes to optimize each session.' },
  'pillars.3.eyebrow': { es: 'Multi-dispositivo', en: 'Multi-device' },
  'pillars.3.title': { es: 'Donde quieras', en: 'Anywhere' },
  'pillars.3.short': { es: 'Sincronización total en la nube.', en: 'Total cloud synchronization.' },
  'pillars.3.full': { es: 'Tu progreso se guarda para que puedas seguir desde el móvil, la tablet o el ordenador sin perder el hilo. Empieza en el bus y termina en tu escritorio con total fluidez.', en: 'Your progress is saved so you can continue from mobile, tablet, or computer without losing track. Start on the bus and finish at your desk seamlessly.' },
  'pillars.4.eyebrow': { es: 'Modo Noche', en: 'Dark Mode' },
  'pillars.4.title': { es: 'Descanso visual', en: 'Visual rest' },
  'pillars.4.short': { es: 'Cuida tus ojos mientras estudias.', en: 'Take care of your eyes while studying.' },
  'pillars.4.full': { es: 'Cambia automáticamente al modo oscuro cuando cae el sol. Una interfaz de alto contraste optimizada para reducir la fatiga visual durante esas largas sesiones de estudio nocturno.', en: 'Automatically switches to dark mode when the sun goes down. A high-contrast interface optimized to reduce eye strain during those long night study sessions.' },
  'pillars.5.eyebrow': { es: 'Analíticas', en: 'Analytics' },
  'pillars.5.title': { es: 'Tu progreso', en: 'Your progress' },
  'pillars.5.short': { es: 'Datos que impulsan tu nota.', en: 'Data that boosts your grade.' },
  'pillars.5.full': { es: 'Visualiza tu curva de aprendizaje con gráficos detallados. Descubre tus puntos débiles, tu velocidad de memorización y recibe predicciones precisas sobre cuándo olvidarás cada concepto.', en: 'Visualize your learning curve with detailed charts. Discover your weak points, your memorization speed, and receive accurate predictions on when you will forget each concept.' },
  'pillars.6.eyebrow': { es: 'Comunidad', en: 'Community' },
  'pillars.6.title': { es: 'Colabora', en: 'Collaborate' },
  'pillars.6.short': { es: 'Comparte y mejora en equipo.', en: 'Share and improve as a team.' },
  'pillars.6.full': { es: 'Estudia con amigos, comparte tus mazos de flashcards y compite sanamente. La comunidad de Lexora crea miles de recursos gratuitos cada día para que nunca te falte material.', en: 'Study with friends, share your flashcard decks, and compete healthily. The Lexora community creates thousands of free resources every day so you never run out of material.' },

  // Method Section
  'method.eyebrow': { es: 'Descubre el método Lexora', en: 'Discover the Lexora method' },
  'method.title': { es: 'Mejora tu aprendizaje con repasos inteligentes', en: 'Improve your learning with smart reviews' },
  'method.desc': { es: 'Lexora te ayuda a repasar lo importante en el momento adecuado. La app reorganiza tus tarjetas según tu rendimiento para que dediques más tiempo a lo que todavía no dominas.', en: 'Lexora helps you review what matters at the right time. The app reorganizes your cards based on your performance so you spend more time on what you haven\'t mastered yet.' },
  'method.tap': { es: 'Toca para descubrir', en: 'Tap to discover' },
  'method.answer': { es: 'Respuesta', en: 'Answer' },
  'method.1.title': { es: '¿Qué es Lexora y para qué sirve?', en: 'What is Lexora and what is it for?' },
  'method.1.desc': { es: 'Lexora es una app que combina inteligencia artificial y flashcards para ayudarte a estudiar de forma más rápida, personalizada y eficaz. No solo genera tus tarjetas automáticamente, también te guía para estudiar de forma inteligente.', en: 'Lexora is an app that combines artificial intelligence and flashcards to help you study faster, more personalized, and effectively. It not only generates your cards automatically but also guides you to study intelligently.' },
  'method.2.title': { es: '¿Cómo puedo crear mis flashcards?', en: 'How can I create my flashcards?' },
  'method.2.desc': { es: 'Puedes generarlas automáticamente con IA escribiendo un comando como: "Crea 10 flashcards sobre biología celular". Y si ya tienes el contenido, también puedes subir tus propias tarjetas desde un archivo Excel o PDF.', en: 'You can generate them automatically with AI by typing a command like: "Create 10 flashcards about cell biology". And if you already have the content, you can also upload your own cards from an Excel or PDF file.' },

  // Method Page
  'method_page.hero.title': { es: 'La evolución de tu memoria.', en: 'The evolution of your memory.' },
  'method_page.hero.subtitle': { es: 'Ciencia cognitiva e Inteligencia Artificial. Unidas para transformar la manera en que aprendes.', en: 'Cognitive science and Artificial Intelligence. United to transform the way you learn.' },
  'method_page.card1.title': { es: 'Estudia inteligente.', en: 'Study smart.' },
  'method_page.card1.desc': { es: 'Sube tus apuntes y obtén flashcards al instante. Convierte PDFs en conocimiento en segundos.', en: 'Upload your notes and get flashcards instantly. Turn PDFs into knowledge in seconds.' },
  'method_page.card1.cta': { es: 'Empezar ya', en: 'Start now' },
  'method_page.card2.tag': { es: 'Tecnología', en: 'Technology' },
  'method_page.card2.title': { es: 'IA Generativa.', en: 'Generative AI.' },
  'method_page.card2.desc': { es: 'Nuestra inteligencia artificial comprende el contexto y crea preguntas que desafían tu memoria.', en: 'Our artificial intelligence understands context and creates questions that challenge your memory.' },
  'method_page.card2.cta': { es: 'Más información', en: 'More info' },
  'method_page.tabs.title': { es: 'Descubre tu forma de estudiar.', en: 'Discover your way of studying.' },
  'method_page.tabs.cta': { es: 'Más información sobre los modos', en: 'More info about modes' },
  'method_page.tabs.1.title': { es: 'Modo Estudio', en: 'Study Mode' },
  'method_page.tabs.1.desc': { es: 'Concéntrate en lo nuevo. Una interfaz limpia y sin distracciones diseñada para que descubras y asimiles conceptos complejos a tu propio ritmo.', en: 'Focus on the new. A clean, distraction-free interface designed for you to discover and assimilate complex concepts at your own pace.' },
  'method_page.tabs.2.title': { es: 'Modo Ejercicio', en: 'Exercise Mode' },
  'method_page.tabs.2.desc': { es: 'Pon a prueba tu memoria. Interactúa activamente con el contenido a través de repetición espaciada para reforzar lo aprendido y garantizar la retención.', en: 'Test your memory. Actively interact with content through spaced repetition to reinforce learning and ensure retention.' },
  'method_page.tabs.3.title': { es: 'Modo Pro', en: 'Pro Mode' },
  'method_page.tabs.3.desc': { es: 'Desafía tus límites. Accede a herramientas avanzadas, estadísticas detalladas y personalización total para alcanzar la maestría absoluta en tu campo.', en: 'Challenge your limits. Access advanced tools, detailed statistics, and total customization to reach absolute mastery in your field.' },
  'method_page.tabs.4.title': { es: 'Modo Examen', en: 'Exam Mode' },
  'method_page.tabs.4.desc': { es: 'Mide tu preparación real. Simula un entorno de prueba completo con desafíos variados —incluyendo opción múltiple, verdadero/falso y ejercicios de rellenar huecos— para identificar con precisión tus fortalezas y las áreas que necesitan refuerzo antes del momento decisivo.', en: 'Measure your real preparation. Simulate a complete test environment with varied challenges—including multiple choice, true/false, and fill-in-the-blanks—to accurately identify your strengths and areas needing reinforcement before the decisive moment.' },
  'method_page.essentials.title': { es: 'Los esenciales de Lexora.', en: 'Lexora essentials.' },
  'method_page.essentials.1.tag': { es: 'Listas inteligentes', en: 'Smart Lists' },
  'method_page.essentials.1.title': { es: 'Enfoque.', en: 'Focus.' },
  'method_page.essentials.1.desc': { es: 'Lexora sabe lo que necesitas repasar antes de que tú lo sepas. Prioriza lo difícil. Refuerza lo frágil. Tú solo dedícate a aprender.', en: 'Lexora knows what you need to review before you do. Prioritizes the difficult. Reinforces the fragile. You just dedicate yourself to learning.' },
  'method_page.essentials.2.tag': { es: 'Racha y progreso', en: 'Streak and progress' },
  'method_page.essentials.2.title': { es: 'Visualiza tu constancia.', en: 'Visualize your consistency.' },
  'method_page.essentials.2.desc': { es: 'Cada día cuenta. Mantén tu racha. Observa cómo tu progreso se convierte en hábito, y tu hábito en maestría.', en: 'Every day counts. Keep your streak. Watch how your progress becomes a habit, and your habit becomes mastery.' },
  'method_page.essentials.2.cta': { es: 'Pruébalo', en: 'Try it' },
  'method_page.science.1': { es: 'Recuerda más por más tiempo.', en: 'Remember more for longer.' },
  'method_page.science.1.sub': { es: 'La repetición espaciada mejora la memoria. Hasta 3 veces más eficaz que releer o subrayar.', en: 'Spaced repetition improves memory. Up to 3 times more effective than rereading or highlighting.' },
  'method_page.science.2': { es: 'Mejores notas, menos horas.', en: 'Better grades, fewer hours.' },
  'method_page.science.2.sub': { es: 'Los estudiantes que usan flashcards obtienen mejores resultados académicos.', en: 'Students who use flashcards get better academic results.' },
  'method_page.science.3': { es: 'Crear tus tarjetas es aprender mejor.', en: 'Creating your cards is learning better.' },
  'method_page.science.3.sub': { es: 'Elaborar tus propias flashcards promueve un aprendizaje más profundo y duradero.', en: 'Making your own flashcards promotes deeper and longer-lasting learning.' },
  'method_page.footer.title': { es: 'Este es el estudio que se adapta a ti.', en: 'This is the study that adapts to you.' },
  'method_page.footer.cta': { es: 'Comienza ahora', en: 'Start now' },

  // FAQ Section
  'faq.title': { es: 'Preguntas frecuentes', en: 'Frequently Asked Questions' },
  'faq.desc': { es: 'Todo lo que necesitas saber para empezar a estudiar con Lexora.', en: 'Everything you need to know to start studying with Lexora.' },
  'faq.1.q': { es: '¿Puedo usar Lexora para oposiciones, idiomas o universidad?', en: 'Can I use Lexora for exams, languages, or university?' },
  'faq.1.a': { es: 'Sí. Lexora se adapta a cualquier tema: desde Derecho Administrativo hasta vocabulario en inglés o historia. Solo necesitas definir el tema y la app genera o organiza tus flashcards por ti.', en: 'Yes. Lexora adapts to any topic: from Administrative Law to English vocabulary or history. You just need to define the topic and the app generates or organizes your flashcards for you.' },
  'faq.2.q': { es: '¿Necesito conocimientos técnicos para usarla?', en: 'Do I need technical knowledge to use it?' },
  'faq.2.a': { es: 'No. Es tan fácil como escribir una frase. No necesitas saber de IA ni programación: eliges "Crear set", escribes tus preguntas y respuestas o un comando, y la app se encarga del resto.', en: 'No. It\'s as easy as typing a sentence. You don\'t need to know about AI or programming: choose "Create set", type your questions and answers or a command, and the app takes care of the rest.' },
  'faq.3.q': { es: '¿Lexora es gratis o tiene algún coste?', en: 'Is Lexora free or does it have a cost?' },
  'faq.3.a': { es: 'Puedes usar Lexora gratis. Solo pagas si quieres acceder a modos premium avanzados, sin cuotas fijas ni permanencias: tú decides cuándo utilizar las funciones extra.', en: 'You can use Lexora for free. You only pay if you want to access advanced premium modes, with no fixed fees or permanence: you decide when to use the extra features.' },
  'faq.4.q': { es: '¿Puedo practicar con mis flashcards dentro de la app?', en: 'Can I practice with my flashcards inside the app?' },
  'faq.4.a': { es: 'Sí. Lexora incluye un modo estudio para que repases y mejores tu memorización fácilmente, así como modos más exigentes para poner a prueba tu memoria antes de un examen.', en: 'Yes. Lexora includes a study mode for you to review and improve your memorization easily, as well as more demanding modes to test your memory before an exam.' },
  
  'faq.cta.title': { es: 'Comienza gratis hoy', en: 'Start for free today' },
  'faq.cta.desc': { es: 'Prueba Lexora sin compromiso. Crea tus primeros sets, explora los modos de estudio y decide después si quieres activar funciones premium.', en: 'Try Lexora with no strings attached. Create your first sets, explore study modes, and decide later if you want to activate premium features.' },
  'faq.cta.li1': { es: 'Generación de flashcards con IA', en: 'AI flashcard generation' },
  'faq.cta.li2': { es: 'Modo estudio y listas inteligentes', en: 'Study mode and smart lists' },
  'faq.cta.li3': { es: 'Importación desde Excel o PDF', en: 'Import from Excel or PDF' },
  'faq.cta.button': { es: 'Empezar gratis', en: 'Start for free' },
  'faq.cta.note': { es: 'Sin tarjeta · Cancela cuando quieras', en: 'No card required · Cancel anytime' },

  // Home Final CTA
  'home.cta.title': { es: '¿Listo para revolucionar tu estudio?', en: 'Ready to revolutionize your study?' },
  'home.cta.desc': { es: 'Únete a miles de estudiantes que ya están mejorando sus calificaciones con la ayuda de la IA.', en: 'Join thousands of students who are already improving their grades with the help of AI.' },
  'home.cta.button': { es: 'Crear cuenta gratis', en: 'Create free account' },

  // Footer
  'footer.desc': { es: 'Transforma tus apuntes en tarjetas de estudio inteligentes con el poder de la IA.', en: 'Transform your notes into smart study cards with the power of AI.' },
  'footer.product': { es: 'Producto', en: 'Product' },
  'footer.company': { es: 'Empresa', en: 'Company' },
  'footer.legal': { es: 'Legal', en: 'Legal' },
  'footer.rights': { es: 'Todos los derechos reservados.', en: 'All rights reserved.' },

  // About Page
  'about.features.modes.title': { es: '4 modos de estudio', en: '4 study modes' },
  'about.features.modes.short': { es: 'Encuentra tu flujo.', en: 'Find your flow.' },
  'about.features.modes.long': { es: 'Desde tarjetas clásicas hasta cuestionarios interactivos. Lexora se adapta a tu estilo de aprendizaje con modos diseñados para maximizar la retención.', en: 'From classic cards to interactive quizzes. Lexora adapts to your learning style with modes designed to maximize retention.' },
  'about.features.calendar.title': { es: 'Calendario diario', en: 'Daily calendar' },
  'about.features.calendar.short': { es: 'Tu constancia visualizada.', en: 'Your consistency visualized.' },
  'about.features.calendar.long': { es: 'Construye hábitos sólidos. El calendario registra cada sesión, ayudándote a mantener la racha y visualizar tu progreso a lo largo del tiempo.', en: 'Build solid habits. The calendar records every session, helping you keep the streak and visualize your progress over time.' },
  'about.features.spaced.title': { es: 'Repetición espaciada', en: 'Spaced repetition' },
  'about.features.spaced.short': { es: 'Estudia inteligente.', en: 'Study smart.' },
  'about.features.spaced.long': { es: 'Olvídate de olvidar. Nuestro algoritmo SR (Spaced Repetition) calcula el momento exacto en que debes repasar cada tarjeta para que se quede en tu memoria a largo plazo.', en: 'Forget about forgetting. Our SR (Spaced Repetition) algorithm calculates the exact moment you should review each card so it stays in your long-term memory.' },
  'about.features.custom.title': { es: 'Personaliza tu diseño', en: 'Customize your design' },
  'about.features.custom.short': { es: 'Tu espacio, tu estilo.', en: 'Your space, your style.' },
  'about.features.custom.long': { es: 'Haz que Lexora sea tuyo. Cambia temas, colores y disposiciones para crear un entorno de estudio donde te sientas cómodo y enfocado.', en: 'Make Lexora yours. Change themes, colors, and layouts to create a study environment where you feel comfortable and focused.' },

  'about.section3.title': { es: 'Escribe lo que necesitas', en: 'Type what you need' },
  'about.section3.subtitle': { es: 'La IA hace el resto', en: 'AI does the rest' },
  'about.section3.list.1': { es: 'Comprensión profunda de tus textos.', en: 'Deep understanding of your texts.' },
  'about.section3.list.2': { es: 'Generación automática de preguntas clave.', en: 'Automatic generation of key questions.' },
  'about.section3.list.3': { es: 'Adaptación inteligente a tu nivel.', en: 'Intelligent adaptation to your level.' },
  'about.section3.list.4': { es: 'Ahorro masivo de tiempo manual.', en: 'Massive saving of manual time.' },

  'about.section1.title': { es: 'Empieza con lo tuyo', en: 'Start with yours' },
  'about.section1.desc': { es: 'Tus apuntes. Tu ritmo. Lexora te permite importar tu material o generarlo desde cero en segundos. Sin barreras. Solo aprendizaje.', en: 'Your notes. Your pace. Lexora allows you to import your material or generate it from scratch in seconds. No barriers. Just learning.' },

  'about.whatis.intro': { es: 'Introducción', en: 'Introduction' },
  'about.whatis.title': { es: 'Lo que nos hace diferentes en Lexora', en: 'What makes us different at Lexora' },

  'about.section4.title': { es: 'Repite menos, recuerda más', en: 'Repeat less, remember more' },
  'about.section4.desc': { es: 'Utilizamos ciencia cognitiva para optimizar cada minuto de tu estudio.', en: 'We use cognitive science to optimize every minute of your study.' },

  'about.method.trad.title': { es: 'Método Tradicional', en: 'Traditional Method' },
  'about.method.trad.1': { es: 'Horas perdidas creando material.', en: 'Hours wasted creating material.' },
  'about.method.trad.2': { es: 'Repaso sin estructura clara.', en: 'Review without clear structure.' },
  'about.method.trad.3': { es: 'Fatiga y aburrimiento rápido.', en: 'Fatigue and boredom quickly.' },

  'about.method.lexora.title': { es: 'Método Lexora', en: 'Lexora Method' },
  'about.method.lexora.1': { es: 'Flashcards listas al instante.', en: 'Flashcards ready instantly.' },
  'about.method.lexora.2': { es: 'Algoritmo de repetición espaciada.', en: 'Spaced repetition algorithm.' },
  'about.method.lexora.3': { es: 'Enfoque láser en lo que no sabes.', en: 'Laser focus on what you don\'t know.' },

  'about.section5.title': { es: 'Tu memoria merece algo mejor', en: 'Your memory deserves better' },
  'about.section5.desc': { es: 'Deja de luchar contra el olvido. Lexora convierte el estudio en un hábito natural, casi automático. Sin fricción. Sin estrés. Solo progreso constante.', en: 'Stop fighting forgetfulness. Lexora turns studying into a natural, almost automatic habit. No friction. No stress. Only constant progress.' },

  'about.section6.title': { es: 'Aprender jugando', en: 'Learn by playing' },
  'about.section6.desc': { es: 'Rachas. Niveles. Logros. Lexora utiliza mecánicas de juego para mantener tu motivación al máximo. Porque estudiar también puede ser adictivo.', en: 'Streaks. Levels. Achievements. Lexora uses game mechanics to keep your motivation to the max. Because studying can also be addictive.' },

  'about.testimonials.title': { es: 'Historias reales. Resultados reales', en: 'Real stories. Real results.' },
  'about.testimonials.1.text': { es: 'Antes pasaba horas resumiendo. Ahora dedico ese tiempo a aprender de verdad. Mis notas han subido drásticamente.', en: 'Before I spent hours summarizing. Now I spend that time truly learning. My grades have gone up dramatically.' },
  'about.testimonials.1.role': { es: 'Estudiante de Medicina', en: 'Medical Student' },
  'about.testimonials.2.text': { es: 'La interfaz es increíblemente limpia y el algoritmo realmente funciona. Siento que retengo mucho más con menos esfuerzo.', en: 'The interface is incredibly clean and the algorithm really works. I feel I retain much more with less effort.' },
  'about.testimonials.2.role': { es: 'Opositor', en: 'Exam candidate' },
  'about.testimonials.3.text': { es: 'Lexora ha cambiado mi forma de estudiar idiomas. El modo de escritura es perfecto para practicar vocabulario.', en: 'Lexora has changed the way I study languages. The writing mode is perfect for practicing vocabulary.' },
  'about.testimonials.3.role': { es: 'Estudiante de Inglés', en: 'English Student' },

  'about.cta.title': { es: 'Haz que aprender sea la parte favorita de tu día', en: 'Make learning the favorite part of your day' },
  'about.cta.button': { es: 'Comienza gratis hoy', en: 'Start for free today' },

  // Features Page
  'features_page.hero.badge': { es: 'Diferente a lo que ya existe', en: 'Different from what already exists' },
  'features_page.hero.title_pre': { es: 'Todo lo que puedes hacer', en: 'Everything you can do' },
  'features_page.hero.title_span': { es: 'con Lexora', en: 'with Lexora' },
  'features_page.hero.subtitle': { es: 'Una app diseñada para ayudarte a aprender mejor: rápida, inteligente y hecha para ti.', en: 'An app designed to help you learn better: fast, smart, and made for you.' },
  'features_page.hero.cta': { es: 'Empieza ahora gratis', en: 'Start now for free' },

  'features_page.bento.title': { es: 'Inteligencia Artificial aplicada al Estudio', en: 'Artificial Intelligence applied to Study' },
  'features_page.bento.subtitle': { es: 'Cuatro pilares tecnológicos diseñados para transformar tu aprendizaje.', en: 'Four technological pillars designed to transform your learning.' },
  'features_page.bento.card1.title': { es: 'IA Generativa', en: 'Generative AI' },
  'features_page.bento.card2.title': { es: 'Importación de Documentos', en: 'Document Import' },
  'features_page.bento.card3.title': { es: 'Escaneo con Cámara IA', en: 'AI Camera Scan' },
  'features_page.bento.card4.title': { es: 'Tutor IA', en: 'AI Tutor' },
  'features_page.bento.demo': { es: 'Ver demostración', en: 'Watch demo' },

  'features_page.org.eyebrow': { es: 'Organización', en: 'Organization' },
  'features_page.org.title': { es: 'Tu estudio, en orden', en: 'Your study, in order' },
  
  'features_page.org.card1.title': { es: 'Sets por temática', en: 'Thematic sets' },
  'features_page.org.card1.desc1': { es: 'Crea y agrupa tus flashcards según el tema que necesites estudiar.', en: 'Create and group your flashcards according to the topic you need to study.' },
  'features_page.org.card1.desc2': { es: 'Organiza tu conocimiento por asignaturas, bloques o conceptos y estudia sin perderte.', en: 'Organize your knowledge by subjects, blocks, or concepts and study without getting lost.' },
  'features_page.org.card1.tag': { es: 'FLASHCARDS', en: 'FLASHCARDS' },

  'features_page.org.card2.title': { es: 'Tu biblioteca', en: 'Your library' },
  'features_page.org.card2.desc1': { es: 'Todos tus sets organizados en un solo lugar.', en: 'All your sets organized in one place.' },
  'features_page.org.card2.desc2': { es: 'Encuentra tus sets fácilmente con filtros, búsqueda y orden inteligente.', en: 'Find your sets easily with filters, search, and smart sorting.' },
  'features_page.org.card2.cta': { es: 'Probar ahora', en: 'Try now' },

  'features_page.org.card3.title': { es: 'Importar desde Excel', en: 'Import from Excel' },
  'features_page.org.card3.desc1': { es: 'Sube un archivo Excel y crea tus sets y flashcards en segundos.', en: 'Upload an Excel file and create your sets and flashcards in seconds.' },
  'features_page.org.card3.desc2': { es: 'La forma más rápida de pasar grandes volúmenes de contenido a Lexora sin esfuerzo.', en: 'The fastest way to move large volumes of content to Lexora effortlessly.' },

  'features_page.org.card4.title': { es: 'Tus datos, siempre seguros', en: 'Your data, always safe' },
  'features_page.org.card4.desc1': { es: 'Haz copias de seguridad y descarga todos tus sets cuando quieras.', en: 'Backup and download all your sets whenever you want.' },
  'features_page.org.card4.desc2': { es: 'Exporta tu contenido, guárdalo offline y ten el control total de tu estudio.', en: 'Export your content, save it offline, and have total control of your study.' },

  'features_page.mot.eyebrow': { es: 'Motivación', en: 'Motivation' },
  'features_page.mot.title': { es: 'Aprender ya no cuesta', en: 'Learning is no longer hard' },
  
  'features_page.mot.card1.title': { es: 'Aprendes sin darte cuenta.', en: 'You learn without realizing it.' },
  'features_page.mot.card1.desc': { es: 'Sube de nivel. Cada sesión es un juego donde tú ganas.', en: 'Level up. Every session is a game where you win.' },
  
  'features_page.mot.card2.title': { es: 'Tu progreso, visible.', en: 'Your progress, visible.' },
  'features_page.mot.card2.desc': { es: 'Datos claros. Mira cómo crece tu mente día a día.', en: 'Clear data. Watch your mind grow day by day.' },

  'features_page.mot.card3.title': { es: 'Estudiar es jugar.', en: 'Studying is playing.' },
  'features_page.mot.card3.desc': { es: 'Sin estrés. Fluye con el conocimiento a tu propio ritmo.', en: 'No stress. Flow with knowledge at your own pace.' },

  'features_page.cta.title': { es: '¿Listo para cambiar tu forma de estudiar?', en: 'Ready to change the way you study?' },
  'features_page.cta.desc': { es: 'Únete a los estudiantes que ya han descubierto su verdadero potencial con Lexora.', en: 'Join the students who have already discovered their true potential with Lexora.' },
  'features_page.cta.button': { es: 'Empezar ahora gratis', en: 'Start now for free' },

  // Generative AI Section
  'features.gen_ai.badge': { es: 'Creatividad Ilimitada', en: 'Unlimited Creativity' },
  'features.gen_ai.title': { es: 'IA Generativa', en: 'Generative AI' },
  'features.gen_ai.subtitle': { es: 'Crea en segundos', en: 'Create in seconds' },
  'features.gen_ai.desc': { es: '¿No tienes apuntes? No hay problema. Simplemente escribe un tema y nuestra IA generará un set de estudio completo, estructurado y listo para usar.', en: 'No notes? No problem. Simply type a topic and our AI will generate a complete, structured study set ready to use.' },
  'features.gen_ai.list1': { es: 'Generación instantánea de preguntas y respuestas.', en: 'Instant generation of questions and answers.' },
  'features.gen_ai.list2': { es: 'Adaptado a tu nivel de conocimiento.', en: 'Adapted to your knowledge level.' },
  'features.gen_ai.demo.new_set': { es: 'Nuevo Set', en: 'New Set' },
  'features.gen_ai.demo.sample': { es: 'Introducción a la Astrofísica', en: 'Introduction to Astrophysics' },
  'features.gen_ai.demo.generating': { es: 'Generando conceptos...', en: 'Generating concepts...' },
  'features.gen_ai.demo.done': { es: '¡Listo!', en: 'Done!' },
  'features.gen_ai.demo.card1.term': { es: 'Supernova', en: 'Supernova' },
  'features.gen_ai.demo.card1.def': { es: 'Explosión estelar al final de la vida de una estrella.', en: 'Stellar explosion at the end of a star\'s life.' },
  'features.gen_ai.demo.card2.term': { es: 'Agujero Negro', en: 'Black Hole' },
  'features.gen_ai.demo.card2.def': { es: 'Región con gravedad tan fuerte que nada escapa.', en: 'Region with gravity so strong nothing escapes.' },
  'features.gen_ai.demo.card3.term': { es: 'Nebulosa', en: 'Nebula' },
  'features.gen_ai.demo.card3.def': { es: 'Nube gigante de polvo y gas en el espacio.', en: 'Giant cloud of dust and gas in space.' },

  // Documents Import Section
  'features.doc.badge': { es: 'Digitalización Rápida', en: 'Rapid Digitization' },
  'features.doc.title': { es: 'Importación de Documentos', en: 'Document Import' },
  'features.doc.subtitle': { es: 'Adiós al tipeo', en: 'Goodbye typing' },
  'features.doc.desc': { es: 'Sube tus PDFs, diapositivas o apuntes de Word. Lexora extrae lo importante y crea el material de estudio por ti. Ahorra horas de trabajo manual.', en: 'Upload your PDFs, slides, or Word notes. Lexora extracts what\'s important and creates study material for you. Save hours of manual work.' },
  'features.doc.list1': { es: 'Compatible con PDF, DOCX y TXT.', en: 'Compatible with PDF, DOCX, and TXT.' },
  'features.doc.list2': { es: 'Detección inteligente de temas clave.', en: 'Intelligent detection of key topics.' },
  'features.doc.demo.drop': { es: 'Suelta tu archivo aquí', en: 'Drop your file here' },
  'features.doc.demo.analyzing': { es: 'Analizando documento...', en: 'Analyzing document...' },
  'features.doc.demo.imported': { es: 'Importado', en: 'Imported' },
  'features.doc.demo.created': { es: '24 Flashcards creadas', en: '24 Flashcards created' },

  // Camera Section
  'features.camera.badge': { es: 'Nuevo en Lexora', en: 'New in Lexora' },
  'features.camera.title': { es: 'Cámara IA', en: 'AI Camera' },
  'features.camera.subtitle': { es: 'Tus apuntes cobran vida', en: 'Your notes come to life' },
  'features.camera.desc': { es: 'Olvídate de transcribir manualmente. Digitaliza tus notas de clase, libros o esquemas en papel y conviértelos en material de estudio interactivo al instante.', en: 'Forget manual transcription. Digitize your class notes, books, or paper outlines and turn them into interactive study material instantly.' },
  'features.camera.step1.title': { es: '1. Captura', en: '1. Capture' },
  'features.camera.step1.desc': { es: 'Apunta con tu cámara. La IA detecta automáticamente documentos, pizarras o escritura a mano.', en: 'Point your camera. AI automatically detects documents, whiteboards, or handwriting.' },
  'features.camera.step2.title': { es: '2. Procesa', en: '2. Process' },
  'features.camera.step2.desc': { es: 'Nuestro motor de visión analiza la imagen, extrae el texto y comprende los conceptos clave al instante.', en: 'Our vision engine analyzes the image, extracts text, and understands key concepts instantly.' },
  'features.camera.step3.title': { es: '3. Estudia', en: '3. Study' },
  'features.camera.step3.desc': { es: '¡Listo! Recibes un set de flashcards organizado con preguntas y respuestas, listo para repasar.', en: 'Ready! You receive an organized flashcard set with questions and answers, ready to review.' },
  'features.camera.demo.processing': { es: 'Procesando...', en: 'Processing...' },
  'features.camera.demo.response': { es: 'RESPUESTA', en: 'ANSWER' },
  'features.camera.demo.correct': { es: 'CORRECTO', en: 'CORRECT' },

  // Tutor Section
  'features.tutor.badge': { es: 'Aprendizaje Adaptativo', en: 'Adaptive Learning' },
  'features.tutor.title': { es: 'Tutor IA', en: 'AI Tutor' },
  'features.tutor.subtitle': { es: 'Repaso inteligente', en: 'Smart Review' },
  'features.tutor.desc': { es: 'No pierdas tiempo repasando lo que ya sabes. El algoritmo de repetición espaciada (SRS) prioriza lo que te cuesta recordar para maximizar tu retención a largo plazo.', en: 'Don\'t waste time reviewing what you already know. The spaced repetition algorithm (SRS) prioritizes what you struggle to remember to maximize your long-term retention.' },
  'features.tutor.list1': { es: 'Seguimiento detallado de tu progreso.', en: 'Detailed tracking of your progress.' },
  'features.tutor.list2': { es: 'Sesiones de estudio optimizadas diariamente.', en: 'Daily optimized study sessions.' },
  'features.tutor.demo.progress': { es: 'Progreso Diario', en: 'Daily Progress' },
  'features.tutor.demo.q': { es: 'PREGUNTA', en: 'QUESTION' },
  'features.tutor.demo.q_text': { es: '¿Qué función cumple la mitocondria?', en: 'What is the function of the mitochondria?' },
  'features.tutor.demo.a': { es: 'RESPUESTA', en: 'ANSWER' },
  'features.tutor.demo.a_text': { es: 'Produce energía para la célula mediante respiración celular.', en: 'Produces energy for the cell through cellular respiration.' },
  'features.tutor.demo.help': { es: 'Ayuda de IA', en: 'AI Help' },
  'features.tutor.demo.help_text': { es: 'Mnemotecnia: Mitocondria = Motor. Es el motor que genera la energía (ATP) para que la célula funcione.', en: 'Mnemonic: Mitochondria = Motor. It is the motor that generates energy (ATP) for the cell to function.' },
  'features.tutor.demo.hard': { es: 'Difícil', en: 'Hard' },
  'features.tutor.demo.normal': { es: 'Normal', en: 'Normal' },
  'features.tutor.demo.easy': { es: 'Fácil', en: 'Easy' },

  // Method Page
  'method.phase1.badge': { es: 'Fase 1: Ingesta', en: 'Phase 1: Ingest' },
  'method.phase1.title': { es: 'Centraliza tu Conocimiento', en: 'Centralize Your Knowledge' },
  'method.phase1.desc': { es: 'Olvídate de tener apuntes dispersos. Sube tus PDFs, diapositivas o notas a mano. Lexora unifica todo tu material en un sistema inteligente.', en: 'Forget scattered notes. Upload your PDFs, slides, or handwritten notes. Lexora unifies all your material into an intelligent system.' },

  'method.phase2.badge': { es: 'Fase 2: Procesamiento', en: 'Phase 2: Processing' },
  'method.phase2.title': { es: 'Análisis Neural Profundo', en: 'Deep Neural Analysis' },
  'method.phase2.desc': { es: 'Nuestra IA no solo lee, <strong>entiende</strong>. Detecta conceptos clave, relaciones y jerarquías para transformar texto plano en estructuras de aprendizaje.', en: 'Our AI doesn\'t just read, it <strong>understands</strong>. It detects key concepts, relationships, and hierarchies to transform plain text into learning structures.' },

  'method.phase3.badge': { es: 'Fase 3: Maestría', en: 'Phase 3: Mastery' },
  'method.phase3.title': { es: 'Retención Garantizada', en: 'Guaranteed Retention' },
  'method.phase3.desc': { es: 'El sistema programa tus repasos estratégicamente. Convierte la memoria frágil en conocimiento sólido que perdura más allá del examen.', en: 'The system schedules your reviews strategically. Turns fragile memory into solid knowledge that lasts beyond the exam.' },

  'method.science.title': { es: 'Respaldado por la Ciencia Cognitiva', en: 'Backed by Cognitive Science' },
  'method.science.card1.title': { es: 'Recuerda más por más tiempo', en: 'Remember more for longer' },
  'method.science.card1.desc': { es: 'La repetición espaciada mejora la memoria. Hasta 3 veces mas eficaz que releer y subrayar', en: 'Spaced repetition improves memory. Up to 3 times more effective than rereading and highlighting.' },
  'method.science.card2.title': { es: 'Mejores notas, menos horas', en: 'Better grades, fewer hours' },
  'method.science.card2.desc': { es: 'Los estudiantes que usan flashcards obtienen mejores resultados académicos', en: 'Students who use flashcards get better academic results.' },
  'method.science.card3.title': { es: 'Crear flashcards es aprender mejor', en: 'Creating flashcards is learning better' },
  'method.science.card3.desc': { es: 'Elaborar tus propias flashcards promueve un aprendizaje mas profundo y duradero', en: 'Making your own flashcards promotes deeper and longer-lasting learning.' },

  'method.modes.title': { es: 'Descubre estos modos y más, totalmente gratis', en: 'Discover these modes and more, totally free' },

  // Pricing Page
  'pricing_page.header.title': { es: 'Planes para cada estudiante', en: 'Plans for every student' },
  'pricing_page.header.subtitle': { es: 'Elige la potencia de IA que necesitas. Cambia o cancela cuando quieras.', en: 'Choose the AI power you need. Change or cancel whenever you want.' },
  'pricing_page.toggle.monthly': { es: 'Mensual', en: 'Monthly' },
  'pricing_page.toggle.annual': { es: 'Anual', en: 'Annual' },
  'pricing_page.toggle.savings': { es: '-20% aprox.', en: '-20% approx.' },

  'pricing_page.plan.free.title': { es: 'Gratis', en: 'Free' },
  'pricing_page.plan.free.desc': { es: 'Empieza a estudiar sin pagar. Para probar Lexora y crear el hábito.', en: 'Start studying without paying. To try Lexora and build the habit.' },
  'pricing_page.plan.free.cta': { es: 'Empezar gratis', en: 'Start for free' },
  'pricing_page.plan.free.includes_title': { es: 'Incluye:', en: 'Includes:' },
  'pricing_page.plan.free.includes.1': { es: 'Estudio básico con flashcards', en: 'Basic study with flashcards' },
  'pricing_page.plan.free.includes.2': { es: 'Modo Estudio y Modo Pro', en: 'Study Mode and Pro Mode' },
  'pricing_page.plan.free.includes.3': { es: 'Ejercicios manuales', en: 'Manual exercises' },
  'pricing_page.plan.free.includes.4': { es: 'Gestión básica de sets', en: 'Basic set management' },
  'pricing_page.plan.free.limits_title': { es: 'Límites:', en: 'Limits:' },
  'pricing_page.plan.free.limits.1': { es: '10 sets por tema / mes', en: '10 sets per topic / month' },
  'pricing_page.plan.free.limits.2': { es: '100 flashcards totales / mes', en: '100 total flashcards / month' },
  'pricing_page.plan.free.limits.3': { es: 'Almacenamiento limitado', en: 'Limited storage' },
  'pricing_page.plan.free.missing.1': { es: 'Sin IA avanzada', en: 'No advanced AI' },
  'pricing_page.plan.free.missing.2': { es: 'Sin documentos', en: 'No documents' },
  'pricing_page.plan.free.missing.3': { es: 'Sin fotos de apuntes', en: 'No photos of notes' },
  'pricing_page.plan.free.missing.4': { es: 'Sin Tutor IA', en: 'No AI Tutor' },

  'pricing_page.plan.ia.title': { es: 'Estudia con IA', en: 'Study with AI' },
  'pricing_page.plan.ia.desc': { es: 'Para estudiantes que quieren ahorrar tiempo y usar IA.', en: 'For students who want to save time and use AI.' },
  'pricing_page.plan.ia.per_month': { es: '/mes', en: '/mo' },
  'pricing_page.plan.ia.savings_badge': { es: 'Ahorra un 33% respecto al plan mensual', en: 'Save 33% vs monthly plan' },
  'pricing_page.plan.ia.billed_annual': { es: 'Facturado 23,88 € al año', en: 'Billed €23.88 per year' },
  'pricing_page.plan.ia.billed_monthly': { es: 'Pago mensual. Cancela cuando quieras.', en: 'Monthly payment. Cancel anytime.' },
  'pricing_page.plan.ia.cta': { es: 'Empezar con IA', en: 'Start with AI' },
  'pricing_page.plan.ia.feature_group.1': { es: 'IA Generativa (Valor principal)', en: 'Generative AI (Main Value)' },
  'pricing_page.plan.ia.features.1.text': { es: 'Flashcards creadas automáticamente para aprender más rápido', en: 'Flashcards created automatically to learn faster' },
  'pricing_page.plan.ia.features.1.value': { es: '300 / mes', en: '300 / mo' },
  'pricing_page.plan.ia.features.2.text': { es: 'Transforma PDFs y documentos en flashcards listas para repasar', en: 'Transform PDFs and docs into review-ready flashcards' },
  'pricing_page.plan.ia.features.2.value': { es: '5 / mes', en: '5 / mo' },
  'pricing_page.plan.ia.features.3.text': { es: 'Haz fotografías desde tu móvil que se convierten en tarjetas de estudio', en: 'Take photos from your mobile that turn into study cards' },
  'pricing_page.plan.ia.features.3.value': { es: '20 / mes', en: '20 / mo' },
  'pricing_page.plan.ia.features.4.text': { es: 'Gen.Imágenes con IA creadas para ayudarte a recordar mejor', en: 'AI Image Gen created to help you remember better' },
  'pricing_page.plan.ia.features.4.value': { es: 'Ilimitado', en: 'Unlimited' },
  'pricing_page.plan.ia.feature_group.2': { es: 'Tutor IA', en: 'AI Tutor' },
  'pricing_page.plan.ia.features.5.text': { es: 'Interacciones', en: 'Interactions' },
  'pricing_page.plan.ia.features.5.value': { es: '200 / mes', en: '200 / mo' },
  'pricing_page.plan.ia.features.5.subtext': { es: 'Ayuda contextual y pistas para memorizar', en: 'Contextual help and hints to memorize' },
  'pricing_page.plan.ia.includes_more': { es: 'Incluye además:', en: 'Also includes:' },
  'pricing_page.plan.ia.more.1': { es: 'Sets ilimitados', en: 'Unlimited sets' },
  'pricing_page.plan.ia.more.2': { es: 'Flashcards ilimitadas', en: 'Unlimited flashcards' },
  'pricing_page.plan.ia.more.3': { es: 'Todos los modos de estudio', en: 'All study modes' },
  'pricing_page.plan.ia.more.4': { es: 'Repetición espaciada IA', en: 'AI Spaced Repetition' },
  'pricing_page.plan.ia.more.5': { es: 'Estadísticas y progreso', en: 'Stats and progress' },
  'pricing_page.plan.ia.more.6': { es: 'Pomodoro y calendario', en: 'Pomodoro and calendar' },

  'pricing_page.plan.pro.title': { es: 'IA Pro', en: 'AI Pro' },
  'pricing_page.plan.pro.badge': { es: 'Recomendado', en: 'Recommended' },
  'pricing_page.plan.pro.desc': { es: 'Para usuarios intensivos, oposiciones y power users.', en: 'For intensive users, competitive exams and power users.' },
  'pricing_page.plan.pro.per_month': { es: '/mes', en: '/mo' },
  'pricing_page.plan.pro.savings_badge': { es: 'Ahorra un 50% respecto al plan mensual', en: 'Save 50% vs monthly plan' },
  'pricing_page.plan.pro.billed_annual': { es: 'Precio anual: 35,88€/año', en: 'Annual price: €35.88/year' },
  'pricing_page.plan.pro.billed_monthly': { es: 'Pago mensual. Cancela cuando quieras.', en: 'Monthly payment. Cancel anytime.' },
  'pricing_page.plan.pro.cta': { es: 'Obtener IA Pro', en: 'Get AI Pro' },
  'pricing_page.plan.pro.feature_group.1': { es: 'IA Avanzada (Sin límites)', en: 'Advanced AI (No limits)' },
  'pricing_page.plan.pro.features.1.text': { es: 'Flashcards creadas automáticamente para aprender más rápido', en: 'Flashcards created automatically to learn faster' },
  'pricing_page.plan.pro.features.1.value': { es: '1.500 / mes', en: '1,500 / mo' },
  'pricing_page.plan.pro.features.2.text': { es: 'Transforma PDFs y documentos en flashcards listas para repasar', en: 'Transform PDFs and docs into review-ready flashcards' },
  'pricing_page.plan.pro.features.2.value': { es: '20 / mes', en: '20 / mo' },
  'pricing_page.plan.pro.features.3.text': { es: 'Haz fotografías desde tu móvil que se convierten en tarjetas de estudio', en: 'Take photos from your mobile that turn into study cards' },
  'pricing_page.plan.pro.features.3.value': { es: '100 / mes', en: '100 / mo' },
  'pricing_page.plan.pro.features.4.text': { es: 'Gen.Imágenes con IA creadas para ayudarte a recordar mejor', en: 'AI Image Gen created to help you remember better' },
  'pricing_page.plan.pro.features.4.value': { es: 'Ilimitado', en: 'Unlimited' },
  'pricing_page.plan.pro.feature_group.2': { es: 'Tutor IA Ilimitado', en: 'Unlimited AI Tutor' },
  'pricing_page.plan.pro.features.5.subtext': { es: 'Asistencia continua, pistas avanzadas y refuerzo personalizado.', en: 'Continuous assistance, advanced hints and personalized reinforcement.' },
  'pricing_page.plan.pro.includes_more': { es: 'Todo lo anterior, sin límites:', en: 'All the above, without limits:' },
  'pricing_page.plan.pro.more.1': { es: 'Repetición espaciada avanzada', en: 'Advanced spaced repetition' },
  'pricing_page.plan.pro.more.2': { es: 'Gestión avanzada de sets', en: 'Advanced set management' },
  'pricing_page.plan.pro.more.3': { es: 'Importar, duplicar y compartir', en: 'Import, duplicate and share' },

  'pricing_page.comparison.title': { es: 'Comparativa detallada', en: 'Detailed comparison' },
  'pricing_page.comparison.subtitle': { es: 'Todo lo que necesitas saber sobre nuestros planes', en: 'Everything you need to know about our plans' },
  'pricing_page.comparison.table1.title': { es: 'Funcionalidades Principales', en: 'Main Features' },
  'pricing_page.comparison.col.function': { es: 'Función', en: 'Function' },
  'pricing_page.comparison.col.free': { es: 'Gratis', en: 'Free' },
  'pricing_page.comparison.col.ia': { es: 'Estudia con IA', en: 'Study with AI' },
  'pricing_page.comparison.col.pro': { es: 'IA Pro', en: 'AI Pro' },

  'pricing_page.table.row1.title': { es: 'Crear flashcards (sin IA)', en: 'Create flashcards (no AI)' },
  'pricing_page.table.row1.desc': { es: 'Crea tarjetas manualmente sin límites en planes de pago.', en: 'Create cards manually without limits on paid plans.' },
  'pricing_page.table.row1.val.free': { es: '100 flashcards / mes', en: '100 flashcards / mo' },
  'pricing_page.table.row1.val.paid': { es: 'Ilimitadas', en: 'Unlimited' },

  'pricing_page.table.row2.title': { es: 'Crear flashcards con IA', en: 'Create flashcards with AI' },
  'pricing_page.table.row2.desc': { es: 'Crea flashcards inteligentes en segundos con ayuda de la IA.', en: 'Create smart flashcards in seconds with AI help.' },
  'pricing_page.table.row2.val.ia': { es: '300 flashcards por IA / mes', en: '300 AI flashcards / mo' },
  'pricing_page.table.row2.val.pro': { es: '1.500 flashcards por IA / mes', en: '1,500 AI flashcards / mo' },

  'pricing_page.table.row3.title': { es: 'Desde documentos', en: 'From documents' },
  'pricing_page.table.row3.desc': { es: 'Convierte documentos (PDF, Word) en flashcards.', en: 'Convert documents (PDF, Word) into flashcards.' },
  'pricing_page.table.row3.val.ia': { es: '5 docs / mes', en: '5 docs / mo' },
  'pricing_page.table.row3.val.pro': { es: '20 docs / mes', en: '20 docs / mo' },

  'pricing_page.table.row4.title': { es: 'Desde fotos de apuntes', en: 'From photos of notes' },
  'pricing_page.table.row4.desc': { es: 'Haz una foto a tus apuntes y transfórmalos en flashcards.', en: 'Take a photo of your notes and transform them into flashcards.' },
  'pricing_page.table.row4.val.ia': { es: '20 imágenes / mes', en: '20 images / mo' },
  'pricing_page.table.row4.val.pro': { es: '100 imágenes / mes', en: '100 images / mo' },

  'pricing_page.table.row5.title': { es: 'Tutor IA', en: 'AI Tutor' },
  'pricing_page.table.row5.desc': { es: 'Un tutor que te da pistas y explicaciones mientras estudias.', en: 'A tutor that gives you hints and explanations while you study.' },
  'pricing_page.table.row5.val.ia': { es: '200 interac.', en: '200 interac.' },
  'pricing_page.table.row5.val.pro': { es: 'Ilimitado', en: 'Unlimited' },

  'pricing_page.table.row6.title': { es: 'Generación de imágenes IA', en: 'AI Image Generation' },
  'pricing_page.table.row6.desc': { es: 'Crea imágenes educativas para reforzar la memoria.', en: 'Create educational images to reinforce memory.' },
  'pricing_page.table.row6.val.paid': { es: 'Ilimitadas', en: 'Unlimited' },

  'pricing_page.table.row7.title': { es: 'Almacenamiento permitido de imágenes', en: 'Allowed image storage' },
  'pricing_page.table.row7.desc': { es: 'Importa contenido desde enlaces web.', en: 'Import content from web links.' },
  'pricing_page.table.row7.val.free': { es: 'hasta 20 imágenes (aprox. 50MB)', en: 'up to 20 images (approx. 50MB)' },
  'pricing_page.table.row7.val.ia': { es: 'hasta 100 imágenes (aprox. 500MB)', en: 'up to 100 images (approx. 500MB)' },
  'pricing_page.table.row7.val.pro': { es: 'hasta 500 imágenes (aprox. 2 GB)', en: 'up to 500 images (approx. 2 GB)' },

  'pricing_page.comparison.table2.title': { es: 'Funciones de Estudio', en: 'Study Features' },

  'pricing_page.table2.row1.title': { es: 'Modos de estudio', en: 'Study modes' },
  'pricing_page.table2.row1.desc': { es: 'Diferentes formas de aprender y repasar.', en: 'Different ways to learn and review.' },
  'pricing_page.table2.row1.val.free': { es: 'Estudio, Pro Mode y Ejercicio', en: 'Study, Pro Mode and Exercise' },
  'pricing_page.table2.row1.val.paid': { es: 'Todos los modos', en: 'All modes' },

  'pricing_page.table2.row2.title': { es: 'PDF a flashcards (sin IA)', en: 'PDF to flashcards (no AI)' },
  'pricing_page.table2.row2.desc': { es: 'Sube PDF, subraya y crea flashcards manualmente.', en: 'Upload PDF, highlight and create flashcards manually.' },

  'pricing_page.table2.row3.title': { es: 'Personalizar flashcards', en: 'Customize flashcards' },
  'pricing_page.table2.row3.desc': { es: 'Adapta colores, orden y formato a tu estilo.', en: 'Adapt colors, order and format to your style.' },

  'pricing_page.table2.row4.title': { es: 'Generación de imágenes IA', en: 'AI Image Generation' },
  'pricing_page.table2.row4.desc': { es: 'Organiza y busca tus sets en un solo lugar.', en: 'Organize and search your sets in one place.' },

  'pricing_page.table2.row5.title': { es: 'Repetición espaciada', en: 'Spaced repetition' },
  'pricing_page.table2.row5.desc': { es: 'Repasa justo antes de olvidar.', en: 'Review just before forgetting.' },
  'pricing_page.table2.row5.val.pro': { es: 'Avanzada', en: 'Advanced' },

  'pricing_page.table2.row6.title': { es: 'Estadísticas Avanzadas', en: 'Advanced Statistics' },
  'pricing_page.table2.row6.desc': { es: 'Mide tu evolución y puntos débiles.', en: 'Measure your evolution and weak points.' },

  'pricing_page.table2.row7.title': { es: 'Retos y juegos', en: 'Challenges and games' },
  'pricing_page.table2.row7.desc': { es: 'Aprende jugando y mantén la motivación.', en: 'Learn by playing and keep motivation.' },

  'pricing_page.table2.row8.title': { es: 'Pomodoro', en: 'Pomodoro' },
  'pricing_page.table2.row8.desc': { es: 'Sesiones de estudio optimizadas.', en: 'Optimized study sessions.' },

  'pricing_page.table2.row9.title': { es: 'Gestión de sets', en: 'Set management' },
  'pricing_page.table2.row9.desc': { es: 'Importa, copia y organiza tus sets.', en: 'Import, copy and organize your sets.' },

  'pricing_page.table2.row10.title': { es: 'Calendario de estudio', en: 'Study calendar' },
  'pricing_page.table2.row10.desc': { es: 'Organiza tu aprendizaje día a día.', en: 'Organize your learning day by day.' },

  'pricing_page.plan.free.price': { es: '0 €', en: '€0' },
  'pricing_page.plan.ia.price_monthly': { es: '2,99 €', en: '€2.99' },
  'pricing_page.plan.ia.price_annual': { es: '1,99 €', en: '€1.99' },
  'pricing_page.plan.pro.price_monthly': { es: '5,99 €', en: '€5.99' },
  'pricing_page.plan.pro.price_annual': { es: '2,99 €', en: '€2.99' },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string) => {
    const translationGroup = translations[key];
    if (!translationGroup) return key;
    return translationGroup[language] || translationGroup['es'] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
