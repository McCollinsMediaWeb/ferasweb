import React from "react";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnimatedHeaderText from "@/components/FramerMotion/AnimatedHeaderText";
const HomeAboutUs = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");

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
        <div className="row">
          <div className="col-md-4">
          {isDesktop && (
            <div>
              <motion.div
              initial={{ y: 60 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <Image
                src="/about1.jpg"
                layout="responsive"
                height={"515"}
                width={"395"}
                priority={true}
                className=""
              />
            </motion.div>
            </div>
          )}
            
          </div>
          <div className="col-md-8">
            <div className="PdLft40">
            <div className="ft1 color-fff">
              <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={container}
                viewport={{ once: true }}
              >
                <AnimatedHeaderText text="Our journey begins…" />
              </motion.div>
            </div>
            <motion.div
                    initial={{ y: 60 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
            <div className="ft2 color-fff">
              Earlier in 1993, a traditional Palestinian sweets shop opened in
              Dubai with the vision of offering homemade quality sweets to the
              neighboring surrounding. Fast forward to 20 years later, Firas
              Sweets is now one of the leading and innovating Arabic Oriental
              Sweet companies keeping its traditional identity with professional
              operations.
            </div>
            </motion.div>
            {isDesktop && (
            <div>
              <div className="ft1 color-fff TxtBx2">
              <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={container}
                viewport={{ once: true }}
              >
                <AnimatedHeaderText text="with a taste…" />
              </motion.div>
            </div>
            <motion.div
                    initial={{ y: 60 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
            <div className="ft2 color-fff">
              Firas Sweets uses only the highest quality ingredients. We don’t
              use chemicals or add preservatives to our products, as we believe
              fresh products have the best taste! Our team continuously
              supervises the quality, which helps keep our products to the
              highest standards.
            </div>
            <div className="ft2 color-fff">
              Our employees are highly competent and they are our brand
              ambassadors! We hire only people who are proud and motivated to
              deliver the finest products.
            </div>
            <div className="ft2 color-fff">
              - A variety of products to cater for the needs of everybody and
              enhance the general taste.
            </div>
            </motion.div>
            </div>
            )}
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeAboutUs;
