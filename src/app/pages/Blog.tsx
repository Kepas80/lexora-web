import { Link } from "wouter";

const posts = [
  {
    slug: "como-memorizar-rapido-examen",
    title: "Cómo Memorizar Rápido para un Examen: 7 Técnicas que Realmente Funcionan",
    date: "16 Abr 2026",
    category: "Técnicas de Estudio",
    excerpt: "Aprende 7 técnicas de memorización respaldadas por la ciencia para estudiar más rápido y retener más antes de tu próximo examen.",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
  },
  {
    slug: "como-estudiar-mejor",
    title: "Cómo Estudiar Mejor: 7 Técnicas Respaldadas por la Ciencia que Transformarán Tu Rendimiento",
    date: "11 Abr 2026",
    category: "Técnicas de Estudio",
    excerpt: "Pasas horas frente a los apuntes y no recuerdas nada. El problema no es tu capacidad: es tu método. Descubre las técnicas de memorización más efectivas respaldadas por la ciencia.",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
  },
  {
    slug: "alternativa-a-anki-en-espanol",
    title: "Alternativa a Anki en Español: Por Qué Lexora Es la Opción que Necesitas en 2026",
    date: "10 Abr 2026",
    category: "Comparativas",
    excerpt: "Anki es potente pero complejo y en inglés. Lexora genera flashcards automáticamente con IA en español y usa repetición espaciada adaptativa. ¿Cuál es mejor para ti?",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&q=80",
  },
  {
    slug: "alternativas-quizlet-gratis-ia-2026",
    title: "Las 7 Mejores Alternativas a Quizlet Gratis con IA en 2026",
    date: "12 Abr 2026",
    category: "Comparativas",
    excerpt: "Descubre las mejores alternativas a Quizlet gratis con inteligencia artificial para estudiar en 2026. Compara apps de flashcards y elige la ideal para ti.",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
  },
  {
    slug: "repeticion-espaciada",
    title: "Repetición Espaciada: Qué Es y Cómo Usarla para Memorizar Más [Guía 2026]",
    date: "24 Mar 2026",
    category: "Técnicas de estudio",
    excerpt: "Descubre qué es la repetición espaciada y cómo aplicarla para memorizar el doble en la mitad de tiempo. Guía completa con técnicas científicas y flashcards.",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80",
  },
  {
    slug: "alternativa-anki-flashcards-ia",
    title: "Alternativa a Anki: Por Qué Lexora es la Mejor Opción con IA en 2026",
    date: "26 Mar 2026",
    category: "Comparativas",
    excerpt: "Anki ha sido durante años el rey de las flashcards digitales. Pero en 2026 existen alternativas con IA que aprenden de ti. Descubre por qué Lexora supera a Anki.",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
  },
  {
    slug: "como-estudiar-oposiciones-flashcards",
    title: "Cómo Estudiar Oposiciones con Flashcards: El Método que Funciona en 2026",
    date: "28 Mar 2026",
    category: "Técnicas de estudio",
    excerpt: "Preparar oposiciones requiere memorizar miles de conceptos. Las flashcards con repetición espaciada son el método más eficaz para aprobar.",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
  },
];

export function Blog() {
  return (
    <div className="min-h-screen bg-[#0A0A1A] text-white">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="mb-12">
          <span className="text-[#6C63FF] text-sm font-semibold uppercase tracking-widest">
            Blog
          </span>
          <h1 className="text-4xl font-bold mt-2 mb-4">
            Aprende a estudiar mejor
          </h1>
          <p className="text-gray-400 text-lg">
            Guías, técnicas y estrategias respaldadas por la ciencia para potenciar tu aprendizaje.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={"/blog/" + post.slug}
              className="group block bg-[#12122A] rounded-2xl p-6 border border-[#1E1E3A] hover:border-[#6C63FF] transition-all duration-300 cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold text-[#6C63FF] bg-[#6C63FF]/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-gray-500">
                  {post.readTime} lectura
                </span>
              </div>
              <h2 className="text-xl font-bold mb-3 group-hover:text-[#6C63FF] transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  {post.date}
                </span>
                <span className="text-[#6C63FF] text-sm font-semibold group-hover:underline">
                  Leer más →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}