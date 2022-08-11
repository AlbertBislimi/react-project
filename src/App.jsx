import React from 'react'
import About from './components/about/About';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import OurServices from './components/ourservices/OurServices';
<script src="https://unpkg.com/flowbite@1.4.4/dist/flowbite.js"></script>
const App = () => {
    return (
      <>
      <Nav />
      <Header />
        <About />
        <OurServices />
      </>
    );
  }
  
  export default App