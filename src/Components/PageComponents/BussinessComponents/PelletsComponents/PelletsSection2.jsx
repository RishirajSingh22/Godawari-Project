import React from 'react'
import style from "./Styles/pelletssection2.module.css"
import { HiOutlinePhoto } from "react-icons/hi2";


const PelletsSection2 = () => {

    return (
        <section className={style.section2}>
            <div className="container py-5">
                <p className={`text-center ${style.description}`}>
                    GPIL is one of the leading pellet manufacturers in India’s secondary steel sector, offering high-grade to premium-grade iron ore pellets that are essential for steelmaking. With a strong focus on quality, innovation, and sustainability, GPIL’s pellets are designed to meet the evolving needs of domestic and international markets.
                    <br />
                    These agglomerated iron ore concentrates provide an optimal blend of efficiency and flexibility for use in both blast furnaces and direct reduction processes.
                </p>

                <div className='pt-5' >
                    <h5 className={`text-center ${style.cardHeading}`}>Production Excellence</h5>
                    <div className='row py-5'>
                        <div className={'col-md-4 p-3 '}>


                            <div >
                                <img src="https://i.ibb.co/8g9SwpZm/02251d3455154844eff8a0f3efa02dcf2d1a8607.jpg" alt="img" className={style.productImage} />
                            </div>
                            <div className={`p-3 ${style.containt}`}>
                                <h6>Wet Beneficiation</h6>
                                <p>Uniformly ground iron ore fines are processed for upgradation through Beneficiation for superior grade and particle size consistency.</p>
                            </div>
                        </div>
                        <div className='col-md-4 p-3'>
                            <div >
                                <img src="https://i.ibb.co/VWxtn87z/5d73a7d807be7cf054882ddfd959c34b834d8623.jpg" alt="img" className={style.productImage} />
                            </div>
                            <div className={`p-3 ${style.containt}`}>
                                <h6>Precise Mixing and Forming</h6>
                                <p>Employs advanced disc pelletisers to achieve exceptional shape and physical properties</p>
                            </div>
                        </div>
                        <div className='col-md-4 p-3 '>
                            <div >
                                <img src="https://i.ibb.co/PJt5MzW/e06fcf1bb5cc6feaef00e873c700ef2f47677c0d.jpg" alt="img" className={style.productImage} />
                            </div>
                            <div className={`p-4 ${style.containt}`}>
                                <h6>Induration Process</h6>
                                <p>Incorporates preheating, drying, hard heating, and cooling to produce pellets with outstanding physio-chemical and metallurgical properties.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='py-5' >
                    <div className='position-relative'>
                        <img src="https://i.ibb.co/TDfz09zc/Group-15756-2.png" alt="" className={style.snapshotImage} />
                        <h5 className={style.snapshotHeading}>Capacity Snapshot</h5>
                    </div>
                    <div className={style.snapContent}>
                        <div className='d-flex justify-content-around'>
                            <p className={style.underlineptextleft}>Current Capacity</p>
                            <p className={style.underlineptextright}>2.7 MTPA</p>
                        </div>
                        <hr className={` mx-auto pt-0 border-dark ${style.underlinehr}`} />
                        <div className='d-flex justify-content-around'>
                            <p className={style.underlineptextleft}>Utilisation Level</p>
                            <p className={style.underlineptextright}>Maximum</p>
                        </div>
                        <hr className={` mx-auto pt-0 border-dark ${style.underlinehr}`} />
                        <div className='d-flex justify-content-around'>
                            <p className={style.underlineptextleft}>Target Capacity</p>
                            <p className={style.underlineptextright}>4.7 MTPA</p>
                        </div>
                    </div>
                </div>


                <div className='row g-0 pt-5'>
                    <div className={`col-md-6 ${style.contentSection}`}>
                        <div className="p-5">
                            <h5 className={style.cardHeading}>Product Highlights</h5>
                            {[
                                {
                                    title: "High-Grade Iron Content",
                                    description: "Ensures optimal performance in steelmaking applications.",
                                },
                                {
                                    title: "Versatile Applications",
                                    description: "Used in both Direct Reduction Iron (DRI) and Blast Furnace (BF) processes.",
                                },
                                {
                                    title: "Quality Standards",
                                    description: "Meets stringent modern market requirements, ensuring consistent performance.",
                                },
                                {
                                    title: "Sustainable Production",
                                    description: "Contributes to GPIL’s green initiatives through efficient and eco-friendly manufacturing practices.",
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
                            src="https://i.ibb.co/9KLRMj1/d8c9b06016e1d7ae6cafd591c8449a0861a39c65.jpg"
                            alt="Iron and Steel Billets"
                            className={style.contentImages}
                        />
                    </div>
                </div>

                <div className="text-center pt-5" >
                    <div className={style.productioncontainer}>
                        <h3>Product Specifications</h3>
                    </div>
                    <div className={style.productDescription}>
                        <h6>Chemical Composition</h6>
                        <p>Fe: 64.5 - 65.0% | SiO₂: 3.0 - 4.0%</p>
                        <p>Al₂O₃: 1.0 - 1.5% | CaO: 0.70 - 0.80%</p>
                        <p>MgO: 0.20 - 0.30% | Sulphur: 0.010% | Phosphorus: 0.025 - 0.03%</p>

                    </div>
                </div>


            </div>
        </section>

    )
}

export default PelletsSection2