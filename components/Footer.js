import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container color-fff pd-common">
          <div className="row">
            <div className="col-md-3">
              <div className="FtrLogoBx">
                <Link href={"/"} className="">
                  <Image
                    src="/footerlogo.png"
                    layout="responsive"
                    height={"268"}
                    width={"272"}
                    priority={true}
                    className=""
                  />
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
                    <Link href={"/restaurentmenu"}>Restaurent Menu</Link>
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
              <div className="FtrT2 color-fff">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</div>
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
            <div>© 2023 FirasSweets. All Rights Reserved.</div>
            <div>
              <a href="https://www.mccollinsmedia.com/" target="_blank">
                Designed & Developed by McCollins
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
