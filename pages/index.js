import CustomerReviews from "@/components/CustomerReviews";
import HomeAboutUs from "@/components/HomeAboutus";
import HomeBanner from "@/components/HomeBanner";
import HomeBestSeller from "@/components/HomeBestSelling";
import InstagramBox from "@/components/InstagramBox";
import LPHeroBanner from "@/components/LPHeroBanner";
import React from "react";

const LandingPage = () => {
  return (
    <>
      <LPHeroBanner />
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
