import React from 'react';
import style from "../CommunityEducationComponents/Styles/Facilities.module.css";
import EducationDescription from './EducationDescription';

const Facilities = () => {
    return (
        <>
          <section className={style.facilitiesSection}>
  <EducationDescription />
  <div className="container-fluid">
    {/* First Row */}
    <div className="row">
      <div className="col-md-6 m-0 p-0" data-aos="fade-up" data-aos-delay="100">
        <img src="https://i.ibb.co/C3WbFHCR/image-10.png" alt="img" className={style.Images} />
      </div>
      <div className="col-md-6 m-0 p-0" data-aos="fade-up" data-aos-delay="200">
        <div className={style.school}>
          <div className={style.textSection}>
            <h5 className={style.headings}>Financial Support for Schools</h5>
            <ul>
              <li>Providing aid to nearby schools to promote education and ensure student safety.</li>
              <li>Offering financial assistance to the ‘Friends of Tribal Society’ for operating Ekal Vidyalayas in Chhattisgarh.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Second Row */}
    <div className="row flex-wrap-reverse">
      <div className="col-md-6 m-0 p-0" data-aos="fade-up" data-aos-delay="300">
        <div className={style.school}>
          <div className={style.textSection}>
            <h5 className={style.headings}>Infrastructure Development</h5>
            <ul>
              <li>Renovated school buildings, classrooms, and toilet blocks and provided other infrastructural support in government schools.</li>
              <li>Constructed auditoriums and classrooms in various educational institutions to enhance learning environments.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-6 m-0 p-0" data-aos="fade-up" data-aos-delay="400">
        <img src="https://i.ibb.co/p6yXW230/image-11.png" alt="img" className={style.Images} />
      </div>
    </div>

    {/* Third Row */}
    <div className="row">
      <div className="col-md-6 m-0 p-0" data-aos="fade-up" data-aos-delay="500">
        <img src="https://i.ibb.co/3m7t38C6/MUR-5149.png" alt="img" className={style.Images} />
      </div>
      <div className="col-md-6 m-0 p-0" data-aos="fade-up" data-aos-delay="600">
        <div className={style.school}>
          <div className={style.textSection}>
            <h5 className={style.headings}>Digital & Advanced Learning</h5>
            <ul>
              <li>Collaborated with service providers to offer computer education and digital tools for students under the "Digital India" initiative.</li>
              <li>Extending financial assistance to economically disadvantaged students at premier institutions.</li>
              <li>Established smart classrooms in government schools to boost student engagement and improve digital learning outcomes.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Fourth Row */}
    <div className="row flex-wrap-reverse">
      <div className="col-md-6 m-0 p-0" data-aos="fade-up" data-aos-delay="700">
        <div className={style.school}>
          <div className={style.textSection}>
            <h5 className={`pt-5 ${style.EductationSupport}`}>Specialised Education Support</h5>
            <ul>
              <li>Providing financial assistance for Eklavya Model Residential School and IAS coaching, empowering 120 tribal students annually.</li>
              <li>Supporting Akanksha Lions School and Asha Arpan Divyang Public School for special children.</li>
              <li>Supporting the Industrial Training Institute (ITI) in Hathband under the Public-Private Partnership (PPP) model.</li>
              <li>Partnering with NGOs to enhance basic English education programs for students in government schools.</li>
              <li>Facilitating spoken English and personality development classes for students in rural areas through NGO partnerships.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-6 m-0 p-0" data-aos="fade-up" data-aos-delay="800">
        <img src="https://i.ibb.co/kVfMsh0C/image-12.png" alt="img" className={style.Images} />
      </div>
    </div>
  </div>
</section>

        </>
    )
}
export default Facilities;