

import CoomonHeader from "@/components/CommonHeader";
import CustomerReviews from "@/components/CustomerReviews";
import MenuBox from "@/components/MenuBox";
import MenuBanner from "@/components/MenuBanner";
import InstagramBox from "@/components/InstagramBox";

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
      <CoomonHeader desktopBanner="/herodesk4.jpg" MobileBanner ="/heromobile3.jpg" Title="SWEET MENU" MenuName="" MenuLink=""/>
      <MenuBox Title="SWEET MENU"/>
      <MenuBanner DesktopBanner="/banner3.jpg" MobileBanner="/bannermobile3.jpg"/>
      <CustomerReviews/>
      <InstagramBox/>
      
      </div>
    </>
  );
}
