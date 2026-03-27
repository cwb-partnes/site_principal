"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const plans = [
  {
    name: "Partners 01",
    price: "15,50",
    features: [
      "1 Domínio",
      "2 GB Armazenamento",
      "5 Contas de e-mail",
      "2 BD MySQL",
      "Suporte ilimitado",
    ],
    popular: false,
    link: "https://whmcs.cwbpartners.net.br/index.php?rp=/store/hospedagem/partners-01",
  },
  {
    name: "Partners 02",
    price: "18,90",
    features: [
      "3 Domínios",
      "5 GB Armazenamento",
      "15 Contas de e-mail",
      "6 BD MySQL",
      "Suporte ilimitado",
    ],
    popular: true,
    link: "https://whmcs.cwbpartners.net.br/index.php?rp=/store/hospedagem/partners-02",
  },
  {
    name: "Partners 03",
    price: "29,90",
    features: [
      "5 Domínios",
      "20 GB Armazenamento",
      "30 Contas de e-mail",
      "12 BD MySQL",
      "Suporte ilimitado",
    ],
    popular: false,
    link: "https://whmcs.cwbpartners.net.br/index.php?rp=/store/hospedagem/partners-03",
  },
];

interface HostingPlansProps {
  onOpenModal: (service?: string) => void;
}

export default function HostingPlans({ onOpenModal }: HostingPlansProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="planos"
      className="py-24 lg:py-32 bg-surface relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Hospedagem Profissional
          </span>
          <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
            Planos de <span className="gradient-text">hospedagem</span>
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            Hospedagem rápida e segura com suporte técnico especializado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-br from-primary-dark to-primary text-white shadow-2xl shadow-primary/30 scale-105 border-2 border-accent"
                  : "bg-white border border-border/50 hover:border-accent/30 hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  Mais Popular
                </span>
              )}

              <div className="text-center mb-8">
                <h3
                  className={`font-[family-name:var(--font-outfit)] text-xl font-bold mb-4 ${
                    plan.popular ? "text-white" : "text-primary-dark"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span
                    className={`text-sm ${plan.popular ? "text-white/70" : "text-text-light"}`}
                  >
                    R$
                  </span>
                  <span
                    className={`font-[family-name:var(--font-outfit)] text-5xl font-bold ${
                      plan.popular ? "text-white" : "text-primary-dark"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${plan.popular ? "text-white/70" : "text-text-light"}`}
                  >
                    /mês
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 ${
                        plan.popular ? "text-accent-light" : "text-accent"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span
                      className={`text-sm ${plan.popular ? "text-white/80" : "text-text-light"}`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() =>
                  onOpenModal(`Hospedagem Profissional (${plan.name})`)
                }
                className={`block w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 btn-shine ${
                  plan.popular
                    ? "bg-accent hover:bg-accent-light text-white shadow-lg shadow-accent/30"
                    : "bg-primary-dark hover:bg-primary text-white"
                }`}
              >
                Quero esse plano
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
