import { Link } from 'wouter';

export function WideImage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1739343338040-2dae68f6bdf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjBtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjM4MTA4NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080)' }}
        >
             <div className="absolute inset-0 bg-[#0F1A33]/80 bg-gradient-to-t from-[#0F1A33] via-[#0F1A33]/60 to-transparent" />
        </div>

        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
            <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
                El futuro del aprendizaje es <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D6BFF] to-[#4EA3FF]">inmersivo</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-200">
                Descubre una nueva dimensión donde la tecnología amplifica tu capacidad cognitiva.
            </p>
            
            <div className="mt-10">
                 <Link href="/features">
                    <a className="rounded-lg bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 text-base font-bold text-white hover:bg-white/20 transition-all">
                        Explorar más
                    </a>
                </Link>
            </div>
        </div>
    </div>
  );
}
