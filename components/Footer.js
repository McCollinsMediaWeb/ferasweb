import Link from "next/link";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useRouter } from "next/router";
const Footer = () => {
  const router = useRouter();
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return (
    <div>
      <footer>
        <div className="container color-fff pd-common">
          <div className="row">
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
                      src="/footerlogo1.jpg"
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
            <div className="col-md-6">
              <div className="FtrT1">USEFUL LINKS</div>
              <div className="FooterLinksBox">
                <div className="row">
                  <div className="col-md-6">
                    <Link href={"/"}>Home</Link>
                  </div>
                  <div className="col-md-6">
                    <Link href={"/aboutus"}>About Us</Link>
                  </div>
                  <div className="col-md-6">
                    <Link href={"/restaurantmenu"}>restaurant Menu</Link>
                  </div>
                  <div className="col-md-6">
                    <Link href={"/sweetmenu"}>Sweets Menu</Link>
                  </div>
                  <div className="col-md-6">
                    <Link href={"/catering"}>Catering</Link>
                  </div>
                  <div className="col-md-6">
                    <Link href={"/locations"}>Our Locations</Link>
                  </div>
                  <div className="col-md-6">
                    <Link href={"/contactus"}>Contact Us</Link>
                  </div>
                  <div className="col-md-6">
                    <Link href={"/customerreviews"}>Customer Reviews</Link>
                  </div>
                  <div className="col-md-6">
                    <Link href={"/"}>Privacy & Policy</Link>
                  </div>
                  <div className="col-md-6">
                    <Link href={"/"}>Terms & Conditions</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="FtrT1">Connect with us</div>
              <div className="FtrT2 color-fff">
                Discover the daily extravaganza of deliciousness! Follow our
                social media for a delectable journey through the irresistible
                flavors served from the highest quality ingredients.
              </div>
              <div className="FtrSocialMedia">
                <div className="FtrSocialMediaFlex">
                  <a href="#">
                    <span className="FtrSocialIcon instagram">&nbsp;</span>
                  </a>
                  <a href="#">
                    <span className="FtrSocialIcon facebook">&nbsp;</span>
                  </a>
                  <a href="#">
                    <span className="FtrSocialIcon linkedin">&nbsp;</span>
                  </a>
                  <a href="#">
                    <span className="FtrSocialIcon twitter">&nbsp;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="FooterBottomWrap">
        <div className="container">
          <div className="FooterBottom">
            <div>© 2023 FerasSweets. All Rights Reserved.</div>
            <div>
              <a href="https://www.mccollinsmedia.com/" target="_blank">
                Designed & Developed by McCollins
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
                  <div class="text">Home</div>
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
                  <div class="text">Menu</div>
                </Link>
              </li>
              <li
                className={router.pathname == "/catering" ? "activeLink" : ""}
              >
                <Link href={"/catering"}>
                  <div class="icon">
                    <div class="FtrIconH order">&nbsp;</div>
                  </div>
                  <div class="text">Catering</div>
                </Link>
              </li>
              <li
                className={router.pathname == "/locations" ? "activeLink" : ""}
              >
                <Link href={"/locations"}>
                  <div class="icon">
                    <div class="FtrIconH location">&nbsp;</div>
                  </div>
                  <div class="text">Locations</div>
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
