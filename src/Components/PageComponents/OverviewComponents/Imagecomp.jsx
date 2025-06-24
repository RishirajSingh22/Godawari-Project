import React from 'react'
import styles from "../OverviewComponents/styles/Imagecomp.module.css"

function Imagecomp() {
  return (
    <section>
      <div
        id="carouselExampleFade"
        className={` ${styles.maindiv} carousel slide carousel-fade container-fluid`}
        data-bs-ride="carousel"
      >
        <div className='container'>
        <div className={`carousel-inner text-center ${styles.imagediv}`}>
          <div className="carousel-item active ">
            <p className={`${styles.crouselHeading}`}>A Workplace That <br /> Empowers</p>
          </div>
          <div className="carousel-item ">
            <p className={`${styles.crouselHeading}`}> 2 A Workplace That <br /> Empowers</p>
          </div>
          <div className="carousel-item ">
            <p className={`${styles.crouselHeading}`}>3 A Workplace That <br /> Empowers</p>
          </div>     
        </div>
        
      </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
          style={{ border: "none", outline: "none", boxShadow: "none" }}
        >
          <span className="carousel-control-prev-icon " aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
          style={{ border: "none", outline: "none", boxShadow: "none" }}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
        </div>
    </section>
  )
}

export default Imagecomp
