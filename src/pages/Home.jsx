import React from 'react'
import Hero from '../components/Hero'
import FindYourDestination from '../components/FindYourDestination'
import Offers from '../components/Offers'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'
import RecommendedHotel from '../components/RecommendedHotel'

const Home = () => {
  return (
    <>
    <Hero />
    <RecommendedHotel />
    <FindYourDestination />
    <Offers />
    <Testimonial />
    <NewsLetter />
    </>
  )
}

export default Home