"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import QuoteModal from "@/components/QuoteModal";
import { Service } from "@/data/services";
import Link from "next/link";

interface Props {
  service: Service;
}

export default function ServicePageClient({ service }: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onOpenModal={() => setModalOpen(true)} />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-primary-dark overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[60%] bg-accent/10 blur-[120px] rounded-full" />
            <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[70%] bg-blue-500/5 blur-[150px] rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumbs */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-white/50 text-sm mb-8"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="text-white/80">Serviços</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="text-accent font-medium">{service.title}</span>
            </motion.div>

            <div className="max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-[family-name:var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                {service.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-white/70 text-lg sm:text-xl leading-relaxed mb-10"
              >
                {service.description}
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                onClick={() => setModalOpen(true)}
                className="px-8 py-4 bg-brand-yellow text-primary-dark font-bold rounded-xl hover:bg-brand-yellow-dark transition-all duration-300 hover:shadow-xl hover:shadow-brand-yellow/20 flex items-center gap-2"
              >
                Solicitar orçamento para este serviço
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-16 items-start">
              <div className="lg:col-span-2 space-y-12">
                <div>
                  <h2 className="font-[family-name:var(--font-outfit)] text-3xl font-bold text-primary-dark mb-6">
                    Sobre o Serviço
                  </h2>
                  <div className="prose prose-lg text-text-light max-w-none">
                    <p className="leading-relaxed whitespace-pre-wrap">
                      {service.fullDescription}
                    </p>
                  </div>
                </div>

                <div className="p-8 sm:p-12 rounded-3xl bg-surface/30 border border-border/40">
                  <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-primary-dark mb-8">
                    O que entregamos
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {service.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                          <svg
                            className="w-3.5 h-3.5 text-accent"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-primary font-medium text-lg">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar / Why Us */}
              <aside className="space-y-8 lg:sticky lg:top-32">
                <div className="p-8 rounded-3xl bg-primary-dark text-white shadow-2xl shadow-primary-dark/20 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl rounded-full" />
                  <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold mb-6 relative z-10">
                    Por que a CWB Partners?
                  </h3>
                  <ul className="space-y-4 relative z-10 text-white/70">
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Atendimento Personalizado
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Foco em Resultados Reais
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Tecnologias de Ponta
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Suporte Especializado
                    </li>
                  </ul>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="w-full mt-8 py-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl font-bold transition-all text-sm"
                  >
                    Falar com especialista
                  </button>
                </div>

                <div className="p-8 rounded-3xl border border-border/50 bg-white">
                  <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-primary-dark mb-4">
                    Pronto para começar?
                  </h3>
                  <p className="text-text-light text-sm mb-6">
                    Agende uma conversa e descubra como podemos ajudar a escalar
                    seu negócio.
                  </p>
                  <Link
                    href="/#contato"
                    className="flex items-center justify-center gap-2 text-accent font-bold hover:gap-3 transition-all"
                  >
                    Ir para contato
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <QuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={service.title}
      />
    </div>
  );
}
