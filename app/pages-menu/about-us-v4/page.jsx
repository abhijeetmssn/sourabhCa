import React from "react";
import Header2 from "@/components/header/Header2";
import CopyrightFooter2 from "@/components/footer/CopyrightFooter2";

export const metadata = {
  title: "About Us",
};
const AboutUsV4 = () => {
  return (
    <>
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <Header2 />
      

      <div
        className="fancy-feature-fiftyNine mt-140 "
        data-aos="fade-up"
      >
        <div className="container">

          {/* End title */}
          <div className="row">
            <div className="col-xl-9 m-auto">
              <h2 className="text-center fw-bold mb-4">About Us</h2>

              <p className="text-lg tx-dark text-center lh-lg px-3 md:px-5" data-aos="fade-up">
                <strong>Trusted Transactions Consultants Inc.</strong> is a family-run practice led by qualified CPAs, offering professional tax and accounting solutions to both individuals and corporate clients across Canada. We specialize in comprehensive tax preparation services tailored for the Canadian landscape.
              </p>

              <p className="text-lg tx-dark text-center lh-lg mt-4 px-3 md:px-5" data-aos="fade-up">
                Our team is committed to supporting individuals and small businesses with services including: <em>Accounting, Bookkeeping, Payroll, Financial Statements, HST Filing, WSIB Filing, Business Registrations,</em> and <em>Taxation</em> (Personal, Small Business, or Corporations).
              </p>

              <p className="text-lg tx-dark text-center lh-lg mt-4 px-3 md:px-5" data-aos="fade-up">
                We deliver reliable expertise on tax matters, and our services remain competitively priced and accessible.
              </p>

              <p className="text-lg tx-dark text-center lh-lg mt-4 px-3 md:px-5" data-aos="fade-up">
                Follow us on our social media channels for valuable insights into financial management and planning.
              </p>
            </div>
          </div>
          {/* End .row */}
        </div>
      </div>
      <div className="footer-style-seven p-30 theme-basic-footer">

        {/* /.bg-wrapper */}
        <CopyrightFooter2 />
        {/* /.bottom-footer */}
      </div>
      {/* /.footer-style-seven */}

    </>
  );
};

export default AboutUsV4;
