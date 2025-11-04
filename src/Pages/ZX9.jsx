import React from 'react'
import Header from '../Components/Header'
import AboutZX9 from '../Components/AboutZX9'
import FeatureZX9 from '../Components/FeatureZX9'
import Categories from '../Components/categories.jsx'
import About from '../Components/About.jsx'
import Footer from '../Components/Footer.jsx'
import '../Styles/XX9.scss'

const ZX9 = () => {
  return (
    <div className='ff'>

        <Header/>
        <AboutZX9/>
        <FeatureZX9/>
        <Categories />
        <About />
        <Footer />
      
    </div>
  )
}

export default ZX9
