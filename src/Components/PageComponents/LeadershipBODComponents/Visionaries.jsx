import React from 'react'
import style from "../LeadershipBODComponents/Styles/Visionaries.module.css"

function Visionaries() {
  return (
    <section >
        <div className={`container-fluid ${style.visionariesSection}`}>
            <div className={`text-center  ${style.visionariHeading}`}>
                <p className={`text-center ${style.p1}`}> Visionaries Leading Excellence</p>
                {/* <p className={` ${style.p2}`}>At the helm of GPIL is a visionary leadership team that drives its mission of operational excellence and sustainable growth. Their strategic foresight ensures GPIL stays ahead in a competitive industry, balancing innovation with responsible practices.</p> */}
            </div>
        </div>
    </section>
  )
}
export default Visionaries;