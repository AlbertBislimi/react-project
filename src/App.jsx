import React from 'react'
import About from './components/about/About';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import OurPortfolio from './components/ourportfolio/OurPortfolio';
import OurServices from './components/ourservices/OurServices';

<script src="https://unpkg.com/flowbite@1.4.4/dist/flowbite.js"></script>
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