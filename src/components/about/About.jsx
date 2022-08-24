import React from 'react'
import Aboutus from '../../assets/Aboutus.png'


const About = () => {
  return (
    <div className="flex-col py-8 px-4 mx-auto  text-center lg:text-ellipsis lg:mr-7 lg:w-full lg:flex-row lg:h-screen lg:flex  lg:items-center" >
        <div className="lg:float-right "> 
          <h2 className="mb-4 font-semibold text-xl md:text-2xl lg:text-3xl text-blue-700">About Us</h2>
          <h1 className="mb-8 font-bold text-4xl  tracking-tight  md:text-3xl lg:text-5xl dark:text-white">Our Teammate</h1>
          <p className="mb-8  text-lg text-left font-normal  text-gray-500  sm:px-16 xl:px-48 lg:text-left lg:text-lg">
            We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business.

            We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have.
          </p>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-8 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">About Us</button>
          <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">Our Teammate</button>
        </div> 

          <img
            src={Aboutus}
            alt=""
            className="lg:shrink md:shrink lg:w-1/2 md:w-auto md:ml-10 lg:object-cover"
          /> 
      </div>
 
  );
};

export default About;