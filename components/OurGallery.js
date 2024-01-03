import React, { useEffect, useState } from "react";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Link from "next/link";
import { useTranslation } from "next-i18next";
const OurGallery = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const { t: translate } = useTranslation("common");
  var settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
        },
      },
    ],
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
    <div
      className="sectionBox pd-common"
      style={{
        backgroundImage: "none",
        background: "#00263C",
        padding: "50px 0",
      }}
    >
      <div className="HeaderBox">
        <motion.div
          initial={{ y: 60 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <div className="HdrT1 text-center color-fff">
            {translate("gallery")}
          </div>
          <div className="HdrT2 text-center color-fff">
            {translate("galleryDesc")}
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 60 }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.3, type: "spring" }}
      >
        <div className="MenuSlider gallerySlider">
          <Slider {...settings}>
            <div className="SliderMenuItem">
              <div className="MenuItem">
                <Image
                  src="/menu1.jpg"
                  layout={isDesktop ? "responsive" : "fill"}
                  height={isDesktop ? "245" : ""}
                  width={isDesktop ? "583" : ""}
                  priority={true}
                  className=""
                />
              </div>
            </div>
            <div className="SliderMenuItem">
              <div className="MenuItem">
                <Image
                  src="/menu2.jpg"
                  layout={isDesktop ? "responsive" : "fill"}
                  height={isDesktop ? "245" : ""}
                  width={isDesktop ? "583" : ""}
                  priority={true}
                  className=""
                />
              </div>
            </div>
            <div className="SliderMenuItem">
              <div className="MenuItem">
                <Image
                  src="/menu1.jpg"
                  layout={isDesktop ? "responsive" : "fill"}
                  height={isDesktop ? "245" : ""}
                  width={isDesktop ? "583" : ""}
                  priority={true}
                  className=""
                />
              </div>
            </div>
            <div className="SliderMenuItem">
              <div className="MenuItem">
                <Image
                  src="/menu2.jpg"
                  layout={isDesktop ? "responsive" : "fill"}
                  height={isDesktop ? "245" : ""}
                  width={isDesktop ? "583" : ""}
                  priority={true}
                  className=""
                />
              </div>
            </div>
            <div className="SliderMenuItem">
              <div className="MenuItem">
                <Image
                  src="/menu1.jpg"
                  layout={isDesktop ? "responsive" : "fill"}
                  height={isDesktop ? "245" : ""}
                  width={isDesktop ? "583" : ""}
                  priority={true}
                  className=""
                />
              </div>
            </div>
            <div className="SliderMenuItem">
              <div className="MenuItem">
                <Image
                  src="/menu2.jpg"
                  layout={isDesktop ? "responsive" : "fill"}
                  height={isDesktop ? "245" : ""}
                  width={isDesktop ? "583" : ""}
                  priority={true}
                  className=""
                />
              </div>
            </div>
          </Slider>
        </div>
      </motion.div>
    </div>
  );
};
export default OurGallery;
