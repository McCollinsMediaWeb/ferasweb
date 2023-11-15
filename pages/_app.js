
import "../public/slick/slick.css";
import "../public/slick/slick-theme.css";
import "../styles/bootstrap.css";
import "../styles/globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import '@/styles/globals.css';
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
        <Image
                  src="/feraslogo.png"
                  layout="responsive"
                  height={"135"}
                  width={"135"}
                  priority={true}
                  className=""
                />
                <div className="LoadingT1">Loading....</div>
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
  return <>
    <div>
      <Header/>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <Loading />
    <Component {...pageProps} />
    <Footer/>
    </div>
  </>
}
