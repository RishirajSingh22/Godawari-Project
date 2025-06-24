import React from 'react'
import style from "../FinancialComponents/Styles/FinancialImgSection.module.css"


const FinancialImgSection = () => {
  return (
    <section>
      {" "}
      <div className={`contaner-fluid ${style.ecosystem}`}>
        <div className={` ${style.visionariHeading}`}>
          <p className={`mx-auto ${style.p1}`}> Strength in Numbers</p>
  
        </div>
      </div>
    </section>
  )
}

export default FinancialImgSection;