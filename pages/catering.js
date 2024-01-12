import CateringCall from "@/components/CateringCall";
import CoomonHeader from "@/components/CommonHeader";
import HomeBestSeller from "@/components/HomeBestSelling";
import HomeMenuListing from "@/components/HomeMenuListing";
import InstagramBox from "@/components/InstagramBox";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function catering() {
  const { t: translate } = useTranslation("catering");
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
          desktopBanner="/herodesk2.jpg"
          MobileBanner="/heromobile2.jpg"
          Title={translate("bnr_heading")}
          MenuName=""
          MenuLink="#cateringDiv"
        />
        <HomeMenuListing bg={true} button={true} />
        <HomeBestSeller />
        <CateringCall />
        {/* <InstagramBox restInsta={true} /> */}
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["catering", "common"])),
      // Will be passed to the page component as props
    },
  };
}
