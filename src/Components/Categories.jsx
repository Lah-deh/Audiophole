import React from 'react'
import { Link } from 'react-router-dom'
import headphone from '../assets/headphone.png'
import speaker from '../assets/speaker.png'
import earphone from '../assets/earphone.png'
import { PiGreaterThan } from "react-icons/pi";

const categories = [
  { name: "HEADPHONES", image: headphone, path: "/headphone" },
  { name: "SPEAKERS", image: speaker, path: "/speaker" },
  { name: "EARPHONES", image: earphone, path: "/category/earphones" }
];

const Categories = () => {
  return (
    <div className='category-section'>
      <div className="category-grid">
        {categories.map((cat, index) => (
          <div key={index} className="category-card">
            <img src={cat.image} alt={cat.name} />
            <p>{cat.name}</p>
            <Link to={cat.path} className='shop'>
              Shop <PiGreaterThan />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
