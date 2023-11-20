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
    speed: 1500,
    autoplaySpeed: 1500,
    infinite: true,
    touchThreshold: 100,
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
                Firas Sweets uses only the highest quality ingredients. We don’t
                use chemicals or add preservatives to our products, as we
                believe fresh products have the best taste! Our team
                continuously supervises the quality, which helps keep our
                products to the highest standards
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
