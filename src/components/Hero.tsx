"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Counter from "./Counter";

const phrases = [
  "Sites Profissionais",
  "Lojas Virtuais",
  "Sistemas Web",
  "SEO & Performance",
  "Integrações & APIs",
];

const stats = [
  { value: "10+", label: "Anos de Experiência" },
  { value: "200+", label: "Clientes Atendidos" },
  { value: "99.9%", label: "Uptime Garantido" },
];

export default function Hero() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayed, setDisplayed] = useState("Sites Profissionais");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[currentPhrase];
    const speed = isDeleting ? 30 : 60;

    if (!isDeleting && displayed === phrase) {
      const pause = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pause);
    }

    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayed(
        isDeleting
          ? phrase.slice(0, displayed.length - 1)
          : phrase.slice(0, displayed.length + 1),
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, currentPhrase]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden animated-gradient"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        {/* Top gradient for navbar clarity */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/40 to-transparent z-[1]" />

        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-light/8 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-accent-light text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              Full Stack Development
            </motion.span>

            <h1 className="font-[family-name:var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Criamos <span className="gradient-text">{displayed}</span>
              <span className="inline-block w-0.5 h-10 lg:h-14 bg-accent-light ml-1 animate-pulse align-middle" />
              <br />
              <span className="text-white/90">que geram resultados</span>
            </h1>

            <p className="text-lg text-white/60 max-w-lg mb-8 leading-relaxed">
              Mais de 10 anos transformando ideias em soluções digitais de alto
              impacto. Do conceito à entrega, com tecnologia de ponta e foco
              total em performance.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#contato"
                className="px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 btn-shine text-sm lg:text-base"
              >
                Solicitar Orçamento Grátis
              </a>
              <a
                href="#servicos"
                className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl border border-white/10 transition-all duration-300 text-sm lg:text-base"
              >
                Nossos Serviços →
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 lg:gap-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.15 }}
                >
                  <div className="text-2xl lg:text-3xl font-bold text-white font-[family-name:var(--font-outfit)]">
                    <Counter value={stat.value} />
                  </div>
                  <div className="text-xs lg:text-sm text-white/50 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Abstract visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              {/* Floating code blocks */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-80 h-60 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 shadow-2xl"
              >
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                </div>
                <div className="space-y-2 font-mono text-sm">
                  <div className="text-accent-light">
                    {"const"} <span className="text-white/80">projeto</span> ={" "}
                    <span className="text-green-400">{"{"}</span>
                  </div>
                  <div className="pl-4 text-white/60">
                    design:{" "}
                    <span className="text-yellow-300">{'"moderno"'}</span>,
                  </div>
                  <div className="pl-4 text-white/60">
                    performance:{" "}
                    <span className="text-yellow-300">{'"100/100"'}</span>,
                  </div>
                  <div className="pl-4 text-white/60">
                    seo: <span className="text-green-400">true</span>,
                  </div>
                  <div className="pl-4 text-white/60">
                    responsivo: <span className="text-green-400">true</span>,
                  </div>
                  <div className="text-green-400">{"}"}</div>
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -bottom-8 -left-12 px-5 py-3 rounded-xl bg-accent/90 backdrop-blur-sm text-white text-sm font-medium shadow-xl"
              >
                ✨ Deploy em 24h
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -top-8 -right-8 px-5 py-3 rounded-xl bg-success/90 backdrop-blur-sm text-white text-sm font-medium shadow-xl"
              >
                🚀 99.9% Uptime
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="wave-divider">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="fill-white"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
        </svg>
      </div>
    </section>
  );
}
