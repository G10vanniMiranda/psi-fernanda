"use client";

import { AnimatePresence, motion } from "framer-motion";
import { memo, useEffect, useRef, useState } from "react";

type Testimonial = {
  id: number;
  initials: string;
  age: number;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    initials: "M",
    age: 29,
    text: "Depois de 3 meses de terapia, me sinto mais confiante e tranquila com minhas decisões.",
  },
  {
    id: 2,
    initials: "L",
    age: 34,
    text: "Aprendi estratégias práticas para lidar com a ansiedade e meu sono melhorou bastante.",
  },
  {
    id: 3,
    initials: "R",
    age: 41,
    text: "Senti uma grande melhora na minha comunicação com o parceiro e na forma como lido com conflitos.",
  },
  {
    id: 4,
    initials: "A",
    age: 26,
    text: "Me ajudou a entender meus padrões e me sinto mais segura em minhas escolhas.",
  },
];

function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // autoplay with stable interval to satisfy exhaustive-deps
    timeoutRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000) as unknown as number;
    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
    };
  }, []);

  function prev() {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }

  function next() {
    setIndex((i) => (i + 1) % testimonials.length);
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="relative h-full">
          <AnimatePresence mode="wait">
            {testimonials.map(
              (t, i) =>
                i === index && (
                  <motion.div
                    key={t.id}
                    className="px-4"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <blockquote className="p-6 bg-white rounded-lg shadow-sm mx-auto max-w-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-semibold">
                          {t.initials}
                        </div>
                        <div className="text-sm text-gray-600">
                          {t.initials}., {t.age} anos
                        </div>
                      </div>
                      <p className="mt-4 text-gray-700">{t.text}</p>
                    </blockquote>
                  </motion.div>
                ),
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <button
        type="button"
        aria-label="previous"
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="next"
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        ›
      </button>

      {/* Dots */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {testimonials.map((t, i) => (
          <button
            type="button"
            key={t.id}
            aria-label={`Ir para depoimento ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full ${i === index ? "bg-emerald-600" : "bg-gray-300"}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default memo(TestimonialsCarousel);
