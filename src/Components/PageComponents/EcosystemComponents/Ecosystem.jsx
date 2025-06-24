import React from 'react'
import style from "../EcosystemComponents/Styles/Ecosystem.module.css";

const Ecosystem = () => {
    return (
        <section className={style.ecosystem}>
            <div className={style.overlay}>
                <div className={style.visionariHeading} data-aos="fade-left">
                    <p className={style.ecoHeading}>Our Ecosystem</p>
                    <p className={style.ecoSubHeading}>
                        Our strong network forms the core of Godavari Power & Ispat, 
                        enabling us to expand our capabilities, innovate sustainably, 
                        and deliver long-term value across industries.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Ecosystem;
