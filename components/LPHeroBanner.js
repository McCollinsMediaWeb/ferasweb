import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedHeaderText from "@/components/FramerMotion/AnimatedHeaderText";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
const LPHeroBanner = () => {
  const { t: translate } = useTranslation("home");

  const { locale, locales, push } = useRouter();
  const isDesktop = useMediaQuery("(min-width: 960px)");
  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 3000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    pauseOnHover: false,
    fade: true,
  };

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.055,
      },
    },
  };
  const animation = {
    variants: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
      slideStart: { clipPath: "inset(0 100% 0 0 round 8px)" },
      slideEnd: { clipPath: "inset(0 0% 0 0 round 8px)" },
    },
    initial: ["hidden", "slideStart"],
    whileInView: ["visible", "slideEnd"],
    transition: { type: "spring", duration: 2, bounce: 0 },
  };
  return (
    <div className="HeroBanner slider1">
      <Slider {...settings}>
        <div className="SliderItem">
          <div className="SliderImage">
            {isDesktop && (
              <Image
                src="/lpBanner.png"
                layout="fill"
                priority={true}
                className="MainBanner"
              />
            )}
            {!isDesktop && (
              <Image
                src="/heromobile8.jpg"
                layout="responsive"
                height="900"
                width="708"
                priority={true}
                className=""
              />
            )}
            <div className="layer1">&nbsp;</div>
            <div className="layer2">
              <div className="fullWidth">
                <div className=" d-flex">
                  <div className="col-md-6">
                    <div className="HbT1 font-p">
                      <motion.div
                        initial="hidden"
                        whileInView={"visible"}
                        variants={container}
                        viewport={{ once: false }}
                        style={{ display: "flex", placeContent: "center" }}
                      >
                        <img
                          src="/icons/ferassweet.png"
                          width={isDesktop ? "200px" : "100px"}
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ y: 60 }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.3, type: "spring" }}
                    >
                      <div className={`BannerBtns lpBnrBtn`}>
                        <Link
                          href={"/sweetmenu"}
                          className={`BannerBtn`}
                          style={{ minWidth: !isDesktop && "fit-content" }}
                        >
                          {translate("button")}
                        </Link>
                        <br />
                        {isDesktop ? (
                          <button
                            className="homOdBtn"
                            style={{ borderRadius: "20px", marginTop: "20px" }}
                            onClick={() =>
                              window.open(
                                "hhttps://www.talabat.com/uae/firas-al-diyafa-sweets2",
                                "_blank"
                              )
                            }
                          >
                            Order Now
                          </button>
                        ) : (
                          <Link
                            href={
                              "https://www.talabat.com/uae/firas-al-diyafa-sweets2"
                            }
                            className="BannerBtn"
                            style={{
                              minWidth: !isDesktop && "fit-content",
                              marginTop: "10px",
                              background: "#131f47",
                            }}
                          >
                            Order Now
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="HbT1 font-p">
                      <motion.div
                        initial="hidden"
                        whileInView={"visible"}
                        variants={container}
                        viewport={{ once: false }}
                        style={{ display: "flex", placeContent: "center" }}
                      >
                        <img
                          src="/icons/FerasRes.png"
                          style={{ backgroundColor: "unset" }}
                          width={isDesktop ? "200px" : "100px"}
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ y: 60 }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.3, type: "spring" }}
                    >
                      <div className={`BannerBtns lpBnrBtn`}>
                        <Link
                          href={"/restaurantmenu"}
                          className="BannerBtn"
                          style={{ minWidth: !isDesktop && "fit-content" }}
                        >
                          {translate("button")}
                        </Link>
                        <br />
                        {isDesktop ? (
                          <button
                            className="homOdBtn"
                            style={{ borderRadius: "20px", marginTop: "20px" }}
                            onClick={() =>
                              window.open(
                                "https://www.talabat.com/uae/firas-restaurant",
                                "_blank"
                              )
                            }
                          >
                            Order Now
                          </button>
                        ) : (
                          <Link
                            href={
                              "https://www.talabat.com/uae/firas-restaurant"
                            }
                            className="BannerBtn"
                            style={{
                              minWidth: !isDesktop && "fit-content",
                              marginTop: "10px",
                              background: "#131f47",
                            }}
                          >
                            Order Now
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="SliderItem">
          <div className="SliderImage">
            {isDesktop && (
              <Image
                src="/herodesk2.jpg"
                layout="fill"
                className="MainBanner"
              />
            )}
            {!isDesktop && (
              <Image
                src="/heromobile2.jpg"
                layout="responsive"
                height="900"
                width="708"
                priority={true}
                className=""
              />
            )}
            <div className="layer1">&nbsp;</div>
            <div className="layer2">
              <div className="fullWidth">
                <div className="sliderContent">
                  <div className="HbT1 font-p">
                    <motion.div
                      initial="hidden"
                      whileInView={"visible"}
                      variants={container}
                      viewport={{ once: false }}
                    >
                      <AnimatedHeaderText text="A TASTE OF TEST" />
                    </motion.div>
                    <motion.div
                      initial="hidden"
                      whileInView={"visible"}
                      variants={container}
                      viewport={{ once: false }}
                    >
                      <AnimatedHeaderText text="DISTINCTIVENESS" />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ y: 60 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <div className="HbT2">
                      {isDesktop && (
                        <span>
                          Step into a world where every bite of narrates the
                          story of UAE’s culinary heritage.
                        </span>
                      )}
                      Indulge in our handcrafted sweet and savory surprises - a
                      fusion of tradition, innovation, and unparalleled quality.
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ y: 60 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <div className="BannerBtns">
                      <Link href={"/restaurantmenu"} className="BannerBtn">
                        View Menus
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="SliderItem">
          <div className="SliderImage">
            {isDesktop && (
              <Image
                src="/herodesk3.jpg"
                layout="fill"
                priority={true}
                className="MainBanner"
              />
            )}
            {!isDesktop && (
              <Image
                src="/heromobile3.jpg"
                layout="responsive"
                height="900"
                width="708"
                priority={true}
                className=""
              />
            )}
            <div className="layer1">&nbsp;</div>
            <div className="layer2">
              <div className="fullWidth">
                <div className="sliderContent">
                  <div className="HbT1 font-p">
                    <motion.div
                      initial="hidden"
                      whileInView={"visible"}
                      variants={container}
                      viewport={{ once: false }}
                    >
                      <AnimatedHeaderText text="A TASTE OF REAL" />
                    </motion.div>
                    <motion.div
                      initial="hidden"
                      whileInView={"visible"}
                      variants={container}
                      viewport={{ once: false }}
                    >
                      <AnimatedHeaderText text="DISTINCTIVENESS" />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ y: 60 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <div className="HbT2">
                      Step into a world where every bite of narrates the story
                      of UAE’s culinary heritage. Indulge in our handcrafted
                      sweet and savory surprises - a fusion of tradition,
                      innovation, and unparalleled quality.
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ y: 60 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <div className="BannerBtns">
                      <Link href={"/restaurantmenu"} className="BannerBtn">
                        View Menus
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </Slider>
      <div className="lpHomeBtm">
        <div
          className="lpGallery"
          style={{ flexDirection: isDesktop ? "row" : "column" }}
        >
          <div style={{ position: "relative" }}>
            <img src="/lpGallery (3).jpg" />
            <div className="ProductGridBottom">
              <div className="row align-items-center">
                <div className="col-md-12">
                  {locale === "en" ? "PALESTINIAN MUSAKHAN" : "مسخن فلسطيني"}
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <img src="/lpGallery (1).jpg" />
            <div className="ProductGridBottom">
              <div className="row align-items-center">
                <div className="col-md-12">
                  {locale === "en" ? "Baklawah" : "بقلاوة"}
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <img src="/lpGallery (2).jpg" />
            <div className="ProductGridBottom">
              <div className="row align-items-center">
                <div className="col-md-12">
                  {locale === "en" ? "JORDANIAN MANSAF" : "منسف أردنى"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="lpHomeBtm2">
        <img src="/plate.png" className="lpImgBtm" />
      </div> */}
    </div>
  );
};
export default LPHeroBanner;
