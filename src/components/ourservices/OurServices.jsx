 import React from 'react'
import "./ourservices.css";
import PC from "../../img/pc.png"
import Sony from "../../img/sony.png"

const OurServices = () => {
  return (

    <div class="flex h-screen bg-white" id='o'>
      <div class=" flex flex-1 items-center justify-center" id='left'>
        <div id='left-wrapper' class="flex w-3/5 h-4/5 p-100px flex-col	 justify-center gap-y-2 ">
        <h3 class="text-3xl font-light text-cyan-600">Our Services</h3>
        <h1 class="text-6xl">Perfect and fast Movement</h1>
        <p>We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</p>
        <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-32">Read More...</button>
      </div>
</div>

      <div class="flex-1 relative" id='right'>

        <div id='cards' class="flex flex-wrap w-10/12 h-4/5  justify-between gap-8 mt-20 overflow-hidden">

      <a href="#" class="block p-6 w-64 h-64  bg-white rounded-3xl border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <img
            src={PC}
            alt=""
            className="w-32 mx-10"
          />
    <h5 class="mb-2 mx-8 mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Social Media
Management</h5>

    
</a>
<a href="#" class="block p-6 w-64 h-64 bg-white rounded-3xl border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<img
            src={Sony}
            alt=""
            className="w-30 mx-14"
          />
    <h5 class="mb-2 mx-6 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Search Engine
Opimization</h5>
    
</a>
<a href="#" class="block p-6 w-64 h-64  bg-white rounded-3xl border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="50" fill="#377DFF"/>
</svg>

    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Design</h5>
    
</a>
<a href="#" class="block p-6 w-64 h-64  bg-white rounded-3xl content-center border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ads</h5>
    
</a>
</div>
      </div>
  
    </div>
  )
}
export default OurServices