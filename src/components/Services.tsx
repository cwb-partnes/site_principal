"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

import Link from "next/link";
import { categories } from "@/data/services";

export default function Services() {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const currentCategory = categories.find((cat) => cat.id === activeTab);

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Especialidades
          </span>
          <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
            Soluções completas de{" "}
            <span className="gradient-text">ponta a ponta</span>
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            Organizamos nossa expertise para atender todas as fases da sua
            jornada digital.
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 sm:mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`relative px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === category.id
                  ? "text-white"
                  : "text-text-light hover:bg-surface border border-border/50"
              }`}
            >
              <span className="relative z-10">{category.label}</span>
              {activeTab === category.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-accent rounded-full shadow-lg shadow-accent/20"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Content Display */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12"
            >
              {currentCategory?.services.map((service, idx) => (
                <div
                  key={idx}
                  className="p-8 sm:p-10 rounded-[2.5rem] bg-surface/50 border border-border/40 hover:border-accent/20 transition-all duration-500"
                >
                  <h3 className="font-[family-name:var(--font-outfit)] text-2xl sm:text-3xl font-bold text-primary-dark mb-4">
                    {service.title}
                  </h3>
                  <p className="text-text-light text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
                    {service.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-center gap-3 text-primary font-medium"
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-accent"
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
                        <span className="text-[15px]">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-border/20 flex justify-between items-center">
                    <Link
                      href={`/servicos/${service.slug}`}
                      className="text-accent font-bold text-sm hover:underline flex items-center gap-1 group/link"
                    >
                      Saiba mais
                      <svg
                        className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
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
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom CTA Overlay (Simbólico) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-text-light/60 text-sm mb-4 italic">
            Não encontrou o que precisava? Desenvolvemos projetos sob demanda.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors group"
          >
            Falar com um especialista
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
