

import CoomonHeader from "@/components/CommonHeader";
import HomeAboutUs from "@/components/HomeAboutus";
import CustomerReviews from "@/components/CustomerReviews";
import InstagramBox from "@/components/InstagramBox";
export default function aboutus() {
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
        <CoomonHeader desktopBanner="/herodesk4.jpg" MobileBanner ="/heromobile4.jpg" Title="ABOUT FERAS" MenuName="" MenuLink=""/>
        <HomeAboutUs/>
        <CustomerReviews/>
        <InstagramBox/>
      </div>
    </>
  );
}
