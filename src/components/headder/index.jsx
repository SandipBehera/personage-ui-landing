import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../index.css";

export const Headders = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <nav
        className={`transition-colors duration-300 ${
          isScrolled
            ? "bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg"
            : "bg-white"
        }`}
      >
        <div className=" bg-black mx-auto max-w-7xl px-4 sm:px-6 lg:px-36 h-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-white p-2">
              <a
                href="/"
                className="text-white pr-4 border-r border-white mr-4 mb-2 md:mb-0"
              >
                Automate the Interviews &nbsp;
                <i className="fa-solid fa-square-up-right"></i>
              </a>
              <a
                href="/"
                className="text-white pr-4 border-r border-white mr-4 mb-2 md:mb-0 hidden sm:inline-block"
              >
                Assessment platform &nbsp;
                <i className="fa-solid fa-square-up-right"></i>
              </a>
              <a
                href="/"
                className="text-white pr-4 border-r border-white mr-4 mb-2 md:mb-0 hidden sm:inline-block"
              >
                Mock Interviews &nbsp;
                <i className="fa-solid fa-square-up-right"></i>
              </a>
            </div>
            <div className="flex flex-wrap items-baseline space-x-4 mt-2 md:mt-0 hidden sm:flex">
              <a
                href="/"
                className="text-white pr-4 border-r border-white mr-4"
              >
                Contact Us
              </a>
              <a href="/" className="text-white">
                Login
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 container">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/">
                  <img
                    className={`h-14 w-100`}
                    src="../../img/personage_logo.png"
                    alt="Personage"
                    style={{
                      display: `${isMobileMenuOpen ? "none" : "block"}`,
                    }}
                  />
                </a>
              </div>
              <div className="hidden md:flex ml-8 items-baseline space-x-4">
                <a
                  href="/"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    isScrolled ? "nav-text" : "text-gray-300 hover:nav-text"
                  }`}
                  aria-current="page"
                >
                  Home{" "}
                </a>
                <a
                  href="/about-us"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    isScrolled ? "nav-text" : "text-gray-300 hover:nav-text"
                  }`}
                >
                  {" "}
                  Solutions &nbsp;<i class="fa-solid fa-chevron-down"></i>
                </a>
                <a
                  href="/team"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    isScrolled ? "nav-text" : "text-gray-300 hover:nav-text"
                  }`}
                >
                  Products &nbsp;<i class="fa-solid fa-chevron-down"></i>
                </a>
                <a
                  href="/our-service"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    isScrolled ? "nav-text" : "text-gray-300 hover:nav-text"
                  }`}
                >
                  Integration &nbsp;<i class="fa-solid fa-chevron-down"></i>
                </a>
                <a
                  href="/products"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    isScrolled ? "nav-text" : "text-gray-300 hover:nav-text"
                  }`}
                >
                  Pricing
                </a>
              </div>
              <div className="hidden md:flex ml-36 items-baseline space-x-4">
                <button className="bg-transparent text-black border  px-10 py-2 text-sm font-medium">
                  Request Demo
                </button>
                <button className="bg-black text-white border  px-6 py-2 text-sm font-medium">
                  Sign Up
                </button>
              </div>
            </div>
            <div className="-mr-2 nav_button_custom flex md:hidden">
              <button
                type="button"
                className={`relative inline-flex items-center justify-center rounded-full p-2 text-gray-400 hover:bg-gray-700 hover:nav-text  ${
                  isScrolled ? "bg-white" : "bg-white"
                }`}
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`h-6 w-6 ${
                    isMobileMenuOpen ? "hidden" : "block"
                  } md:h-8 md:w-8`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className={`h-6 w-6 ${
                    isMobileMenuOpen ? "block" : "hidden"
                  } md:h-8 md:w-8`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar for mobile view */}
      <div
        className={`fixed inset-0 z-40 flex justify-end ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "bg-gray-800 opactiy-90" : "bg-gray-800"
        }`}
      >
        <div className="flex-1" onClick={toggleMobileMenu}>
          <button
            type="button"
            className={`relative inline-flex items-center justify-center rounded-full p-2 text-gray-400 hover:bg-gray-700 hover:nav-text  ${
              isScrolled ? "bg-transparent" : "bg-transparent"
            }`}
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <svg
              className={`h-6 w-6 ${
                isMobileMenuOpen ? "block" : "hidden"
              } md:h-8 md:w-8`}
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          className="w-64 h-full p-4 dynamic-margin"
          style={{ backgroundColor: "white" }}
        >
          <div className="flex items-center justify-end">
            <div className="flex-shrink-0">
              <a href="/">
                <img
                  className="h-20 w-100"
                  src="../../img/personage_logo.png"
                  alt="Trescorp"
                />
              </a>
            </div>
          </div>
          <div className="space-y-1 px-2 pb-3 pt-10 sm:px-3">
            <a
              href="/"
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                location.pathname === "/"
                  ? "bg_yellow text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:nav-text"
              }`}
              aria-current={location.pathname === "/" ? "page" : undefined}
            >
              Home
            </a>
            <a
              href="/about-us"
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                location.pathname === "/about-us"
                  ? "bg_yellow text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:nav-text"
              }`}
            >
              Solutions
            </a>
            <a
              href="/team"
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                location.pathname === "/team"
                  ? "bg_yellow text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:nav-text"
              }`}
            >
              Products
            </a>
            <a
              href="/our-service"
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                location.pathname === "/our-service"
                  ? "bg_yellow text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:nav-text"
              }`}
            >
              Integration
            </a>
            <a
              href="/products"
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                location.pathname === "/products"
                  ? "bg_yellow text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:nav-text"
              }`}
            >
              Pricing
            </a>
            <a
              href="/contact-us"
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                location.pathname === "/contact-us"
                  ? "bg_yellow text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:nav-text"
              }`}
            >
              Contact Us
            </a>
          </div>
        </div>
        <style jsx>{`
          .dynamic-margin {
            margin-left: 82%;
          }
          @media (min-width: 280px) and (max-width: 768px) {
            .dynamic-margin {
              margin-left: 9%;
            }
          }
          @media (min-width: 768px) {
            .dynamic-margin {
              margin-left: 21%;
            }
          }
          @media (min-width: 771px) and (max-width: 1142px) {
            .dynamic-margin {
              margin-left: 60%;
            }
          }
          @media (min-width: 1144px) and (max-width: 1372px) {
            .dynamic-margin {
              margin-left: 70%;
            }
          }
        `}</style>
      </div>
    </div>
  );
};
