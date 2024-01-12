import CoomonHeader from "@/components/CommonHeader";
import ContactForm from "@/components/ContactForm";
import OurGallery from "@/components/OurGallery";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

export default function contactus() {
  const { t: translate } = useTranslation("common");
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
          Title={translate("connectFeras")}
          MenuName=""
          MenuLink=""
        />
        <ContactForm />
        <OurGallery />
        {/* <img src="/icons/map.png" width={"100%"} /> */}
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
