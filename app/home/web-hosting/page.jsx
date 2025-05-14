import CopyrightFooter2 from "@/components/footer/CopyrightFooter2";
import Header2 from "@/components/header/Header2";
import Hero from "@/components/home-page/home-2/Hero";
import Service2 from "@/components/services/Service2";
import AboutUsV1 from "@/app/pages-menu/about-us-v1/page";
export const metadata = {
  title: "Home",
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

      <AboutUsV1 />
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
