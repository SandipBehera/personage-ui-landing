import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import "../index.css";
import FaderComponent from "../components/fadder";
import Globe from "../components/globe";
import CardGrid from "../components/cards";

const HomeComponent = () => {
    const images = [
        { src: "../../img/step1.png", label: "Select profile & template to request interviewer" },
        { src: "../../img/step2.png", label: "Wait for the interview to be happen" },
        { src: "../../img/step3.png", label: "Make informed decision with report" },
      ];
      const tabs = [
        {tab_name:"Create_Requesition", name: 'Create Requisition', icon: 'fa-file-contract', color: '#4ec346' },
        {tab_name:"Upload_Resumes", name: 'Upload Resumes', icon: 'fa-file-pdf', color: '#e66d0a' },
        {tab_name:"AI_Screening", name: 'AI Screening', icon: 'fa-robot', color: '#0b55d5' },
        {tab_name:"Download_Reports", name: 'Download Reports', icon: 'fa-download', color: '#09e8ec' }
      ];
      const cards = [
        {
          title: "Plan-A",
          list_content: [
            "Interviewers from companies like Meta, Amazon, Apple, Google & Netflix",

            "Outsource your interviewing",

            "Detailed report & recording after the interview is done",

            "38 minutes to schedule an interview, 5 minutes to share the report",
          ],
        },
        {
          title: "Plan-B",
          list_content: [
            "Interviewers from companies like Meta, Amazon, Apple, Google & Netflix",

            "Outsource your interviewing",

            "Detailed report & recording after the interview is done",

            "38 minutes to schedule an interview, 5 minutes to share the report",
          ],
        },
        {
          title: "Plan-C",
          list_content: [
            "Interviewers from companies like Meta, Amazon, Apple, Google & Netflix",

            "Outsource your interviewing",

            "Detailed report & recording after the interview is done",

            "38 minutes to schedule an interview, 5 minutes to share the report",
          ],
        },
      ];
        const [activeIndex, setActiveIndex] = useState(0);
        const [activeTab, setActiveTab] = useState(tabs[0].tab_name);
        const [progress, setProgress] = useState(0);
        const [currentTabIndex, setCurrentTabIndex] = useState(0);
        const TAB_CHANGE_INTERVAL = 4500; // Time in milliseconds
        useEffect(() => {
          const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
          }, 4000);
      
          return () => clearInterval(interval);
        }, []);
        useEffect(() => {
          // Interval for switching tabs
          const intervalId = setInterval(() => {
            setProgress(0); // Reset progress when tab changes
            const nextTabIndex = (currentTabIndex + 1) % tabs.length;
            setActiveTab(tabs[nextTabIndex].tab_name);
            setCurrentTabIndex(nextTabIndex);
          }, TAB_CHANGE_INTERVAL);
      
          // Interval for updating progress
          const progressInterval = setInterval(() => {
            setProgress((prev) => {
              if (prev >= 100) {
                return 100; // Max out progress at 100%
              }
              return prev + (100 / (TAB_CHANGE_INTERVAL / 100)); // Increment progress
            });
          }, 100);
      
          return () => {
            clearInterval(intervalId);
            clearInterval(progressInterval);
          };
        }, [currentTabIndex]);
    return (
      <Layout>
        <main className="text-gray-600 body-font mx-auto max-w-fit mt-16 md:mt-20">
          <section className="text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-0">
            <div className="wrapper">
              <div className="for-orgs-wrapper flexrow center selected">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  fill="none"
                >
                  <circle
                    cx="8.5"
                    cy="8.5"
                    r="8"
                    fill="green"
                    stroke="green"
                  ></circle>
                  <path
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="m4.5 8.7 3 2.8 6-6"
                  ></path>
                </svg>
                <div className="flexcol">
                  <div className="flexrow">
                    <div className="text">
                      <span className="forlargescreen">For&nbsp;</span>
                      Organisations
                    </div>
                  </div>
                  <div className="subtext">Outsource your interviews to us</div>
                </div>
              </div>
              <a
                className="for-candidate-wrapper flexrow center pointer unselected"
                target="_blank"
                href="/mock-interviews?selectProfile=true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  fill="none"
                >
                  <circle cx="8.5" cy="8.5" r="8" stroke="#868282"></circle>
                </svg>
                <div className="flexcol" style={{ margin: "10px" }}>
                  <div className="flexrow">
                    <div className="text">
                      <span className="forlargescreen">For&nbsp;</span>
                      Recuriters
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="none"
                    >
                      <g fill="#A3A3A3" clip-path="url(#a)">
                        <path d="M10.501 12.834H1.946a.778.778 0 0 1-.778-.778V3.5a.778.778 0 0 1 .778-.777h3.889V3.5h-3.89v8.556h8.556V8.167h.778v3.889a.778.778 0 0 1-.778.778Z"></path>
                        <path d="M7 1.167a.389.389 0 1 0 0 .778h4.506L6.12 7.33a.389.389 0 1 0 .549.548l5.386-5.386V7a.389.389 0 1 0 .777 0V1.167H7Z"></path>
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path fill="#fff" d="M0 0h14v14H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="subtext">Practice with top tech experts</div>
                </div>
              </a>
            </div>
          </section>
          <FaderComponent>
            <section className="section-hero">
              <div className="micromodal" id="request-modal" aria-hidden="true">
                <div
                  className="micromodal__overlay"
                  tabIndex="-1"
                  data-micromodal-close=""
                >
                  <div className="iv-new-hero-hero-modal-wrapper">
                    <div className="iv-new-hero-hero-container ">
                      <h1 className="text-3xl lg:text-5xl text-center sm:text-3xl text-center ">
                        Save your engineering <b>bandwidth</b>
                      </h1>
                      <p className="text-lg p-4 text-center lg:text-lg mt-2">
                        We help you hire the best engineers by conducting
                        technical interviews for you
                      </p>
                      <div className="grid grid-cols-2 gap-8 md:grid-cols-5 text-center mt-4">
                        <div className="text-center">
                          <img
                            src="../../img/icon/frontend.svg"
                            alt="frontend"
                            className="mx-auto w-14 h-14"
                          />

                          <p className="mt-2 text-xs font-semibold">Frontend</p>
                        </div>

                        <div className="text-center">
                          <img
                            src="../../img/icon/backend.svg"
                            alt="backend"
                            className="mx-auto w-14 h-14"
                          />

                          <p className="mt-2 text-xs font-semibold">Backend</p>
                        </div>
                        <div className="text-center">
                          <img
                            src="../../img/icon/fullstack.svg"
                            alt="fullstack"
                            className="mx-auto w-14 h-14"
                          />

                          <p className="mt-2 text-xs font-semibold">
                            FullStack
                          </p>
                        </div>
                        <div className="text-center">
                          <img
                            src="../../img/icon/android.svg"
                            alt="android"
                            className="mx-auto w-14 h-14"
                          />

                          <p className="mt-2 text-xs font-semibold">Android</p>
                        </div>
                        <div className="text-center">
                          <img
                            src="../../img/icon/plus.png"
                            alt="android"
                            className="mx-auto w-14 h-14"
                          />
                          <p className="mt-2 text-xs font-semibold">View All</p>
                        </div>
                      </div>
                      <div className="mt-8">
                        <button className="flex items-center justify-center bg-black hover:bg-blue text-white font-bold py-4 px-8 rounded-full">
                          Request Now
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-5 h-5 ml-2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </FaderComponent>
          <FaderComponent>
            <section className="text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-0">
              <div className="flex flex-col lg:flex-row items-center justify-center m-auto">
                <div className="w-full lg:w-1/2 text-center">
                  <video className="w-full" autoPlay
          loop
          muted
          playsInlined>
                    <source src="../../video/video.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="w-full lg:w-1/2 text-center mt-4 lg:mt-0">
                  <h1 className="text-3xl font-bold">
                    <b>Personage.ai</b>: Revolutionizing Human Resource
                    Automation with AI
                  </h1>
                  <p style={{ textAlign: "left" }} className="px-8">
                    At Personage.ai, we are at the forefront of transforming
                    human resource management through cutting-edge artificial
                    intelligence. Our mission is to streamline HR processes,
                    enhance efficiency, and drive smarter decision-making across
                    organizations of all sizes.
                  </p>
                </div>
              </div>
            </section>
          </FaderComponent>
          <section
            id="animated-section"
            className="max-w-fit text-gray-600 body-font mx-auto  px-4 py-6 sm:px-6 lg:px-40 max-w-fit md: max-w-fit my-0"
            style={{ backgroundColor: "black" }}
          >
            <div className="flex flex-wrap -m-4 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <div className="md:w-auto">
                <span
                  className="text-white transition-all duration-300 inline-block font-bold text-4xl md:text-6xl lg:text-7xl shake-animation"
                  style={{
                    color: "white",
                    transition: "all .3s ease",
                    display: "inline-block",
                  }}
                >
                  <span>Here's </span>
                </span>

                <span className="ekit-heading__shadow-text">how it works</span>
              </div>

              <div className="mt-10 md:w-fill mt-20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    {images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`py-2 px-4 rounded-full ${
                          activeIndex === index
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200"
                        }`}
                      >
                        {image.label}
                      </button>
                    ))}
                  </div>
                  <div>
                    <img
                      src={images[activeIndex].src}
                      alt={images[activeIndex].label}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <FaderComponent>
            <section className="text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-0">
              <div className="flex flex-col lg:flex-row items-center justify-center m-auto">
                <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                  <h1 className="text-3xl">
                    Experts from every domain to every company size
                  </h1>
                  <p style={{ textAlign: "left" }}>
                    Our experts have conducted interviews for companies of all
                    sizes and domains. We have experts for every domain and
                    every company size.
                  </p>
                </div>
                <div className="w-full lg:w-1/2 text-center">
                  <Globe />
                </div>
              </div>
            </section>
          </FaderComponent>
          <FaderComponent>
            <section className="text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-0">
              <div className="flex flex-col lg:flex-row items-center justify-center m-auto text-center lg:text-left">
                <div className="lg:w-full">
                  <h1 className="text-3xl">
                    Your own <b>360°</b> solution
                  </h1>
                  <p className="mt-2">
                    Screen, interview, and shortlist the best candidates all in
                    one place.
                  </p>
                </div>
              </div>
              <div
                className="flex border border-slate mt-10 w-fit mx-auto lg:ml-56"
                style={{ backgroundColor: "rgb(248, 246, 249)" }}
              >
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
                  {tabs.map((tab) => (
                    <button
                      key={tab.tab_name}
                      onClick={() => setActiveTab(tab.tab_name)}
                      className={`relative px-4 py-2 font-semibold focus:outline-none ${
                        activeTab === tab.tab_name
                          ? "text-blue"
                          : "text-gray-600"
                      }`}
                    >
                      <i
                        className={`fa-solid ${tab.icon}`}
                        style={{ color: tab.color }}
                      ></i>{" "}
                      {tab.name}
                      {activeTab === tab.tab_name && (
                        <div
                          className="absolute bottom-0 left-0 h-1 bg-gray transition-all duration-500 ease-linear"
                          style={{ width: `${progress}%` }}
                        ></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-10">
                {activeTab === "Create_Requesition" && (
                  <FaderComponent>
                    <div className="flex flex-col lg:flex-row items-center justify-center m-auto mt-6 gap-6">
                      <div className="lg:w-1/2 w-full">
                        <img
                          src="../../img/assessments.png"
                          alt="create requesition"
                        />
                      </div>
                      <div className="lg:w-1/2 w-full">
                        <h1 className="text-3xl">
                          <i
                            className="fa-solid fa-file-contract"
                            style={{ color: "#4ec346" }}
                          ></i>{" "}
                          Create Requesition
                        </h1>
                        <p className="flex mt-4">
                          Our experts have conducted interviews for companies of
                          all sizes and domains. We have experts for every
                          domain and every company size.
                        </p>
                        <div className="mt-4 mx-auto flex flex-col sm:flex-row items-center gap-6">
                          <button className="flex items-center justify-center bg-black hover:bg-blue text-white font-bold py-4 px-8 rounded-full mt-4">
                            Get Started
                          </button>
                          <a href="#" className="text-blue mt-4">
                            Explore Our Platform{" "}
                            <i className="fa-solid fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </FaderComponent>
                )}
                {activeTab === "Upload_Resumes" && (
                  <FaderComponent>
                    <div className="flex flex-col lg:flex-row items-center justify-center m-auto mt-6 gap-6">
                      <div className="lg:w-1/2 w-full">
                        <img
                          src="../../img/outsourced_interviews.png"
                          alt="upload resumes"
                        />
                      </div>
                      <div className="lg:w-1/2 w-full">
                        <h1 className="text-3xl">
                          <i
                            className="fa-regular fa-file-pdf"
                            style={{ color: "#e66d0a" }}
                          ></i>{" "}
                          Upload Resumes
                        </h1>
                        <p className="flex mt-4">
                          Our experts have conducted interviews for companies of
                          all sizes and domains. We have experts for every
                          domain and every company size.
                        </p>
                        <div className="mt-4 mx-auto flex flex-col sm:flex-row items-center gap-6">
                          <button className="flex items-center justify-center bg-black hover:bg-blue text-white font-bold py-4 px-8 rounded-full mt-4">
                            Get Started
                          </button>
                          <a href="#" className="text-blue mt-4">
                            Explore Our Platform{" "}
                            <i className="fa-solid fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </FaderComponent>
                )}
                {activeTab === "AI_Screening" && (
                  <FaderComponent>
                    <div className="flex flex-col lg:flex-row items-center justify-center m-auto mt-6 gap-6">
                      <div className="lg:w-1/2 w-full">
                        <img src="../../img/projects.png" alt="AI Screening" />
                      </div>
                      <div className="lg:w-1/2 w-full">
                        <h1 className="text-3xl">
                          <i
                            className="fa-solid fa-robot"
                            style={{ color: "#0b55d5" }}
                          ></i>{" "}
                          AI Screening
                        </h1>
                        <p className="flex mt-4">
                          Our experts have conducted interviews for companies of
                          all sizes and domains. We have experts for every
                          domain and every company size.
                        </p>
                        <div className="mt-4 mx-auto flex flex-col sm:flex-row items-center gap-6">
                          <button className="flex items-center justify-center bg-black hover:bg-blue text-white font-bold py-4 px-8 rounded-full mt-4">
                            Get Started
                          </button>
                          <a href="#" className="text-blue mt-4">
                            Explore Our Platform{" "}
                            <i className="fa-solid fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </FaderComponent>
                )}
                {activeTab === "Download_Reports" && (
                  <FaderComponent>
                    <div className="flex flex-col lg:flex-row items-center justify-center m-auto mt-6 gap-6">
                      <div className="lg:w-1/2 w-full">
                        <img
                          src="../../img/live_interviews.png"
                          alt="Download Reports"
                        />
                      </div>
                      <div className="lg:w-1/2 w-full">
                        <h1 className="text-3xl">
                          <i
                            className="fa-solid fa-download"
                            style={{ color: "#09e8ec" }}
                          ></i>{" "}
                          Download Reports
                        </h1>
                        <p className="flex mt-4">
                          Our experts have conducted interviews for companies of
                          all sizes and domains. We have experts for every
                          domain and every company size.
                        </p>
                        <div className="mt-4 mx-auto flex flex-col sm:flex-row items-center gap-6">
                          <button className="flex items-center justify-center bg-black hover:bg-blue text-white font-bold py-4 px-8 rounded-full mt-4">
                            Get Started
                          </button>
                          <a href="#" className="text-blue mt-4">
                            Explore Our Platform{" "}
                            <i className="fa-solid fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </FaderComponent>
                )}
              </div>
            </section>
          </FaderComponent>
          <FaderComponent>
            <section className="text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:my-0">
              <div className="flex flex-row items-center justify-center m-auto ">
                <div className="lg:w-97 text-center">
                  <h1 className="text-3xl ">Pricing</h1>
                  <p className="mt-2 text-center">
                    4 out of 5 professionals said that intervue was{" "}
                    <b>‘not that expensive’</b>. Don’t be that one person,
                    Checkout our plans
                  </p>
                </div>
              </div>
              <>
                <CardGrid cards={cards} />
              </>
            </section>
          </FaderComponent>
        </main>
      </Layout>
    );
}
export default HomeComponent;