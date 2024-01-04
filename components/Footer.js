import Link from "next/link";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
const Footer = () => {
  const router = useRouter();
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const { t: translate } = useTranslation("common");
  return (
    <div>
      <footer>
        <div className="container color-fff pd-common">
          <div className="row">
            {isDesktop && (
              <div className="col-md-3">
                <div className="FtrLogoBx">
                  <Link href={"/"} className="">
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
                      <Image
                        src="/icons/ferassweet.png"
                        layout="responsive"
                        height={"268"}
                        width={"272"}
                        priority={true}
                        className=""
                      />
                    )}
                  </Link>
                </div>
              </div>
            )}
            <div className="col-md-6">
              <div className="FtrT1">{translate("usefull")}</div>
              <div className="FooterLinksBox">
                <div className="row">
                  <div className="col-md-6">
                    <Link href={"/"}>{translate("home")}</Link>
                  </div>
                  <div className="col-md-6">
                    <Link href={"/aboutus"}>{translate("about")}</Link>
                  </div>
                  <div className="col-md-6">
                    <Link href={"/restaurantmenu"}>
                      {translate("restaurant")}
                    </Link>
                  </div>
                  <div className="col-md-6">
                    <Link href={"/sweetmenu"}>{translate("sweets")}</Link>
                  </div>
                  <div className="col-md-6">
                    <Link href={"/catering"}>{translate("catering")}</Link>
                  </div>
                  <div className="col-md-6">
                    <Link href={"/locations"}>{translate("ourlocations")}</Link>
                  </div>
                  <div className="col-md-6">
                    <Link href={"/contactus"}>{translate("contact")}</Link>
                  </div>
                  <div className="col-md-6">
                    <Link href={"/customerreviews"}>
                      {translate("customerR")}
                    </Link>
                  </div>
                  <div className="col-md-6">
                    <Link href={"/"}>{translate("pp")}</Link>
                  </div>
                  <div className="col-md-6">
                    <Link href={"/"}>{translate("tc")}</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="FtrT1">{translate("connectus")}</div>
              <div className="FtrT2 color-fff">{translate("discover")}</div>
              <div className="FtrSocialMedia">
                <div className="FtrSocialMediaFlex">
                  <a href="#">
                    <span className="FtrSocialIcon instagram">&nbsp;</span>
                  </a>
                  <a href="#">
                    <span className="FtrSocialIcon facebook">&nbsp;</span>
                  </a>
                  <a href="#">
                    <span className="FtrSocialIcon tiktok">&nbsp;</span>
                  </a>
                  <a href="#">
                    <span className="FtrSocialIcon youtube">&nbsp;</span>
                  </a>
                  {/* <a href="#">
                    <span className="FtrSocialIcon linkedin">&nbsp;</span>
                  </a>
                  <a href="#">
                    <span className="FtrSocialIcon twitter">&nbsp;</span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="FooterBottomWrap">
        <div className="container">
          <div className="FooterBottom">
            <div>{translate("aalRight")}</div>
            <div>
              <a href="https://www.mccollinsmedia.com/" target="_blank">
                {translate("mcCollins")}
              </a>
            </div>
          </div>
        </div>
      </div>
      {!isDesktop && (
        <div class="halo-sticky-toolbar-mobile">
          <div class="bottom-bar">
            <ul class="bottom-bar--list">
              <li className={router.pathname == "/" ? "activeLink" : ""}>
                <Link href={"/"}>
                  <div class="icon">
                    <div class="FtrIconH home">&nbsp;</div>
                  </div>
                  <div class="text">{translate("home")}</div>
                </Link>
              </li>
              <li
                className={
                  router.pathname == "/restaurantmenu" ? "activeLink" : ""
                }
              >
                <Link href={"/restaurantmenu"}>
                  <div class="icon">
                    <div class="FtrIconH reserve">&nbsp;</div>
                  </div>
                  <div class="text">{translate("restaurant")}</div>
                </Link>
              </li>
              <li
                className={router.pathname == "/catering" ? "activeLink" : ""}
              >
                <Link href={"/catering"}>
                  <div class="icon">
                    <div class="FtrIconH order">&nbsp;</div>
                  </div>
                  <div class="text">{translate("catering")}</div>
                </Link>
              </li>
              <li
                className={router.pathname == "/locations" ? "activeLink" : ""}
              >
                <Link href={"/locations"}>
                  <div class="icon">
                    <div class="FtrIconH location">&nbsp;</div>
                  </div>
                  <div class="text">{translate("locations")}</div>
                </Link>
              </li>
              <li>
                <a href="tel:+971565518844">
                  <div class="icon">
                    <div class="FtrIconH whatsapp">&nbsp;</div>
                  </div>
                  <div class="text">WhatsApp</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
