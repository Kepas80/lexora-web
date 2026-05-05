import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'wouter';

export function Thanks() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center pt-24 sm:pt-28 px-4 text-center bg-white">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.6 }}
      >
        <CheckCircle className="h-24 w-24 text-[#2D6BFF] mb-8" />
      </motion.div>
      
      <h1 className="text-3xl font-bold tracking-tight text-[#0F1A33] sm:text-4xl mb-4">
        ¡Gracias!
      </h1>
      <p className="max-w-md text-lg text-slate-600 mb-8">
        Hemos recibido tu solicitud correctamente. Te contactaremos pronto.
      </p>

      <Link href="/">
        <a className="rounded-lg bg-[#0F1A33] px-8 py-3 text-sm font-bold text-white hover:bg-[#2D6BFF] transition-colors">
          Volver al inicio
        </a>
      </Link>
    </div>
  );
}
