import React from 'react'
import About from './components/about/About';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import OurPortfolio from './components/ourportfolio/OurPortfolio';
import OurServices from './components/services/OurServices';
import Testimonial from './components/testimonial/Testimonial';
import Cta from './components/cta/Cta';
import Footer from './components/footer/Footer';
import bg from './assets/bg.png'

const App = () => {
    return (
      <>
      
  
      <div className='overflow-x-hidden dark:bg-black container mx-auto px-[25px] sm:px-[25px] lg:px-[75px]'>
      <div style={{ backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
      <Nav />
      <Header />
        <About />
        <OurServices />
        <OurPortfolio />
        <Testimonial />
        <Cta />
      </div> 
      </div>
      <Footer />
      </>
    );
  }
  
  export default App