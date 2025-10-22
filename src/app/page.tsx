"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";

import CTAButton from "./components/CTAButton";

const TestimonialsCarousel = dynamic(
  () => import("./components/TestimonialsCarousel"),
  {
    ssr: false,
    loading: () => (
      <div className="text-center text-gray-500">Carregando depoimentos…</div>
    ),
  },
);

// Motion variants
const easeCurve = [0.22, 1, 0.36, 1] as const; // easeOut cubic-bezier

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeCurve } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: easeCurve } },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {/* Section 1 - Hero */}
      <section id="inicio" className="w-full bg-white scroll-mt-24">
        <motion.div
          className="max-w-6xl mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left: Text */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            variants={fadeInUp}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
              Encontre equilíbrio emocional e clareza para viver com mais
              leveza.
            </h1>

            <motion.p
              className="mt-4 text-gray-600 text-base sm:text-lg"
              variants={fadeInUp}
            >
              Sou Fernanda Miranda, psicóloga clínica especializada em ajudar
              adultos a lidarem com ansiedade, autoestima e relacionamentos.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-start gap-3 sm:gap-4"
              variants={fadeInUp}
            >
              <CTAButton href="https://api.whatsapp.com/send?phone=5569999781800&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20terapia.">
                Agende sua primeira sessão
              </CTAButton>

              <span className="text-sm text-gray-500 mt-1 sm:mt-0">
                Atendimento online e presencial
              </span>
            </motion.div>

            {/* Trust icons */}
            <motion.div
              className="mt-8 flex flex-wrap items-center gap-4 justify-center lg:justify-start text-gray-600"
              variants={stagger}
            >
              <motion.div
                className="flex items-center gap-2"
                variants={fadeInUp}
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-sm">CRP registrado</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-2"
                variants={fadeInUp}
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 11c0-1.657-1.343-3-3-3S6 9.343 6 11s1.343 3 3 3 3-1.343 3-3z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3z"
                  ></path>
                </svg>
                <span className="text-sm">Sigilo garantido</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-2"
                variants={fadeInUp}
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7l6 6-6 6"
                  ></path>
                </svg>
                <span className="text-sm">Ambiente acolhedor</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            className="w-full lg:w-1/2 flex items-center justify-center"
            variants={fadeIn}
          >
            <motion.div
              className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center"
              variants={fadeIn}
            >
              {/* Placeholder image: replace /psicologa.jpg in /public */}
              <Image
                src="/psicologa.jpeg"
                alt="Foto da psicóloga"
                width={800}
                height={800}
                priority
                sizes="(max-width: 1024px) 80vw, 480px"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Section 2 - Problemas que o paciente enfrenta */}
      <section id="problemas" className="w-full bg-gray-50 scroll-mt-24">
        <motion.div
          className="max-w-4xl mx-auto px-6 py-14"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center"
            variants={fadeInUp}
          >
            Você sente que está sobrecarregado(a) e não sabe por onde começar?
          </motion.h2>

          <motion.p
            className="mt-4 text-center text-gray-600 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Você não está sozinho(a). Muitos pacientes que atendo chegam com
            sintomas parecidos — reconhecer essas experiências é o primeiro
            passo para mudar.
          </motion.p>

          <motion.ul
            className="mt-8 grid gap-3 sm:grid-cols-2"
            variants={stagger}
          >
            <motion.li className="flex items-start gap-3" variants={fadeInUp}>
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-emerald-600 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3"
                ></path>
              </svg>
              <span>Ansiedade constante e dificuldade de dormir</span>
            </motion.li>

            <motion.li className="flex items-start gap-3" variants={fadeInUp}>
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-emerald-600 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3"
                ></path>
              </svg>
              <span>Autocrítica e baixa autoestima</span>
            </motion.li>

            <motion.li className="flex items-start gap-3" variants={fadeInUp}>
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-emerald-600 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3"
                ></path>
              </svg>
              <span>Dificuldade em lidar com emoções</span>
            </motion.li>

            <motion.li className="flex items-start gap-3" variants={fadeInUp}>
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-emerald-600 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3"
                ></path>
              </svg>
              <span>Relações desgastantes</span>
            </motion.li>

            <motion.li
              className="flex items-start gap-3 sm:col-span-2"
              variants={fadeInUp}
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-emerald-600 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3"
                ></path>
              </svg>
              <span>Sensação de estar perdido(a)</span>
            </motion.li>
          </motion.ul>

          <motion.p
            className="mt-6 text-center text-sm text-gray-700"
            variants={fadeInUp}
          >
            Você não precisa enfrentar isso sozinho(a).
          </motion.p>
        </motion.div>
      </section>

      {/* Section 3 - Solução */}
      {/* Anchor alias for header nav */}
      <div id="abordagem" className="h-0 scroll-mt-24" aria-hidden="true"></div>
      <section id="solucao" className="w-full bg-white scroll-mt-24">
        <motion.div
          className="max-w-6xl mx-auto px-6 py-16"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center"
            variants={fadeInUp}
          >
            Um espaço seguro para compreender suas emoções e reconstruir sua
            história.
          </motion.h2>

          <motion.p
            className="mt-4 text-center text-gray-600 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Através da psicoterapia, você aprende a se conhecer melhor, entender
            seus padrões de comportamento e construir uma vida mais leve e
            equilibrada.
          </motion.p>

          <motion.div
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            variants={stagger}
          >
            <motion.div
              className="p-6 bg-gray-100 rounded-lg text-center"
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <div className="mx-auto w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>

              <h3 className="mt-4 font-semibold">Psicoterapia individual</h3>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-100 rounded-lg text-center"
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <div className="mx-auto w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h8m-8 4h6"
                  ></path>
                </svg>
              </div>

              <h3 className="mt-4 font-semibold">Psicoterapia de casal</h3>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-100 rounded-lg text-center"
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <div className="mx-auto w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3M3 21h18"
                  ></path>
                </svg>
              </div>

              <h3 className="mt-4 font-semibold">Atendimento online</h3>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-100 rounded-lg text-center"
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <div className="mx-auto w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3"
                  ></path>
                </svg>
              </div>

              <h3 className="mt-4 font-semibold">Desenvolvimento emocional</h3>
            </motion.div>
          </motion.div>

          <motion.div className="mt-10 text-center" variants={fadeInUp}>
            <CTAButton href="https://api.whatsapp.com/send?phone=5569999781800&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20terapia.">
              Agende sua sessão e dê o primeiro passo para cuidar de você
            </CTAButton>
          </motion.div>
        </motion.div>
      </section>

      {/* Section 4 - Sobre a Psicóloga */}
      <section id="sobre" className="w-full bg-gray-50 scroll-mt-24">
        <motion.div
          className="max-w-4xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div
            className="w-full lg:w-1/2 flex items-center justify-center"
            variants={fadeIn}
          >
            <motion.div
              className="w-56 h-56 rounded-xl overflow-hidden shadow-lg bg-gray-100"
              variants={fadeInUp}
            >
              <Image
                src="/psicologa.jpeg"
                alt="Foto da psicóloga Fernanda Miranda"
                width={560}
                height={560}
                sizes="(max-width: 1024px) 60vw, 280px"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </motion.div>

          <motion.div className="w-full lg:w-1/2" variants={fadeInUp}>
            <h2 className="text-2xl font-semibold text-gray-900">
              Conheça a profissional que vai te acompanhar nessa jornada.
            </h2>

            <p className="mt-3 text-gray-700 font-medium">
              Fernanda Miranda — CRP 24/05343
            </p>

            <p className="mt-3 text-gray-600">
              Graduada em Psicologia pela UNIR-RO, pós-graduada em Terapia
              Analítico-Comportamental (TAC).
            </p>

            <p className="mt-4 text-gray-700">
              Meu propósito é ajudar pessoas a reencontrarem o equilíbrio
              emocional e construírem relações mais saudáveis.
            </p>

            <motion.div
              className="mt-6 inline-flex items-center gap-4 flex-wrap"
              variants={stagger}
            >
              <motion.div
                className="flex items-center gap-2 bg-white px-3 py-2 rounded shadow-sm"
                variants={fadeInUp}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-sm">CRP 24/05343</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-2 bg-white px-3 py-2 rounded shadow-sm"
                variants={fadeInUp}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3"
                  ></path>
                </svg>
                <span className="text-sm">1+ ano de experiência</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-2 bg-white px-3 py-2 rounded shadow-sm"
                variants={fadeInUp}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3M3 21h18"
                  ></path>
                </svg>
                <span className="text-sm">Atendimento online / presencial</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Section 5 - Benefícios da Terapia */}
      {/* Anchor alias for header nav */}
      <div id="sessoes" className="h-0 scroll-mt-24" aria-hidden="true"></div>
      <section id="beneficios" className="w-full bg-white scroll-mt-24">
        <motion.div
          className="max-w-6xl mx-auto px-6 py-16"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center"
            variants={fadeInUp}
          >
            Como a terapia pode transformar sua vida
          </motion.h2>

          <motion.div
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-center"
            variants={stagger}
          >
            <motion.div
              className="p-6 bg-gray-50 rounded-lg shadow-sm"
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <h3 className="font-semibold">Clareza emocional</h3>
              <p className="mt-2 text-sm text-gray-600">
                Entenda suas emoções e saiba como respondê-las com mais
                presença.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-50 rounded-lg shadow-sm"
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <h3 className="font-semibold">Autoconhecimento</h3>
              <p className="mt-2 text-sm text-gray-600">
                Descubra padrões que te limitam e desenvolva novas formas de
                agir.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-50 rounded-lg shadow-sm"
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <h3 className="font-semibold">Controle da ansiedade</h3>
              <p className="mt-2 text-sm text-gray-600">
                Ferramentas práticas para reduzir a ansiedade e recuperar o sono
                e foco.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-50 rounded-lg shadow-sm"
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <h3 className="font-semibold">Relacionamentos mais saudáveis</h3>
              <p className="mt-2 text-sm text-gray-600">
                Melhore a comunicação e estabeleça limites de forma respeitosa.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-50 rounded-lg shadow-sm sm:col-span-2 lg:col-span-1"
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <h3 className="font-semibold">
                Tomada de decisões com confiança
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Aprenda a ouvir suas necessidades e decidir com mais segurança.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-50 rounded-lg shadow-sm"
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <h3 className="font-semibold">Melhora da autoestima</h3>
              <p className="mt-2 text-sm text-gray-600">
                Reconstrução da autoimagem e aumento da autoconfiança no dia a
                dia.
              </p>
            </motion.div>
          </motion.div>

          <motion.div className="mt-10 text-center" variants={fadeInUp}>
            <CTAButton
              variant="link"
              href="https://api.whatsapp.com/send?phone=5569999781800&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20terapia."
            >
              Comece sua jornada de transformação emocional.
            </CTAButton>
          </motion.div>
        </motion.div>
      </section>

      {/* Section 6 - Depoimentos */}
      <section id="depoimentos" className="w-full bg-gray-50 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <motion.h2
            className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            O que meus pacientes dizem
          </motion.h2>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Client-side carousel component */}
            {/* @ts-ignore - client component import */}
            <TestimonialsCarousel />
          </motion.div>
        </div>
      </section>

      {/* Section 7 - Perguntas Frequentes */}
      <section id="faq" className="w-full bg-white scroll-mt-24">
        <motion.div
          className="max-w-4xl mx-auto px-6 py-16"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center"
            variants={fadeInUp}
          >
            Dúvidas frequentes
          </motion.h2>

          <motion.div className="mt-8 space-y-4" variants={stagger}>
            <motion.details
              className="bg-gray-100 p-4 rounded-lg"
              variants={fadeInUp}
            >
              <summary className="font-medium cursor-pointer">
                Como funciona o atendimento online?
              </summary>
              <div className="mt-2 text-gray-600">
                As sessões online acontecem via plataforma de vídeo (Zoom/Google
                Meet). Envio o link após agendamento e combinamos um ambiente
                tranquilo para a sessão.
              </div>
            </motion.details>

            <motion.details
              className="bg-gray-100 p-4 rounded-lg"
              variants={fadeInUp}
            >
              <summary className="font-medium cursor-pointer">
                As sessões são sigilosas?
              </summary>
              <div className="mt-2 text-gray-600">
                Sim. Todo o conteúdo discutido nas sessões é coberto pelo sigilo
                profissional, conforme o código de ética do CRP.
              </div>
            </motion.details>

            <motion.details
              className="bg-gray-100 p-4 rounded-lg"
              variants={fadeInUp}
            >
              <summary className="font-medium cursor-pointer">
                Quantas sessões preciso fazer?
              </summary>
              <div className="mt-2 text-gray-600">
                A quantidade varia conforme a necessidade e objetivos de cada
                pessoa. Geralmente começamos com sessões semanais e reavaliamos
                o progresso periodicamente.
              </div>
            </motion.details>

            <motion.details
              className="bg-gray-100 p-4 rounded-lg"
              variants={fadeInUp}
            >
              <summary className="font-medium cursor-pointer">
                Como faço o pagamento?
              </summary>
              <div className="mt-2 text-gray-600">
                Aceito transferências, PIX e pagamentos por plataformas
                combinadas no agendamento. Forneço instruções claras no momento
                da confirmação.
              </div>
            </motion.details>

            <motion.details
              className="bg-gray-100 p-4 rounded-lg"
              variants={fadeInUp}
            >
              <summary className="font-medium cursor-pointer">
                Qual a duração da sessão?
              </summary>
              <div className="mt-2 text-gray-600">
                As sessões costumam durar 50 minutos, a menos que combinado de
                forma diferente entre a cliente e a terapeuta.
              </div>
            </motion.details>
          </motion.div>

          <motion.div className="mt-8 text-center" variants={fadeInUp}>
            <CTAButton
              variant="link"
              href="https://api.whatsapp.com/send?phone=5569999781800&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20terapia."
            >
              Ficou com dúvidas? Fale comigo agora mesmo.
            </CTAButton>
          </motion.div>
        </motion.div>
      </section>

      {/* Section 8 - CTA Final */}
      {/* Anchor alias for header nav */}
      <div id="contato" className="h-0 scroll-mt-24" aria-hidden="true"></div>
      <section id="cta-final" className="w-full bg-emerald-50 scroll-mt-24">
        <motion.div
          className="max-w-4xl mx-auto px-6 py-16 text-center"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-semibold text-gray-900"
            variants={fadeInUp}
          >
            Cuide de quem mais importa: você.
          </motion.h2>
          <motion.p className="mt-4 text-gray-700" variants={fadeInUp}>
            Agende sua primeira sessão e dê o primeiro passo para uma vida
            emocionalmente mais leve.
          </motion.p>

          <motion.div className="mt-6" variants={fadeInUp}>
            <CTAButton
              href="https://api.whatsapp.com/send?phone=5569999781800&text=Ol%C3%A1!%20Quero%20agendar%20uma%20sess%C3%A3o"
              ariaLabel="Agendar consulta pelo WhatsApp"
            >
              <span className="text-lg">🟢</span>
              <span>Agendar Consulta Agora</span>
            </CTAButton>

            <div className="mt-2 text-sm text-gray-700">
              Atendimento online e presencial em Porto Velho - RO
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
