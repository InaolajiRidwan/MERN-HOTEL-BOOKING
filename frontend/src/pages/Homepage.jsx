import React from 'react'
import Hero from "../components/Hero"
import HotelList from '../components/HotelList'
import Facility from '../components/Facility'
import HotelDetails from './HotelDetails'

const Homepage = () => {
  return (
    <div>
     <Hero />
     <HotelList />
     <Facility />
    </div>
  )
}

export default Homepage
