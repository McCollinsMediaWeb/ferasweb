import React, { useEffect, useState } from "react";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Slider from "react-slick";
import ProductGid from "./ProductGrid";
import AnimatedHeaderText from "@/components/FramerMotion/AnimatedHeaderText";
import axios from "axios";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
const MenuBox = (props) => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const { t: translate } = useTranslation("common");
  const [selectedName, setSelectedName] = useState("Main Course");
  const { locale, locales, push } = useRouter();
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
      .get("https://feras-backend.vercel.app/api/menu")
      .then((res) => {
        setMenu(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
                  <AnimatedHeaderText color="#c18f5c" text={props.Title} />
                </motion.div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="MenuHeaderT2" style={{ color: "#c18f5c" }}>
                {translate("restMenuDesc")}
              </div>
            </div>
          </div>
        </div>
        <div className="MobileMargin1 restSlide">
          <motion.div
            className="SliderWrt1"
            {...animation}
            viewport={{ once: true }}
          >
            <Slider {...settings}>
              {menu &&
                menu
                  .slice()
                  .reverse()
                  .map((item) => (
                    <div className="MenuSliderItem">
                      <div
                        className={`MenuLinkItem ${
                          selectedName === item.catName && "active"
                        }`}
                        onClick={() => setSelectedName(item.catName)}
                      >
                        {locale === "en" ? item.catName : item.catArName}
                      </div>
                    </div>
                  ))}
            </Slider>
          </motion.div>
        </div>

        <div className="ProductGrids ">
          <div className="row">
            {menu &&
              menu
                .filter((item) => item.catName === selectedName)
                .map((i) => (
                  <>
                    {i.prd.map((p) => (
                      <div className="col-md-3">
                        <ProductGid
                          imageurl={p.img}
                          productname={p.name}
                          arname={p.arname}
                          price={p.price}
                        />
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
