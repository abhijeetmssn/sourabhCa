"use client";
import Link from "next/link";

import CopyrightFooter2 from "@/components/footer/CopyrightFooter2";
import Footer2 from "@/components/footer/Footer2";
import NewsLetter from "@/components/footer/NewsLetter";
import Header2 from "@/components/header/Header2";
import BlockContact3 from "@/components/contact/BlockContact3";
import ContactForm3 from "@/components/contact/ContactForm3";
import { ToastContainer, toast } from 'react-toastify';

const ContactV3 = () => {
  const handleShowToast = (message, error) => {
    if (error) {
      toast.error(message, {
        closeButton: false
      });
    } else {
      toast.success(message, {
        closeButton: false
      });
    }
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000} // Adjust this as needed
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{
          zIndex: 2147483647,
          position: "fixed",
          top: "1rem",
          right: "1rem"
        }}
      />
      <Header2 />
      
      <div className="contact-section-three p-30">
        <div className="address-wrapper zn2 position-relative pt-180 lg-pt-150 mb-150 lg-mb-80">
          <div className="container">
            <div className="title-style-seven text-center" data-aos="fade-up">
              <h2 className="main-title fw-bold tx-dark">
                Get in
                <span className="position-relative d-inline-block">
                  Touch
                </span>
              </h2>
            </div>
            {/* /.title-style-seven */}

            <div className="row">
              <div className="col-xxl-6 col-xl-7 m-auto">
                <p
                  className="mt-45 lg-mt-20 mb-70 lg-mb-30 fs-20 lh-lg text-center"
                  data-aos="fade-up"
                >
                  Want to get in touch? We’d love to hear from you. Here’s how
                  you can reach us.
                </p>
              </div>
            </div>

            <div className="row justify-content-center">
              {/* <BlockContact3 /> */}
            </div>
          </div>
          {/* End container */}
        </div>
        {/* /.address-wrapper */}

        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div
                className="title-style-one text-center mb-60 lg-mb-40"
                data-aos="fade-up"
              >
                <h2 className="main-title fw-500 tx-dark m0">
                  Drop us a line for any kind of info.
                </h2>
              </div>
            </div>
            {/* End .col-6 */}

            <div className="col-xxl-11 m-auto">
              <div className="form-style-four" data-aos="fade-up">
                <ContactForm3 handleShowToast={handleShowToast}/>
              </div>
              {/* /.form-style-four */}
            </div>
          </div>
        </div>
      </div>
      {/* /.contact-section-three */}
      {/*
			=====================================================
				Fancy Short Banner Ten
			=====================================================
			*/}
      
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

export default ContactV3;
