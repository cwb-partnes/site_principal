"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CtaBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary to-accent" />

      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent-light/15 rounded-full blur-[60px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Pronto para transformar sua
            <br />
            <span className="text-accent-light">presença digital?</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
            Solicite um orçamento gratuito e descubra como podemos ajudar seu
            negócio a crescer com soluções web de alto impacto.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://api.whatsapp.com/send?phone=5541997699014&text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20CWB%20Partners."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-dark font-semibold rounded-xl hover:bg-white/90 transition-all duration-300 hover:shadow-xl btn-shine text-sm lg:text-base"
            >
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar no WhatsApp
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 text-sm lg:text-base"
            >
              Ver mais opções →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
