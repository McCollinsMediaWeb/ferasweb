import React, { useEffect, useState } from "react";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Link from "next/link";
import Slider from "react-slick";

const InstagramBox = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  var settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 2,
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
    <div className="pd-common customerReviewBox bg3">
      <motion.div
        initial={{ y: 60 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, type: "spring" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="CrT1 InstaIcon">#connectFirasSweets </div>
            </div>
            <div className="col-md-8">
              <div className="CrT2">
              Discover the daily extravaganza of deliciousness! Follow our Instagram page for a delectable journey through the irresistible flavors served from the highest quality ingredients.
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="ReviewSlider">
        <div className="container">
        <motion.div
                className="SliderWrt1"
                {...animation}
                viewport={{ once: true }}
              >
          <Slider {...settings}>
            <div>
                <div className="ReviewColumn1">
                  <div className="InstaItemBox position-relative">
                    <a href="#">
                      <Image
                        src="/in1.jpg"
                        layout="responsive"
                        height={"451"}
                        width={"405"}
                        priority={true}
                        className=""
                      />
                    </a>
                  </div>
                </div>
            </div>
            <div>
                <div className="ReviewColumn1">
                  <div className="InstaItemBox position-relative">
                    <a href="#">
                      <Image
                        src="/in2.jpg"
                        layout="responsive"
                        height={"451"}
                        width={"405"}
                        priority={true}
                        className=""
                      />
                    </a>
                  </div>
                </div>
            </div>
            <div>
                <div className="ReviewColumn1">
                  <div className="InstaItemBox position-relative">
                    <a href="#">
                      <Image
                        src="/in3.jpg"
                        layout="responsive"
                        height={"451"}
                        width={"405"}
                        priority={true}
                        className=""
                      />
                    </a>
                  </div>
                </div>
            </div>
            <div>
              
                <div className="ReviewColumn1">
                  <div className="InstaItemBox position-relative">
                    <a href="#">
                      <Image
                        src="/in4.jpg"
                        layout="responsive"
                        height={"451"}
                        width={"405"}
                        priority={true}
                        className=""
                      />
                    </a>
                  </div>
                </div>
            </div>
            <div>
              
                <div className="ReviewColumn1">
                  <div className="InstaItemBox position-relative">
                    <a href="#">
                      <Image
                        src="/in3.jpg"
                        layout="responsive"
                        height={"451"}
                        width={"405"}
                        priority={true}
                        className=""
                      />
                    </a>
                  </div>
                </div>
            </div>
          </Slider>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default InstagramBox;
