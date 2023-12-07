import BranchBox from "@/components/BranchBox";
import CoomonHeader from "@/components/CommonHeader";
import ContactForm from "@/components/ContactForm";
import OurGallery from "@/components/OurGallery";

export default function locations() {
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
          MobileBanner="/heromobile3.jpg"
          Title="LOCATIONS"
          MenuName=""
          MenuLink=""
        />
        <BranchBox />
        <OurGallery />
        <ContactForm />
        <img src="/icons/map.png" width={"100%"} />
      </div>
    </>
  );
}
