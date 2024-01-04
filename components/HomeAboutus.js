import React from "react";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnimatedHeaderText from "@/components/FramerMotion/AnimatedHeaderText";
import { useTranslation } from "next-i18next";
const HomeAboutUs = (props) => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const { t: translate } = useTranslation("about");

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
                  {isDesktop ? (
                    <AnimatedHeaderText
                      color="#c18f5c"
                      text={translate("weFeras")}
                    />
                  ) : (
                    <>
                      <AnimatedHeaderText
                        color="#c18f5c"
                        text={translate("weFeras1")}
                      />
                      <AnimatedHeaderText
                        color="#c18f5c"
                        text={translate("weFeras2")}
                      />
                    </>
                  )}
                </motion.div>
              </div>
              <motion.div
                initial={{ y: 60 }}
                whileInView={{ y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <div className={`ft2 ${!props.lp && "color-gold"}`}>
                  {translate("desc1")}
                  <br />
                  <br />
                  {translate("desc2")}
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
                      <AnimatedHeaderText
                        color="#c18f5c"
                        text={translate("missionh1")}
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
                      {translate("mission")}
                    </div>
                  </motion.div>
                  <div className={`ft1 ${!props.lp && "color-gold"} TxtBx2`}>
                    <motion.div
                      initial="hidden"
                      whileInView={"visible"}
                      variants={container}
                      viewport={{ once: true }}
                    >
                      <AnimatedHeaderText
                        color="#c18f5c"
                        text={translate("visionh1")}
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
                      {translate("vision")}
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
