import React, { useEffect, useState } from "react";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Link from "next/link";
import { useRouter } from "next/router";
const ProductGid = (props) => {
  const { locale, locales, push } = useRouter();
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
    <div className="ProductGrid">
      <motion.div
        className="SliderWrt1"
        {...animation}
        viewport={{ once: true }}
      >
        <div className="ImageBox">
          <img
            src={props.imageurl}
            height={"410px"}
            width={"100%"}
            style={{ objectFit: "cover" }}
            className="imgprdH"
          />
        </div>
      </motion.div>
      <div className="ProductGridTop">
        <div className="row">
          <div className="col-md-9">
            <div className="ReviewRow">
              <div className="ReviewColumn gold">&nbsp;</div>
              <div className="ReviewColumn gold">&nbsp;</div>
              <div className="ReviewColumn gold">&nbsp;</div>
              <div className="ReviewColumn gold">&nbsp;</div>
              <div className="ReviewColumn gold">&nbsp;</div>
              {/* <div className="ReviewColumn">&nbsp;</div> */}
            </div>
          </div>
          <div className="col-md-3 text-right">
            <div className="LikeBtn">&nbsp;</div>
          </div>
        </div>
      </div>
      <div className="ProductGridBottom">
        <div className="row align-items-center">
          <div className="col-md-8">
            {locale === "en" ? props.productname : props.arname}
          </div>
          {/* <div className="col-md-4 text-right">
              {props.price && (
                <span className="PriceBox1">AED {props.price}</span>
              )}
            </div> */}
        </div>
      </div>
    </div>
  );
};
export default ProductGid;
