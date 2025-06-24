import React from 'react'
import style from "./Styles/womenempdescription.module.css"

const WomenEmpDescription = () => {
  return (
    <section className={style.womenDescriptionsSection}>
      <div className='container'>
        <div className='text-center ' data-aos="fade-up">
        <p className={`${style.womenDescription}`}>
          GPIL is committed to fostering inclusive growth by empowering women with the skills and opportunities needed to achieve financial independence and self-reliance. Women’s empowerment is central to achieving gender equality, where both men and women have equal access to education, healthcare, and economic participation. Through strategic community initiatives, we support underprivileged women, particularly in rural and tribal areas, enabling them to build sustainable livelihoods and enhance their self-confidence.
        </p>
        </div>
      </div>
    </section>
  )
}

export default WomenEmpDescription