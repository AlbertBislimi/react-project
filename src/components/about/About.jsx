import "./about.css";
import React from 'react'
import Aboutus from '../../assets/Aboutus.png'


const About = () => {
  return (
    <div class="h-screen flex items-center bg-white" id="a">
      <div class="flex-1 flex items-center justify-center relative h-full" id="a-left">
        <div className="a-card bg"></div>
        <div class="w-10/12 h-auto rounded-3xl relative overflow-hidden">
          <img
            src={Aboutus}
            alt=""
            class="w-auto object-cover"
          />
        </div>
      </div>
      <div class="flex-1">
        <h3 class="font-Nunito text-cyan-400">About Us</h3>
        <h2 class="font-Nunito">Our Teammate</h2>
        <p className="a-sub sm:text-center">
        We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business.

        We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business
        </p>
        <div id="hero_btn_container">
 
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-8 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">About Us</button>
          <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">Our Services</button>
                        
        </div>
      </div>
    </div>
    
  );
};

export default About;