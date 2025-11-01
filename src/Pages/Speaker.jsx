import React from 'react'
import Header from '../Components/Header.jsx'
import '../Styles/Speaker.scss'
import Spea from '../Components/Spea.jsx'

const Speaker = () => {
  return (
    <div>
        <Header />
        <h1 className='sp'>Speakers</h1>
        <Spea />
      
    </div>
  )
}

export default Speaker
