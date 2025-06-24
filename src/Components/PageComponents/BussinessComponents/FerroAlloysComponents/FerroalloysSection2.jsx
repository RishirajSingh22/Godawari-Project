import React from 'react';
import style from "../BilletsComponent/Styles/BilletsSection2.module.css"

const BilletsSection2 = () => {
    return (
        <>
            <section className={style.section2}>
                <div className="container py-5">
                    <p className={`text-center ${style.description}`}>
                        GPIL's Iron and Steel Billets form the backbone of superior steel
                        manufacturing, recognized for their high ductility and precision.
                        Produced through advanced hot rolling techniques, these billets cater to
                        diverse steel production needs across domestic B2B markets, offering
                        unmatched versatility and reliability.
                    </p>


                    <div className="row g-0 align-items-stretch">
                        <div className="col-md-6 d-flex">
                            <img
                                src="https://i.ibb.co/9d9L2M9/6425f4de474caa2a85f8edf0ce947cb33f680936.jpg"
                                alt="Iron and Steel Billets"
                                className="w-100 h-100 object-fit-cover"
                            />
                        </div>
                        <div className={`col-md-6 d-flex flex-column justify-content-center ${style.contentSection}`}>
                            <div className="p-5">
                                <h5 className={style.cardHeading}>Applications</h5>
                                {[
                                    {
                                        title: "Construction",
                                        description:
                                            "Nails, binding wire, and weld mesh for reinforced structures.",
                                    },
                                    {
                                        title: "Infrastructure",
                                        description: "Cycle spokes and welding electrodes for fabrication.",
                                    },
                                    {
                                        title: "Industrial Manufacturing",
                                        description:
                                            "Components in manufacturing and assembly processes.",
                                    },
                                ].map((item, index) => (
                                    <div className="d-flex gap-3 pt-4" key={index}>
                                        <img
                                            src="https://i.ibb.co/XZpVtLyY/Line-38.png"
                                            alt="Line"
                                            className={style.line}
                                        />
                                        <div>
                                            <h6>{item.title}</h6>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="row g-0 pt-5 align-items-stretch">
                        <div className={`col-md-6 d-flex flex-column justify-content-center ${style.contentSection}`}>
                            <div className="p-5">
                                <h5 className={style.cardHeading}>Product Highlights</h5>
                                {[
                                    {
                                        title: "Quality Assurance",
                                        description: "Engineered to withstand demanding applications",
                                    },
                             
                                ].map((item, index) => (
                                    <div className="d-flex gap-3 pt-4" key={index}>
                                        <img
                                            src="https://i.ibb.co/XZpVtLyY/Line-38.png"
                                            alt="Line"
                                            className={style.line}
                                        />
                                        <div>
                                            <h6>{item.title}</h6>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-6 d-flex">
                            <img
                                src="https://i.ibb.co/1YN7VvKc/fa9a41dad61c463c7005ba3643d0423908f122d5.jpg"
                                alt="Product Highlights"
                                className="w-100 h-100 object-fit-cover"
                            />
                        </div>
                    </div>


                    <div className='pt-5 text-center'>
                        <h5 className={style.cardHeading}>Customer Segment</h5>
                        <div className='row'>
                            <div className='col-md-4 p-4'>
                                <div className={style.cutsomerImage}>
                                </div>
                            </div>
                            <div className='col-md-4 p-4'>
                                <div className={style.cutsomerImage}>
                                </div>
                            </div>
                            <div className='col-md-4 p-4'>
                                <div className={style.cutsomerImage}>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='pt-5 text-center'>
                        <h5 className={style.cardHeading}>Certifications</h5>
                        <div className='row'>
                            <div className='col-md-4 p-4'>
                                <div className={style.cutsomerImage}>
                                </div>
                            </div>
                            <div className='col-md-4 p-4'>
                                <div className={style.cutsomerImage}>
                                </div>
                            </div>
                            <div className='col-md-4 p-4'>
                                <div className={style.cutsomerImage}>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </section>
        </>

    )
}

export default BilletsSection2