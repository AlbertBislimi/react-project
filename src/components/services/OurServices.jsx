import React from 'react'
import social from '../../assets/social.png'
import engine from '../../assets/engine.png'
import design from '../../assets/design.png'
import ads from '../../assets/ads.png'

const OurServices = () => {
  return (

    <div id="services" className="lg:flex pt-[100px] lg:bg-white dark:bg-black">

      <div className="flex mx-auto items-center lg:flex-1 lg:items-center lg:justify-center">
        <div className="text-center flex-col justify-center py-4 px-4 mx-auto lg:flex lg:w-[85%] lg:h-4/5 lg:flex-col lg:justify-center lg:gap-y-6">
          <h3 className="text-[16px] lg:text-[24px] lg:font-[600] font-[600] lg:text-left text-blue-600 dark:text-white">Our Services</h3>
          <h2 className="text-[27px] font-[700] leading-[33px] pt-[10px] lg:text-left xl:text-6xl sm:text-5xl text-black dark:text-white">Perfect and fast Movement</h2>
          <p className='text-[20px] font-[400] leading-[24px] pt-[34px] lg:text-left mb-4 text-gray-500 dark:text-white'>We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</p>
          <button type="button" className="float-left inline-flex justify-end font-medium text-blue-600 hover:underline dark:text-white">Read More<svg aria-hidden="true" class="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
        </div>
      </div>

      <div className="py-8 flex max-w-4xl mx-auto items-center">
        <div className="grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 md:gap-x-8 lg:overflow-hidden lg:mt-20">
          <a href="/#" className=" mb-4 p-6 w-64 h-64  bg-white rounded-3xl border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-[#0B0F15] dark:border-gray-700 dark:hover:bg-gray-900">
            <img src={social} alt="" className="w-32 mx-10"/>
            <h5 className="mb-2 mx-8 mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Social Media Management</h5>
          </a>

          <a href="/#" className=" mb-4 p-6 w-64 h-64 bg-white rounded-3xl border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-[#0B0F15] dark:border-gray-700 dark:hover:bg-gray-900">
            <img src={engine} alt="" className="w-32 mx-10"/>
              <h5 className="mb-2 mx-6 mt-4 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Search Engine Opimization</h5>
          </a>

          <a href="/#" className=" mb-4 p-6 w-64 h-64  bg-white rounded-3xl border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-[#0B0F15] dark:border-gray-700 dark:hover:bg-gray-900">
            <img src={design} alt="" className="w-32 mx-10"/>
            <h5 className="ml-16 mb-2 mx-8 mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Design</h5>
          </a>

          <a href="/#" className="block p-6 w-64 h-64  bg-white rounded-3xl border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-[#0B0F15] dark:border-gray-700 dark:hover:bg-gray-900">
            <img src={ads} alt="" className="w-32 mx-10"/>
            <h5 className="ml-16 mb-2 mx-8 mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ads</h5>
          </a>

          
        </div>
      </div>
  
    </div>
  )
}
export default OurServices