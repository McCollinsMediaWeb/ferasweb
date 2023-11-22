import React, { useEffect, useState } from "react";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Link from "next/link";
import Slider from "react-slick";

const CustomerReviews = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  var settings = {
    slidesToShow: 3,
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
  return (
    <div className="pd-common customerReviewBox">
      <motion.div
        initial={{ y: 60 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, type: "spring" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="CrT1">Food Lovers feedback</div>
              <div className="RevRow">
                <div className="RevRowFlex">
                  <div className="RevRowColumn">&nbsp;</div>
                  <div className="RevRowColumn">&nbsp;</div>
                  <div className="RevRowColumn">&nbsp;</div>
                  <div className="RevRowColumn">&nbsp;</div>
                  <div className="RevRowColumn">&nbsp;</div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="CrT2">
                Firas Sweets uses only the highest quality ingredients. We don’t
                use chemicals or add preservatives to our products, as we
                believe fresh products have the best taste! Our team
                continuously supervises the quality, which helps keep our
                products to the highest standards
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="ReviewSlider">
        <div className="container">
          <Slider {...settings}>
            <div>
              <motion.div
                initial={{ y: 60 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <div className="ReviewColumn1">
                  <div className="ReviewItem">
                    <div className="ReviewItemT1">Lorem ipsum dolo</div>
                    <div className="ReviewItemT2">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      “
                    </div>
                    <div className="ReviewAddress">
                      <div className="Rname">Ali Mohammad</div>
                      <div className="RLocation">Duabi</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div>
              <motion.div
                initial={{ y: 60 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <div className="ReviewColumn1">
                  <div className="ReviewItem">
                    <div className="ReviewItemT1">Lorem ipsum dolo</div>
                    <div className="ReviewItemT2">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      “
                    </div>
                    <div className="ReviewAddress">
                      <div className="Rname">Ali Mohammad</div>
                      <div className="RLocation">Duabi</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div>
              <motion.div
                initial={{ y: 60 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <div className="ReviewColumn1">
                  <div className="ReviewItem">
                    <div className="ReviewItemT1">Lorem ipsum dolo</div>
                    <div className="ReviewItemT2">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      “
                    </div>
                    <div className="ReviewAddress">
                      <div className="Rname">Ali Mohammad</div>
                      <div className="RLocation">Duabi</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div>
              <motion.div
                initial={{ y: 60 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <div className="ReviewColumn1">
                  <div className="ReviewItem">
                    <div className="ReviewItemT1">Lorem ipsum dolo</div>
                    <div className="ReviewItemT2">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      “
                    </div>
                    <div className="ReviewAddress">
                      <div className="Rname">Ali Mohammad</div>
                      <div className="RLocation">Duabi</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div>
              <motion.div
                initial={{ y: 60 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <div className="ReviewColumn1">
                  <div className="ReviewItem">
                    <div className="ReviewItemT1">Lorem ipsum dolo</div>
                    <div className="ReviewItemT2">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      “
                    </div>
                    <div className="ReviewAddress">
                      <div className="Rname">Ali Mohammad</div>
                      <div className="RLocation">Duabi</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div>
              <motion.div
                initial={{ y: 60 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <div className="ReviewColumn1">
                  <div className="ReviewItem">
                    <div className="ReviewItemT1">Lorem ipsum dolo</div>
                    <div className="ReviewItemT2">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      “
                    </div>
                    <div className="ReviewAddress">
                      <div className="Rname">Ali Mohammad</div>
                      <div className="RLocation">Duabi</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default CustomerReviews;
