import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CtaBanner from "@/components/CtaBanner";
import Differentials from "@/components/Differentials";
import HostingPlans from "@/components/HostingPlans";
import WhatsappCta from "@/components/WhatsappCta";
import Footer from "@/components/Footer";
import Script from "next/script";

export default function Home() {
  return (
    <>
      {/* Google Analytics */}
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

      {/* Google Ads */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-792332754"
        strategy="afterInteractive"
      />
      <Script id="gads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-792332754');
        `}
      </Script>

      {/* Facebook Pixel */}
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '602663500940932');
          fbq('track', 'PageView');
        `}
      </Script>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <CtaBanner />
        <Differentials />
        <HostingPlans />
        <WhatsappCta />
      </main>
      <Footer />
    </>
  );
}
