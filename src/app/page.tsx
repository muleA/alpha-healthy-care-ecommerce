import Accessibility from "@/components/accessibility";
import Bestsellers from "@/components/best-seller";
import Categories from "@/components/categories";
import Community from "@/components/community";
import FeaturedProducts from "@/components/featured-products";
import Footer from "@/components/footer";
import ChosenForYou from "@/components/for-you";
import Header from "@/components/header";
import Hero from "@/components/hero";
import MeetOurExperts from "@/components/meet-expert";
import MobileNav from "@/components/mobile-nav";
import Newsletter from "@/components/news-letter";
import PromoBanners from "@/components/promo-banner";
import SpecialOffers from "@/components/special-offer";
import { Stats } from "@/components/stats";
import StoresServices from "@/components/store";
import TrustBadges from "@/components/trust-badges";
import TryAtHome from "@/components/try";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background-light subtle-pattern font-sans text-text-dark">
      <Header />
      <Hero />
      <Categories />
      <TrustBadges />
      <PromoBanners />
      <ChosenForYou />
      <Bestsellers />
      <StoresServices />
      <Newsletter />
      <MobileNav />
      <Footer />
    </div>
  );
}
