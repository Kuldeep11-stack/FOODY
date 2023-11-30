import React from 'react'
import Banner from '../../components/Banner'
import Categories from './Categories'
import SpecialDishes from './SpecialDishes'
import Testimonials from './Testimonials'
import OurStory from './OurStory'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Categories/>
      <SpecialDishes/>
      <Testimonials/>
      <OurStory/>
    </div>
  )
}

export default Home