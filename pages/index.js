

import HeroBanner from "@/components/HeroBanner";
import HomeAboutUs from "@/components/HomeAboutus";
import HomeMenuListing from "@/components/HomeMenuListing";
import HomeBestSeller from "@/components/HomeBestSelling";
import HomeBanner from "@/components/HomeBanner";
import CustomerReviews from "@/components/CustomerReviews";
import InstagramBox from "@/components/InstagramBox";
import useMediaQuery from "@/hooks/useMediaQuery";
export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 960px)");
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
        {isDesktop && (
        <HomeAboutUs/>
        )}
        
        <HomeMenuListing/>
        {!isDesktop && (
        <HomeBestSeller/>
        )}
        {!isDesktop && (
        <HomeAboutUs/>
        )}
         {isDesktop && (
        <HomeBestSeller/>
        )}
        <HomeBanner/>
        <CustomerReviews/>
        <InstagramBox/>
      </div>
    </>
  );
}
