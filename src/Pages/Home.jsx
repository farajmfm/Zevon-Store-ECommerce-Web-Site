import React from 'react'
import Announcement from '../Components/Announcement'
import Categories from '../Components/Categories'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import Products from '../Components/Products'
import Newsletter from '../Components/Newsletter'

const Home = () => {
  return (
    <div className='container'>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </div>
  )
}

export default Home

