import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Greencard from "./components/Greencard";
import ClientCestion from "./components/ClientFeedback";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";

export function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* اولین بخش زیر هدر */}
      <Hero />

      {/* بقیه سکشن‌های مربوط به شما به ترتیب زیر هم قرار می‌گیرند */}
      <Partners />
      <Stats />
      <Services />
      <Greencard />
      <ClientCestion />
      <FAQSection />
      <CTASection />
    </div>
  );
}
