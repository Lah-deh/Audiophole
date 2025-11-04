import React from 'react'
import Header from '../Components/Header.jsx'
import AboutZX7  from '../Components/AboutZX7.jsx'
import FeatureZX7 from '../Components/FeatureZX7.jsx'
import Categories from '../Components/Categories.jsx'
import About from '../Components/About.jsx'
import Footer from '../Components/Footer.jsx'



const ZX7= () => {
  return (
    <div className='ff'>
        <Header />
        <AboutZX7/>
        <FeatureZX7 />

        <Categories />
        <About />
        <Footer />
    </div>
  )
}

export default ZX7
