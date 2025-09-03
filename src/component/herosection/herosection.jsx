import React from "react";
import Dashboard from "../ui/dashboard";

export default function HeroSection() {
  return (
    <div className="container flex h-[80vh] flex-col lg:flex-row items-center text-balance Nunito max-w-7xl">
      <div className="leftSide w-full lg:w-[90%]">
        <div className="content">
          <h1 className="font-[Lora] PakistanGreen text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
            Transform Your Business with{" "}
            <span className="highlight inline-block">Smart Analytics</span>
          </h1>
          <p className="text-lg pt-6">
            Unlock powerful insights, automate workflows, and scale your
            operations with our AI-powered platform. Join 10,000+ companies
            already growing faster.
          </p>
        </div>

        <div className="buttons text-lg pt-6 flex flex-row gap-4">
          <button className="bgColor px-7 rounded-sm py-1">
            Start Free Trial
          </button>
          <button className="border border-[#dda15eff] px-7 rounded-sm py-1">
            Watch Demo
          </button>
        </div>

        <div className="externalContent flex flex-row gap-4 pt-6">
          <div className="leftBox flex justify-center items-center text-lg gap-2 flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p>No credit card required</p>
          </div>
          <div className="rightBox flex justify-center items-center text-lg gap-2 flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
              />
            </svg>
            <p>Enterprise security</p>
          </div>
        </div>
      </div>

      <div className="rightSide w-full lg:w-1/2">
        <Dashboard />
      </div>
    </div>
  );
}
