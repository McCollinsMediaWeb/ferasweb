import CoomonHeader from "@/components/CommonHeader";
import CustomerReviews from "@/components/CustomerReviews";
import MenuBox from "@/components/MenuBox";
import MenuBanner from "@/components/MenuBanner";
import InstagramBox from "@/components/InstagramBox";
export default function ourmenu() {
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
          desktopBanner="/herodesk3.jpg"
          MobileBanner="/heromobile3.jpg"
          Title="Restaurant MENU"
          MenuName=""
          MenuLink="/restaurantmenu/#menu"
          Desc="Engage your senses in a culinary symphony, where every dish is a harmonious blend of flavors, aromas, and textures."
        />
        <MenuBox Title="Restaurant MENU" />
        <MenuBanner
          DesktopBanner="/banner2.jpg"
          MobileBanner="/bannermobile2.jpg"
        />
        <CustomerReviews />
        <InstagramBox />
      </div>
    </>
  );
}
