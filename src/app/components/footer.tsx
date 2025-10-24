import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* Marca */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-semibold">
              {/* Placeholder para logotipo */}
              <span>FM</span>
            </div>

            <div className="leading-tight">
              <p className="font-semibold text-slate-900">Fernanda Miranda</p>
              <p className="text-sm text-slate-600">
                Psicóloga Clínica • CRP 24/05343
              </p>
            </div>
          </div>

          {/* Colunas de informações */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-sm text-slate-700">
            <div>
              <p className="font-semibold text-slate-900">Contato</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a href="tel:+5569999781800" className="hover:underline">
                    +55 (69) 99978-1800
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:fernandasmiranda@hotmail.com"
                    className="hover:underline"
                  >
                    fernandasmiranda@hotmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-slate-900">Redes sociais</p>

              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href="https://www.instagram.com/ferdsm.psi/?__pwa=1#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:underline"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 text-slate-700"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm12 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                    </svg>
                    Instagram profissional
                  </a>
                </li>

                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=5569999781800&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20terapia."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:underline"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 text-green-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.52 3.48A11.93 11.93 0 0012.01 0 11.98 11.98 0 000 12c0 2.11.55 4.16 1.6 5.97L0 24l6.17-1.6A11.98 11.98 0 0012 24h.01A11.98 11.98 0 0024 11.99a11.93 11.93 0 00-3.48-8.51zM12 22a9.96 9.96 0 01-5.08-1.4l-.36-.22-3.64.95.97-3.55-.23-.37A9.95 9.95 0 1122 12 10.03 10.03 0 0112 22zm5.47-7.56c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.88-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.5-.17 0-.37-.02-.57-.02-.2 0-.52.07-.79.37-.27.3-1.04 1-1.04 2.45 0 1.44 1.06 2.84 1.21 3.04.15.2 2.08 3.18 5.04 4.46.7.3 1.25.48 1.68.61.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.41.25-.7.25-1.29.17-1.41-.08-.12-.28-.2-.58-.35z" />
                    </svg>
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-slate-900">Endereço</p>
              <ul className="mt-3 space-y-2">
                <li>Porto Velho - RO (atendimento presencial e online)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-6 mt-2 text-xs text-slate-600">
          <div className="max-w-6xl mx-auto px-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>
              Aviso de Sigilo Psicológico: o conteúdo das sessões é
              confidencial, de acordo com o Código de Ética Profissional do
              Psicólogo.
            </p>

            <div className="flex items-center gap-4">
              <Link href="/privacidade" className="hover:underline">
                Termos de privacidade
              </Link>
              <Link href="/sigilo" className="hover:underline">
                Aviso de sigilo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
