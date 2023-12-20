import CustomerReviews from "@/components/CustomerReviews";
import HomeAboutUs from "@/components/HomeAboutus";
import HomeBanner from "@/components/HomeBanner";
import HomeBestSeller from "@/components/HomeBestSelling";
import InstagramBox from "@/components/InstagramBox";
import LPHeroBanner from "@/components/LPHeroBanner";
import React from "react";

import { useRouter } from "next/router";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
const LandingPage = () => {
  const { locale, locales, push } = useRouter();
  const { t: translate } = useTranslation("home");

  return (
    <>
      <LPHeroBanner />
      <h1>Locale: {locale}</h1>
      {/* <HomeAboutUs lp={true} />
      <HomeBestSeller lp={true} />
      <HomeBanner />
      <CustomerReviews />*/}
      <div style={{ display: "none" }}>
        <InstagramBox />
      </div>
    </>
  );
};

export default LandingPage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
      // Will be passed to the page component as props
    },
  };
}
