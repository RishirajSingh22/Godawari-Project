import React from 'react'
import style from "../Styles/ImageComponent.module.css"
import TextBanner from '../TextBanner'
function ImageComponent() {
  return (

    <>
      <section className={style.facilitiesSection}>
        <TextBanner />
        <div className='container-fluid'>
          {/* first row */}
          <div className='row'>
            <div className='col-md-6  m-0 p-0'>
              <img src="https://i.ibb.co/PKn3MRK/image.png" alt="img" className={style.Images} />
            </div>
            <div className='col-md-6  m-0 p-0'>
              <div className={style.school}>
                <div className={style.textSection}>
                  <h5 className={style.headings}>F-95 Physiotherapy Unit</h5>
                  <ul>
                    <li>Advanced equipment, skilled physiotherapists for physiotherapy services and specialized treatment for musculoskeletal, neurological, and orthopaedic conditions, such as pain management, injury rehabilitation, post-surgical recovery, and mobility improvement to enhance functional health.</li>
                    <li>Address ergonomics-related issues, ensuring better posture, reduced strain, and improved workplace well-being for GPIL employees.</li>
                    <li>Employee training on posture correction, stretching, strengthening exercises, and ergonomics to prevent injuries and improve daily movement efficiency.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* second row */}
          <div className="row flex-wrap-reverse">
            <div className='col-md-6  m-0 p-0'>
              <div className={style.school}>
                <div className={style.textSection}>
                  <h5 className={style.headings}>Health Screenings & Eye Care</h5>
                  <ul>
                    <li>Financial support to Udayanchal Sanstha in Rajnandgaon and MGM Eye Hospital to improve access to specialised treatments.</li>
                    <li>Deployment of a mammography van for early detection and diagnosis of breast cancer and other breast diseases among underprivileged communities at Balco Medical Cancer Hospital, Raipur.</li>
                    <li>Collaboration with a service provider to conduct eye check-ups and cataract surgeries for the underprivileged.</li>
                    <li>Periodic health check-up camps are organised in rural areas to provide essential initial healthcare services.</li>

                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-6  m-0 p-0'>
              <img src="https://i.ibb.co/TBr0Q6SS/image-1.png" alt="img" className={style.Images} />
            </div>
          </div>
          {/* third  row */}
          <div className='row'>
            <div className='col-md-6  m-0 p-0'>
              <img src="https://i.ibb.co/60LJs0rt/image-2.png" alt="img" className={style.Images} />
            </div>
            <div className='col-md-6  m-0 p-0'>
              <div className={style.school}>
                <div className={style.textSection}>
                  <h5 className={style.headings}>Medical <br />Infrastructure</h5>
                  <ul>
                    <li>Operation of First Aid Health Centers and 24x7 free ambulance services in rural areas.</li>
                    <li>Support for “Hamar Lab,” an integrated diagnostic centre with state-of-the-art equipment in Bhanupratappur.</li>
                    <li>Provision of 24x7 free fire-fighting vehicle services in rural areas to enhance safety and emergency response.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Fourth row */}
          <div className="row flex-wrap-reverse">
            <div className='col-md-6 m-0 p-0'>
              <div className={style.school}>
                <div className={style.textSection}>
                  <h5 className={`pt-5 ${style.EductationSupport}`}>Community Healthcare Awareness Programs:</h5>
                  <ul>
                    <li>Financial aid to regional hospitals to improve care delivery and accessibility.</li>
                    <li>Awareness campaigns focused on educating communities about diseases, risks, nutrition, hygiene, and safety. These programs also provide schools, colleges, and communities with resources for learning and accessing healthcare support.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-6 m-0 p-0'>
              <img src="https://i.ibb.co/vCQvN6sc/image-3.png" alt="img" className={style.Images} />
            </div>
          </div>
        </div>
      </section >
    </>
  )
}

export default ImageComponent
