import CoomonHeader from "@/components/CommonHeader";
import ContactForm from "@/components/ContactForm";

export default function contactus() {
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
          Title="CONTACT FERAS"
          MenuName=""
          MenuLink=""
        />
        <ContactForm />
        <img src="/icons/map.png" width={"100%"} />
      </div>
    </>
  );
}
