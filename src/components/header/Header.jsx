import React from 'react'
import Frame from '../../assets/Frame.png'


const Header = () => {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        
        <h1 className="mb-4 text-4xl font-thin tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Make your dream</h1>

        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Make your dream 
            business goal come true</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">when you need us for improve your business,
            then come with us to help your business have reach it, you just sit and feel that goal.</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="/#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg px-11 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Start Project</button>
            </a>
        </div>
        <img src={Frame} className="flex items-center w-full" alt="Logo"/>

        <div className="flex items-center justify-center">
            <img src={Frame} alt="Logo"/>
        </div>

    </div> 
  )
}

export default Header