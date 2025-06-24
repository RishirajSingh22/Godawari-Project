import React from 'react'
import ComunityTopImage from '../Components/PageComponents/ComunityOverviewComponents/ComunityTopImage'
import OverViewServing from '../Components/PageComponents/ComunityOverviewComponents/OverViewServing'
import ImageTextComponent from '../Components/PageComponents/ComunityOverviewComponents/ImageTextSection'

function ComunityOverview() {
  return (
    <div>
      <ComunityTopImage/>
      <OverViewServing/>
      <ImageTextComponent/>
    </div>
  )
}

export default ComunityOverview
