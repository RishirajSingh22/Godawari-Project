import React from 'react';
import style from "./Styles/BilletsSection2.module.css"
import { HiOutlinePhoto } from "react-icons/hi2";

const BilletsSection2 = () => {
    return (
        <>
            <section className={style.section2}>
                <div className="container py-5">
                    <p className={`text-center pb-5 ${style.description}`} data-aos="fade-left">
                        GPIL's Iron and Steel Billets form the backbone of superior steel
                        manufacturing, recognized for their high ductility and precision.
                        Produced through advanced hot rolling techniques, these billets cater to
                        diverse steel production needs across domestic B2B markets, offering
                        unmatched versatility and reliability.
                    </p>


                    <div className="row g-0 " data-aos="fade-up" data-aos-delay="100">
                        <div className="col-md-6">
                            <img
                                src="https://i.ibb.co/9d9L2M9/6425f4de474caa2a85f8edf0ce947cb33f680936.jpg"
                                alt="Iron and Steel Billets"
                                className={style.contentImages}
                            />
                        </div>
                        <div className={`col-md-6 ${style.contentSection}`}>
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
                    <div className='row g-0 pt-5' data-aos="fade-up" data-aos-delay="100">
                        <div className={`col-md-6 ${style.contentSection}`}>
                            <div className="p-5">
                                <h5 className={style.cardHeading}>Product Highlights</h5>
                                {[
                                    {
                                        title: "Quality Assurance",
                                        description: "Engineered to withstand demanding applications",
                                    },
                                    {
                                        title: "Versatility",
                                        description: "Designed for extended use in harsh conditions.Engineered to withstand demanding applications",
                                    },
                                    {
                                        title: "Robust Capacity",
                                        description: "A perfect fit for both domestic and industrial markets",
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
                        <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <img
                                src="https://i.postimg.cc/d3M6qDMY/image-18.png"
                                alt="Iron and Steel Billets"
                                className={style.contentImages}

                            />
                        </div>
                    </div>


                    {/* <div className='pt-5 text-center'>
                        <h5 className={style.cardHeading}>Customer Segment</h5>
                        <div className='row py-4'>
                            <div className='col-md-4 p-4'>
                                <div className={style.cutsomerImage}>
                                    <img src="" alt="" />
                                    <HiOutlinePhoto className={style.logo} />
                                </div>
                            </div>
                            <div className='col-md-4 p-4'>
                                <div className={style.cutsomerImage}>
                                <HiOutlinePhoto className={style.logo} />
                                </div>
                            </div>
                            <div className='col-md-4 p-4'>
                                <div className={style.cutsomerImage}>
                                <HiOutlinePhoto className={style.logo} />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className=' text-center'>
                        <h5 className={style.cardHeading}>Certifications</h5>
                        <div className='row py-4'>
                            <div className='col-md-4 p-4'>
                                <div className={style.cutsomerImage}>
                                <HiOutlinePhoto className={style.logo} />
                                </div>
                            </div>
                            <div className='col-md-4 p-4'>
                                <div className={style.cutsomerImage}>
                                <HiOutlinePhoto className={style.logo} />
                                </div>
                            </div>
                            <div className='col-md-4 p-4'>
                                <div className={style.cutsomerImage}>
                                <HiOutlinePhoto className={style.logo} />
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className='pt-5 text-center'>
                        <h5 className={style.cardHeading}>Product Specifications</h5>
                        <div className='row py-4'>
                            <div className='col-md-4 p-4' data-aos="fade-up" data-aos-delay="100">
                                <div className={style.cutsomerImage}>
                                    <img src="" alt="" />
                                    <h6>Sizes (MM)</h6>
                                    <p>110 × 110 | 120 × 120 | 125 × 125 | 130 × 130
                                        140 × 140 | 150 × 150 | 160 × 160 | 160 × 200
                                        200 × 200 | 200 × 250 | 200 × 275</p>

                                </div>
                            </div>
                            <div className='col-md-4 p-4'data-aos="fade-up" data-aos-delay="200">
                                <div className={style.cutsomerImage}>
                                    <img src="" alt="" />
                                    <h6>Chemical Composition (%)</h6>
                                    <p>C: 0.080 – 0.50 | Mn: 0.300 – 1.80
                                        Si: ≤ 0.450 | S: ≤ 0.040 | P: ≤ 0.040
                                        N: ≤ 0.012</p>
                                </div>
                            </div>
                            <div className='col-md-4 p-4' data-aos="fade-up" data-aos-delay="300">
                                <div className={style.cutsomerImage}>
                                    <img src="" alt="" />
                                    <h6>Length (Meters)</h6>
                                    <p>4 – 6 M</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className=' text-center' >
                        <h5 className={style.cardHeading} data-aos="fade-up">Certifications</h5>
                        <div className='row  align-items-center'>
                            <div className='col-md-4 p-4 mx-auto' data-aos="fade-up">
                                <div className={style.certificatecontainer}>
                                    <img src="https://i.ibb.co/fzBmt70K/33d08946ebe2ed24e0a3885c34438b87b85b931f.png" alt="" className={style.certificate} />
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