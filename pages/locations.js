import BranchBox from "@/components/BranchBox";
import CoomonHeader from "@/components/CommonHeader";
import ContactForm from "@/components/ContactForm";

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
          desktopBanner="/loc.jpg"
          MobileBanner="/loc.jpg"
          top={true}
          Title={translate("locations")}
          MenuName=""
          MenuLink=""
        />
        <BranchBox />
        <iframe
          src="https://snazzymaps.com/embed/610419"
          width="100%"
          height="600px"
          style={{ border: "none" }}
        ></iframe>
        {/* <ContactForm /> */}
        {/* <img src="/icons/map.png" width={"100%"} /> */}
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
