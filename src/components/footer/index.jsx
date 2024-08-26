import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <>
      {/* Start Footer */}
      <footer className="main-footer footer-dark bg-cover bg-center relative">
        <div className="container mx-auto max-w-none pt-4">
          <section style={{ backgroundColor: "#000000" }}>
            <div className="footer-sec">
              <div className="footer-spacing">
                <div className="flex flex-wrap w-full md:-m-4 w-full">
                  <div className="p-4 w-full md:w-3/12">
                    <img
                      src="../../img/logo_white.png"
                      alt="TresCorp Logo"
                      className="h-20 w-100"
                    />
                    <p style={{ color: "#ffffff" }} className="mt-2">
                      Revolutionizing Human Resource Automation
                      with AI
                    </p>
                    <p
                      style={{ color: "#ffffff", fontWeight: "bolder" }}
                      className="mt-2"
                    >
                      Connect With Us
                    </p>
                    <ul className="ekit_social_media">
                      {" "}
                      <li className="elementor-repeater-item">
                        {" "}
                        <a
                          href="#"
                          aria-label="Facebook"
                          className="round-circle"
                        >
                          {" "}
                          <svg
                            aria-hidden="true"
                            className="e-font-icon-svg e-fab-facebook-f"
                            viewBox="0 0 320 512"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                              fill: "#ffffff",
                              width: "15px",
                              height: "15px",
                            }}
                          >
                            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                          </svg>
                        </a>
                      </li>{" "}
                      <li className="elementor-repeater-item">
                        {" "}
                        <a href="#" aria-label="Twitter" className="twitter">
                          {" "}
                          <svg
                            aria-hidden="true"
                            className="e-font-icon-svg e-fab-twitter"
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                              fill: "#ffffff",
                              width: "15px",
                              height: "15px",
                            }}
                          >
                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                          </svg>
                        </a>
                      </li>{" "}
                      <li className="elementor-repeater-item">
                        {" "}
                        <a href="#" aria-label="LinkedIn" className="in">
                          {" "}
                          <svg
                            aria-hidden="true"
                            className="e-font-icon-svg e-fab-linkedin-in"
                            viewBox="0 0 448 512"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                              fill: "#ffffff",
                              width: "15px",
                              height: "15px",
                            }}
                          >
                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                          </svg>
                        </a>
                      </li>{" "}
                      <li className="elementor-repeater-item">
                        {" "}
                        <a
                          href="#"
                          aria-label="Instagram"
                          className="instagram"
                        >
                          {" "}
                          <svg
                            aria-hidden="true"
                            className="e-font-icon-svg e-fab-instagram"
                            viewBox="0 0 448 512"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                              fill: "#ffffff",
                              width: "15px",
                              height: "15px",
                            }}
                          >
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 w-full md:w-9/12">
                  <div className="flex flex-wrap p-4 lg:-m-4">
                    <div className="p-4 md:w-3/12">
                    <h2 className="text-white text-xs leading-9 font-extrabold lg:text-xl">
                    Company
                    </h2>
                    <ul className="footer-links">
                      <li className="li-pad">
                        <a href="/" className="text-gray">
                        We're hiring
                        </a>
                      </li>
                      <li className="li-pad">
                        <a href="/about-us" className="text-gray ">
                        Mission
                        </a>
                      </li>
                      <li className="li-pad">
                        <a href="/team" className="text-gray ">
                        Slack Community
                        </a>
                      </li>
                      <li className="li-pad">
                        <a href="/our-service" className="text-gray ">
                        Book a demo
                        </a>
                      </li>
                      <li className="li-pad">
                        <a href="/products" className="text-gray ">
                        Contact us
                        </a>
                      </li>
                      <li className="li-pad">
                        <a href="/contact-us" className="text-gray ">
                        Request a feature
                        </a>
                      </li>
                      <li className="li-pad">
                        <a href="/contact-us" className="text-gray ">
                        Our customers
                        </a>
                      </li>
                      <li className="li-pad">
                        <a href="/contact-us" className="text-gray ">
                        FAQs
                        </a>
                      </li>
                    </ul>
                    </div>
                    <div className="p-4 md:w-3/12">
                    <h2 className="text-white text-xs leading-9 font-extrabold lg:text-xl">
                    Product
                    </h2>
                    <ul className="footer-links">
                      <li className="li-pad">
                        <a href="/" className="text-gray">
                        Interview as a Service
                        </a>
                      </li>
                      <li className="li-pad">
                        <a href="/about-us" className="text-gray ">
                        Features
                        </a>
                      </li>
                      <li className="li-pad">
                        <a href="/team" className="text-gray ">
                        Profiles
                        </a>
                      </li>
                      <li className="li-pad">
                        <a href="/our-service" className="text-gray ">
                        Testimonials
                        </a>
                      </li>
                      <li className="li-pad">
                        <a href="/products" className="text-gray ">
                        Pricing
                        </a>
                      </li>
                      <li className="li-pad">
                        <a href="/contact-us" className="text-gray ">
                        Integrations
                        </a>
                      </li>
                      <li className="li-pad">
                        <a href="/contact-us" className="text-gray ">
                        Status
                        </a>
                      </li>
                      <li className="li-pad">
                        <a href="/contact-us" className="text-gray ">
                        Changelogs
                        </a>
                      </li>
                    </ul>
                    </div>
                    <div className="p-4 md:w-3/12">
                    <h2 className="text-white text-xs leading-9 font-extrabold lg:text-xl">
                    Resources
                    </h2>
                    <ul className="footer-links">
                      <li className="li-pad">
                        <a href="/" className="text-gray">
                        Candidates Starter Guide
                        </a>
                      </li>
                      <li className="li-pad">
                        <a href="/about-us" className="text-gray ">
                        Case studies
                        </a>
                      </li>
                      <li className="li-pad">
                        <a href="/team" className="text-gray ">
                        Blog
                        </a>
                      </li>
                      <li className="li-pad">
                        <a href="/our-service" className="text-gray ">
                        Glossary
                        </a>
                      </li>
                      <li className="li-pad">
                        <a href="/products" className="text-gray ">
                        Job Description
                        </a>
                      </li>
                      <li className="li-pad">
                        <a href="/contact-us" className="text-gray ">
                        Product roadmap
                        </a>
                      </li>
                      <li className="li-pad">
                        <a href="/contact-us" className="text-gray ">
                        Sitemap
                        </a>
                      </li>
                    </ul>
                    </div>
                    <div className="p-4 md:w-3/12">
                    <h2 className="text-white text-xs leading-9 font-extrabold lg:text-xl">
                    Solutions
                    </h2>
                    <ul className="footer-links">
                      <li className="li-pad">
                        <a href="/" className="text-gray">
                        Startups
                        </a>
                      </li>
                      <li className="li-pad">
                        <a href="/about-us" className="text-gray ">
                        IT services
                        </a>
                      </li>
                      <li className="li-pad">
                        <a href="/team" className="text-gray ">
                        IT staffing
                        </a>
                      </li>
                      <li className="li-pad">
                        <a href="/our-service" className="text-gray ">
                        Campuses
                        </a>
                      </li>
                      <li className="li-pad">
                        <a href="/products" className="text-gray ">
                        Coding Schools
                        </a>
                      </li>
                    </ul>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Start Footer Logo and Copy Rights */}
          <section style={{ backgroundColor: "rgb(191 161 61)" }}>
            <div className="flex flex-col md:flex-row items-center p-6 ">
              <div className="text-center text-white md:text-right ">
                © 2024 Personage.Ai - All Rights Reserved
              </div>
            </div>
            {/* End Footer Logo and Copy Rights */}
          </section>
        </div>
      </footer>
      {/* /.End Footer */}
    </>
  );
};

export default Footer;
