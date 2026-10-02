import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TheReframeSection } from "@/components/the-reframe-section";
import { MasterVaultSection } from "@/components/master-vault-section";
import { RecruitersSection } from "@/components/recruiters-section";
import { PlatformOverviewSection } from "@/components/platform-overview-section";
import { FoundingAndFaqSection } from "@/components/founding-and-faq-section";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0D1117] text-white selection:bg-[#10B981]/30 selection:text-white">
      <Navbar />
      <main className="w-full flex flex-col">
        <Hero />
        <TheReframeSection />
        <MasterVaultSection />
        <RecruitersSection />
        <PlatformOverviewSection />
        <FoundingAndFaqSection />
      </main>
      <Footer />
    </div>
  );
}
