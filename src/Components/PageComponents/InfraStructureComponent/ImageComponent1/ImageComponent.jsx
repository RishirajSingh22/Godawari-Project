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
              <img src="https://i.ibb.co/933W7GdL/image-7.png" alt="img" className={style.Images} />
            </div>
            <div className='col-md-6  m-0 p-0'>
              <div className={style.school}>
                <div className={style.textSection}>
                  <h5 className={style.headings}>Water Management Irrigation and Drinking Water</h5>
                  <ul>
                    <li>
                      Construction and renovation of water bodies to meet irrigation and
                      drinking water needs.
                    </li>
                    <li>
                      Installation of overhead water storage tanks and pipelines to improve
                      drinking water supply.
                    </li>
                    <li>
                      Borewell setups to ensure groundwater availability for drinking
                      purposes.
                    </li>
                    <li>
                      Implementation of rainwater harvesting and groundwater recharge
                      systems for water conservation, preservation, and augmentation.
                    </li>              </ul>
                </div>
              </div>
            </div>
          </div>
          {/* second row */}
          <div className="row flex-wrap-reverse">
            <div className='col-md-6  m-0 p-0'>
              <div className={style.school}>
                <div className={style.textSection}>
                  <h5 className={style.headings}>Roads & Educational Infrastructure</h5>
                  <ul>
                    <li>
                      Construction of a robust rural road network to boost agricultural
                      activities and improve connectivity.
                    </li>
                    <li>
                      Building community toilets and drainage systems to support the "Clean
                      India Mission.
                    </li>
                    <li>
                      Repair, levelling, and cleaning of monsoon-affected roads for smooth
                      and safe usage by the community.
                    </li>
                    <li>
                      Installation of LED streetlights and other safety measures in rural
                      areas.
                    </li>
                    <li>
                      Construction of classrooms, playgrounds, prayer sheds, school
                      kitchens, and toilet blocks in rural schools to provide better
                      learning environments for students.
                    </li>

                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-6  m-0 p-0'>
              <img src="https://i.ibb.co/qY0RB678/image-5.png" alt="img" className={style.Images} />
            </div>
          </div>
          {/* third  row */}
          <div className='row'>
            <div className='col-md-6  m-0 p-0'>
              <img src="https://i.ibb.co/SDh4scGR/image-6.png" alt="img" className={style.Images} />
            </div>
            <div className='col-md-6  m-0 p-0'>
              <div className={style.school}>
                <div className={style.textSection}>
                  <h5 className={style.headings}>Recreational & Public Spaces</h5>
                  <ul>
                    <li>
                      Development of parks, playgrounds, and cultural spaces to enhance
                      community engagement and recreation.
                    </li>
                    <li>
                      Renovation and beautification of cultural congregation spaces for
                      community events and gatherings.
                    </li>
                    <li>
                      Upgradation of local hospitals to provide better healthcare services.
                    </li>
                    <li>
                      Implementation of modern sanitation facilities to promote hygiene in
                      public spaces and schools.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section >
    </>
  )
}

export default ImageComponent
