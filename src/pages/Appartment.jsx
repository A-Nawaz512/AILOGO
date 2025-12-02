import React from 'react'
import ApartmentHero from '../components/appartments/ApartmentHero'
import KeyBenefits from '../components/appartments/KeyBenefits'
import HowItWorksClient from '../components/appartments/HowItWorksClient'
import HowItWorksHost from '../components/appartments/HowItWorksHost'
import CommissionAndMap from '../components/appartments/CommissionAndMap'
import CTASection from '../components/appartments/CTASection'

const Appartment = () => {
  return (
    <div>
        <ApartmentHero/>
        <KeyBenefits/>
        <HowItWorksClient/>
        <HowItWorksHost/>
        <CommissionAndMap/>
        <CTASection/>
    </div>
  )
}

export default Appartment