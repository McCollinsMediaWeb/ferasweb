

import CoomonHeader from "@/components/CommonHeader";

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
      <CoomonHeader desktopBanner="/herodesk2.jpg" MobileBanner ="/heromobile2.jpg" Title="CATERING SERVICES" MenuName="" MenuLink=""/>
      
      </div>
    </>
  );
}
