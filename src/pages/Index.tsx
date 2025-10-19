import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import PartnersSection from "@/components/PartnersSection";
import FeaturesSection from "@/components/FeaturesSection";
import SolutionsSection from "@/components/SolutionsSection";
import ClientsSection from "@/components/ClientsSection";
import TestimonialSection from "@/components/TestimonialSection";
import BenefitsSection from "@/components/BenefitsSection";
import FleetSection from "@/components/FleetSection";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import NewsletterSection from "@/components/NewsletterSection";
import WorkWithUsSection from "@/components/WorkWithUsSection";
import Footer from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen">
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <PartnersSection />
        <FeaturesSection />
        <SolutionsSection />
        <ClientsSection />
        <TestimonialSection />
        <BenefitsSection />
        <FleetSection />
        <FAQSection />
        <BlogSection />
        <NewsletterSection />
        <WorkWithUsSection />
      </main>
      <Footer className="bg-[#1e9116]" />
    </div>;
};
export default Index;