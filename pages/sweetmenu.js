

import CoomonHeader from "@/components/CommonHeader";

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
      
      </div>
    </>
  );
}
