import React from 'react'
import RidesHero from '../components/rides/RidesHero'
import RidesOverview from '../components/rides/RidesOverview'
import RidesExperience from '../components/rides/RidesExperience'
// import RidesCTA from '../components/rides/RidesCta'
import ProviderJourney from '../components/rides/ProviderJourney'
import RidesPricing from '../components/rides/RidesPricing'
import RidesPoints from '../components/rides/RidesPoints'
import RidesUIElements from '../components/rides/RidesUIElements'
const RidesPage = () => {
  return (
    <div>
        <RidesHero/>
        <RidesOverview/>
        <RidesExperience/>
        <ProviderJourney/>
        <RidesPricing/>
        <RidesPoints/>
        <RidesUIElements/>
        {/* <RidesCTA/> */}
    </div>
  )
}

export default RidesPage