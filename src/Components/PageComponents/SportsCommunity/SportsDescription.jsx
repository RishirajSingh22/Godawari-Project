import React from 'react'
import style from "./Styles/sportsdescription.module.css"

const SportsDescription = () => {
    return (
        <section className={style.sportsDescriptionsSection}>
            <div className='container'>
                <div className='text-center '>
                    <p className={`${style.sportsDescription}`}>
                        GPIL recognizes the invaluable role of sports in shaping young minds. Engaging in sports not only builds physical fitness but also instils discipline, teamwork, and resilience, especially during formative years from middle school to high school.          </p>
                </div>
            </div>
        </section>
    )
}

export default SportsDescription