import { Mail, MessageCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

function HelpFaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left focus:outline-none group"
      >
        <span className="font-bold text-[#0F1A33] group-hover:text-[#2D6BFF] transition-colors">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-[#2D6BFF]' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-sm text-slate-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Help() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-white">
      <section className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-[#0F1A33] sm:text-5xl">
          Centro de Ayuda
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          Estamos aquí para ayudarte a sacar el máximo provecho de Lexora.
        </p>
      </section>

      <section className="mt-16 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid gap-12 md:grid-cols-2">
        {/* Contact Form */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#0F1A33] mb-6">Contáctanos</h2>
          <form className="space-y-5" action="mailto:hola@lexoraflashcards.com" method="POST" encType="text/plain">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-[#0F1A33] mb-1.5">Nombre</label>
              <input type="text" id="name" name="name" className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-[#0F1A33] placeholder-slate-400 focus:border-[#2D6BFF] focus:ring-[#2D6BFF] focus:ring-1 outline-none transition-all sm:text-sm" placeholder="Tu nombre" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-[#0F1A33] mb-1.5">Email</label>
              <input type="email" id="email" name="email" className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-[#0F1A33] placeholder-slate-400 focus:border-[#2D6BFF] focus:ring-[#2D6BFF] focus:ring-1 outline-none transition-all sm:text-sm" placeholder="tu@email.com" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-[#0F1A33] mb-1.5">Mensaje</label>
              <textarea id="message" name="message" rows={4} className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-[#0F1A33] placeholder-slate-400 focus:border-[#2D6BFF] focus:ring-[#2D6BFF] focus:ring-1 outline-none transition-all sm:text-sm" placeholder="¿En qué podemos ayudarte?" required></textarea>
            </div>
            <button type="submit" className="w-full rounded-lg bg-[#2D6BFF] px-4 py-3 text-sm font-bold text-white hover:bg-[#2558D9] shadow-md hover:shadow-lg transition-all">
              Enviar Mensaje
            </button>
          </form>
        </div>

        {/* Quick Links & Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-[#0F1A33] mb-6">Otras formas de ayuda</h2>
            <div className="space-y-4">
              <a href="mailto:hola@lexoraflashcards.com" className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 hover:border-[#2D6BFF]/50 hover:shadow-md transition-all group">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-[#2D6BFF] group-hover:scale-110 transition-transform">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F1A33] group-hover:text-[#2D6BFF] transition-colors">Email de Soporte</h3>
                  <p className="text-sm text-slate-500">hola@lexoraflashcards.com</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F1A33]">Chat en vivo</h3>
                  <p className="text-sm text-slate-500">Disponible Lun-Vie 9am-6pm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-xl border border-slate-200">
             <h2 className="text-lg font-bold text-[#0F1A33] mb-4">Enlaces Rápidos</h2>
             <ul className="space-y-3 text-slate-600">
                <li><a href="/privacidad" className="hover:text-[#2D6BFF] transition-colors flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#2D6BFF]"></span>Política de Privacidad</a></li>
                <li><a href="/terminos" className="hover:text-[#2D6BFF] transition-colors flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#2D6BFF]"></span>Términos de Servicio</a></li>
                <li><a href="/method" className="hover:text-[#2D6BFF] transition-colors flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#2D6BFF]"></span>Cómo funciona el método</a></li>
             </ul>
          </div>
        </div>
      </section>

      {/* Help FAQ */}
      <section className="mt-20 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[#0F1A33] mb-8 text-center">Preguntas Frecuentes</h2>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <HelpFaqItem 
            question="¿Cómo restablezco mi contraseña?" 
            answer="Ve a la página de inicio de sesión y haz clic en '¿Olvidaste tu contraseña?'. Te enviaremos un enlace a tu correo para crear una nueva." 
          />
          <HelpFaqItem 
            question="¿Puedo exportar mis flashcards?" 
            answer="Sí, puedes exportar tus sets a formato PDF o CSV desde el menú de configuración de cada set." 
          />
          <HelpFaqItem 
            question="¿Cómo funciona el sistema de rachas?" 
            answer="Para mantener tu racha, debes estudiar al menos un set cada día. Si pierdes un día, tu racha se reiniciará a 0, ¡así que mantén la constancia!" 
          />
          <HelpFaqItem 
            question="¿Cómo contacto con soporte técnico?" 
            answer="Puedes usar el formulario de esta página o escribirnos directamente a hola@lexoraflashcards.com. Respondemos en menos de 24 horas." 
          />
        </div>
      </section>
    </div>
  );
}