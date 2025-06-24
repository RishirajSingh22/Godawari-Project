import React from 'react'
import style from "./Styles/wirerodsection2.module.css"
import WireRodsComponent from './WireRodsComponent'


const WireRodsSection2 = () => {
    return (
        <>
            <section className={style.section2}>
                <div className="container py-5">
                    <p className={`text-center pb-5 ${style.description}`}>
                        GPIL is at the forefront of wire rod production, leveraging advanced technology to manufacture premium coiled steel products with unmatched quality and precision. Designed to cater to diverse industrial requirements, GPIL's wire rods are renowned for their strength, durability, and versatility, making them an integral component of both domestic and export markets.
                    </p>


                    <WireRodsComponent />


                    <div className="pt-5 text-center">
                        <h5 className={style.cardHeading}>Product Specifications</h5>
                        <div className="row py-4">
                            <div className="col-md-4 p-4">
                                <div className={style.cutsomerImage}>

                                    <h6>Dimensional Tolerance</h6>
                                    <p>
                                        Size Range: 5.5 – 12 MM <br />
                                        Maximum Ovality: 0.1 MM <br />
                                        Tolerance: ± 0.30 MM
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 p-4">
                                <div className={style.cutsomerImage}>

                                    <h6>Grades</h6>
                                    <p>1. Low Carbon Grades
                                        CAQ | Electrode | High Mn | HG-10 | SAE: 1008 / 1010 / 1012 / 1015 / 1018 | Low Carbon Boron Grade</p>
                                </div>
                            </div>
                            <div className="col-md-4 p-4">
                                <div className={style.cutsomerImage}>

                                    <h6>Coil Specifications</h6>
                                    <p>Coil Weight: 1.32 M.T
                                        Coil Outside Diameter: 1250 MM
                                        Coil Inside Diameter: 850 MM</p>
                                </div>
                            </div>
                        </div>

                        <div className='mb-5'>
                            <button className={style.downloadBtn}>Download Brochure</button>
                        </div>
                    </div>

                    <div className="text-center">
                        <h5 className={style.cardHeading}>Certifications</h5>
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-4 py-4">
                                <div className={style.certificatecontainer}>
                                    <img src="https://i.ibb.co/fzBmt70K/33d08946ebe2ed24e0a3885c34438b87b85b931f.png" alt="Certification 1" className={style.certificate} />
                                </div>
                            </div>
                            <div className="col-md-4 py-4">
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

export default WireRodsSection2