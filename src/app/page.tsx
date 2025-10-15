import Image from "next/image";
import Link from "next/link";
import TestimonialsCarousel from "./components/TestimonialsCarousel";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">

      {/* Section 1 - Hero */}
  <section id="inicio" className="w-full bg-white scroll-mt-24">

        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center gap-8">

          {/* Left: Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
              Encontre equilíbrio emocional e clareza para viver com mais leveza.
            </h1>

            <p className="mt-4 text-gray-600 text-base sm:text-lg">
              Sou Fernanda Miranda, psicóloga clínica especializada em ajudar adultos a lidarem com ansiedade, autoestima e relacionamentos.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-start gap-3 sm:gap-4">

              <Link
                href="https://wa.me/5569999781800?text=Olá!%20Gostaria%20de%20agendar%20uma%20sessão%20de%20terapia."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg px-6 py-3 shadow-md"
              >
                Agende sua primeira sessão
              </Link>

              <span className="text-sm text-gray-500 mt-1 sm:mt-0">Atendimento online e presencial</span>

            </div>

            {/* Trust icons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 justify-center lg:justify-start text-gray-600">

              <div className="flex items-center gap-2">
                <svg aria-hidden="true" className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className="text-sm">CRP registrado</span>
              </div>

              <div className="flex items-center gap-2">
                <svg aria-hidden="true" className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-1.657-1.343-3-3-3S6 9.343 6 11s1.343 3 3 3 3-1.343 3-3z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3z"></path></svg>
                <span className="text-sm">Sigilo garantido</span>
              </div>

              <div className="flex items-center gap-2">
                <svg aria-hidden="true" className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l6 6-6 6"></path></svg>
                <span className="text-sm">Ambiente acolhedor</span>
              </div>

            </div>

          </div>

          {/* Right: Photo */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">

            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">

              {/* Placeholder image: replace /psicologa.jpg in /public */}
              <Image
                src="/psicologa.jpeg"
                alt="Foto da psicóloga"
                width={800}
                height={800}
                className="object-cover w-full h-full"
              />

            </div>

          </div>

        </div>

      </section>

      {/* Section 2 - Problemas que o paciente enfrenta */}
  <section id="problemas" className="w-full bg-gray-50 scroll-mt-24">

        <div className="max-w-4xl mx-auto px-6 py-14">

          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center">
            Você sente que está sobrecarregado(a) e não sabe por onde começar?
          </h2>

          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Você não está sozinho(a). Muitos pacientes que atendo chegam com sintomas parecidos — reconhecer essas experiências é o primeiro passo para mudar.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">

            <li className="flex items-start gap-3">
              <svg aria-hidden="true" className="w-6 h-6 text-emerald-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"></path></svg>
              <span>Ansiedade constante e dificuldade de dormir</span>
            </li>

            <li className="flex items-start gap-3">
              <svg aria-hidden="true" className="w-6 h-6 text-emerald-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"></path></svg>
              <span>Autocrítica e baixa autoestima</span>
            </li>

            <li className="flex items-start gap-3">
              <svg aria-hidden="true" className="w-6 h-6 text-emerald-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"></path></svg>
              <span>Dificuldade em lidar com emoções</span>
            </li>

            <li className="flex items-start gap-3">
              <svg aria-hidden="true" className="w-6 h-6 text-emerald-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"></path></svg>
              <span>Relações desgastantes</span>
            </li>

            <li className="flex items-start gap-3 sm:col-span-2">
              <svg aria-hidden="true" className="w-6 h-6 text-emerald-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"></path></svg>
              <span>Sensação de estar perdido(a)</span>
            </li>

          </ul>

          <p className="mt-6 text-center text-sm text-gray-700">Você não precisa enfrentar isso sozinho(a).</p>

        </div>

      </section>

  {/* Section 3 - Solução */}
  {/* Anchor alias for header nav */}
  <div id="abordagem" className="h-0 scroll-mt-24" aria-hidden="true"></div>
  <section id="solucao" className="w-full bg-white scroll-mt-24">

        <div className="max-w-6xl mx-auto px-6 py-16">

          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center">
            Um espaço seguro para compreender suas emoções e reconstruir sua história.
          </h2>

          <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto">
            Através da psicoterapia, você aprende a se conhecer melhor, entender seus padrões de comportamento e construir uma vida mais leve e equilibrada.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="p-6 bg-gray-100 rounded-lg text-center">

              <div className="mx-auto w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>

              <h3 className="mt-4 font-semibold">Psicoterapia individual</h3>

            </div>

            <div className="p-6 bg-gray-100 rounded-lg text-center">

              <div className="mx-auto w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h8m-8 4h6"></path></svg>
              </div>

              <h3 className="mt-4 font-semibold">Psicoterapia de casal</h3>

            </div>

            <div className="p-6 bg-gray-100 rounded-lg text-center">

              <div className="mx-auto w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3M3 21h18"></path></svg>
              </div>

              <h3 className="mt-4 font-semibold">Atendimento online</h3>

            </div>

            <div className="p-6 bg-gray-100 rounded-lg text-center">

              <div className="mx-auto w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"></path></svg>
              </div>

              <h3 className="mt-4 font-semibold">Desenvolvimento emocional</h3>

            </div>

          </div>

          <div className="mt-10 text-center">

            <Link
              href="https://wa.me/5569999781800?text=Olá!%20Gostaria%20de%20agendar%20uma%20sessão%20de%20terapia."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg px-6 py-3 shadow-md"
            >
              Agende sua sessão e dê o primeiro passo para cuidar de você
            </Link>

          </div>

        </div>

      </section>

      {/* Section 4 - Sobre a Psicóloga */}
  <section id="sobre" className="w-full bg-gray-50 scroll-mt-24">

        <div className="max-w-4xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-8">

          <div className="w-full lg:w-1/2 flex items-center justify-center">

            <div className="w-56 h-56 rounded-xl overflow-hidden shadow-lg bg-gray-100">

              <Image
                src="/psicologa.jpeg"
                alt="Foto da psicóloga Fernanda Miranda"
                width={560} height={560}
                className="object-cover w-full h-full"
              />

            </div>

          </div>

          <div className="w-full lg:w-1/2">

            <h2 className="text-2xl font-semibold text-gray-900">Conheça a profissional que vai te acompanhar nessa jornada.</h2>

            <p className="mt-3 text-gray-700 font-medium">Fernanda Miranda — CRP 24/05343</p>

            <p className="mt-3 text-gray-600">Graduada em Psicologia pela UNIR-RO, pós-graduada em Terapia Analítico-Comportamental (TAC).</p>

            <p className="mt-4 text-gray-700">Meu propósito é ajudar pessoas a reencontrarem o equilíbrio emocional e construírem relações mais saudáveis.</p>

            <div className="mt-6 inline-flex items-center gap-4 flex-wrap">

              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded shadow-sm">
                <svg aria-hidden="true" className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className="text-sm">CRP 24/05343</span>
              </div>

              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded shadow-sm">
                <svg aria-hidden="true" className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"></path></svg>
                <span className="text-sm">1+ ano de experiência</span>
              </div>

              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded shadow-sm">
                <svg aria-hidden="true" className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3M3 21h18"></path></svg>
                <span className="text-sm">Atendimento online / presencial</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Section 5 - Benefícios da Terapia */}
  {/* Anchor alias for header nav */}
  <div id="sessoes" className="h-0 scroll-mt-24" aria-hidden="true"></div>
  <section id="beneficios" className="w-full bg-white scroll-mt-24">

        <div className="max-w-6xl mx-auto px-6 py-16">

          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center">Como a terapia pode transformar sua vida</h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-center">

            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="font-semibold">Clareza emocional</h3>
              <p className="mt-2 text-sm text-gray-600">Entenda suas emoções e saiba como respondê-las com mais presença.</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="font-semibold">Autoconhecimento</h3>
              <p className="mt-2 text-sm text-gray-600">Descubra padrões que te limitam e desenvolva novas formas de agir.</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="font-semibold">Controle da ansiedade</h3>
              <p className="mt-2 text-sm text-gray-600">Ferramentas práticas para reduzir a ansiedade e recuperar o sono e foco.</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="font-semibold">Relacionamentos mais saudáveis</h3>
              <p className="mt-2 text-sm text-gray-600">Melhore a comunicação e estabeleça limites de forma respeitosa.</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg shadow-sm sm:col-span-2 lg:col-span-1">
              <h3 className="font-semibold">Tomada de decisões com confiança</h3>
              <p className="mt-2 text-sm text-gray-600">Aprenda a ouvir suas necessidades e decidir com mais segurança.</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="font-semibold">Melhora da autoestima</h3>
              <p className="mt-2 text-sm text-gray-600">Reconstrução da autoimagem e aumento da autoconfiança no dia a dia.</p>
            </div>

          </div>

          <div className="mt-10 text-center">

            <Link
              href="https://wa.me/5569999781800?text=Olá!%20Gostaria%20de%20agendar%20uma%20sessão%20de%20terapia."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-emerald-600 hover:underline"
            >
              Comece sua jornada de transformação emocional.
            </Link>

          </div>

        </div>

      </section>

      {/* Section 6 - Depoimentos */}
  <section id="depoimentos" className="w-full bg-gray-50 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center">O que meus pacientes dizem</h2>

          <div className="mt-10">
            {/* Client-side carousel component */}
            {/* @ts-ignore - client component import */}
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* Section 7 - Perguntas Frequentes */}
  <section id="faq" className="w-full bg-white scroll-mt-24">

        <div className="max-w-4xl mx-auto px-6 py-16">

          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center">Dúvidas frequentes</h2>

          <div className="mt-8 space-y-4">

            <details className="bg-gray-100 p-4 rounded-lg">
              <summary className="font-medium cursor-pointer">Como funciona o atendimento online?</summary>
              <div className="mt-2 text-gray-600">As sessões online acontecem via plataforma de vídeo (Zoom/Google Meet). Envio o link após agendamento e combinamos um ambiente tranquilo para a sessão.</div>
            </details>

            <details className="bg-gray-100 p-4 rounded-lg">
              <summary className="font-medium cursor-pointer">As sessões são sigilosas?</summary>
              <div className="mt-2 text-gray-600">Sim. Todo o conteúdo discutido nas sessões é coberto pelo sigilo profissional, conforme o código de ética do CRP.</div>
            </details>

            <details className="bg-gray-100 p-4 rounded-lg">
              <summary className="font-medium cursor-pointer">Quantas sessões preciso fazer?</summary>
              <div className="mt-2 text-gray-600">A quantidade varia conforme a necessidade e objetivos de cada pessoa. Geralmente começamos com sessões semanais e reavaliamos o progresso periodicamente.</div>
            </details>

            <details className="bg-gray-100 p-4 rounded-lg">
              <summary className="font-medium cursor-pointer">Como faço o pagamento?</summary>
              <div className="mt-2 text-gray-600">Aceito transferências, PIX e pagamentos por plataformas combinadas no agendamento. Forneço instruções claras no momento da confirmação.</div>
            </details>

            <details className="bg-gray-100 p-4 rounded-lg">
              <summary className="font-medium cursor-pointer">Qual a duração da sessão?</summary>
              <div className="mt-2 text-gray-600">As sessões costumam durar 50 minutos, a menos que combinado de forma diferente entre a cliente e a terapeuta.</div>
            </details>

          </div>

          <div className="mt-8 text-center">

            <Link
              href="https://wa.me/5569999781800?text=Olá!%20Gostaria%20de%20agendar%20uma%20sessão%20de%20terapia."
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:underline"
            >
              Ficou com dúvidas? Fale comigo agora mesmo.
            </Link>

          </div>

        </div>

      </section>

      {/* Section 8 - CTA Final */}
  {/* Anchor alias for header nav */}
  <div id="contato" className="h-0 scroll-mt-24" aria-hidden="true"></div>
  <section id="cta-final" className="w-full bg-emerald-50 scroll-mt-24">

        <div className="max-w-4xl mx-auto px-6 py-16 text-center">

          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Cuide de quem mais importa: você.</h2>
          <p className="mt-4 text-gray-700">Agende sua primeira sessão e dê o primeiro passo para uma vida emocionalmente mais leve.</p>

          <div className="mt-6">
            <Link
              href="https://wa.me/5569999781800?text=Olá!%20Quero%20agendar%20uma%20sessão"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg px-6 py-3 shadow-md"
            >
              <span className="text-lg">🟢</span>
              <span>Agendar Consulta Agora</span>
            </Link>

            <div className="mt-2 text-sm text-gray-700">Atendimento online e presencial em Porto Velho - RO</div>

          </div>

        </div>

      </section>

    </div>
  );
}
