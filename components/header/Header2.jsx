"use client";

import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import Link from "next/link";
import Image from "next/image";

const DefaulHeader = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }

  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      <div className="banner fixed w-100 text-center py-2 px-3 text-white fw-semibold">
        📞 Call us now: <a href="tel:1234567890" className="text-white">123-456-7890</a>
      </div>

      <header
        className={`theme-main-menu sticky-menu theme-menu-six`}
      >
        <div className="inner-content position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo order-lg-0">
              <Link href="/" className="d-block">
                <Image
                  src="/images/logo/logo.png"
                  alt="logo"
                  width={192}
                  height={62}
                />
              </Link>
            </div>
            {/* End logo */}
            
            {/* /.right-widget */}
            <MainMenu />
          </div>
        </div>
        {/* /.inner-content */}
      </header>
    </>
  );
};

export default DefaulHeader;
