import React from 'react';
import style from "./Styles/Ohsbanner.module.css"

const OhsBanner = () => {
  return (
      <section className={style.ohsBanner}>
            <div className="container">
              <h1 className={style.heading}>
               Protecting Our People With
              <br />
              <span>Occupational Health & Safety</span>          
              </h1>
            </div>
          </section>
  )
}

export default OhsBanner;