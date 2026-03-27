"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import QuoteModal from "./QuoteModal";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#planos", label: "Planos" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass shadow-lg shadow-black/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <Image
                src="/img/logo.png"
                alt="CWB Partners"
                width={140}
                height={40}
                className={`h-8 lg:h-10 w-auto transition-all duration-300 group-hover:scale-105 ${
                  !scrolled ? "brightness-0 invert opacity-90" : ""
                }`}
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-yellow rounded-full transition-all duration-300 group-hover:w-6" />
                </a>
              ))}
              <button
                onClick={() => setModalOpen(true)}
                className="ml-4 px-6 py-2.5 bg-brand-yellow hover:bg-brand-yellow-dark text-primary-dark text-sm font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-yellow/30 btn-shine"
              >
                Solicitar Orçamento
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-white"
              aria-label="Menu"
            >
              <div className="flex flex-col gap-1.5 w-6">
                <span
                  className={`block h-0.5 bg-white rounded transition-all duration-300 ${
                    mobileOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-white rounded transition-all duration-300 ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-white rounded transition-all duration-300 ${
                    mobileOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden glass border-t border-white/10"
            >
              <div className="px-4 py-6 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setModalOpen(true);
                  }}
                  className="w-full mt-4 px-6 py-3 bg-accent text-white font-semibold rounded-lg"
                >
                  Solicitar Orçamento
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <QuoteModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
