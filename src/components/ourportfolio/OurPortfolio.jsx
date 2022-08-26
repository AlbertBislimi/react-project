import React from 'react';
import portfolio from '../../assets/portfolio.png'
import portfolio1 from '../../assets/portfolio1.png'
import portfolio2 from '../../assets/portfolio2.png'



const Portfolio = () => {
  return (
  <div name='portfolio' className='w-full dark:bg-black'>

      <div className='max-w-[1240px] mx-auto relative lg:py-10 lg:px-12'>
          <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'>
              <h2 className="text-xl pt-8 text-blue-600 text-center dark:text-white">Our Portfolio</h2>
              <h3 className='text-3xl font-bold py-2 sm:text-5xl text-black text-center dark:text-white'>What do we do</h3>
              <p className='text-lg font-normal pt-4 text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white'>all projects that we have already done, proven can help to use more comfortable, then can used by client from our business.</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16 px-4 pt-10 sm:pt-10 text-black'>
            <div className='relative p-5'>
              <img src={portfolio} className="items-center w-full" alt="" />
              <h2 className="absolute text-xl font-medium text-white bottom-8 left-8">Design Byte App</h2>
            </div> 
            <div className='relative'>
              <img src={portfolio1} className="items-center w-full" alt="" />
              <h2 class="absolute text-xl font-medium text-white bottom-8 left-8">Cloud App</h2>
            </div> 
            <div className='relative p-5'>
              <img src={portfolio2} className="items-center w-full" alt="" />
              <h2 className="absolute text-xl font-medium text-white bottom-8 left-8">Design Furniture App</h2>
            </div>   
          </div>
          <div className='px-4 py-12 text-center'>
            <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">See All Portfolio</button>
          </div>
      </div>
  </div>
  );
};

export default Portfolio;