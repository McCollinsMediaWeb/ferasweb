import React, { useEffect, useState } from "react";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Link from "next/link";

const HomeBanner = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  var settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    speed: 1500,
    autoplaySpeed: 1500,
    infinite: true,
    touchThreshold: 100,
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
      slideStart: {
        clipPath: "circle(11.6% at 100% 100%)",
      },
      slideEnd: {
        clipPath: "circle(141.4% at 100% 100%)",
      },
    },
    initial: ["hidden", "slideStart"],
    whileInView: ["visible", "slideEnd"],
    transition: { type: "tween", duration: 1.5 },
  };
  return (
    <div className="HomeBannerBox position-relative">
      
        {isDesktop && (
        <Image
          src="/banner1.jpg"
          layout="responsive"
          height={"562"}
          width={"1200"}
          priority={true}
          className=""
        />
        )}
        {!isDesktop && (
        <Image
          src="/bannermobile1.jpg"
          layout="responsive"
          height={"561"}
          width={"489"}
          priority={true}
          className=""
        />
        )}
        <motion.div
        className="SliderWrt1"
        {...animation}
        viewport={{ once: true }}
      >
      <div className="HomeBannerContent">
        <div className="container">
        <motion.div
                    initial={{ y: 60 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
            <div className="HbCt1">Discount</div>
            <div className="HbCt2">50% OFF</div>
            <div className="HbCt1">Upto 24hrs</div>
            <Link href={"/"} className="HbCLink">
              Explore More
            </Link>
          </motion.div>
        </div>
      </div>
      </motion.div>
    </div>
  );
};
export default HomeBanner;
