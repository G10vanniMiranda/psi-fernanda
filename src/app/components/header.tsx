"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["Início", "#inicio"],
    ["Sobre", "#sobre"],
    ["Abordagem", "#abordagem"],
    ["Sessões", "#sessoes"],
    ["Depoimentos", "#depoimentos"],
    ["Contato", "#contato"],
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-shadow bg-white/70 backdrop-blur-sm ${
        scrolled ? "shadow-sm" : "shadow-none"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                {/* Placeholder para símbolo suave */}
                <span className="text-lg font-medium">SF</span>
              </div>

              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold">Psi Fernanda</span>
                <span className="text-xs text-slate-500">
                  Psicóloga Clínica
                </span>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-slate-700 hover:text-slate-900 text-sm"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://api.whatsapp.com/send?phone=5569999781800&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20terapia."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block"
            >
              <button
                type="button"
                className="bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-700 transition cursor-pointer cta-animated animate-cta-glow animate-cta-nudge"
              >
                Agendar Consulta
              </button>
            </a>

            <button
              type="button"
              aria-label="menu"
              className="md:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100"
              onClick={() => setOpen((v) => !v)}
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu móvel */}
      <div
        className={`md:hidden ${open ? "block" : "hidden"} border-t border-slate-100 bg-white/90`}
      >
        <div className="px-4 pt-2 pb-4 flex flex-col gap-2">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="py-2 px-2 rounded text-slate-700 hover:bg-slate-50"
            >
              {label}
            </a>
          ))}

          <a
            href="https://api.whatsapp.com/send?phone=5569999781800&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20terapia."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 block w-full bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium text-center hover:bg-emerald-700 transition cta-animated animate-cta-glow animate-cta-nudge"
          >
            Agendar Consulta
          </a>
        </div>
      </div>
    </header>
  );
}
