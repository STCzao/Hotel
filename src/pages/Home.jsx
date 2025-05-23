import React from 'react'
import Hero from '../components/Hero/Hero'
import FeaturedDestination from '../components/FeaturedDestination/FeaturedDestination.jsx'
import ExclusiveOffers from '../components/ExclusiveOffers/ExclusiveOffers.jsx'


const Home = () => {
  return (
    <div>
        <Hero/>
        <FeaturedDestination/>
        <ExclusiveOffers/>
    </div>
  )
}

export default Home