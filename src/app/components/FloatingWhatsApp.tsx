"use client";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Ondas pulsantes atrás do botão */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-emerald-500/30 blur-md animate-pulse-glow"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-full border border-emerald-400/50 animate-ripple"
      />

      <a
        href="https://api.whatsapp.com/send?phone=5569999781800&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20terapia."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-emerald-400 transition focus:outline-none focus:ring-2 focus:ring-offset-2 animate-bounce-slow"
      >
        {/* Brilho em varredura */}
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
          <span className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-white/30 opacity-0 translate-x-[-120%] transition-all duration-500 ease-out group-hover:opacity-40 group-hover:translate-x-[120%]" />
        </span>
        {/* Ícone do WhatsApp */}
        <svg
          aria-hidden="true"
          className="h-7 w-7 drop-shadow-sm"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M20.52 3.48A11.93 11.93 0 0012.01 0 11.98 11.98 0 000 12c0 2.11.55 4.16 1.6 5.97L0 24l6.17-1.6A11.98 11.98 0 0012 24h.01A11.98 11.98 0 0024 11.99a11.93 11.93 0 00-3.48-8.51zM12 22a9.96 9.96 0 01-5.08-1.4l-.36-.22-3.64.95.97-3.55-.23-.37A9.95 9.95 0 1122 12 10.03 10.03 0 0112 22zm5.47-7.56c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.88-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.5-.17 0-.37-.02-.57-.02-.2 0-.52.07-.79.37-.27.3-1.04 1-1.04 2.45 0 1.44 1.06 2.84 1.21 3.04.15.2 2.08 3.18 5.04 4.46.7.3 1.25.48 1.68.61.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.41.25-.7.25-1.29.17-1.41-.08-.12-.28-.2-.58-.35z" />
        </svg>
      </a>
    </div>
  );
}
