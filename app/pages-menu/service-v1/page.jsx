import DefaultFooter from "@/components/footer/DefaultFooter";
import Service1 from "@/components/services/Service1";
import Header2 from "@/components/header/Header2";
export const metadata = {
  title: "Service V1 || Jano - Creative Multipurpose React NextJS Template",
};
const ServiceV1 = () => {
  const features = [
    { text: "Amazing communication." },
    { text: "Best trending designing experience." },
    { text: "Email & Live chat." },
  ];

  const starRating = Array(5)
    .fill()
    .map((_, index) => (
      <li key={index}>
        <i className="fa-solid fa-star" />
      </li>
    ));

  return (
    <>
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <Header2 />
      {/* 
			=============================================
				Feature Section Fifty One
			============================================== 
			*/}
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-lg-6" data-aos="fade-right">
              <div className="title-style-five mb-45 md-mb-10">
                <h2 className="main-title fw-500 tx-dark">
                  Our Services Offerings.
                </h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row gx-xxl-5">
            <Service1 />
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-fiftyOne */}

      {/* 
			=============================================
				Feature Section Thirty Seven
			============================================== 
			*/}
     
      {/* /.fancy-feature-thirtySeven */}

      {/*
			=====================================================
				Feedback Section Eleven
			=====================================================
			*/}
      
      {/* /.feedback-section-eleven */}

      {/* 
			=============================================
				Feature Section Thirty Eight
			============================================== 
			*/}
      
      {/* /.partner-section-six */}

      {/*
			=====================================================
				Fancy Short Banner Sixteen
			=====================================================
			*/}
      
      {/* /.fancy-short-banner-sixteen */}

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default ServiceV1;
