import CoomonHeader from "@/components/CommonHeader";
import CustomerReviews from "@/components/CustomerReviews";
import MenuBox from "@/components/MenuBox";
import MenuBanner from "@/components/MenuBanner";
import InstagramBox from "@/components/InstagramBox";
import SweetMenuBox from "@/components/SweetMenuBox";

export default function sweetmenu() {
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
          desktopBanner="/herodesk4.jpg"
          MobileBanner="/heromobile4.jpg"
          Title="SWEETS MENU"
          Desc="Step into a world where every bite of narrates the story of UAE’s culinary heritage. "
          MenuName=""
          MenuLink="/sweetmenu/#menu"
        />
        <SweetMenuBox Title="SWEETS MENU" />
        <MenuBanner
          DesktopBanner="/banner3.jpg"
          MobileBanner="/bannermobile3.jpg"
          title="Mix Baklawa"
        />
        <CustomerReviews />
        <InstagramBox />
      </div>
    </>
  );
}
