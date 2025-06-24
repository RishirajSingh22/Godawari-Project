import React from 'react';
import style from "../CommunityEducationComponents/Styles/EducationDescription.module.css"

const EducationDescription = () => {
  return (
    <section className={style.descriptionSection}  data-aos="fade-up">
        <div className='container'>
            <p className={`text-center  ${style.description}`}>Education is the cornerstone of GPIL’s CSR efforts, focusing on creating opportunities for learning and empowerment. By investing in scholarships, infrastructure, and digital tools, GPIL strives to ensure accessible and quality education for all, fostering brighter futures in the communities we serve.</p>
        </div>
    </section>

  )
}

export default EducationDescription;