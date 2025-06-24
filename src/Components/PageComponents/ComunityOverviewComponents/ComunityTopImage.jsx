import React from 'react'
import style from "../ComunityOverviewComponents/Styles/CommunityTopImage.module.css"

function ComunityTopImage() {
  return (
       <div className={` ${style.videocontainer}`}>
         <video autoPlay muted className={` ${style.backgroundvideo}`}>
           <source src="https://media.istockphoto.com/id/1479135181/video/firework-with-audio.mp4?s=mp4-640x640-is&k=20&c=m_PN_5lsIh1oVrWz_siAQyMGOcbwRr9Kuv_JsHRw5x0=" type="video/mp4" />
         </video>
         <div className={` ${style.content}`} data-aos="fade-left">
           <h6 className={style.imageHeading}>Video compilation of <br/> CSR sites </h6>
         
         </div>
       </div>
  )
}

export default ComunityTopImage
