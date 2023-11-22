import React from "react";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Slider from "react-slick";
const MenuBox = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 3000,
    autoplaySpeed:3000,
    infinite: true,
    autoplay: true,
    pauseOnHover:false,
    fade: true,
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
    <div className="sectionBox pd-common bg1 abtBoxHome">
      <div className="container">
        <div className="MenuHeaderWrap">
            <div className="MenuHeaderFlex row">
                <div className="col-md-4">
                    <div className="MenuHeaderT1 color-fff">Sweets Menu</div>
                </div>
                <div className="col-md-8">
                    <div className="MenuHeaderT2 color-fff">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </div>
                </div>
            </div>
        </div>
        ijas
      </div>
    </div>
  );
};
export default MenuBox;
