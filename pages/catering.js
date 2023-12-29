import CateringCall from "@/components/CateringCall";
import CoomonHeader from "@/components/CommonHeader";
import HomeBestSeller from "@/components/HomeBestSelling";
import HomeMenuListing from "@/components/HomeMenuListing";
import InstagramBox from "@/components/InstagramBox";

export default function catering() {
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
          desktopBanner="/herodesk2.jpg"
          MobileBanner="/heromobile2.jpg"
          Title="CATERING SERVICES"
          MenuName=""
          MenuLink="#cateringDiv"
        />
        <HomeMenuListing bg={true} button={true} />
        <HomeBestSeller />
        <CateringCall />
        <InstagramBox restInsta={true} />
      </div>
    </>
  );
}
