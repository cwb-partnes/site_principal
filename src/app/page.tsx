"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CtaBanner from "@/components/CtaBanner";
import Differentials from "@/components/Differentials";
import HostingPlans from "@/components/HostingPlans";
import WhatsappCta from "@/components/WhatsappCta";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import Script from "next/script";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [initialService, setInitialService] = useState("");

  const openModal = (service?: string) => {
    if (service) setInitialService(service);
    setModalOpen(true);
  };

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-RN3EGGZ2CW"
        strategy="afterInteractive"
      />
      <Script id="ga" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RN3EGGZ2CW');
        `}
      </Script>

      <Navbar onOpenModal={() => openModal()} />
      <main>
        <Hero />
        <Services />
        <Process />
        <CtaBanner />
        <Differentials />
        <HostingPlans onOpenModal={openModal} />
        <WhatsappCta />
      </main>
      <Footer />
      <QuoteModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setInitialService("");
        }}
        initialService={initialService}
      />
    </>
  );
}
