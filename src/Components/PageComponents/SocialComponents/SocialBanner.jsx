import React from 'react';
import style from "./Styles/socialbanner.module.css"

const SocialBanner = () => {
  return (
       <section className={style.billetsBanner}>
           <div className="container">
             <h1 className={style.heading}>
             Social Commitments
               <br />
               <span>Committed to Responsible Growth</span>
             </h1>
           </div>
         </section>
  )
}

export default SocialBanner