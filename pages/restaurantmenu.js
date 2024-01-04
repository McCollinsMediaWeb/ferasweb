import CoomonHeader from "@/components/CommonHeader";
import CustomerReviews from "@/components/CustomerReviews";
import MenuBox from "@/components/MenuBox";
import MenuBanner from "@/components/MenuBanner";
import InstagramBox from "@/components/InstagramBox";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

export default function ourmenu() {
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
          Title={translate("restaurant")}
          MenuName=""
          MenuLink="/restaurantmenu/#menu"
          Desc={translate("restDesc")}
        />
        <MenuBox Title={translate("restaurant")} />
        <MenuBanner
          DesktopBanner="/JordanianMansaf.jpg"
          MobileBanner="/JordanianMansaf.jpg"
          title={translate("tawasiMenu")}
          button={true}
        />
        <CustomerReviews />
        <InstagramBox restInsta={true} />
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
