import BrowseCategories from "./components/BrowseCategories";
import JoinCommunity from "./components/JoinCommunity";
import WhyChooseGatorEx from "./components/WhyChooseGatorEx";

export default function Home() {
  return (
    <div>
      <WhyChooseGatorEx />
      <BrowseCategories />
      <JoinCommunity />
    </div>
  );
}
