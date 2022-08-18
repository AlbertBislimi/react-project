import React from 'react'
import About from './components/about/About';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import OurPortfolio from './components/ourportfolio/OurPortfolio';
import OurServices from './components/ourservices/OurServices';
import Testimonial from './components/testimonial/Testimonial';

const App = () => {
    return (
      <>
      <div className='container mx-auto px-4'>
      <Nav />
      <Header />
        <About />
        <OurServices />
        <OurPortfolio />
        <Testimonial />
      </div>
      </>
    );
  }
  
  export default App