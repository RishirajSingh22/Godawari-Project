import React from 'react';
import style from "./Styles/oureffets.module.css"

const OurEffets = () => {
    return (
        <>
            <section className={style.oureffetSection}>
                <div className='container'>
                    <h2 className={style.mainHeading}>Our Efforts</h2>
                    <div className="row m-0 p-0">
                        <div className="col-md-6 m-0 p-0">
                            <img
                                src="https://i.ibb.co/TMskpBNY/b9ceaf42b6165c1cb665551fc2861a83249a1a02.jpg"
                                alt="Iron and Steel Billets"
                                className={style.contentImages}
                            />
                        </div>
                        <div className={`col-md-6 m-0 p-0 ${style.contentSection}`}>
                            <div className="py-5 ps-md-5 ">
                                <h5 className={style.cardHeading}> Driving Efficiency</h5>
                                <h6 className={`${style.cardSubHeading}`}>Advanced Furnace Technology </h6>
                                <p className={style.cardPara}>Replaced small induction furnaces (7T) with high-capacity, energy-efficient furnaces (12T & 5T), significantly boosting productivity.</p>
                                
                                <h6 className={`${style.cardSubHeading}`}>Energy-Smart Steelmaking  </h6>
                                <p className={style.cardPara}>Achieved lower specific power consumption in steel production, reducing energy use from 950 kWh/ton to 850 kWh/ton by using high-grade raw materials in DRI.</p>

                                <h6 className={`${style.cardSubHeading}`}>Water Management </h6>
                                <p className={style.cardPara}>Implementing efficient practices to achieve specific water consumption of less than 4.5 m³/ton of billet.</p>

                                <h6 className={`${style.cardSubHeading}`}>Waste Management </h6>
                                <p className={style.cardPara}>Funded plantation activities and environmental monitoring and continually maintaining gardens and fountains for biodiversity.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row m-0 p-0 pt-5">                   
                        <div className={`col-md-6 m-0 p-0 ${style.contentSection}`}>
                            <div className="py-md-5 pe-md-5">
                                <h5 className={style.cardHeading}>Decarbonisation Efforts</h5>
                                <h6 className={`${style.cardSubHeading}`}>Green Belt Development </h6>
                                <p className={style.cardPara}>Developed and maintaining a 120-acre green belt called Oxyzone with 68,000 trees around our production facility and additional plantations in nearby villages. The green belt, featuring over 140,000 native trees, shrubs, and grasslands, reduces noise, improves air quality, supports biodiversity, and provides a wildlife habitat. Three ponds have also been created. This initiative sequesters ~1,793 metric tons of carbon annually, contributing to the company's net-zero carbon goals.</p>
                                
                                <h6 className={`${style.cardSubHeading}`}>Green Hydrogen Exploration  </h6>
                                <p className={style.cardPara}>GPIL is actively exploring the feasibility of green hydrogen (GH2) through strategic partnerships with HYGENCO, GH-Verse and other sustainable solutions with SIMA and CSIR-IMMT.</p>

                                <h6 className={`${style.cardSubHeading}`}>Waste Heat Recovery Power Generation Project (Proposed)</h6>
                                <p className={style.cardPara}>The proposed project of 6.91 MW, using Siemens technology, will focus on reusing waste heat and switching to natural gas in the iron ore pellet plant. This will boost energy efficiency and reduce environmental impact.</p>

                                <h6 className={`${style.cardSubHeading}`}>Optimized Energy Usage </h6>
                                <p className={style.cardPara}>Achieved a 30% reduction in coal consumption in the DRI plant by utilizing high-grade imported coal and pellets made from beneficiated iron ore.</p>

                                <h6 className={`${style.cardSubHeading}`}>High-Efficiency Upgrades </h6>
                                <p className={style.cardPara}>Replaced old turbines with a cutting-edge 48 MW turbine from Siemens to enhance energy efficiency.</p>
                        
                                <h6 className={`${style.cardSubHeading}`}>Transparency in Emissions</h6>
                                <p className={style.cardPara}>Prepared an annual GHG emission inventory to monitor and improve carbon reduction efforts.</p>
                            </div>
                        </div>
                            <div className="col-md-6 m-0 p-0">
                            <img
                                src="https://i.ibb.co/d3p38Gg/3afb06fa30cb1c1bd4d9bacc388da2e0338495f5.jpg"
                                alt="Iron and Steel Billets"
                                className={style.contentImages}
                            />
                        </div>
                    </div>

                    <div className="row m-0 p-0 pt-5">
                        <div className="col-md-6 m-0 p-0">
                            <img
                                src="https://i.ibb.co/JWb13Zk6/cdd1e290c468b5d951c0292ababf799ed27481fe.jpg"
                                className={style.contentImages}
                            />
                        </div>
                        <div className={`col-md-6 m-0 p-0 ${style.contentSection}`}>
                            <div className="py-5 ps-md-5 ">
                                <h5 className={style.cardHeading}> Sustainable Practices</h5>
                                <h6 className={`${style.cardSubHeading}`}>ACarbon Emission Commitment  </h6>
                                <p className={style.cardPara}>Adhering to GHG standards to reduce Scope 1 and 2 emissions, with plans to address Scope 3 emissions by 2025 in line with ISO 14064 standards.</p>
                                
                                <h6 className={`${style.cardSubHeading}`}>Driving Hydrogen Innovation </h6>
                                <p className={style.cardPara}>A proud member of the Indian Hydrogen Alliance (IH2A), actively participating in advancing hydrogen use in steel production with the Ministry of Steel and IIMT.</p>

                                <h6 className={`${style.cardSubHeading}`}>Exploring Carbon Capture </h6>
                                <p className={style.cardPara}>Engaged in preliminary discussions with IIT Mumbai to explore the installation of carbon capture and utilization technologies.</p>

                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default OurEffets