import React from 'react'
import Frame from '../../assets/Frame.png'


const Header = () => {
  return (
    <div id="home" className="pt-[68px] px-4 mx-auto text-center dark:bg-black">
      <div className="">
        <h1 className="mb-4 text-[28px] font-extrabold leading-[38px] md:text-[40px] md:leading-[40px] lg:text-[60px] lg:leading-[64px] text-gray-900 dark:text-white">Make your dream <br/>
            business goal come true</h1>
        <p className="mb-8 text-[14px] lg:text-[20px] font-normal text-gray-500 dark:text-white">when you need us for improve your business, <br/>
            then come with us to help your business have reach it, you just sit and feel that goal.</p>
      </div>          
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="/#">
            <button type="button" className="text-white drop-shadow-blue bg-[#377DFF] hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-[700] rounded-[24px] text-[14px] px-[35px] py-[10px] text-center mr-2 mb-2 dark:bg-white dark:text-black dark:hover:bg-gray-200">Start Project</button>
            </a>
        </div>
          <div>
            <img src={Frame} className="flex justify-center mx-auto" alt="Logo"/>
          </div>
          

    </div> 
  )
}

export default Header