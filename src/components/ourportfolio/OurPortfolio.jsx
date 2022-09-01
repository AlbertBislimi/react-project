import React from 'react';
import portfolio from '../../assets/portfolio.png'
import portfolio1 from '../../assets/portfolio1.png'
import portfolio2 from '../../assets/portfolio2.png'



const Portfolio = () => {
  return (
  <div name='portfolio' className='w-full dark:bg-black'>

      <div className='max-w-[1240px] mx-auto relative'>
          <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16'>
              <h3 className="text-xl pt-8 text-blue-600 text-center dark:text-white">Our Portfolio</h3>
              <h2 className='text-3xl font-bold py-2 sm:text-[55px] text-black text-center dark:text-white'>What do we do</h2>
              <p className='text-[15px] font-normal pt-4 text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white'>all projects that we have already done, proven can help to use more comfortable, then can used by client from our business.</p>
          </div>

          <div className='text-[24px] grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16 px-4 pt-10 sm:pt-10 text-black'>
            <div className='relative p-5'>
              <img src={portfolio} className="items-center w-full" alt="" />
              <h2 className="absolute font-medium text-white bottom-8 left-8">Design Byte App</h2>
            </div> 
            <div className='relative'>
              <img src={portfolio1} className="items-center w-full" alt="" />
              <h2 className="absolute font-medium text-white bottom-8 left-8">Cloud App</h2>
            </div> 
            <div className='relative p-5'>
              <img src={portfolio2} className="items-center w-full" alt="" />
              <h2 className="absolute font-medium text-white bottom-8 left-8">Design Furniture App</h2>
            </div>   
          </div>
          <div className='px-4 py-12 text-center'>
            <button type="button" className="text-blue-700 hover:text-white border dark:bg-transparent border-blue-700 hover:bg-blue-800 dark:border-white  dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">See All Portfolio</button>
          </div>
      </div>
  </div>
  );
};

export default Portfolio;