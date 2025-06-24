import React from 'react'
import style from "../HealthComponent/Styles/TextBanner.module.css"
function TextBanner() {
  return (
    <section className={style.textBanner}>
        <div >
            <p className={style.BannerText}>GPIL prioritises health and well-being through its CSR initiatives, ensuring access to quality healthcare for underserved communities. 
             </p>
        </div>
    </section>
  )
}

export default TextBanner
