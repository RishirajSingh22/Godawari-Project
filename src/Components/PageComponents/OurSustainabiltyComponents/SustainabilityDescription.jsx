import React from 'react';
import style from "./Styles/susdescription.module.css"
import { RxDividerVertical } from "react-icons/rx";

const SustainabilityDescription = () => {
    return (
        <>
            <section className={style.descriptionSection}>
                <div className='container pb-5'>
                    <div className="px-3">
                        <h5 className={style.heading}>The 4R framework is GPIL's cornerstone for sustainable waste management and resource conservation.</h5>
                        <div className='row'>
                            <div className='col-md-6 p-3'>
                                <div className='d-flex gap-3'>
                                    <div >
                                        <img
                                            src="https://i.ibb.co/XZpVtLyY/Line-38.png"
                                            alt="Line"
                                            className={style.line}
                                        /></div>
                                    <p className={style.para}>Aims to minimize environmental impact and promote efficient use of resources.</p>
                                </div>
                            </div>
                            <div className='col-md-6 p-3'>
                                <div className='d-flex gap-3'>
                                    <div >
                                        <img
                                            src="https://i.ibb.co/XZpVtLyY/Line-38.png"
                                            alt="Line"
                                            className={style.line}
                                        /></div>
                                    <p  className={style.para}>Aims to minimize environmental impact and promote efficient use of resources.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SustainabilityDescription