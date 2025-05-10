"use client";

import Link from "next/link";
import {
  menuItems,
  pagesItems,
  portfolioItems,
  blogItems,
  contactItems,
} from "@/data/menu";

import Image from "next/image";
import { usePathname } from "next/navigation";

const MainMenu = () => {
  const pathname = usePathname();

  const isActive = (link) => {
    return pathname.replace(/\/\d+$/, "") === link.replace(/\/\d+$/, "");
  };

  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mt-3">
        <li className="d-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <Image
                  src="/images/logo/logo.png"
                  alt="logo"
                  width={95}
                  height={30}
                />
              </Link>
            </div>
          </li>

          {/* End li */}

          <li className="nav-item dropdown mega-dropdown-md">
            <Link
              href="/" // Your desired route
              className={
                menuItems.some((menu) =>
                  menu.items.some((elm) => isActive(elm.link))
                )
                  ? "nav-link active-menu"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              href="/pages-menu/about-us-v4"
              className={isActive("/pages-menu/about-us-v4") ? "nav-link active-menu" : "nav-link"}
            >
              About us
            </Link>
          </li>
          
          <li className="nav-item">
            <a
              className={
                contactItems.some((elm) => isActive(elm.link))
                  ? "nav-link active-menu"
                  : "nav-link"
              }
              href="/contact/contact-v3"
            >
              Contact
            </a>
          </li>
          {/* End li (contact) */}
        </ul>
        {/* End ul */}

        {/* Mobile Content */}
        
        {/* /.mobile-content */}
      </div>
    </nav>
  );
};

export default MainMenu;
