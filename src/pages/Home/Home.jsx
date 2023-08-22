import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
const Home = () => {
  return (
    <div className='home'>
      <div className="background-color"></div>
      <div className="home-content">
      <h1>Guledabdilatif Pizza</h1>
      <Link to="/Menu">
        <button>Order Now</button>
      </Link>
    </div>
    </div>
  )
}

export default Home