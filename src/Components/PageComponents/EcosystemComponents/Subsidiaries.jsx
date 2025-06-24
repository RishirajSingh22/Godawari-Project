import React from 'react'
import style from "../EcosystemComponents/Styles/Subsidiaries.module.css"
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Subsidiaries = () => {
    return (
        <>
            <section className={style.subSidiaries}>
                <div className='container pt-5'>
                    <p className={`py-4 ${style.subSidiariesHeading}`}>Subsidiaries</p>
                    <div className='row justify-content-evenly'>
                        <div className="col-md-6 col-lg-4 p-3"   data-aos="fade-up" data-aos-delay= "100">
                            <div className={` text-center py-5 ${style.cards}`}>
                                <p className={` ${style.companyName}`} > Godawari Green Energy Ltd</p>
                                <p className={` px-3 ${style.companytittle}`}>Empowering a sustainable future with innovation in power</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 p-3" data-aos="fade-up" data-aos-delay= "200">
                            <div className={`text-center py-5 ${style.cards}`}>
                                <p className={` ${style.companyName}`} > Hira Ferro Alloys Ltd.</p>
                                <p className={` px-3 ${style.companytittle}`}>Fueling industries with ferroalloys, powered by green energy sources
                                </p>
                                <a href="https://www.hiraferroalloys.com/" target="_blank" rel="noopener noreferrer">
                                    <button className={`mt-1 ${style.knowmoreBtn}`}>
                                        Know more
                                        <FaArrowRightLong />
                                    </button>
                                </a>


                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 p-3" data-aos="fade-up" data-aos-delay= "300">
                            <div className={`text-center py-5 ${style.cards}`}>
                                <p className={` ${style.companyName}`} > Alok Ferro Alloys Limited (AFAL)</p>
                                <p className={`px-3 ${style.companytittle}`}>Driving progress with ferro alloys and captive power solutions.
                                </p>
                                <a href=" http://hpslindia.com/associates-afal/" target="_blank" rel="noopener noreferrer">
                                    <button className={`mt-1 ${style.knowmoreBtn}`}>
                                        Know more
                                        <FaArrowRightLong />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={style.subSidiaries}>
                <div className='container '>
                    <p className={`py-4 ${style.subSidiariesHeading}`}>Associates</p>
                    <div className='row justify-content-center'>
                        <div className="col-md-6 col-lg-4 p-3" data-aos="fade-up" data-aos-delay= "100">
                            <div className={` text-center ${style.cards}`}>
                                <p className={`mt-4 px-2 ${style.companyName}`} > Ardent Steel Private Limited (ASPL)</p>
                                <p className={` px-3 ${style.companytittle}`}>Iron Ore Pellet Manufacturing.
                                </p>
                                <a href="http://www.ardentsteel.com/" target="_blank" rel="noopener noreferrer">
                                    <button className={`mt-1 mb-4 ${style.knowmoreBtn}`}>
                                        Know more
                                        <FaArrowRightLong />
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 p-3" data-aos="fade-up" data-aos-delay= "200">
                            <div className={`text-center ${style.cards}`}>
                                <p className={`mt-4 px-2 ${style.companyName}`} > Jammu Pigments Limited</p>
                                <p className={` px-3 ${style.companytittle}`}>Engaged in Recycling of Metal Waste.
                                </p>
                                <a href="http://www.jammupigments.com/" target="_blank" rel="noopener noreferrer">
                                    <button className={`mt-1 mb-4 ${style.knowmoreBtn}`}>
                                        Know more
                                        <FaArrowRightLong />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={style.subSidiaries}>
                <div className='container pb-5' >
                    <p className={`py-4 ${style.subSidiariesHeading}`}>Joint Ventures</p>
                    <div className='row '>
                        <div className="col-md-6 col-lg-4 p-3" data-aos="fade-up" data-aos-delay= "100">
                            <div className={` text-center  ${style.cards}`}>
                                <p className={`p-5  ${style.companyName}`} >Raipur Infrastructure Company Ltd</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 p-3" data-aos="fade-up" data-aos-delay= "200">
                            <div className={`text-center   ${style.cards}`}>
                                <p className={`p-5 ${style.companyName}`} > Chhattisgarh Captive Coal Mining Pvt. Ltd</p>

                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 p-3" data-aos="fade-up" data-aos-delay= "100">
                            <div className={`text-center ${style.cards}`}>
                                <p className={` p-5 ${style.companyName}`} > Chhattisgarh Ispat Bhumi Ltd.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Subsidiaries