import React from 'react'
import style from "./Styles/sportsbanner.module.css"

const SportsBanner = () => {
  return (
           <>
               <div className={` ${style.videocontainer}`}>
                   <video autoPlay muted className={` ${style.backgroundvideo}`}>
                       <source src="https://media.istockphoto.com/id/1479135181/video/firework-with-audio.mp4?s=mp4-640x640-is&k=20&c=m_PN_5lsIh1oVrWz_siAQyMGOcbwRr9Kuv_JsHRw5x0=" type="video/mp4" />
                   </video>
                   <div className={` ${style.videoContent}`}>
                       <h6 className={style.sportSubHeading}>Inspiring Excellence Through</h6>
                       <h3 className={`mx-auto ${style.sportsEmpHeading}`}>Sports</h3>
                   </div>
               </div>
           </>
  )
}

export default SportsBanner