import BranchBox from "@/components/BranchBox";
import CoomonHeader from "@/components/CommonHeader";
import ContactForm from "@/components/ContactForm";
import OurGallery from "@/components/OurGallery";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

export default function locations() {
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
          desktopBanner="/herodesk4.jpg"
          MobileBanner="/heromobile3.jpg"
          Title={translate("locations")}
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["location", "common"])),
      // Will be passed to the page component as props
    },
  };
}
