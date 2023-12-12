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
              <div className={`ft1  ${!props.lp && "color-fff"} `}>
                <motion.div
                  initial="hidden"
                  whileInView={"visible"}
                  variants={container}
                  viewport={{ once: true }}
                >
                  <AnimatedHeaderText text="We Are Feras Hanoun Sweets..." />
                </motion.div>
              </div>
              <motion.div
                initial={{ y: 60 }}
                whileInView={{ y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <div className={`ft2 ${!props.lp && "color-fff"}`}>
                  We are a manufacturer of Arabic Sweets specialized with
                  different origin and Kinds to Commitment of finest quality,
                  the vast variety of sweets and world famous foods starting
                  from eastern, we also specialized for service of catering in
                  general, special and seasonal occasions.
                  <br />
                  <br /> We have big network of branches with Point Of Sales
                  system all over the United Arab Emirates.
                  <br />
                  <br />
                  We keep upgrading the level of our products with a view to
                  achieve the full satisfaction of customers, and our products
                  undergo continuous improvement.
                </div>
              </motion.div>
              {isDesktop && (
                <div>
                  <div className={`ft1 ${!props.lp && "color-fff"} TxtBx2`}>
                    <motion.div
                      initial="hidden"
                      whileInView={"visible"}
                      variants={container}
                      viewport={{ once: true }}
                    >
                      <AnimatedHeaderText text="OUR STORY…" />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ y: 60 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <div className={`ft2 ${!props.lp && "color-fff"}`}>
                      Feras Hanoun Sweets started its operation with its first
                      branch in Sharjah City UAE, after keen observation of non
                      availability of genuine Kunafa Nabulsi under the
                      Supervision of Mr. Mohammed Hanoon and Mr. Khalid Hanoon.
                    </div>
                    <div className={`ft2 ${!props.lp && "color-fff"}`}>
                      This kind of Kunafah is prepared pursuant to traditional
                      customs existing since hundred of years, with the use of
                      special materials and well-weighed proportions in order to
                      give the exact taste and flavor of Kunafah.
                    </div>
                    <div className={`ft2 ${!props.lp && "color-fff"}`}>
                      We maintained and used this recipe over the years to reach
                      the lovers of this dish at their different races and
                      cultures.
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
