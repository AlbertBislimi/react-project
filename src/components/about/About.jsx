import React from "react";
import Aboutus from "../../assets/Aboutus.png";

const About = () => {
  return (
    <div
      id="about"
      className="mt-[100px]"
    >
      <div className="pb-10 mx-auto lg:relative justify-center items-center	gap-[10px]">
        <h2 className="text-[16px] lg:text-[24px] order-0 text-blue-600 text-center dark:text-white">
          About Us
        </h2>
        <h3 className="text-[28px] font-bold sm:text-5xl text-black text-center dark:text-white">
          Our Teammate
        </h3>
      </div>

      <div
        id="about"
        className="lg:flex lg:flex-row-reverse align-middle flex flex-col items-start gap-[50px] dark:bg-black"
      >
        <div className="m-auto">
          <div className="lg:text-[18px] text-[14px] lg:leading-[28px] leading-[24px]">
            <p className="font-[400] text-left	text-gray-500 dark:text-white">
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have. make your
              content look interesting and make people look for your business.
            </p>
            <p className="pt-5 font-[400] text-left	text-gray-500 dark:text-white">
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have. make your
              content look interesting and make people look for your business.
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <button type="button" className="text-white drop-shadow-blue bg-[#377DFF] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white dark:text-black font-[700] rounded-[24px] text-[14px] px-[35px] py-[10px] mt-5">
              About Us
            </button>
          </div>
        </div>
        <img src={Aboutus} className="xl:max-w-[100%] lg:max-w-[50%] max-w-[100%] mx-auto" alt="" />
      </div>
    </div>
  );
};

export default About;
