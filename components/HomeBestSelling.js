import React, { useEffect, useState } from "react";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Link from "next/link";
import ProductGid from "./ProductGrid";
const HomeBestSeller = (props) => {
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
    <div className={`sectionBox pd-common ${!props.lp ? "bg1" : "bgLP"}`}>
      <div className="container">
        <div className="HeaderBox">
          <motion.div
            initial={{ y: 60 }}
            whileInView={{ y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <div className={`HdrT1 text-center ${!props.lp && "color-fff"}`}>
              Feras Best Selling
            </div>
            <div className={`HdrT2 text-center ${!props.lp && "color-fff"}`}>
              Feras Sweets uses only the highest quality ingredients. We don’t
              use chemicals or add preservatives to our products, as we believe
              fresh products have the best taste! Our team continuously
              supervises the quality, which helps keep our products to the
              highest standards
            </div>
          </motion.div>
        </div>

        <div className="ProductGridWrap">
          <div className="ProductGrids">
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
                  imageurl="/products/menu8.jpg"
                  productname="Chicken Liver"
                />
              </div>
              <div className="col-md-3">
                <ProductGid
                  imageurl="/products/menu9.jpg"
                  productname="Qedreh"
                />
              </div>
              <div className="col-md-3">
                <ProductGid
                  imageurl="/dishes/manakeesh/Manakeesh - Cheese _ Zaatar.jpg"
                  productname="Cheese Zaatar"
                />
              </div>
              <div className="col-md-3">
                <ProductGid
                  imageurl="/dishes/kaak/Kaak - Cheese Kaak.jpg"
                  productname="Kaak - Cheese Kaak"
                />
              </div>
              <div className="col-md-3">
                <ProductGid
                  productname="Crispy Chicken Fillet"
                  imageurl="/dishes/burger/Burger - Crispy Chicken Fillet.jpg"
                />
              </div>
              <div className="col-md-3">
                <ProductGid
                  imageurl="/dishes/breakfast/Breakfast _ Dinner - Healthy Breakfast.jpg"
                  productname="Healthy Breakfast"
                />
              </div>
            </div>
          </div>
          <div className="ExpBtn">
            <Link href={"/restaurantmenu"} className="ExploreMoreBtn">
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeBestSeller;
