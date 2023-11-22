

import CoomonHeader from "@/components/CommonHeader";
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
      <CoomonHeader desktopBanner="/herodesk2.jpg" MobileBanner ="/heromobile2.jpg" Title="CATERING SERVICES" MenuName="" MenuLink=""/>
      <InstagramBox/>
      </div>
    </>
  );
}
