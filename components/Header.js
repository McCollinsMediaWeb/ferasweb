import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import useWindowDimensions from "@/hooks/useWindowDimensions";

import useMediaQuery from "@/hooks/useMediaQuery";
const Header = () => {
  const { height, width } = useWindowDimensions();
  const router = useRouter();
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.classList.add("PanelActivated");
    } else {
      document.body.classList.remove("PanelActivated");
    }
  }, [open]);

  return (
    <header>
      <div className="container">
        <div className="HeaderFlex">
          <div className="HeaderItem">
            <Link
              href={"/"}
              className={router.pathname == "/" ? "link1 active" : "link1"}
            >
              Home
            </Link>
          </div>
          <div className="HeaderItem">
            <Link href={"/aboutus"} className={router.pathname == "/aboutus" ? "link1 active" : "link1"}>
              About Us
            </Link>
          </div>
          <div className="HeaderItem">
            <Link href={"/ourmenu"} className={router.pathname == "/ourmenu" ? "link1 active" : "link1"}>
              Our Menu
            </Link>
          </div>
          <div className="HeaderItem LogoLink">
            <Link href={"/"} className="">
              <div className="HeroLogo">
                <Image
                  src="/feraslogo.png"
                  layout="responsive"
                  height={"135"}
                  width={"135"}
                  priority={true}
                  className=""
                />
              </div>
            </Link>
          </div>
          <div className="HeaderItem">
            <Link href={"/catering"} className={router.pathname == "/catering" ? "link1 active" : "link1"}>
              Catering
            </Link>
          </div>
          <div className="HeaderItem">
            <Link href={"/locations"} className={router.pathname == "/locations" ? "link1 active" : "link1"}>
              Locations
            </Link>
          </div>
          <div className="HeaderItem">
            <Link href={"/contactus"} className={router.pathname == "/contactus" ? "link1 active" : "link1"}>
              Contact Us
            </Link>
          </div>
          <div className="MenuClick" onClick={() => setOpen(true)}>
            <div className="menu1">&nbsp;</div>
          </div>
        </div>
      </div>
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
              <div className="ScrollPart">
                <div className="SideNavHeader">
                  Explore Our{" "}
                  <span className="CloseBtn" onClick={() => setOpen(false)}>
                    &nbsp;
                  </span>
                </div>
                <div className="SideNavMiddle">
                  <div className="SideNavLinks">
                    <div onClick={() => setOpen(false)}>
                      <Link
                        href={"/"}
                        className={
                          router.pathname == "/" ? "hover1 active" : "hover1"
                        }
                      >
                        Home
                      </Link>
                    </div>
                    <div onClick={() => setOpen(false)}>
                      <Link
                        href={"/aboutus"}
                        className={
                          router.pathname == "/about"
                            ? "hover1 active"
                            : "hover1"
                        }
                      >
                        About Us
                      </Link>
                    </div>
                    <div>
                      {" "}
                      <Link
                        href={"/ourmenu"}
                        className={
                          router.pathname == "/about"
                            ? "hover1 active"
                            : "hover1"
                        }
                      >
                        Our Menu
                      </Link>
                    </div>
                    <div onClick={() => setOpen(false)}>
                      <Link
                        href={"/catering"}
                        className={
                          router.pathname == "/reservation"
                            ? "hover1 active"
                            : "hover1"
                        }
                      >
                        Catering
                      </Link>
                    </div>
                    <div onClick={() => setOpen(false)}>
                      <Link
                        href={"/locations"}
                        className={
                          router.pathname == "/contact"
                            ? "hover1 active"
                            : "hover1"
                        }
                      >
                        Our Locations
                      </Link>
                    </div>
                    <div onClick={() => setOpen(false)}>
                      <Link
                        href={"/contactus"}
                        className={
                          router.pathname == "/contact"
                            ? "hover1 active"
                            : "hover1"
                        }
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="SideNavFooter">
                  {isDesktop && (
                    <div>
                      <div className="row HdrRow1">
                        <div className="col-md-4">
                          <Image
                            src="/heromobile1.jpg"
                            layout="responsive"
                            width={"400"}
                            height={"449"}
                            className=""
                          />
                        </div>
                        <div className="col-md-4">
                          <Image
                            src="/heromobile1.jpg"
                            layout="responsive"
                            width={"400"}
                            height={"449"}
                            className=""
                          />
                        </div>
                        <div className="col-md-4">
                          <Image
                            src="/heromobile1.jpg"
                            layout="responsive"
                            width={"400"}
                            height={"449"}
                            className=""
                          />
                        </div>
                      </div>
                      <div className="T4">
                        Follow us for mouthwatering food photos, special offers,
                        and a taste of our vibrant dining experience
                      </div>
                    </div>
                  )}
                  <div className="SocialBoxWrp">
                    <div className="socialItems">
                      <div className="SocialItem">
                        <a
                          href="https://www.instagram.com/sulmeae/"
                          target="_blank"
                        >
                          <span className="Icon instagram">&nbsp;</span>
                        </a>
                      </div>
                      <div className="SocialItem">
                        <a
                          href="https://www.facebook.com/Sulme.uae/"
                          target="_blank"
                        >
                          <span className="Icon facebook">&nbsp;</span>
                        </a>
                      </div>
                      {/* <div className="SocialItem">
                          <a href="#" target="_blank">
                            <span className="Icon twitter">&nbsp;</span>
                          </a>
                        </div>
                        <div className="SocialItem">
                          <a href="#" target="_blank">
                            <span className="Icon youtube">&nbsp;</span>
                          </a>
                        </div> */}
                      <div className="SocialItem">
                        <a href="#" target="_blank">
                          <span className="Icon whatsapp">&nbsp;</span>
                        </a>
                      </div>
                    </div>
                  </div>
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
