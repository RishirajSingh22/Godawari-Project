// import React from 'react'
import style from "../Styles/ImageComponent.module.css"
import TextBanner from '../TextBanner'
function ImageComponent() {
  return (
    <>
      <section className={style.facilitiesSection}>
        <TextBanner />
        <div className='container-fluid'>
          {/* first row */}
          {/* <div className='row'> */}
          {/* <div className='col-12  m-0 p-0'> */}
          <div>
            <img src="https://i.ibb.co/MYkWzgZ/image-1.png" alt="img" className={style.aashramImage} />
          </div>
          {/* <div className='col-12  m-0 p-0'> */}
          <div className="container py-5 ">
            <div className={style.aashram}>
              <div className={style.textSection1}>
                <h5 className={style.headings}>Maa Godawari Anand Vridhashram</h5>
                <ul>
                  <li>Established an old-age home to provide care and support for senior citizens.</li>
                  <li>Provides care and support facilities for senior citizens.</li>
                  <li>Offers in-house medical care, regular health check-ups and nursing assistance for elderly residents.</li>
                  <li>Ensures clean, ventilated living spaces, housekeeping and hygiene maintenance for a comfortable stay.</li>
                  <li>Provides nutritious meals in a community dining hall to promote well-being.</li>
                  <li>Encourages physical and mental engagement through indoor games, yoga, meditation, and religious activities.</li>
                  <li>Equipped with CCTV monitoring, emergency exits, fire safety systems, and 24/7 security for residents' safety.</li>

                </ul>
              </div>
            </div>
          </div>
          {/* </div> */}
          {/* second row */}
          <div className="row flex-wrap-reverse">
            <div className='col-md-6  m-0 p-0'>
              <div className={style.school}>
                <div className={style.textSection}>
                  <h5 className={style.headings}>Infrastructure Development</h5>
                  <ul>
                    <li>
                      Offering financial assistance for marriages, senior citizen care, and public awareness programs.
                    </li>
                    <li>
                      Supporting Gaushalas to honour and protect cows, contributing to spiritual and environmental well-being.                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-6  m-0 p-0'>
              <img src="https://i.ibb.co/9mm84nsH/image-9.png" alt="img" className={style.Images} />
            </div>
          </div>
          {/* third  row */}
          <div className='row'>
            <div className='col-md-6  m-0 p-0'>
              <img src="https://i.ibb.co/3m7t38C6/MUR-5149.png" alt="img" className={style.Images} />
            </div>
            <div className='col-md-6  m-0 p-0'>
              <div className={style.school}>
                <div className={style.textSection}>
                  <h5 className={style.headings}>Public Awareness Campaigns</h5>
                  <ul>
                    <li>
                      Anti-alcohol and tobacco awareness drives to educate and promote
                      healthier lifestyles.
                    </li>
                    <li>
                      Renovation & development of  Muktidhaam for enhancing amenities for
                      religious ritual
                    </li>                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Fourth row */}
          <div className="row flex-wrap-reverse">
            <div className='col-md-6 m-0 p-0'>
              <div className={style.school}>
                <div className={style.textSection}>
                  <h5 className={`pt-5 ${style.EductationSupport}`}>Livelihood Support</h5>
                  <ul>
                    <li>Financial support for livelihood under privilege community</li>
                    <li>Financial support to Self Help Groups for their livelihood </li>
                    <li>Support  for Tricycle & Scooter for Differently Abled People</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-6 m-0 p-0'>
              <img src="https://i.ibb.co/93dndPd5/image-10.png" alt="img" className={style.Images} />
            </div>
          </div>
        </div>
      </section >
    </>
  )
}

export default ImageComponent






