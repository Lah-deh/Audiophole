import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";



const Footer = () => {
  return (
    <div className='footer'>
      <h2>audiophile</h2>
      <div className='foo'>
        <Link to="/">Home</Link> 
        <Link to="/headphone">Headphones</Link> 
        <Link to="/speaker">Speakers</Link> 
        <Link to="/earphones">Earphones</Link>
      </div>
      <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music<br/> lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
      <p>Copyright 2021. All Rights Reserved</p>
      <div className='ic'>
        <FaFacebookSquare className='fb' />
        <SlSocialTwitter className='tw' />
        <FaInstagram className='ig' />

      </div>
    </div>
  )
}

export default Footer
