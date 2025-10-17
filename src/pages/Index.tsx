import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IdentificationSection from "@/components/IdentificationSection";
import CredibilitySection from "@/components/CredibilitySection";
import FeaturesSection from "@/components/FeaturesSection";
import ExclusivitySection from "@/components/ExclusivitySection";
import SolutionsSection from "@/components/SolutionsSection";
import OfferSection from "@/components/OfferSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection />
        <IdentificationSection />
        <CredibilitySection />
        <FeaturesSection />
        <ExclusivitySection />
        <SolutionsSection />
        <OfferSection />
        <GuaranteeSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
