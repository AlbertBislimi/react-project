import React from 'react';
import Team from "../../img/team.jpg"

const Portfolio = () => {
  return (
  <div name='portfolio' className='w-full mt-20'>

      <div className='max-w-[1240px] mx-auto relative'>
          <div className='px-4 py-10'>
              <h2 className="text-xl pt-8 text-blue-600 text-center">Our Portfolio</h2>
              <h3 className='text-5xl font-bold py-6 text-black text-center'>What do we do</h3>
              <p className='py-4 text-2xl text-black text-slate-300 text-center'>all projects that we have already done, proven can help to use more comfortable, then can used by client from our business.</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-10 sm:pt-10 text-black'>

              <div class="max-w-sm bg-white rounded-3xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 bg-team-img bg-cover">

                  <div className="pt-40">
                    <h5 class="mb-2 ml-4 text-2xl font-bold tracking-tight text-white dark:text-white">Cloud Byte App</h5>
                  </div>
              </div>
              
              <div class="max-w-sm bg-white rounded-3xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 bg-team-img bg-cover">
                  <a href="#">
                     
                  </a>
                <div className="pt-40">
                    <h5 class="mb-2 ml-4 text-2xl font-bold tracking-tight text-white dark:text-white">Cloud Byte App</h5>
                  </div>
              </div>

              <div class="max-w-sm bg-white rounded-3xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 bg-team-img bg-cover">
                  <a href="#">
                    
                  </a>
                <div className="pt-40">
                    <h5 class="mb-2 ml-4 text-2xl font-bold tracking-tight text-white dark:text-white">Cloud Byte App</h5>
                  </div>
              </div>
          </div>
          <div className='px-4 py-12 text-center'>
            <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">See All Portfolio</button>
          </div>
      </div>
  </div>
  );
};

export default Portfolio;