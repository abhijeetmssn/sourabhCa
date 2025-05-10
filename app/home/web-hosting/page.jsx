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
            <h2 className="main-title tx-dark">Quality Services</h2>
          </div>
          <div className="row">
            <Service2 />
          </div>
        </div>
      </div>

      <div className="fancy-feature-twentyFive mt-170 lg-mt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-9 m-auto" data-aos="fade-up">
              <div
                className="title-style-seven text-center pb-120 lg-pb-50"
                data-aos="fade-up"
              >
                <h2 className="main-title fw-bold tx-dark">
                  Got questions? <br /> Well, we&lsquo;ve got
                  <span className="position-relative d-inline-block">
                    answers <img src="/images/shape/shape_99.svg" alt="" />
                  </span>
                </h2>
              </div>
              {/* /.title-style-seven */}
            </div>
            <div className="col-xl-9 col-lg-10 m-auto " data-aos="fade-up">
              <Faq />

              <div className="text-center  mt-80 lg-mt-50">
                <h3 className="fw-bold tx-dark mb-30">
                  Didn’t get your answer?
                </h3>
                <Link href="/contact/contact-v3" className="btn-fourteen fw-500 tran3s">
                  Submit your question
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
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
