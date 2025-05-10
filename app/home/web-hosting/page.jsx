import Link from "next/link";

import CopyrightFooter2 from "@/components/footer/CopyrightFooter2";
import Footer2 from "@/components/footer/Footer2";
import NewsLetter from "@/components/footer/NewsLetter";
import Header2 from "@/components/header/Header2";
import BannerSubscribe from "@/components/home-page/home-2/BannerSubscribe";
import FancyBanner from "@/components/home-page/home-2/FancyBanner";
import FancyBlock from "@/components/home-page/home-2/FancyBlock";
import Faq from "@/components/home-page/home-2/Faq";
import Hero from "@/components/home-page/home-2/Hero";
import IncludedPlan from "@/components/home-page/home-2/IncludedPlan";
import Partner from "@/components/home-page/home-2/Partner";
import Pricing from "@/components/home-page/home-2/Pricing";
import Testimonial from "@/components/home-page/home-2/Testimonial";
import CallToActions from "@/components/feature-web-hosting/CallToActions";
import Service2 from "@/components/services/Service2";
export const metadata = {
  title: "CA || HomeS",
};
const WebHosting = () => {
  return (
    <>
      {/* <!--  =============================================
      Theme Header2 Menu
      ============================================== 	--> */}
      <Header2 />

      {/* <!-- 
			=============================================
				Theme Hero Banner
			============================================== 
			--> */}
      <Hero />



      <div className="fancy-feature-fiftyThree position-relative pt-150 pb-200 lg-pt-80 lg-pb-110">
        <div className="container">
          <div
            className="title-style-eleven text-center pb-50 lg-pb-20"
            data-aos="fade-up"
          >
            <h2 className="main-title tx-dark">Our Services</h2>
          </div>
          <div className="row">
            <Service2 />
          </div>
        </div>
      </div>
      {/* /.fancy-feature-twentyFive */}

      {/*
			=====================================================
				Fancy Short Banner Ten
			=====================================================
			*/}
      {/* <CallToActions /> */}
      {/* /.fancy-short-banner-ten */}

      {/*
		=====================================================
		Footer
		=====================================================
		*/}
      <div className="footer-style-seven p-30 theme-basic-footer">

        {/* /.bg-wrapper */}
        <CopyrightFooter2 />
        {/* /.bottom-footer */}
      </div>
      {/* /.footer-style-seven */}
    </>
  );
};

export default WebHosting;
