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
              Firas Sweets uses only the highest quality ingredients. We don’t
              use chemicals or add preservatives to our products, as we believe
              fresh products have the best taste! Our team continuously
              supervises the quality, which helps keep our products to the
              highest standards
            </div>
          </motion.div>
        </div>

        <div className="MenuSlider">
          <Slider {...settings}>
            <div className="SliderMenuItem">
              <motion.div
                className="SliderWrt1"
                {...animation}
                viewport={{ once: true }}
              >
                <div className="MenuItem">
                  <Image
                    src="/menu1.jpg"
                    layout={isDesktop ? "responsive" : "fill"}
                    height={isDesktop ? "245" : ""}
                    width={isDesktop ? "583" : ""}
                    priority={true}
                    className=""
                  />
                  <div className="MenuItemDetails">
                    <motion.div
                      initial={{ y: 60 }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: "spring" }}
                    >
                      <div className="MenuItemTitle">Restaurant</div>
                      <Link href={"/"} className="MenuItemLink">
                        View Menu
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="SliderMenuItem">
              <motion.div
                className="SliderWrt1"
                {...animation}
                viewport={{ once: true }}
              >
                <div className="MenuItem">
                <Image
                    src="/menu2.jpg"
                    layout={isDesktop ? "responsive" : "fill"}
                    height={isDesktop ? "245" : ""}
                    width={isDesktop ? "583" : ""}
                    priority={true}
                    className=""
                  />
                  <div className="MenuItemDetails">
                    <motion.div
                      initial={{ y: 60 }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: "spring" }}
                    >
                      <div className="MenuItemTitle">Sweets</div>
                      <Link href={"/"} className="MenuItemLink">
                        View Menu
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="SliderMenuItem">
              <motion.div
                className="SliderWrt1"
                {...animation}
                viewport={{ once: true }}
              >
                <div className="MenuItem">
                <Image
                    src="/menu1.jpg"
                    layout={isDesktop ? "responsive" : "fill"}
                    height={isDesktop ? "245" : ""}
                    width={isDesktop ? "583" : ""}
                    priority={true}
                    className=""
                  />
                  <div className="MenuItemDetails">
                    <motion.div
                      initial={{ y: 60 }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: "spring" }}
                    >
                      <div className="MenuItemTitle">Restaurant</div>
                      <Link href={"/"} className="MenuItemLink">
                        View Menu
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="SliderMenuItem">
              <motion.div
                className="SliderWrt1"
                {...animation}
                viewport={{ once: true }}
              >
                <div className="MenuItem">
                <Image
                    src="/menu2.jpg"
                    layout={isDesktop ? "responsive" : "fill"}
                    height={isDesktop ? "245" : ""}
                    width={isDesktop ? "583" : ""}
                    priority={true}
                    className=""
                  />
                  <div className="MenuItemDetails">
                    <motion.div
                      initial={{ y: 60 }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: "spring" }}
                    >
                      <div className="MenuItemTitle">Sweets</div>
                      <Link href={"/"} className="MenuItemLink">
                        View Menu
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="SliderMenuItem">
              <motion.div
                className="SliderWrt1"
                {...animation}
                viewport={{ once: true }}
              >
                <div className="MenuItem">
                <Image
                    src="/menu1.jpg"
                    layout={isDesktop ? "responsive" : "fill"}
                    height={isDesktop ? "245" : ""}
                    width={isDesktop ? "583" : ""}
                    priority={true}
                    className=""
                  />
                  <div className="MenuItemDetails">
                    <motion.div
                      initial={{ y: 60 }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: "spring" }}
                    >
                      <div className="MenuItemTitle">Restaurant</div>
                      <Link href={"/"} className="MenuItemLink">
                        View Menu
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="SliderMenuItem">
              <motion.div
                className="SliderWrt1"
                {...animation}
                viewport={{ once: true }}
              >
                <div className="MenuItem">
                <Image
                    src="/menu2.jpg"
                    layout={isDesktop ? "responsive" : "fill"}
                    height={isDesktop ? "245" : ""}
                    width={isDesktop ? "583" : ""}
                    priority={true}
                    className=""
                  />
                  <div className="MenuItemDetails">
                    <motion.div
                      initial={{ y: 60 }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: "spring" }}
                    >
                      <div className="MenuItemTitle">Sweets</div>
                      <Link href={"/"} className="MenuItemLink">
                        View Menu
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Slider>
          <div className="ExpBtn">
          <Link href={"/"} className="ExploreMoreBtn">
            Explore More
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeMenuListing;
