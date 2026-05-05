import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

type QuestionMode = "true-false" | "multiple-choice" | "fill-blank";

interface QuestionData {
  mode: QuestionMode;
  badge: string;
  question: string;
  options?: string[];
  placeholder?: string;
}

const questions: QuestionData[] = [
  {
    mode: "multiple-choice",
    badge: "Opción múltiple",
    question: "To convey",
    options: ["proporcionar", "consultar", "recabar", "Transmitir"],
  },
  {
    mode: "true-false",
    badge: "Verdadero / Falso",
    question: "To furnish - proporcionar",
    options: ["Verdadero", "Falso"],
  },
  {
    mode: "fill-blank",
    badge: "Rellenar huecos",
    question: "To enlist",
    placeholder: "Escribe tu respuesta...",
  },
];

export function ExamModesDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % questions.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentQuestion = questions[currentIndex];

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      {/* Background Card mimicking the screenshot */}
      <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.08)] min-h-[550px] relative overflow-hidden flex flex-col">
        {/* Progress Header (Static for demo) */}
        <div className="absolute top-6 right-8 text-sm text-slate-400 font-medium">
          0 de 5 respondidas
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full flex flex-col"
          >
            {/* Badge */}
            <div className="mb-4">
              <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-50 text-[#2D6BFF]">
                {currentQuestion.badge}
              </span>
            </div>

            {/* Question Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-[#0F1A33] mb-8">
              {currentQuestion.question}
            </h3>

            {/* Content Area */}
            <div className="space-y-4">
              {currentQuestion.mode === "fill-blank" ? (
                <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 md:p-5">
                  <input 
                    disabled
                    type="text" 
                    placeholder={currentQuestion.placeholder}
                    className="w-full bg-transparent border-none outline-none text-lg text-slate-600 placeholder:text-slate-400"
                  />
                </div>
              ) : (
                currentQuestion.options?.map((option, idx) => (
                  <div
                    key={idx}
                    className="group flex items-center gap-4 w-full p-4 md:p-5 rounded-2xl border border-slate-200 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-200 cursor-pointer"
                  >
                    {/* Radio Circle */}
                    <div className="w-6 h-6 rounded-full border-2 border-slate-300 group-hover:border-[#2D6BFF] transition-colors flex-shrink-0" />
                    
                    {/* Text */}
                    <span className="text-lg font-medium text-slate-700 group-hover:text-[#0F1A33]">
                      {option}
                    </span>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Buttons (Visual only) */}
        <div className="mt-auto pt-12 flex items-center justify-between">
            {/* Hidden spacer or actual buttons if we want to match screenshot footer exactly */}
        </div>
      </div>
    </div>
  );
}
