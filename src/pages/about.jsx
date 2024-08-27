import React from "react";
import Layout from "../components/layout";
import FlipCard from "../components/flipCard";


const About = () => {
    return (
      <Layout>
        <main className="text-gray-600 body-font mt-36 mx-auto max-w-fit mt-16 lg:mt-20">
          <section className="text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:mt-10 lg:mt-40">
            <div className="container lg:items-center justify-center m-auto">
              <div className="lg:container">
                <h1 className="text-2xl font-bold text-gray-800 lg:text-5xl text-center">
                  Revolutionizing Human Resource Automation with AI
                </h1>
                <p className="text-sm  mt-5 text-gray-800 lg:text-sm text-center">
                  At Personage.ai, we are at the forefront of transforming human
                  resource management through cutting-edge artificial
                  intelligence.
                </p>
              </div>
              <div className="lg:w-full  lg:mt-5 mt-10">
                <video
                  src="../../video/video1.mp4" // Update with the correct path to your video file
                  className="w-full  md: object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>
          <section className="text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:mt-0 lg:mt-10">
            <div className="lg:container">
              <h1 className="text-2xl font-bold text-gray-800 lg:text-5xl text-center">
                What We Do
              </h1>
            </div>
            <FlipCard />
          </section>
          <section className="text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:mt-0 lg:mt-10">
            <div className="lg:container">
              <h1 className="text-2xl font-bold text-gray-800 lg:text-5xl text-center">
              Our team
              </h1>
              <p className="text-sm  mt-5 text-gray-800 lg:text-sm text-center">
              Driven by innovation, united by a mission to revolutionize human resource automation.
                </p>
            </div>
           <img src="../../img/team.JPG" alt="team" style={{width:'50%', margin:'auto'}} className="w-full  mt-10" />
          </section>
        </main>
      </Layout>
    );
    }
export default About;