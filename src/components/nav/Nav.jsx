import React from 'react'
import LOGO from '../../assets/logo.png'
import { Link } from 'react-scroll'
import DarkMode from '../darkMode/DarkMode';


const Nav = () => {
  const [colorTheme, setTheme] = DarkMode();
  return (
      <nav className="bg-white px-6 sm:px-[40px] pt-[40px] dark:bg-black transition duration-500">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/#" className="flex items-center">
              <img src={LOGO} className="mr-3 h-6 sm:h-9" alt="Logo"/>
              <div className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"><span className="w-100 block mb-[-15px] text-[14px] font-[700]">Interview Managment</span><span className="text-[12px] font-[300]">System</span></div>
          </a>
          <div className="flex md:order-2">
            <div className="relative">
            <button onClick={() => setTheme(colorTheme)} id="theme-toggle" type="button" className="absolute pl-20 text-gray-500 lg:relative md:relative dark:text-amber-500 focus:outline-none rounded-lg text-sm p-2.5">
              {colorTheme === "light" ? (
              <svg 
                id="theme-toggle-light-icon" 
                className="w-5 h-5" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" 
                    fill-rule="evenodd" 
                    clip-rule="evenodd">
                  </path>
                </svg>
            ) : ( 
              <svg 
                id="theme-toggle-dark-icon" 
                className="w-5 h-5" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z">
                </path>
              </svg>
            )}
            </button>
            </div>
            <button type="button" className="invisible md:visible text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Our Project</button>
            <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-black md:dark:bg-black dark:border-gray-700">
              

              <Link activeClass='active' to="home" spy={true} smooth={true} duration={1000} 
                    className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</Link>
              
              <Link activeClass='active' to="about" spy={true} smooth={true} duration={1000} 
                    className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
              
            
              <Link activeClass='active' to="services" spy={true} smooth={true} duration={1000} 
                    className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
              
            
              <Link activeClass='active' to="contact" spy={true} smooth={true} duration={1000} 
                    className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
              
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Nav