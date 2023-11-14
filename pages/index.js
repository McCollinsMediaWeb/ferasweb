

import HeroBanner from "@/components/HeroBanner";
import HomeAboutUs from "@/components/HomeAboutus";
import HomeMenuListing from "@/components/HomeMenuListing";
export default function Home() {
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.055,
      },
    },
  };
  return (
    <>
      <div>
        <HeroBanner/>
        <HomeAboutUs/>
        <HomeMenuListing/>
      
      </div>
    </>
  );
}
