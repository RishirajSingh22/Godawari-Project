import React from 'react';
import style from "./Styles/HbWiresSection2.module.css"
import { HiOutlinePhoto } from "react-icons/hi2";

const HbWiresSection2 = () => {
    return (
        <>
            <section className={style.section2}>
                <div className="container py-5">
                    <p className={`text-center pb-5 ${style.description}`}>
                        GPIL Hard Bright Wires (HB Wires) are synonymous with strength, precision, and quality. These wires are crafted through advanced drawing techniques from hot rolled rods, offering superior tensile strength and durability. With their reliability and consistent finish, HB Wires are a trusted choice for various industrial and construction applications.
                    </p>


                    <div className="row g-0 ">
                        <div className="col-md-6">
                            <img
                                src="https://i.ibb.co/cchhCSMf/53fdbfdb77b9c12c91d8230e4ba0eb51bef5ca48.jpg" alt="Iron and Steel Billets"
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
                    <div className='row g-0 py-5'>



                        <div className={`col-md-6 ${style.contentSection}`}>
                            <div className="p-5">
                                <h5 className={style.cardHeading}>Applications</h5>
                                {[
                                    {
                                        title: "High Tensile Strength",
                                        description: "Engineered to withstand demanding applications",
                                    },
                                    {
                                        title: "Durability",
                                        description: "Designed for extended use in harsh conditions.",
                                    },
                                    {
                                        title: "Versatility",
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
                        <div className="col-md-6">
                            <img
                                src="https://i.ibb.co/hF2XKNYQ/50288778ed3989cafd59d9ad5b37aabb64fc4fa2.jpg"
                                alt="Iron and Steel Billets"
                                className={style.contentImages}
                            />
                        </div>
                    </div>


                    {/* <div className=' text-center'>
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
                    <div className='text-center'>
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

                    <div className="pt-5 text-center">
                        <h5 className={style.cardHeading}>Product Specifications</h5>
                        <div className="row py-4">
                            <div className="col-md-4 p-3">
                                <div className={style.cutsomerImage}>

                                    <h6>Dimensional Tolerance</h6>
                                    <p>
                                        6G (4.80 - 5.10 MM) | 8G (3.75 - 4.30 MM)
                                        9G (3.40 - 3.74 MM) | 10G (3.00 - 3.40 MM)
                                        11G (2.75 - 3.00 MM) | 12G (2.40 - 2.75 MM)
                                        13G (2.20 - 2.40 MM) | 14G (1.95 - 2.15 MM) <br />
                                        Maximum Ovality: 0.1 MM <br />
                                        Tolerance: ± 0.30 MM
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 p-3">
                                <div className={style.cutsomerImage}>

                                    <h6>Grades</h6>
                                    <p>LC | HG10 | CAQ | Commercial</p>
                                </div>
                            </div>
                            <div className="col-md-4 p-3">
                                <div className={style.cutsomerImage}>

                                    <h6>Coil Specifications</h6>
                                    <p>Weight: 240 - 255 KG</p>
                                </div>
                            </div>
                        </div>

                        <div className='mb-5'>
                            <button className={style.downloadBtn}>Download Brochure</button>
                        </div>
                    </div>

                    <div className="text-center">
                        <h5 className={style.cardHeading}>Certifications</h5>
                        <div className="row align-items-center justify-content-center pt-2">
                            <div className="col-md-4 p-3">
                                <div className={style.certificatecontainer}>
                                    <img src="https://i.ibb.co/fzBmt70K/33d08946ebe2ed24e0a3885c34438b87b85b931f.png" alt="Certification 1" className={style.certificate} />
                                </div>
                            </div>
                            <div className="col-md-4 p-3">
                                <div className={style.certificatecontainer}>
                                    <img src="https://i.ibb.co/fzBmt70K/33d08946ebe2ed24e0a3885c34438b87b85b931f.png" alt="Certification 2" className={style.certificate} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default HbWiresSection2