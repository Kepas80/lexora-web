import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FlashcardProps {
  cards: Array<{
    front: string;
    back: string;
  }>;
}

export function Flashcard({ cards }: FlashcardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      rotateY: 0,
    }),
  };

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-2xl mx-auto">
      <div className="relative w-full h-96 perspective-1000">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0"
          >
            <motion.div
              className="relative w-full h-full cursor-pointer"
              onClick={handleFlip}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front of card */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-12 flex items-center justify-center border border-blue-100"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <div className="text-center">
                  <div className="text-sm uppercase tracking-wide text-blue-600 mb-4">
                    Question
                  </div>
                  <p className="text-2xl text-slate-800">
                    {cards[currentIndex].front}
                  </p>
                  <div className="mt-8 text-slate-400">
                    Click to reveal answer
                  </div>
                </div>
              </motion.div>

              {/* Back of card */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl shadow-2xl p-12 flex items-center justify-center"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  rotateY: 180,
                }}
              >
                <div className="text-center text-white">
                  <div className="text-sm uppercase tracking-wide mb-4 opacity-90">
                    Answer
                  </div>
                  <p className="text-2xl">
                    {cards[currentIndex].back}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrev}
          className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow border border-slate-200"
        >
          <ChevronLeft className="w-6 h-6 text-slate-700" />
        </motion.button>

        <div className="flex gap-2">
          {cards.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-gradient-to-r from-blue-600 to-blue-500'
                  : 'w-2 bg-slate-300'
              }`}
              animate={{
                scale: index === currentIndex ? 1.2 : 1,
              }}
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow border border-slate-200"
        >
          <ChevronRight className="w-6 h-6 text-slate-700" />
        </motion.button>
      </div>

      <div className="text-slate-500">
        Card {currentIndex + 1} of {cards.length}
      </div>
    </div>
  );
}