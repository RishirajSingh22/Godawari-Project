import React from 'react'
import style from "./Styles/polesbanner.module.css"

const PolesBanner = () => {
    return (
        <section className={style.polesBanner}>
            <div className="container">
                <h1 className={style.polesBannerHeading} data-aos="fade-left">
                    Strength, Safety & Innovation in
                    <br />
                    <span>
                        Every Pole
                    </span>
                </h1>
            </div>
        </section>
    )
}

export default PolesBanner