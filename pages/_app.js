import "../public/slick/slick.css";
import "../public/slick/slick-theme.css";
import "../styles/bootstrap.css";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   ReactGA.initialize("G-19J9CK82MF");
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, []);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false);
      }, 500);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    loading && (
      <div className="loadingMainDiv ">
        <div className="LoadingContent">
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
            //   src="/footerlogo1.jpg"
            //   layout="responsive"
            //   height={"268"}
            //   width={"272"}
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
          <div className="LoadingT1">Loading</div>
        </div>
      </div>
    )
  );
}
export default function App({ Component, pageProps }) {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck) {
        document.getElementsByTagName("body")[0].classList.add("StickyHeader");
      } else {
        document
          .getElementsByTagName("body")[0]
          .classList.remove("StickyHeader");
      }
    });
  });
  return (
    <>
      <div>
        <Header />
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <meta name="msapplication-TileColor" content="#1c2b60" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#1c2b60"></meta>
        </Head>
        <Loading />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
