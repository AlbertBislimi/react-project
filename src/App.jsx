import React from 'react'
import About from './components/about/About';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import OurPortfolio from './components/ourportfolio/OurPortfolio';
import OurServices from './components/ourservices/OurServices';

const App = () => {
    return (
      <>
      <div className='overflow-x-hidden'>
      <Nav />
      <Header />
        <About />
        <OurServices />
        <OurPortfolio />
   </div>
      </>
    );
  }
  
  export default App