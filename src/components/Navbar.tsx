"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/data/services";
import QuoteModal from "./QuoteModal";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#planos", label: "Planos" },
  { href: "#contato", label: "Contato" },
];

interface NavbarProps {
  onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

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
                <div
                  key={link.href}
                  className="relative group"
                  onMouseEnter={() =>
                    link.label === "Serviços" && setIsServicesHovered(true)
                  }
                  onMouseLeave={() =>
                    link.label === "Serviços" && setIsServicesHovered(false)
                  }
                >
                  <Link
                    href={isHome ? link.href : `/${link.href}`}
                    className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-1"
                  >
                    {link.label}
                    {link.label === "Serviços" && (
                      <svg
                        className={`w-3 h-3 transition-transform duration-300 ${isServicesHovered ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-yellow rounded-full transition-all duration-300 group-hover:w-6" />
                  </Link>

                  {/* Dropdown Menu */}
                  {link.label === "Serviços" && (
                    <AnimatePresence>
                      {isServicesHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[500px]"
                        >
                          <div className="glass shadow-2xl shadow-black/50 border border-white/10 rounded-2xl p-6 overflow-hidden">
                            <div className="grid grid-cols-2 gap-8 relative z-10">
                              {categories.map((category) => (
                                <div key={category.id} className="space-y-3">
                                  <h4 className="text-[10px] uppercase tracking-widest text-brand-yellow font-bold opacity-70">
                                    {category.label}
                                  </h4>
                                  <ul className="space-y-2">
                                    {category.services.map((service) => (
                                      <li key={service.slug}>
                                        <Link
                                          href={`/servicos/${service.slug}`}
                                          className="group/item flex flex-col gap-1 p-2 -m-2 rounded-xl hover:bg-white/5 transition-all duration-300"
                                        >
                                          <span className="text-sm font-semibold text-white/90 group-hover/item:text-brand-yellow transition-colors">
                                            {service.title}
                                          </span>
                                          <span className="text-[10px] text-white/50 line-clamp-1 group-hover/item:text-white/70 transition-colors">
                                            {service.description}
                                          </span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-yellow/5 blur-3xl rounded-full" />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
              <button
                onClick={onOpenModal}
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
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="space-y-1"
                  >
                    {link.label === "Serviços" ? (
                      <>
                        <button
                          onClick={() =>
                            setMobileServicesOpen(!mobileServicesOpen)
                          }
                          className="w-full flex items-center justify-between px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                        >
                          <span>{link.label}</span>
                          <svg
                            className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-white/5 rounded-lg ml-2"
                            >
                              <div className="py-2 px-4 space-y-4">
                                {categories.map((cat) => (
                                  <div key={cat.id} className="space-y-2">
                                    <p className="text-[10px] uppercase tracking-widest text-brand-yellow font-bold opacity-50 px-2">
                                      {cat.label}
                                    </p>
                                    <div className="space-y-1">
                                      {cat.services.map((service) => (
                                        <Link
                                          key={service.slug}
                                          href={`/servicos/${service.slug}`}
                                          onClick={() => setMobileOpen(false)}
                                          className="block px-3 py-2 text-sm text-white/70 hover:text-white"
                                        >
                                          {service.title}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={isHome ? link.href : `/${link.href}`}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenModal();
                  }}
                  className="w-full mt-4 px-6 py-3 bg-brand-yellow text-primary-dark font-bold rounded-lg"
                >
                  Solicitar Orçamento
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
