import React from 'react';
import { Data } from "./Data"
import testimonial from '../../assets/testimonial.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";

const Testimonial = () => {
  return (
    <div className='w-full dark:bg-black'>
        <div className='max-w-[1240px] mx-auto relative lg:py-10 lg:px-12'>
            <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'>
                <h2 className="text-xl pt-8 text-blue-600 text-center dark:text-white">Testimonial</h2>
                <h3 className='text-3xl font-bold py-2 sm:text-5xl text-black text-center dark:text-white'>People Talk about us</h3>
            </div>

            <Swiper className='grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16 px-4 py-12 sm:pt-10 text-black'
                        loop={true}
                        grabCursor={true}
                        spaceBetween={24}
                        pagination={{
                        clickable: true,
                        }}
                        autoplay={{
                            delay: 4200,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                        }}
                        modules={[Autoplay, Pagination]}
            >
                {Data.map(({id, image, title, job, description }) => {
                    return (
                        <SwiperSlide className="w-full bg-white rounded-lg border border-gray-50 drop-shadow-xl dark:bg-[#0B0F15] dark:border-gray-800 pt-10" >
                            <div className="flex flex-col items-center pb-8" key={id}>
                                <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={testimonial} alt="Bonnie"/>
                                <h5 className="mb-1 text-xl font-medium text-blue-500 dark:text-white">{title}</h5>
                                <span className="text-sm text-gray-500 dark:text-gray-400">{job}</span>
                                <div className="flex mt-4 space-x-3 md:mt-6">
                                    <p className="m-6 font-normal text-gray-700 dark:text-white">{description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    </div>
  );
};

export default Testimonial;