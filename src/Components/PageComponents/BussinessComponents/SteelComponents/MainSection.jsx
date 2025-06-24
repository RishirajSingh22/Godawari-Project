import React from 'react'
import TextContentBox from './TextContentBox'
import style from "../SteelComponents/Styles/MainSection.module.css";
import CapacitySnapshot from './CapacitySnapshot';
import OurOffering from './OurOffering';

function MainSection() {
  return (
    <div className={style.MainSection}>
      <TextContentBox/>
      <CapacitySnapshot/>
      <OurOffering/>
   
    </div>
  )
}

export default MainSection
