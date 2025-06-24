import React from 'react'
import EnergyGrought from '../Components/PageComponents/BussinessComponents/EnergyComponent/EnergyGrought'
import EnergyBanner from '../Components/PageComponents/BussinessComponents/EnergyComponent/EnergyBanner'
import ContactUsSection from '../Components/PageComponents/BussinessComponents/BilletsComponent/ContactUsSection'

const Energy = () => {
  return (
    <div>
      <EnergyBanner/>
      <EnergyGrought/>
      <ContactUsSection />
    </div>
  )
}

export default Energy
