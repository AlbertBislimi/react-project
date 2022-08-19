import React from 'react';
import testimonial from '../../assets/testimonial.png'

const Testimonial = () => {
  return (
    <div className='w-full mt-20'>
      <div className='max-w-[1240px] mx-auto relative'>
          <div className='px-4 py-10'>
              <h2 className="text-xl pt-8 text-blue-600 text-center">Testimonial</h2>
              <h3 className='text-5xl font-bold py-6 text-black text-center'>People Talk about us</h3>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-10 sm:pt-10 text-black'>
            <div className="w-full max-w-sm bg-white rounded-lg border border-gray-50 shadow-md dark:bg-gray-800 dark:border-gray-700 pt-12">

                <div className="flex flex-col items-center pb-10">
                    <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={testimonial} alt="Bonnie"/>
                    <h5 className="mb-1 text-xl font-medium text-blue-500 dark:text-white">Bonnie Green</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                    <p className="m-4 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-sm bg-white rounded-lg border border-gray-50 shadow-md dark:bg-gray-800 dark:border-gray-700 pt-12">

                <div className="flex flex-col items-center pb-10">
                    <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={testimonial} alt="Bonnie"/>
                    <h5 className="mb-1 text-xl font-medium text-blue-500 dark:text-white">Bonnie Green</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                    <p className="m-4 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-sm bg-white rounded-lg border border-gray-50 shadow-md dark:bg-gray-800 dark:border-gray-700 pt-12">

                <div className="flex flex-col items-center pb-10">
                    <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={testimonial} alt="Bonnie"/>
                    <h5 className="mb-1 text-xl font-medium text-blue-500 dark:text-white">Bonnie Green</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                    <p className="m-4 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </div>
            </div>
            </div>

            <div className='px-4 py-12 text-center'>
                <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">See All Portfolio</button>
          </div>
        
      </div>
  </div>
  );
};

export default Testimonial;