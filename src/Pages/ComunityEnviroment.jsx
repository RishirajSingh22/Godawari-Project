import React from 'react'
import TopImage from '../Components/PageComponents/ComunityEnviromentComponents/TopImage'
import ImageComponent from '../Components/PageComponents/ComunityEnviromentComponents/ImageComponent'
import GlobalGoals from '../Components/PageComponents/ComunityEnviromentComponents/GlobalGoals'
import EducationGlobalGoals from '../Components/PageComponents/CommunityEducationComponents/EducationGlobalGoals'

function ComunityEnviroment() {
  return (
    <div>
      <TopImage/> 
      <ImageComponent/>
      <EducationGlobalGoals/>
    </div>
  )
}

export default ComunityEnviroment
