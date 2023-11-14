import React, { useEffect, useState } from "react";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Link from "next/link";
const HomeMenuListing = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  var settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 3000,
    autoplaySpeed: 3000,
    infinite: true,
    touchThreshold: 100,
    centerMode: true
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
    <div className="sectionBox pd-common bg2">
      <div className="container">
        <div className="HeaderBox">
          <motion.div
            initial={{ y: 60 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <div className="HdrT1 text-center color-fff">Our Menu</div>
            <div className="HdrT2 text-center color-fff">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do{" "}
            </div>
          </motion.div>
        </div>

        <div className="MenuSlider">
          <Slider {...settings}>
            <div className="SliderMenuItem">
              <div className="MenuItem">
                <motion.div
                  className="image-container"
                  initial={{ rotate: 5, scale: 0.9 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/menu1.jpg"
                    layout="responsive"
                    height={"245"}
                    width={"583"}
                    priority={true}
                    className=""
                  />
                  <div className="MenuItemDetails">
                    <div className="MenuItemTitle">Restaurant</div>
                    <Link href={"/"} className="MenuItemLink">
                        View Menu
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="SliderMenuItem">
              <div className="MenuItem">
                <motion.div
                  className="image-container"
                  initial={{ rotate: 5, scale: 0.9 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/menu2.jpg"
                    layout="responsive"
                    height={"245"}
                    width={"583"}
                    priority={true}
                    className=""
                  />
                  <div className="MenuItemDetails">
                    <div className="MenuItemTitle">Sweets</div>
                    <Link href={"/"} className="MenuItemLink">
                        View Menu
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="SliderMenuItem">
              <div className="MenuItem">
                <motion.div
                  className="image-container"
                  initial={{ rotate: 5, scale: 0.9 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/menu1.jpg"
                    layout="responsive"
                    height={"245"}
                    width={"583"}
                    priority={true}
                    className=""
                  />
                  <div className="MenuItemDetails">
                    <div className="MenuItemTitle">Restaurant</div>
                    <Link href={"/"} className="MenuItemLink">
                        View Menu
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="SliderMenuItem">
              <div className="MenuItem">
                <motion.div
                  className="image-container"
                  initial={{ rotate: 5, scale: 0.9 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/menu2.jpg"
                    layout="responsive"
                    height={"245"}
                    width={"583"}
                    priority={true}
                    className=""
                  />
                  <div className="MenuItemDetails">
                    <div className="MenuItemTitle">Sweets</div>
                    <Link href={"/"} className="MenuItemLink">
                        View Menu
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="SliderMenuItem">
              <div className="MenuItem">
                <motion.div
                  className="image-container"
                  initial={{ rotate: 5, scale: 0.9 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/menu1.jpg"
                    layout="responsive"
                    height={"245"}
                    width={"583"}
                    priority={true}
                    className=""
                  />
                  <div className="MenuItemDetails">
                    <div className="MenuItemTitle">Restaurant</div>
                    <Link href={"/"} className="MenuItemLink">
                        View Menu
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="SliderMenuItem">
              <div className="MenuItem">
                <motion.div
                  className="image-container"
                  initial={{ rotate: 5, scale: 0.9 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/menu2.jpg"
                    layout="responsive"
                    height={"245"}
                    width={"583"}
                    priority={true}
                    className=""
                  />
                  <div className="MenuItemDetails">
                    <div className="MenuItemTitle">Sweets</div>
                    <Link href={"/"} className="MenuItemLink">
                        View Menu
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default HomeMenuListing;
