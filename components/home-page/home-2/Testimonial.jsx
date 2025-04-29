"use client";

import React, { useRef } from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "Our business has grown significantly thanks to their financial expertise. From tax planning to monthly audits, our CA has been a strategic partner in every sense. Highly recommended!",
      author: "Rashed ka.",
      location: "Canada",
    },
    {
      quote:
        "We rely on our CA not just for compliance, but for clarity. From funding advice to ESOP structuring, their insights have saved us time, money, and headaches.",
      author: "Zubayer Hasan",
      location: "Canada",
    },
  ];

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    arrows: true,
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-9 col-md-10 mx-auto">
          <Slider {...settings} ref={sliderRef}>
            {testimonials.map((testimonial, index) => (
              <div className="item" key={index}>
                <div className="feedback-block-six text-center">
                  <p className="text-white mb-65 lg-mb-50">
                    {testimonial.quote}
                  </p>
                  <h4 className="text-white d-inline-block position-relative">
                    {testimonial.author}{" "}
                    <span className="fw-light">{testimonial.location}</span>
                  </h4>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <ul className="slider-arrows slick-arrow-four sm-mt-40 d-flex justify-content-center style-none">
        <li
          className="prev_s2 slick-arrow tran3s"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <i className="bi bi-arrow-left" />
        </li>
        <li
          className="next_s2 slick-arrow tran3s"
          onClick={() => sliderRef.current.slickNext()}
        >
          <i className="bi bi-arrow-right" />
        </li>
      </ul>
    </div>
  );
};

export default Testimonial;
