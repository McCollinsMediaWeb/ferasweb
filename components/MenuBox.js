import React, { useState } from "react";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Slider from "react-slick";
import ProductGid from "./ProductGrid";
import AnimatedHeaderText from "@/components/FramerMotion/AnimatedHeaderText";
const MenuBox = (props) => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const [selectedName, setSelectedName] = useState("Manakeesh");
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
  const menu = [
    {
      name: "Manakeesh",
      prd: [
        {
          name: "Cheese Zaatar",
          img: "/dishes/manakeesh/Manakeesh - Cheese _ Zaatar.jpg",
        },
        {
          name: "Cheese with Chicken Mashroom",
          img: "/dishes/manakeesh/Manakeesh - Cheese with Chicken _ Mashroom.jpg",
        },
        {
          name: "Cheese with Egg",
          img: "/dishes/manakeesh/Manakeesh - Cheese with Egg.jpg",
        },
        {
          name: "Cheese with Hony",
          img: "/dishes/manakeesh/Manakeesh - Cheese with Hony.jpg",
        },
      ],
    },
    {
      name: "Kaak",
      prd: [
        {
          name: "Kaak - Cheese Kaak",
          img: "/dishes/kaak/Kaak - Cheese Kaak.jpg",
        },
        {
          name: "Cheese wit Hotdog Kaak",
          img: "/dishes/kaak/Kaak - Cheese wit Hotdog Kaak.jpg",
        },
        {
          name: "Kaak - Cheese Kaak",
          img: "/dishes/kaak/Kaak - Cheese Kaak.jpg",
        },
      ],
    },
    {
      name: "burger",
      prd: [
        {
          name: "Crispy Chicken Fillet",
          img: "/dishes/burger/Burger - Crispy Chicken Fillet.jpg",
        },
        {
          name: "Burger - Kofta Burger",
          img: "/dishes/burger/Burger - Kofta Burger.jpg",
        },
      ],
    },
    {
      name: "breakfast",
      prd: [
        {
          name: "Healthy Breakfast",
          img: "/dishes/breakfast/Breakfast _ Dinner - Healthy Breakfast.jpg",
        },
        {
          name: "Special Omelet",
          img: "/dishes/breakfast/Breakfast _ Dinner - Special Omelet.jpg",
        },
      ],
    },
    {
      name: "sandwich",
      prd: [
        {
          name: "Club Sandwich",
          img: "/dishes/sandwich/Sandwich - Club Sandwich.jpg",
        },
        {
          name: "Philadelphia Steak Sandwich",
          img: "/dishes/sandwich/Sandwich - Philadelphia Steak Sandwich.jpg",
        },
        {
          name: "Special Chef Sandwich",
          img: "/dishes/sandwich/Sandwich - Special Chef Sandwich.jpg",
        },
      ],
    },
  ];
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
              {menu.map((item) => (
                <div className="MenuSliderItem">
                  <div
                    className={`MenuLinkItem ${
                      selectedName === item.name && "active"
                    }`}
                    onClick={() => setSelectedName(item.name)}
                  >
                    {item.name}
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>

        <div className="ProductGrids ">
          <div className="row">
            {menu
              .filter((item) => item.name === selectedName)
              .map((i) => (
                <>
                  {i.prd.map((p) => (
                    <div className="col-md-3">
                      <ProductGid imageurl={p.img} productname={p.name} />
                    </div>
                  ))}
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuBox;
