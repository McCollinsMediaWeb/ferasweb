import CoomonHeader from "@/components/CommonHeader";
import HomeAboutUs from "@/components/HomeAboutus";
import CustomerReviews from "@/components/CustomerReviews";
import InstagramBox from "@/components/InstagramBox";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

export default function aboutus() {
  const { t: translate } = useTranslation("about");
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
          desktopBanner="/herodesk4.png"
          MobileBanner="/herodesk4.png"
          Title={translate("banner_title")}
          MenuName=""
          MenuLink=""
          Desc={translate("banner_text")}
        />
        <HomeAboutUs />
        <CustomerReviews />
        <InstagramBox />
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about", "common"])),
      // Will be passed to the page component as props
    },
  };
}
