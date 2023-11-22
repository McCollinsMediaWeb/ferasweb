import React from "react";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Slider from "react-slick";
import ProductGid from "./ProductGrid";
const MenuBox = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  var settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
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
    <div className="sectionBox pd-common bg1 abtBoxHome MenuBoxWrap">
      <div className="container">
        <div className="MenuHeaderWrap">
          <div className="MenuHeaderFlex row">
            <div className="col-md-4">
              <motion.div
                initial={{ y: 60 }}
                whileInView={{ y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <div className="MenuHeaderT1 color-fff">Sweets Menu</div>
              </motion.div>
            </div>
            <div className="col-md-8">
              <motion.div
                initial={{ y: 60 }}
                whileInView={{ y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <div className="MenuHeaderT2 color-fff">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do{" "}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ y: 60 }}
          whileInView={{ y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <Slider {...settings}>
            <div className="MenuSliderItem">
              <div className="MenuLinkItem active">Arabic Sweets</div>
            </div>
            <div className="MenuSliderItem">
              <div className="MenuLinkItem">Manakeesh</div>
            </div>
            <div className="MenuSliderItem">
              <div className="MenuLinkItem">Pizza</div>
            </div>
            <div className="MenuSliderItem">
              <div className="MenuLinkItem">Shawarma</div>
            </div>
            <div className="MenuSliderItem">
              <div className="MenuLinkItem">Sandwich</div>
            </div>
            <div className="MenuSliderItem">
              <div className="MenuLinkItem">Burger</div>
            </div>
          </Slider>
        </motion.div>
        <div className="ProductGrids">
            <div className="row">
              <div className="col-md-3">
                <ProductGid imageurl="/products/menu1.jpg" productname="Kunafa"/>
              </div>
              <div className="col-md-3">
                <ProductGid imageurl="/products/menu2.jpg" productname="Baklava’s"/>
              </div>
              <div className="col-md-3">
                <ProductGid imageurl="/products/menu3.jpg" productname="Ma’mul"/>
              </div>
              <div className="col-md-3">
                <ProductGid imageurl="/products/menu4.jpg" productname="Warbat"/>
              </div>
              <div className="col-md-3">
                <ProductGid imageurl="/products/menu5.jpg" productname="Jordanian Mansaf "/>
              </div>
              <div className="col-md-3">
                <ProductGid imageurl="/products/menu6.jpg" productname="Palestinian Musakhan Rolls "/>
              </div>
              <div className="col-md-3">
                <ProductGid imageurl="/products/menu7.jpg" productname="Maklouba With Cauliflower Potato"/>
              </div>
              <div className="col-md-3">
                <ProductGid imageurl="/products/menu8.jpg" productname="Chicken Liver"/>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};
export default MenuBox;
