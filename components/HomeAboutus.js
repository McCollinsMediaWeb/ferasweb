import React from "react";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnimatedHeaderText from "@/components/FramerMotion/AnimatedHeaderText";
const HomeAboutUs = (props) => {
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
    <div className={`sectionBox pd-common ${!props.lp && "bg1"} abtBoxHome`}>
      <div className="container">
        <div className="row">
          <div className="col-md-4" style={{ alignSelf: "center" }}>
            {isDesktop && (
              <div>
                <motion.div
                  initial={{ y: 60 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  <Image
                    src="/abt2.jpg"
                    height={"515"}
                    width={"395"}
                    style={{ objectFit: "cover" }}
                    priority={true}
                    className=""
                  />
                </motion.div>
              </div>
            )}
          </div>
          <div className="col-md-8">
            <div className="PdLft40">
              <div className={`ft1  ${!props.lp && "color-fff"} `}>
                <motion.div
                  initial="hidden"
                  whileInView={"visible"}
                  variants={container}
                  viewport={{ once: true }}
                >
                  <AnimatedHeaderText
                    color="#c18f5c"
                    text="We Are Feras Hanoun Sweets..."
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{ y: 60 }}
                whileInView={{ y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <div className={`ft2 ${!props.lp && "color-gold"}`}>
                  Feras Hanoun Sweets is well known for making the world’s best
                  Kunafa Nabulsiya. The Kunafa Nabulsiya is an Arabic Sweet
                  which was originated in Nablus, a famous city in Palestine.
                  Feras Hanoun Sweets is honored to introduce this product to
                  the U.A.E. since 1984.
                  <br />
                  <br />
                  With the progressively increasing number of outlets in the
                  country, Feras Hanoun Sweets is presently serving a vast scope
                  of mainstream Arabic desserts, pastries, and fast foods to the
                  people of the U.A.E.
                </div>
              </motion.div>
              {isDesktop && (
                <div>
                  <div className={`ft1 ${!props.lp && "color-gold"} TxtBx2`}>
                    <motion.div
                      initial="hidden"
                      whileInView={"visible"}
                      variants={container}
                      viewport={{ once: true }}
                    >
                      <AnimatedHeaderText color="#c18f5c" text="MISSION" />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ y: 60 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <div className={`ft2 ${!props.lp && "color-gold"}`}>
                      Feras Hanoun Sweets inspires and innovates with a unique &
                      wide range of sweets along with bakery and fast food
                      items. This allows us to accommodate consumer wishes and
                      expectations through high-quality products with authentic
                      Arabic flavours, appearances and taste sensations.
                    </div>
                  </motion.div>
                  <div className={`ft1 ${!props.lp && "color-gold"} TxtBx2`}>
                    <motion.div
                      initial="hidden"
                      whileInView={"visible"}
                      variants={container}
                      viewport={{ once: true }}
                    >
                      <AnimatedHeaderText color="#c18f5c" text="VISION" />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ y: 60 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <div className={`ft2 ${!props.lp && "color-gold"}`}>
                      To build a leading organization passionate about sweets
                      with the drive to grow and develop the confectionery
                      market in the U.A.E., through our longstanding traditional
                      expertise, innovation and empowered talent.
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
