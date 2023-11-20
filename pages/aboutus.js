

import CoomonHeader from "@/components/CommonHeader";

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
      
      </div>
    </>
  );
}
