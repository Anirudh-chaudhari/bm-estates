import HeroSlider from "@/components/home/HeroSlider";
import InfoSection from "@/components/home/InfoSection";
import SearchSection from "@/components/home/SearchSection";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import FeaturedProperties from "@/components/home/FeaturedProperties";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <InfoSection />
      <SearchSection />
      <FeaturesGrid />
      <FeaturedProperties />
    </>
  );
}
