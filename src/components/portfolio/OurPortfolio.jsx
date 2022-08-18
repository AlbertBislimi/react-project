import React from 'react'

const OurPortfolio = () => {
  return (
    <div className=' overflow-x-hidden gap-y-2 flex-col absolute flex h-screen bg-white' id='op'>
        
        <div className='flex gap-y-6 flex-col w-screen h-2/6 items-center justify-center text-center'>
        <h3 className='text-3xl font-semibold text-cyan-600'>Our Portfolio</h3>
        <h1 className='font-bold text-6xl'>What do we do</h1>
        <p className='text-1xl'>All projects that we have already done , proven can help to use more comfortable, then can used by client from our business</p>
        </div>
<div className='flex justify-center items-center'>
    <div className='flex gap-x-20 flex-row w-screen h-2/3' id='cards'>

    <a href="/#" class="block p-6 w-80 h-80  bg-white rounded-3xl border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <img
            src=""
            alt=""
            className="w-32 mx-10"
          />
    <h5 class="mb-2 mx-8 mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Social Media
Management</h5>
    </a>

    <a href="/#" class="block p-6 w-96 h-96  bg-white rounded-3xl border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <img
            src=""
            alt=""
            className="w-32 mx-10"
          />
    <h5 class="mb-2 mx-8 mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Social Media
Management</h5>
    </a>

    <a href="/#" class="block  p-6 w-80 h-80  bg-white rounded-3xl border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <img
            src=""
            alt=""
            className="w-32 mx-10"
          />
    <h5 class="mb-2 mx-8 mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Social Media
Management</h5>
    </a>

            </div>
              </div>
              </div>
   
  )
}

export default OurPortfolio