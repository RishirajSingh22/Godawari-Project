import React from 'react';
import style from "./Styles/BilletsBanner.module.css"

const BilletsBanner = () => {
    return (
        <>
            <section className={style.billetsBanner}  >
                <div className='container'>
                    <h1 className={style.heading} data-aos="fade-left">Billets</h1>

                </div>
            </section>
        </>
    )
}

export default BilletsBanner;