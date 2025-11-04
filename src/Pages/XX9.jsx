import React from 'react'
import Header from '../Components/Header.jsx'
import AboutXX9 from '../Components/AboutXX9.jsx'
import FeatureXX9 from '../Components/FeatureXX9.jsx'
import Categories from '../Components/Categories.jsx'
import About from '../Components/About.jsx'
import Footer from '../Components/Footer.jsx'
import '../Styles/XX9.scss'


const XX9 = () => {
  return (
    <div className='ff'>
        <Header />
        <AboutXX9/>
        <FeatureXX9 />

        <Categories />
        <About />
        <Footer />
    </div>
  )
}

export default XX9
