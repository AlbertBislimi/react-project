import React from 'react'
import Frame from '../../assets/Frame.png'


const Header = () => {
  return (
    <div id="home" className="pt-[68px] px-4 mx-auto text-center dark:bg-black">
      <div className="">
        <h1 className="mb-4 text-[28px] font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">Make your dream <br/>
            business goal come true</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">when you need us for improve your business, <br/>
            then come with us to help your business have reach it, you just sit and feel that goal.</p>
      </div>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="/#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg px-11 py-2.5 text-center mr-2 mb-2 dark:bg-white dark:text-black dark:hover:bg-gray-200">Start Project</button>
            </a>
        </div>
          <div>
            <img src={Frame} className="flex justify-center mx-auto" alt="Logo"/>
          </div>
          

    </div> 
  )
}

export default Header