import React from 'react'
import DeliveriesHero from '../components/deliveries/DeliveriesHero'
import DeliveriesFeaturesSection from '../components/deliveries/DeliveriesFeaturesSection'
import DeliveriesCourierMapFaqSection from '../components/deliveries/DeliveriesCourierMapFaqSection'
import DeliveriesCTASection from '../components/deliveries/DeliveriesCTASection'

const Deliveries = () => {
  return (
    <div>
        <DeliveriesHero/>
        <DeliveriesFeaturesSection/>
        <DeliveriesCourierMapFaqSection/>
        <DeliveriesCTASection/>
    </div>
  )
}

export default Deliveries