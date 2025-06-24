import React from 'react';
import style from "./Styles/keypillers.module.css"
import OurEffets from './OurEffets';

const KeyPillers = () => {
    return (
        <>
            <section className={style.pillarsection}>
                <div className='container py-5'>
                    <div>
                        <h5 className={`${style.keyPillars}`}> The Key Pillars</h5>
                        <div className='position-relative '>
                            <div className={` ${style.centerCircle}`} >
                                <img src="https://i.ibb.co/v48KNLV2/leaf-1upwd351oj0w7g-stroke.png" alt="" className={style.circleImage} />
                            </div>

                            <div className={`row  ${style.bottomSectionh}`} >
                                <div className="col-md-6 pe-5">
                                    <div className={`row ${style.reduceSection}`}>
                                        <div className='col-md-10 text-end'>
                                            <h6>1 Reduce</h6>
                                            <p>Focus on minimizing waste generation at the source by improving production efficiencies.</p>
                                        </div>
                                        <div className={`col-md-2 ${style.reduceImage}`}>
                                            <img src="https://i.ibb.co/Kxf8d8W3/fall-v30bwh1o99q80-stroke.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 ps-5">
                                    <div className={`row  ${style.reuseSection}`}>
                                        <div className={`col-md-2 ${style.reuseImage}`}>
                                            <img src="https://i.ibb.co/cc0W7X5V/g-root-2-1cua98h1o99s0a-stroke.png" alt="" />
                                        </div>
                                        <div className={`col-md-10 ${`text-start`}`}>
                                            <h6>2 Reuse</h6>
                                            <p>Repurpose materials for extended life cycles to reduce reliance on new resources.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`row ${style.bottomSectionh}`}>
                                <div className="col-md-6 pe-5">
                                    <div className={`row  ${style.reduceSection}`}>
                                        <div className='col-md-10 text-end'>
                                            <h6>4 Recover</h6>
                                            <p>Extract energy or materials from waste that cannot be reused or recycled.</p>
                                        </div>
                                        <div className={`col-md-2 ${style.recoverImage}`}>
                                            <img src="https://i.ibb.co/fVgRNBCt/g-root-refr-v4veip1o944xy-stroke.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 ps-5">
                                    <div className={`row ${style.reduceSection}`}>
                                        <div className={`col-md-2 ${style.recycleImage}`}>
                                            <img src="https://i.ibb.co/cc6H5CZL/g-root-bott-1lt1gld1o98av7-stroke.png" alt="" />
                                        </div>
                                        <div className="col-md-10 ">
                                            <h6>3 Recycle</h6>
                                            <p>Convert waste into reusable materials to reduce environmental impact.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <OurEffets />

                </div>

            </section>
        </>

    )
}

export default KeyPillers