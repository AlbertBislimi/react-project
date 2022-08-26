import React from 'react'
import people from '../../assets/people.png'

const Cta = () => {
  return (

    <div id="contact" className="lg:flex pb-8 lg:bg-white dark:bg-black">
      <div className=" mt-10 lg:flex lg:flex-1 lg:items-center lg:justify-center">
        <div className="text-center lg:flex lg:w-3/5 lg:h-4/5 lg:p-100px lg:flex-col lg:justify-center lg:gap-y-6">
          <h2 className=" text-2xl font-bold mb-4 lg:text-left lg:text-6xl dark:text-white">Interesting Collaboration With Us?</h2>
          <p className='lg:text-left mb-2 text-gray-500 dark:text-white'>Help you to reach your business goal</p>
          <button type="button" className="mb-20 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 w-32">Get Started</button>
        </div>
      </div>

      <div className="m-10 lg:flex-1 lg:relative">
        <div className="flex flex-wrap items-center justify-center md:gap-x-6 xl:overflow-hidden lg:flex lg:flex-wrap md:overflow-scroll lg:justify-between lg:gap-8 lg:mt-20 ">
            <div className='relative'>
                <img src={people} className="items-center w-full" alt="" />
            </div> 
        </div>
      </div>
    </div>
  )
}
export default Cta