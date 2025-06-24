import React from 'react';
import style from "./Styles/hbWiresBanner.module.css"

const HbWireBanner = () => {
    return (
        <>
            <section className={style.hbWiresBanner}>
                <div className='container'>
                    <h1 className={style.heading}>HB Wires</h1>
                </div>
            </section>
        </>
    )
}

export default HbWireBanner;