

import HeroBanner from "@/components/HeroBanner";
import HomeAboutUs from "@/components/HomeAboutus";
import HomeMenuListing from "@/components/HomeMenuListing";
import HomeBestSeller from "@/components/HomeBestSelling";
import HomeBanner from "@/components/HomeBanner";
import CustomerReviews from "@/components/CustomerReviews";
import InstagramBox from "@/components/InstagramBox";
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
        <HomeBestSeller/>
        <HomeBanner/>
        <CustomerReviews/>
        <InstagramBox/>
      </div>
    </>
  );
}
