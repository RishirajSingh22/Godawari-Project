import React from 'react'
import style from "./Styles/banner.module.css"

const SustainabilityBanner = () => {
    return (
        <>
            <section className={style.sustainabiltyBanner}>
                <div className="container text-center">
                    <h1 className={style.heading}> Sustainability Framework </h1>
                    <h6 className={style.subHeading}>Reduce | Reuse | Recycle | Recover</h6>
                </div>
            </section>
        </>
    )
}

export default SustainabilityBanner