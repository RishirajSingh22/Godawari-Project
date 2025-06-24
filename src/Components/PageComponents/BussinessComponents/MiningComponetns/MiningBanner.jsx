import React from 'react';
import style from "./styles/Miningbanner.module.css"

const MiningBanner = () => {
    return (
        <>
   <section className={style.miningBanner}>
            <div className="container">
                <h1 className={style.miningBannerHeading}>
                Fueling Growth Through 
                    <br />
                    <span>
                    Responsible Mining
                    </span>
                </h1>
            </div>
        </section>
        </>
    )
}

export default MiningBanner;
