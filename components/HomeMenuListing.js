import React, { useEffect, useState } from "react";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Link from "next/link";
import { useTranslation } from "next-i18next";
const HomeMenuListing = (props) => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const { t: translate } = useTranslation("catering");
  var settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: true,
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

  const handleButtonClick = () => {
    // Define the path to your PDF file in the public folder
    const pdfFilePath = "/TawasiMenu.pdf";

    // Create a link element
    const link = document.createElement("a");
    link.href = pdfFilePath;
    link.download = "downloaded-file.pdf";

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document body
    document.body.removeChild(link);
  };

  return (
    <div
      className="sectionBox pd-common bg2"
      style={{ background: props.bg && "#F0F0F0" }}
      id="cateringDiv"
    >
      <div className="container">
        <div className="HeaderBox">
          <motion.div
            initial={{ y: 60 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <div
              className="HdrT1 text-center color-fff"
              style={{ color: props.bg && "#AA6F38" }}
            >
              {translate("oMenu")}
            </div>
            <div
              className="HdrT2 text-center color-gold"
              style={{ color: props.bg && "#000" }}
            >
              {translate("desc1")}
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 60 }}
          whileInView={{ y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <div className="MenuSlider">
            {isDesktop && (
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
                    <div className="MenuItemDetails">
                      <motion.div
                        initial={{ y: 60 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, type: "spring" }}
                      >
                        <div className="MenuItemTitle">
                          {translate("restaurant")}
                        </div>
                        <Link href={"/restaurantmenu"} className="MenuItemLink">
                          {translate("vMenu")}
                        </Link>
                      </motion.div>
                    </div>
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
                    <div className="MenuItemDetails">
                      <motion.div
                        initial={{ y: 60 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, type: "spring" }}
                      >
                        <div className="MenuItemTitle">
                          {translate("sweets")}
                        </div>
                        <Link href={"/sweetmenu"} className="MenuItemLink">
                          {translate("vMenu")}
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
                <div className="SliderMenuItem">
                  <div className="MenuItem">
                    <Image
                      src="/menu3.jpg"
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
                        <div className="MenuItemTitle">
                          {translate("tawasi")}
                        </div>
                        {/* <Link href={"/restaurantmenu"} className="MenuItemLink">
                          View Menu
                        </Link> */}
                        {props.button ? (
                          <button
                            onClick={handleButtonClick}
                            style={{ cursor: "pointer" }}
                            className="MenuItemLink"
                          >
                            {translate("vMenu")}
                          </button>
                        ) : null}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Slider>
            )}
            {!isDesktop && (
              <div className="MobileMenuListing">
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
                    <div className="MenuItemDetails">
                      <motion.div
                        initial={{ y: 60 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, type: "spring" }}
                      >
                        <div className="MenuItemTitle">
                          {translate("restaurant")}
                        </div>
                        <Link href={"/restaurantmenu"} className="MenuItemLink">
                          {translate("vMenu")}
                        </Link>
                      </motion.div>
                    </div>
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
                    <div className="MenuItemDetails">
                      <motion.div
                        initial={{ y: 60 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, type: "spring" }}
                      >
                        <div className="MenuItemTitle">
                          {translate("sweets")}
                        </div>
                        <Link href={"/sweetmenu"} className="MenuItemLink">
                          {translate("vMenu")}
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
                <div className="SliderMenuItem">
                  <div className="MenuItem">
                    <Image
                      src="/menu3.jpg"
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
                        <div className="MenuItemTitle">
                          {translate("tawasi")}
                        </div>
                        {props.button ? (
                          <button
                            onClick={handleButtonClick}
                            style={{ cursor: "pointer" }}
                            className="MenuItemLink"
                          >
                            {translate("vMenu")}
                          </button>
                        ) : null}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* <div className="ExpBtn">
              <Link href={"/sweetmenu"} className="ExploreMoreBtn">
                Explore More
              </Link>
            </div> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default HomeMenuListing;
