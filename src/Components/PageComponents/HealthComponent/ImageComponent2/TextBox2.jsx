import React from 'react'
import style from "../Styles/TextBox.module.css"
function TextBox2() {
  return (
    <section className={style.textboxSection}>
        <h1 className={style.heading}>Health Screenings & Eye Care</h1>
        <ul  className={style.Ullist}>
          <li>Financial support to Udayanchal Sanstha in Rajnandgaon and MGM Eye Hospital to improve access to specialised treatments.</li>
       <li>Deployment of a mammography van for early detection and diagnosis of breast cancer and other breast diseases among underprivileged communities at Balco Medical Cancer Hospital, Raipur.</li>
       <li>Collaboration with a service provider to conduct eye check-ups and cataract surgeries for the underprivileged.</li>
       <li>Periodic health check-up camps are organised in rural areas to provide essential initial healthcare services.</li>
        </ul>
    </section>
  )
}

export default TextBox2
