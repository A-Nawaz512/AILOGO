import React from 'react'
import RentalsHero from '../components/rental/RentalsHero'
import RentalsDetails from '../components/rental/RentalsDetails'
import RentalsDetailsSection from '../components/rental/RentalsDetailsSection'
import RentalsFaqSection from '../components/rental/RentalsFaqSection'

const Rental = () => {
  return (
    <div>
        <RentalsHero/>
          <RentalsDetails/>

        <RentalsDetailsSection/>
        <RentalsFaqSection/>
          </div>
  )
}

export default Rental