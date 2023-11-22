

import CoomonHeader from "@/components/CommonHeader";
import HomeBanner from "@/components/HomeBanner";
import CustomerReviews from "@/components/CustomerReviews";
import InstagramBox from "@/components/InstagramBox";
import useMediaQuery from "@/hooks/useMediaQuery";
export default function CustomerReviewsPage() {
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
      <CoomonHeader desktopBanner="/herodesk4.jpg" MobileBanner ="/heromobile4.jpg" Title="CUSTOMER REVIEWS" MenuName="" MenuLink=""/>
        <CustomerReviews/>
        <HomeBanner/>
        <InstagramBox/>
      </div>
    </>
  );
}
