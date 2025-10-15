"use client";

import { useEffect, useState, useRef } from "react";

type Testimonial = {
  id: number;
  initials: string;
  age: number;
  text: string;
};

const testimonials: Testimonial[] = [
  { id: 1, initials: "M", age: 29, text: "Depois de 3 meses de terapia, me sinto mais confiante e tranquila com minhas decisões." },
  { id: 2, initials: "L", age: 34, text: "Aprendi estratégias práticas para lidar com a ansiedade e meu sono melhorou bastante." },
  { id: 3, initials: "R", age: 41, text: "Senti uma grande melhora na minha comunicação com o parceiro e na forma como lido com conflitos." },
  { id: 4, initials: "A", age: 26, text: "Me ajudou a entender meus padrões e me sinto mais segura em minhas escolhas." },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // autoplay
    timeoutRef.current = window.setTimeout(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [index]);

  function prev() {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }

  function next() {
    setIndex((i) => (i + 1) % testimonials.length);
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${index * 100}%)` }}>
          {testimonials.map((t) => (
            <div key={t.id} className="min-w-full px-4">
              <blockquote className="p-6 bg-white rounded-lg shadow-sm mx-auto max-w-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-semibold">{t.initials}</div>
                  <div className="text-sm text-gray-600">{t.initials}., {t.age} anos</div>
                </div>
                <p className="mt-4 text-gray-700">{t.text}</p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button aria-label="previous" onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
        ‹
      </button>
      <button aria-label="next" onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
        ›
      </button>

      {/* Dots */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {testimonials.map((_, i) => (
          <button key={i} aria-label={`Go to ${i + 1}`} onClick={() => setIndex(i)} className={`w-2 h-2 rounded-full ${i === index ? 'bg-emerald-600' : 'bg-gray-300'}`}></button>
        ))}
      </div>
    </div>
  );
}
