import DefaultFooter from "@/components/footer/DefaultFooter";
import Partners from "@/components/services/Partners";
import Faq from "@/components/services/Faq";
import Testimonial from "@/components/home-page/home-3/Testimonial";
import Block from "@/components/services/Block";
import Team3 from "@/components/team/Team3";
import Link from "next/link";
import VideoBlock from "@/components/about/VideoBlock";
import Counter from "@/components/about/Counter";

const AboutUsV1 = () => {

  return (
    <>
      <div className="fancy-feature-fiftyOne">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-five mb-65 md-mb-40">
                <h2 className="main-title fw-500 tx-dark">
                  About us
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-lg-9 ms-auto">
              <div className="ps-xxl-5" data-aos="fade-left">
                <p className="text-lg tx-dark text-center lh-lg px-3 md:px-5" data-aos="fade-up">
                  At <strong>Trusted Transactions</strong>, we are dedicated to serving individuals — whether salaried, self-employed, or incorporated small businesses — with services including: CRA tax return filing, accounting, bookkeeping, payroll, financial statement compilations, HST filing, WSIB filing, and incorporated business registrations.
                  <br /><br />
                  We also provide valuable insights into tax planning, and our services remain highly affordable.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
      </div> 
    </>
  );
};

export default AboutUsV1;
