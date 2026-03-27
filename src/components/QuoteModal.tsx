"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

const serviceOptions = [
  "Criação de um site",
  "Criação de uma Loja Virtual",
  "Desenvolvimento de Sistema Web",
  "SEO Orgânico",
  "Hospedagem Profissional",
  "Manutenção e Suporte",
  "Outros serviços",
];

export default function QuoteModal({
  isOpen,
  onClose,
  initialService,
}: QuoteModalProps) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    empresa: "",
    telefone: "",
    servico: "",
    mensagem: "",
  });

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, servico: initialService }));
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numero = "5541997699014";
    const msg = `Olá! Solicito orçamento:\n\nNome: ${formData.nome}\nEmpresa: ${formData.empresa}\nE-mail: ${formData.email}\nTelefone: ${formData.telefone}\nServiço: ${formData.servico}\nMensagem: ${formData.mensagem}`;
    window.open(
      `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
    onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-dark to-primary p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-white">
                    Solicitar Orçamento
                  </h3>
                  <p className="text-white/60 text-sm mt-1">
                    Preencha o formulário e entraremos em contato
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  aria-label="Fechar"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="modal-nome"
                    className="block text-sm font-medium text-primary-dark mb-1.5"
                  >
                    Nome *
                  </label>
                  <input
                    id="modal-nome"
                    type="text"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-primary-dark placeholder:text-text-light/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label
                    htmlFor="modal-email"
                    className="block text-sm font-medium text-primary-dark mb-1.5"
                  >
                    E-mail
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-primary-dark placeholder:text-text-light/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="modal-empresa"
                    className="block text-sm font-medium text-primary-dark mb-1.5"
                  >
                    Empresa
                  </label>
                  <input
                    id="modal-empresa"
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-primary-dark placeholder:text-text-light/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm"
                    placeholder="Nome da empresa"
                  />
                </div>
                <div>
                  <label
                    htmlFor="modal-telefone"
                    className="block text-sm font-medium text-primary-dark mb-1.5"
                  >
                    Telefone
                  </label>
                  <input
                    id="modal-telefone"
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-primary-dark placeholder:text-text-light/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm"
                    placeholder="(41) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="modal-servico"
                  className="block text-sm font-medium text-primary-dark mb-1.5"
                >
                  Serviço desejado
                </label>
                <select
                  id="modal-servico"
                  name="servico"
                  value={formData.servico}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-primary-dark focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm"
                >
                  <option value="">Selecione o serviço</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="modal-mensagem"
                  className="block text-sm font-medium text-primary-dark mb-1.5"
                >
                  Mensagem
                </label>
                <textarea
                  id="modal-mensagem"
                  name="mensagem"
                  rows={3}
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-primary-dark placeholder:text-text-light/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm resize-none"
                  placeholder="Descreva brevemente o que precisa..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-accent hover:bg-accent-light text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 btn-shine"
              >
                Enviar pelo WhatsApp
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
