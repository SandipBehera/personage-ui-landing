import React from "react";
import "./flipcard.css";

const FlipCard = () => {
  return (
    <div className="flex flex-col mx-auto container gap-4 mt-10 lg:flex-row">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front flex flex-col justify-center items-center bg-white shadow-custom-lg p-4 rounded-lg">
            <i className="fas fa-sync-alt text-4xl sm:text-5xl text-blue-500"></i>
            <p className="text-md text-center sm:text-lg font-semibold mt-2">
              Automated Recruitment
            </p>
          </div>
          <div className="flip-card-back flex flex-col justify-center items-center bg-blue-500 text-white shadow-custom-lg p-4 rounded-lg">
            <p className="text-sm sm:text-md mt-2">
              Our AI-driven platform simplifies the hiring process by automating
              candidate screening, matching, and interview scheduling, ensuring
              you find the best talent quickly and effectively.
            </p>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front flex flex-col justify-center items-center bg-white  shadow-custom-lg p-4 rounded-lg">
            <i className="fas fa-sync-alt text-4xl sm:text-5xl text-blue-500"></i>
            <p className="text-md text-center sm:text-lg font-semibold mt-2">
              Employee Onboarding
            </p>
          </div>
          <div className="flip-card-back flex flex-col justify-center items-center bg-blue-500 text-white shadow-custom-lg p-4 rounded-lg">
            <p className="text-sm sm:text-md mt-2">
              We streamline onboarding with personalized AI-powered workflows,
              making it easier for new hires to integrate smoothly into their
              roles and your company culture.
            </p>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front flex flex-col justify-center items-center bg-white  shadow-custom-lg p-4 rounded-lg">
            <i className="fas fa-sync-alt text-4xl sm:text-5xl text-blue-500"></i>
            <p className="text-md text-center sm:text-lg font-semibold mt-2">
              Performance Management
            </p>
          </div>
          <div className="flip-card-back flex flex-col justify-center items-center bg-blue-500 text-white shadow-custom-lg p-4 rounded-lg">
            <p className="text-sm sm:text-md mt-2">
              Our advanced tools offer insightful analytics and real-time
              feedback, helping you manage and improve employee performance with
              data-driven precision.
            </p>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front flex flex-col justify-center items-center bg-white  shadow-custom-lg p-4 rounded-lg">
            <i className="fas fa-sync-alt text-4xl sm:text-5xl text-blue-500"></i>
            <p className="text-md text-center sm:text-lg font-semibold mt-2">
              HR Analytics
            </p>
          </div>
          <div className="flip-card-back flex flex-col justify-center items-center bg-blue-500 text-white shadow-custom-lg p-4 rounded-lg">
            <p className="text-sm sm:text-md mt-2">
              Gain valuable insights into your workforce with our comprehensive
              analytics, designed to optimize HR strategies, improve retention
              rates, and support organizational growth.
            </p>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front flex flex-col justify-center items-center bg-white  shadow-custom-lg p-4 rounded-lg">
            <i className="fas fa-sync-alt text-4xl sm:text-5xl text-blue-500"></i>
            <p className="text-md text-center sm:text-lg font-semibold mt-2">
              Compliance and Reporting
            </p>
          </div>
          <div className="flip-card-back flex flex-col justify-center items-center bg-blue-500 text-white shadow-custom-lg p-4 rounded-lg">
            <p className="text-sm sm:text-md mt-2">
              Ensure your HR practices adhere to regulations and generate
              accurate reports effortlessly, reducing administrative burdens and
              mitigating risks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
