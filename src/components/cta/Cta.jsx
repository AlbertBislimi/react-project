import React from 'react'
import people from '../../assets/people.png'

const Cta = () => {
  return (

    <div id="contact" className="lg:flex pb-8 mt-[100px] lg:bg-white dark:bg-black">
      <div className=" mt-10 lg:flex lg:flex-1 lg:items-center lg:justify-center">
        <div className="text-center lg:flex lg:w-3/5 lg:h-4/5 lg:p-100px lg:flex-col lg:justify-center lg:gap-y-6">
          <h2 className="text-[28px] leading-[36px] md:text-[40px] xl:text-[55px] lg:text-[45px] lg:leading-[60px] font-bold mb-[25px] lg:text-left dark:text-white">Interesting Collaboration With Us?</h2>
          <p className='lg:text-left mb-[25px] text-gray-500 dark:text-white'>Help you to reach your business goal</p>
          <button type="button" className="mb-20 text-white bg-blue-700 hover:bg-blue-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white dark:text-black font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 w-32">Get Started</button>
        </div>
      </div>

      <div className="m-10 lg:flex-1 lg:relative">
        <div className="flex flex-wrap items-center justify-center md:gap-x-6 xl:overflow-hidden lg:flex lg:flex-wrap lg:justify-between lg:gap-8 lg:mt-20 ">
            <div className='relative'>
                <img src={people} className="items-center w-full" alt="" />
            </div> 
        </div>
      </div>
    </div>
  )
}
export default Cta