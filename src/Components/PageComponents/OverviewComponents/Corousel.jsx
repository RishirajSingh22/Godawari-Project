import React from 'react'
import styles from '../OverviewComponents/styles/Corousel.module.css'

function Corousel() {
  return (
    <div className={styles.maincontainer}>
      <div className={` ${styles.maindiv}`}>
        <h2 className={`text-center ${styles.title}`}>Life At GIPL</h2>


        {/* <div id="carouselExample" className="carousel slide">
            <div className='container'>
          <div className="carousel-inner">
              <div className={`${styles.critem} carousel-item active `}>
                <img src="https://i.ibb.co/nshqfMjM/img-1.jpg" className={`w-100 rounded ${styles.imagecontainer}`} alt="..." />
              </div>
            </div>

          </div>
          <button
            className={`${styles.buttoncontainer} carousel-control-prev`}
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className={`${styles.buttoncontainer} carousel-control-next`}
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div> */}
        <div
          id="carouselExampleFade"
          className={` ${styles.maindiv} carousel slide carousel-fade container-fluid`}
          data-bs-ride="carousel"
        >
          <div className='container'>

            <div className={`carousel-inner ${styles.imagediv}`}>
              <div className="carousel-item active ">
                <img src="https://i.ibb.co/nshqfMjM/img-1.jpg" className={` ${styles.swiperImage}`} alt="..." />
              </div>
              {/* <div className="carousel-item ">
                <p className={`${styles.crouselHeading}`}> 2 A Workplace That Empowers</p>
              </div>
              <div className="carousel-item ">
                <p className={`${styles.crouselHeading}`}>3 A Workplace That Empowers</p>
              </div> */}
            </div>

          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon " aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>





      </div>
    </div>
  )
}

export default Corousel