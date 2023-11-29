import React from "react";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Slider from "react-slick";
import ProductGid from "./ProductGrid";
import AnimatedHeaderText from "@/components/FramerMotion/AnimatedHeaderText";
const MenuBox = (props) => {
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
          arrows: false,
          variableWidth: true,
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
    <div className="sectionBox pd-common bg1 abtBoxHome MenuBoxWrap" id="menu">
      <div className="container">
        <div className="MenuHeaderWrap">
          <div className="MenuHeaderFlex row">
            <div className="col-md-5">
              <div className="MenuHeaderT1 color-fff">
                <motion.div
                  initial="hidden"
                  whileInView={"visible"}
                  variants={container}
                  viewport={{ once: false }}
                >
                  <AnimatedHeaderText text={props.Title} />
                </motion.div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="MenuHeaderT2 color-fff">
                Taste the difference that passion makes with our menu, where
                each dish is a reflection of our commitment to exceptional
                dining.
              </div>
            </div>
          </div>
        </div>
        <div className="MobileMargin1">
          <motion.div
            className="SliderWrt1"
            {...animation}
            viewport={{ once: true }}
          >
            <Slider {...settings}>
              <div className="MenuSliderItem">
                <div className="MenuLinkItem active">Manakeesh</div>
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
        </div>

        <div className="ProductGrids ">
          <div className="row">
            <div className="col-md-3">
              <ProductGid
                imageurl="/products/menu5.jpg"
                productname="Jordanian Mansaf "
              />
            </div>
            <div className="col-md-3">
              <ProductGid
                imageurl="/products/menu6.jpg"
                productname="Palestinian Musakhan Rolls "
              />
            </div>
            <div className="col-md-3">
              <ProductGid
                imageurl="/products/menu7.jpg"
                productname="Maklouba With Cauliflower Potato"
              />
            </div>
            <div className="col-md-3">
              <ProductGid
                imageurl="/products/menu8.jpg"
                productname="Chicken Liver"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuBox;
