import React from 'react'
import Aboutus from '../../assets/Aboutus.png'


const About = () => {
  return (
  <div name='portfolio' className='w-full mt-10'>

      <div className='max-w-[1240px] mx-auto relative lg:py-10 lg:px-12'>
          <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'>
              <h2 className="text-xl pt-8 text-blue-600 text-center">About Us</h2>
              <h3 className='text-3xl font-bold py-2 sm:text-5xl text-black text-center'>Our Teammate</h3>
          </div>

          <div className="lg:flex lg:h-screen lg:bg-white ">
            <div className="m-10 lg:flex-1 lg:relative">
              <div className="flex flex-wrap items-center justify-center md:gap-x-6 xl:overflow-hidden lg:flex lg:flex-wrap md:overflow-scroll lg:justify-between lg:gap-8 lg:mt-20 ">
                  <div className='relative'>
                      <img src={Aboutus} className="items-center w-full" alt="" />
                  </div> 
              </div>
            </div>

            <div className="mt-10 lg:flex lg:flex-1 lg:items-center lg:justify-center">
              <div className="text-center py-8 px-4 mx-auto max-w-screen-xl lg:flex lg:w-3/5 lg:h-4/5 lg:p-100px lg:flex-col lg:justify-center lg:gap-y-6">
                <p className='lg:text-left mb-2 text-gray-500'>We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business.</p>
                <p className='lg:text-left mb-2 text-gray-500'>We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business.</p>
                <div className="lg:float-right"> 
                  <button type="button" className="mb-20 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 w-32">About Us</button>
                  <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">Our Teammate</button>
                </div> 
              </div>
            </div>
          </div>
      </div>
  </div> 
  );
};

export default About;