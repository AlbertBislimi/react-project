import React from 'react';
import Aboutus from '../../assets/Aboutus.png';


const About = () => {
  return (
  <div id="about" className='w-full dark:bg-black'>

      <div className='max-w-[1240px] mx-auto relative lg:py-10 lg:px-12 lg:h-50'>
          <div className='mx-auto max-w-screen-xl text-center'>
              <h2 className="text-xl pt-8 text-blue-600 text-center dark:text-white">About Us</h2>
              <h3 className='text-3xl font-bold sm:text-5xl text-black text-center dark:text-white'>Our Teammate</h3>
          </div>

          <div className="lg:flex flex-row-reverse align-middle lg:bg-white lg:mt-5 dark:bg-black">
            <div className="flex-initial lg:w-[50%] w-full sm:p-[20px] lg:relative">
              <div className="text-center mx-auto max-w-screen-xl lg:flex lg:mt-5 lg:p-100px lg:flex-col lg:justify-center lg:gap-y-6 px-5">
                <p className='lg:text-left mb-2 text-left	text-gray-500 dark:text-white'>We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business.<br/><br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu neque tempor at ut auctor maecenas,Lorem ipsum d</p>
                <div className="flex justify-center"> 
                  <button type="button" className="mb-10 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white font-medium rounded-full text-sm px-5 py-2.5 text-center mt-5 w-[50%] lg:w-40">About Us</button>
                  {/*<button type="button" className="mb-20 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-noneext-white dark:hover:bg-blue-600 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 w-40"><div className="flex"><span><img src={playcircle} alt="play" className="mr-[4px]" /></span><span>Our Teammate</span></div></button>*/}
                </div> 
              </div>
            </div>
            <div className="flex-initial lg:w-[50%] w-full lg:relative">
              <div className="flex flex-wrap items-center justify-center md:gap-x-6 xl:overflow-hidden lg:flex lg:flex-wrap md:overflow-scroll lg:justify-between lg:gap-8">
                  <div className='relative'>
                      <img src={Aboutus} className="items-center w-full" alt="" />
                  </div> 
              </div>
            </div>

          </div>
      </div>
  </div> 
  );
};

export default About;