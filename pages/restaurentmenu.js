

import CoomonHeader from "@/components/CommonHeader";

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
      <CoomonHeader desktopBanner="/herodesk3.jpg" MobileBanner ="/heromobile3.jpg" Title="RESTAURENT MENU" MenuName="" MenuLink=""/>
      
      </div>
    </>
  );
}
