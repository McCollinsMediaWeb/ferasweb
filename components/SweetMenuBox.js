import React, { useEffect, useState } from "react";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Slider from "react-slick";
import ProductGid from "./ProductGrid";
import AnimatedHeaderText from "@/components/FramerMotion/AnimatedHeaderText";
import axios from "axios";
const SweetMenuBox = (props) => {
  const isDesktop = useMediaQuery("(min-width: 960px)");

  const [menu, setMenu] = useState();
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

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/sweetmenu")
      .then((res) => {
        setMenu(res.data.data[0].prd);
      })
      .catch((err) => console.log(err));
  }, []);

  // const menu = [
  //   {
  //     name: "Ain Al Jamal Caramel",
  //     img: "/dishes/sweet/Ain Al Jamal Caramel 500 Gr.jpg",
  //   },
  //   {
  //     name: "Mix Baklawah",
  //     img: "/dishes/sweet/Mix Baklawah (Light)-Medium.jpg",
  //   },
  //   {
  //     name: "Fateer with Cheese",
  //     img: "/dishes/sweet/Sweets - Fateer with Cheese.jpg",
  //   },
  //   {
  //     name: "Kunafa Baen Naren (Frozen)",
  //     img: "/dishes/sweet/Sweets - Kunafa Baen Naren (Frozen).jpg",
  //   },
  // ];
  return (
    <div className="sectionBox pd-common bg1 abtBoxHome MenuBoxWrap" id="menu">
      <div className="container">
        <div className="MenuHeaderWrap">
          <div className="MenuHeaderFlex row">
            <div className="col-md-4">
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
            <div className="col-md-8">
              <div className="MenuHeaderT2 color-fff">
                Our menu spans timeless classics and innovative creations,
                ensuring there's a sweet surprise for every palate
              </div>
            </div>
          </div>
        </div>

        <div className="ProductGrids mt-5">
          <div className="row">
            {menu &&
              menu.map((item) => (
                <div className="col-md-3">
                  <ProductGid imageurl={item.img} productname={item.name} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SweetMenuBox;
