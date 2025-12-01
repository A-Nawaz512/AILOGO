import React from 'react'
import RidesHero from '../components/rides/RidesHero'
import RidesOverview from '../components/rides/RidesOverview'
import RidesExperience from '../components/rides/RidesExperience'
import RidesCTA from '../components/rides/RidesCta'
const RidesPage = () => {
  return (
    <div>
        <RidesHero/>
        <RidesOverview/>
        <RidesExperience/>
        <RidesCTA/>
    </div>
  )
}

export default RidesPage