import BrowseCategories from "./components/BrowseCategories";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import JoinCommunity from "./components/JoinCommunity";
import WhyChooseGatorEx from "./components/WhyChooseGatorEx";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <WhyChooseGatorEx />
      <BrowseCategories />
      <JoinCommunity />
    </div>
  );
}
