import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useTranslation } from "next-i18next";
const Header = () => {
  const { t: translate } = useTranslation("common");
  const { height, width } = useWindowDimensions();
  const router = useRouter();
  const { locale, locales, push } = useRouter();
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const [open, setOpen] = useState(false);

  const handleClick = (l) => () => {
    console.log("Switching to locale:", l);
    push("/", undefined, { locale: l });
  };
  useEffect(() => {
    if (open) {
      document.body.classList.add("PanelActivated");
    } else {
      document.body.classList.remove("PanelActivated");
    }
  }, [open]);

  return (
    <header>
      {isDesktop && (
        <div
          className="container"
          style={{ display: isDesktop ? "block" : "none" }}
        >
          <div className="HeaderFlex">
            <div style={{ visibility: "hidden" }}>
              {locale === "en" ? (
                <div
                  className="HeaderItem font-arabic"
                  style={{ cursor: "pointer" }}
                >
                  <div onClick={handleClick("ar")} className="link1">
                    عربي&nbsp;&nbsp;&nbsp;
                  </div>
                </div>
              ) : (
                <>
                  <div
                    className="HeaderItem English-Icon"
                    style={{ cursor: "pointer" }}
                  >
                    <div onClick={handleClick("en")} className="link1">
                      &nbsp;&nbsp;&nbsp;English
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="HeaderItem">
              <Link
                href={"/"}
                className={router.pathname == "/" ? "link1 active" : "link1"}
              >
                {translate("home")}
              </Link>
            </div>
            <div className="HeaderItem">
              <Link
                href={"/aboutus"}
                className={
                  router.pathname == "/aboutus" ? "link1 active" : "link1"
                }
              >
                {translate("about")}
              </Link>
            </div>
            <div className="HeaderItem">
              <Link
                href={"/catering"}
                className={
                  router.pathname == "/catering" ? "link1 active" : "link1"
                }
              >
                {translate("catering")}
              </Link>
            </div>
            <div className="HeaderItem LogoLink">
              <Link href={"/"} className="">
                <div className="HeroLogo">
                  {router.pathname === "/sweetmenu" ? (
                    <Image
                      src="/icons/ferassweet.png"
                      layout="responsive"
                      height={"240"}
                      width={"240"}
                      priority={true}
                      className=""
                    />
                  ) : router.pathname === "/restaurantmenu" ? (
                    <Image
                      src="/icons/FerasRes.png"
                      layout="responsive"
                      height={"240"}
                      width={"240"}
                      priority={true}
                      className=""
                    />
                  ) : (
                    // <Image
                    //   src="/logo3.png"
                    //   layout="responsive"
                    //   height={"240"}
                    //   width={"240"}
                    //   priority={true}
                    //   className=""
                    // />
                    <Image
                      src="/icons/ferassweet.png"
                      layout="responsive"
                      height={"240"}
                      width={"240"}
                      priority={true}
                      className=""
                    />
                  )}
                </div>
              </Link>
            </div>
            <div className="HeaderItem">
              <Link
                href={"/restaurantmenu"}
                className={
                  router.pathname == "/restaurantmenu"
                    ? "link1 active"
                    : "link1"
                }
              >
                {translate("menu")}
              </Link>
              <div className="SubNaBox">
                <Link href={"/restaurantmenu"} className="link1">
                  {translate("restaurant")}
                </Link>
                <Link href={"/sweetmenu"} className="link1">
                  {translate("sweets")}
                </Link>
              </div>
            </div>

            <div className="HeaderItem">
              <Link
                href={"/locations"}
                className={
                  router.pathname == "/locations" ? "link1 active" : "link1"
                }
              >
                {translate("locations")}
              </Link>
            </div>
            <div className="HeaderItem">
              <Link
                href={"/contactus"}
                className={
                  router.pathname == "/contactus" ? "link1 active" : "link1"
                }
              >
                {translate("contact")}
              </Link>
            </div>
            {/* <div className="HeaderItem font-arabic">
              <Link href={"/contactus"} className="link1">
                عربي
              </Link>
            </div> */}

            {locale === "en" ? (
              <div
                className="HeaderItem font-arabic"
                style={{ cursor: "pointer" }}
              >
                <div onClick={handleClick("ar")} className="link1">
                  عربي&nbsp;&nbsp;
                </div>
              </div>
            ) : (
              <>
                <div
                  className="HeaderItem English-Icon"
                  style={{ cursor: "pointer" }}
                >
                  <div onClick={handleClick("en")} className="link1">
                    &nbsp;&nbsp;English
                  </div>
                </div>
              </>
            )}
            <div className="MenuClick" onClick={() => setOpen(true)}>
              <div className="menu1">&nbsp;</div>
            </div>
          </div>
        </div>
      )}
      {!isDesktop && (
        <div
          className="MobileHeaderWrap"
          style={{ display: isDesktop ? "none" : "block" }}
        >
          <div className="MobileHeaderFlex" style={{ padding: "15px" }}>
            <div className="MobileLang">
              {/* <div className="font-arabic color-fff">
                <Link href={"/"} className="">
                  عربي
                </Link>
              </div> */}
              {locale === "en" ? (
                <div
                  className="HeaderItem font-arabic"
                  style={{ cursor: "pointer" }}
                >
                  <div onClick={handleClick("ar")} className="link1">
                    عربي&nbsp;&nbsp;
                  </div>
                </div>
              ) : (
                <>
                  <div
                    className="HeaderItem English-Icon"
                    style={{ cursor: "pointer" }}
                  >
                    <div onClick={handleClick("en")} className="link1">
                      &nbsp;&nbsp;English
                    </div>
                  </div>
                </>
              )}
            </div>
            {/* <div className="MobileLogoBox">
              <Link href={"/"} className="">
                <Image
                  src="/mobilelogo1.png"
                  layout="responsive"
                  height={"78"}
                  width={"200"}
                  priority={true}
                  className=""
                />
              </Link>
            </div> */}
            <div className="MobileMenuLink">
              <div className="HamberMenu" onClick={() => setOpen(true)}>
                <div className="HamberMenuLine">&nbsp;</div>
                <div className="HamberMenuLine mid">&nbsp;</div>
                <div className="HamberMenuLine">&nbsp;</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {open && (
        <div>
          <div
            className="OverLay1"
            style={{ width: width + "px", height: height + "px" }}
            onClick={() => setOpen(false)}
          >
            &nbsp;
          </div>
          <div className="SideNav" style={{ height: height + "px" }}>
            <div>
              <div
                className="ScrollPart"
                style={{ height: height - 50 + "px" }}
              >
                <div>
                  <motion.div
                    initial={{ x: -60 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <div className="SideNavHeader">
                      Explore Our{" "}
                      <span className="CloseBtn" onClick={() => setOpen(false)}>
                        &nbsp;
                      </span>
                    </div>
                  </motion.div>
                  <div className="SideNavMiddle">
                    <div className="SideNavLinks">
                      <motion.div
                        initial={{ x: -60 }}
                        whileInView={{ x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.3, type: "spring" }}
                      >
                        <div onClick={() => setOpen(false)}>
                          <Link
                            href={"/"}
                            className={
                              router.pathname == "/"
                                ? "hover1 active"
                                : "hover1"
                            }
                          >
                            {translate("home")}
                          </Link>
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ x: -60 }}
                        whileInView={{ x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.3, type: "spring" }}
                      >
                        <div onClick={() => setOpen(false)}>
                          <Link
                            href={"/aboutus"}
                            className={
                              router.pathname == "/aboutus"
                                ? "hover1 active"
                                : "hover1"
                            }
                          >
                            {translate("about")}
                          </Link>
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ x: -60 }}
                        whileInView={{ x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.3, type: "spring" }}
                      >
                        <div onClick={() => setOpen(false)}>
                          {" "}
                          <Link
                            href={"/restaurantmenu"}
                            className={
                              router.pathname == "/restaurantmenu"
                                ? "hover1 active"
                                : "hover1"
                            }
                          >
                            {translate("restaurant")}
                          </Link>
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ x: -60 }}
                        whileInView={{ x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.3, type: "spring" }}
                      >
                        <div onClick={() => setOpen(false)}>
                          {" "}
                          <Link
                            href={"/sweetmenu"}
                            className={
                              router.pathname == "/sweetmenu"
                                ? "hover1 active"
                                : "hover1"
                            }
                          >
                            {translate("sweets")}
                          </Link>
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ x: -60 }}
                        whileInView={{ x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.3, type: "spring" }}
                      >
                        <div onClick={() => setOpen(false)}>
                          <Link
                            href={"/catering"}
                            className={
                              router.pathname == "/catering"
                                ? "hover1 active"
                                : "hover1"
                            }
                          >
                            {translate("catering")}
                          </Link>
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ x: -60 }}
                        whileInView={{ x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.3, type: "spring" }}
                      >
                        <div onClick={() => setOpen(false)}>
                          <Link
                            href={"/locations"}
                            className={
                              router.pathname == "/locations"
                                ? "hover1 active"
                                : "hover1"
                            }
                          >
                            {translate("locations")}
                          </Link>
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ x: -60 }}
                        whileInView={{ x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.3, type: "spring" }}
                      >
                        <div onClick={() => setOpen(false)}>
                          <Link
                            href={"/contactus"}
                            className={
                              router.pathname == "/contactus"
                                ? "hover1 active"
                                : "hover1"
                            }
                          >
                            {translate("contact")}
                          </Link>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  <motion.div
                    initial={{ y: -60 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <div className="SideNavFooter">
                      <div>
                        <div className="row HdrRow1">
                          <div className="col-md-4">
                            <Image
                              src="/heromobile5.jpg"
                              layout="responsive"
                              width={"400"}
                              height={"449"}
                              className=""
                            />
                          </div>
                          <div className="col-md-4">
                            <Image
                              src="/heromobile6.jpg"
                              layout="responsive"
                              width={"400"}
                              height={"449"}
                              className=""
                            />
                          </div>
                          <div className="col-md-4">
                            <Image
                              src="/heromobile7.jpg"
                              layout="responsive"
                              width={"400"}
                              height={"449"}
                              className=""
                            />
                          </div>
                        </div>
                        <div className="T4">{translate("follow")}</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
