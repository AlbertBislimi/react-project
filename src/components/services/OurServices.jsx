import React from 'react'
import social from '../../assets/social.png'
import engine from '../../assets/engine.png'
import design from '../../assets/design.png'
import ads from '../../assets/ads.png'

const OurServices = () => {
  return (

    <div className="lg:flex lg:h-screen lg:bg-white " id='o'>
      <div className=" mt-10 lg:flex lg:flex-1 lg:items-center lg:justify-center" id='left'>
        <div id='left-wrapper' className="text-center lg:flex lg:w-3/5 lg:h-4/5 lg:p-100px lg:flex-col lg:justify-center lg:gap-y-6">
          <h3 className="text-2xl mb-2 lg:text-left lg:text-3xl lg:font-light text-blue-600">Our Services</h3>
          <h1 className=" text-2xl  mb-6 lg:text-left lg:text-6xl">Perfect and fast Movement</h1>
          <p className='lg:text-left  mb-4 text-gray-500'>We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</p>
          <button type="button" className="mb-20 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 w-32">Read More...</button>
        </div>
      </div>

      <div className=" lg:flex-1 lg:relative" id='right'>
        <div id='cards' className="flex flex-wrap items-center justify-center md:gap-x-6 xl:overflow-hidden  lg:flex lg:flex-wrap md:overflow-scroll lg:w-10/12 lg:h-4/5  lg:justify-between lg:gap-8 lg:mt-20 ">
          <a href="/#" className=" mb-4 block p-6 w-64 h-64  bg-white rounded-3xl border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img
            src={social}
            alt=""
            className="w-32 mx-10"/>
            <h5 className="mb-2 mx-8 mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Social Media Management</h5>
          </a>

          <a href="/#" className=" mb-4 block p-6 w-64 h-64 bg-white rounded-3xl border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img
              src={engine}
              alt=""
              className="w-30 mx-14"/>
              <h5 className="mb-2 mx-6 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Search Engine Opimization</h5>
          </a>

          <a href="/#" className=" mb-4 block p-6 w-64 h-64  bg-white rounded-3xl border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img
            src={design}
            alt=""
            className="w-32 mx-10"/>
            <h5 className="ml-16 mb-2 mx-8 mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Design</h5>
          </a>

          <a href="/#" className="block p-6 w-64 h-64  bg-white rounded-3xl border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img
            src={ads}
            alt=""
            className="w-32 mx-10"/>
            <h5 className="ml-16 mb-2 mx-8 mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ads</h5>
          </a>

          
        </div>
      </div>
  
    </div>
  )
}
export default OurServices