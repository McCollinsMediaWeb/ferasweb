import React, { useEffect, useState } from "react";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const MenuBanner = (props) => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const { t: translate } = useTranslation("common");
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
    <div className="HomeBannerBox position-relative overlayr1">
      {isDesktop && (
        <Image
          src={props.DesktopBanner}
          layout="responsive"
          height={"562"}
          width={"1200"}
          priority={true}
          className=""
        />
      )}
      {!isDesktop && (
        <Image
          src={props.MobileBanner}
          layout="responsive"
          height={"561"}
          width={"489"}
          priority={true}
          className=""
        />
      )}
      <div className="HomeBannerContent">
        <div className="container">
          <div
            className="HbCt1"
            style={{ fontWeight: "500", marginBottom: props.mb && props.mb }}
          >
            {props.title}
          </div>
          <div className="HbCt2"></div>
          <div className="HbCt1"></div>
          {props.button ? (
            <button
              onClick={handleButtonClick}
              style={{ cursor: "pointer" }}
              className="HbCLink"
            >
              {translate("eMore")}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default MenuBanner;
