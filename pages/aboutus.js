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
        <CoomonHeader
          desktopBanner="/herodesk4.png"
          MobileBanner="/herodesk4.png"
          Title="ABOUT FERAS"
          MenuName=""
          MenuLink=""
          Desc="Indulge in a symphony of sweetness with Feras Sweets, where every bite tells a delicious story"
        />
        <HomeAboutUs />
        <CustomerReviews />
        <InstagramBox />
      </div>
    </>
  );
}
