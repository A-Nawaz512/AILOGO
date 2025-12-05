import React from 'react'
import DeliveriesHero from '../components/deliveries/DeliveriesHero'
import DeliveriesFeaturesSection from '../components/deliveries/DeliveriesAvailability'
import DeliveriesCourierMapFaqSection from '../components/deliveries/TrackingStatus'
import DeliveriesCTASection from '../components/deliveries/DeliveryFAQ'
import DeliveryFeatures from '../components/deliveries/PaymentSection'
import DeliveryLoyaltyCredit from '../components/deliveries/ProofOfDelivery'
import DeliveryCommunication from '../components/deliveries/DeliveryCommunication'

const Deliveries = () => {
  return (
    <div>
        <DeliveriesHero/>
        <DeliveriesFeaturesSection/>
        <DeliveriesCourierMapFaqSection/>
        <DeliveryFeatures/>
        <DeliveryLoyaltyCredit/>
        <DeliveriesCTASection/>
        <DeliveryCommunication/>

    </div>
  )
}

export default Deliveries