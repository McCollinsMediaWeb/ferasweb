import CoomonHeader from "@/components/CommonHeader";
import CustomerReviews from "@/components/CustomerReviews";
import MenuBox from "@/components/MenuBox";
import MenuBanner from "@/components/MenuBanner";
import InstagramBox from "@/components/InstagramBox";
import SweetMenuBox from "@/components/SweetMenuBox";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

export default function sweetmenu() {
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
          MobileBanner="/heromobile4.jpg"
          Title={translate("sweets")}
          Desc={translate("sweetDesc")}
          MenuName=""
          MenuLink="/sweetmenu/#menu"
        />
        <SweetMenuBox
          Title={translate("sweets")}
          desc={translate("sweerDesc2")}
        />
        <MenuBanner
          DesktopBanner="/banner3.jpg"
          MobileBanner="/bannermobile3.jpg"
          title="Mix Baklawa"
          mb="100px"
        />
        <CustomerReviews />
        <InstagramBox />
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
