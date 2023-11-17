import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedHeaderText from "@/components/FramerMotion/AnimatedHeaderText";
const HeroBanner = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 3000,
    autoplaySpeed:3000,
    infinite: true,
    touchThreshold: 100,
    autoplay: true,
    pauseOnHover:false
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
                src="/herodesk1.jpg"
                layout="fill"
                priority={true}
                className="MainBanner"
              />
            )}
            {!isDesktop && (
              <Image
                src="/heromobile1.jpg"
                layout="fill"
                priority={true}
                className="MainBanner"
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ y: 60 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <div className="BannerBtns">
                      <Link href={"/"} className="BannerBtn">
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
                src="/herodesk2.jpg"
                layout="fill"
                className="MainBanner"
              />
            )}
            {!isDesktop && (
              <Image
                src="/heromobile2.jpg"
                layout="fill"
                className="MainBanner"
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ y: 60 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <div className="BannerBtns">
                      <Link href={"/"} className="BannerBtn">
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
                layout="fill"
                priority={true}
                className="MainBanner"
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ y: 60 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <div className="BannerBtns">
                      <Link href={"/"} className="BannerBtn">
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
                src="/herodesk4.jpg"
                layout="fill"
                priority={true}
                className="MainBanner"
              />
            )}
            {!isDesktop && (
              <Image
                src="/heromobile4.jpg"
                layout="fill"
                priority={true}
                className="MainBanner"
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ y: 60 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <div className="BannerBtns">
                      <Link href={"/"} className="BannerBtn">
                        View Menus
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default HeroBanner;
