import React from 'react'
import About from './components/about/About';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import OurPortfolio from './components/ourportfolio/OurPortfolio';
import OurServices from './components/services/OurServices';
import Testimonial from './components/testimonial/Testimonial';
import Cta from './components/cta/Cta';

const App = () => {
    return (
      <>
      <div className='overflow-x-hidden container mx-auto px-4'>
      <Nav />
      <Header />
        <About />
        <OurServices />
        <OurPortfolio />
        <Testimonial />
        <Cta />
      </div>
      </>
    );
  }
  
  export default App