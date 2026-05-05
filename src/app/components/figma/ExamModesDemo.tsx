import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function ExamModesDemo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full bg-slate-50 flex items-center justify-center p-4 overflow-hidden">
      <div className="w-full max-w-[340px] relative">
        <AnimatePresence mode="wait">
          {step === 0 && <TrueFalseCard key="tf" />}
          {step === 1 && <MultipleChoiceCard key="mc" />}
          {step === 2 && <FillBlanksCard key="fb" />}
        </AnimatePresence>
      </div>
    </div>
  );
}

function CardShell({ children, tag }: { children: React.ReactNode; tag: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-white rounded-2xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 w-full"
    >
      <div className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700 mb-3">
        {tag}
      </div>
      {children}
    </motion.div>
  );
}

function TrueFalseCard() {
  return (
    <CardShell tag="Verdadero / Falso">
      <h4 className="text-lg font-bold text-slate-900 mb-4">
        To furnish - proporcionar
      </h4>
      <div className="space-y-3">
        <Option text="Verdadero" selected={true} />
        <Option text="Falso" />
      </div>
    </CardShell>
  );
}

function MultipleChoiceCard() {
  return (
    <CardShell tag="Opción múltiple">
      <h4 className="text-lg font-bold text-slate-900 mb-4">
        To convey
      </h4>
      <div className="space-y-2.5">
        <Option text="proporcionar" />
        <Option text="consultar" />
        <Option text="recabar" />
        <Option text="Transmitir" selected={true} />
      </div>
    </CardShell>
  );
}

function FillBlanksCard() {
  return (
    <CardShell tag="Rellenar huecos">
      <h4 className="text-lg font-bold text-slate-900 mb-4">
        To enlist
      </h4>
      <div className="mt-2">
        <div className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500">
          Escribe tu respuesta...
        </div>
        <motion.div 
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "auto" }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-1 h-0.5 bg-blue-500 w-0"
        />
      </div>
    </CardShell>
  );
}

function Option({ text, selected = false }: { text: string; selected?: boolean }) {
  return (
    <motion.div
      initial={selected ? { borderColor: "#e2e8f0", backgroundColor: "#ffffff" } : {}}
      animate={selected ? { borderColor: "#3b82f6", backgroundColor: "#eff6ff" } : {}}
      transition={{ delay: 0.5, duration: 0.3 }}
      className={`flex items-center gap-3 rounded-lg border px-4 py-3 transition-colors ${
        selected 
          ? "border-blue-500 bg-blue-50" 
          : "border-slate-200 bg-white"
      }`}
    >
      <div className={`flex h-5 w-5 items-center justify-center rounded-full border ${
        selected ? "border-blue-500" : "border-slate-300"
      }`}>
        {selected && (
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            className="h-2.5 w-2.5 rounded-full bg-blue-500" 
          />
        )}
      </div>
      <span className={`text-sm font-medium ${selected ? "text-blue-700" : "text-slate-700"}`}>
        {text}
      </span>
    </motion.div>
  );
}
