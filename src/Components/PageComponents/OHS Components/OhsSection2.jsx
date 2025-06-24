import React from 'react'
import style from "./Styles/ohssection2.module.css"

const OhsSection2 = () => {
    return (
        <>
            <section className={style.section2}>
                <div className="container py-5">
                    <p className={`text-center pb-5 ${style.description}`}>
                        At GPIL, safety is a fundamental priority embedded in our operations. We are committed to ensuring a safe and secure work environment for all employees, contractors and visitors by implementing proactive risk management, regular training, and advanced safety technologies. Our Occupational Health & Safety initiatives comply with ISO 45001:2018 standards, ensuring a structured approach to workplace safety and health management.
                    </p>


                    <div className={`row g-0  ${style.firstRow}`}>
                        <div className="col-md-6">
                            <img
                                src="https://i.ibb.co/RTg80pVV/471752b9a50fc35f21c631807a879076a4932ae5.jpg"
                                alt="Iron and Steel Billets"
                                className={style.contentImages}
                            />
                        </div>
                        <div className={`col-md-6 ${style.contentSection}`}>
                            <div className="py-5 px-4">
                                <h5 className={style.cardHeading}>1.Comprehensive Health & Safety Policy</h5>
                                {[
                                    {
                                        description: "Implementing strict safety protocols to protect employees and contractors.",
                                    },
                                    {
                                        description: "Covered 100% of employees under health and accident insurance.",
                                    },
                                    {
                                        description: "Providing regular health check-ups and occupational health monitoring.",
                                    },
                                ].map((item, index) => (
                                    <div className="" key={index}>
                                        <div>

                                            <ul className={style.listItem}>
                                                <li>{item.description}</li>
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={`row g-0 pt-5  ${style.firstRow}`}>
                    <div className={`col-md-6 ${style.contentSection}`}>
                            <div className="py-5 px-4">
                                <h5 className={style.cardHeading}>2. Risk Management & Safety Training</h5>
                                {[
                                    {
                                        description: "Conducting hazard identification and risk assessments (HIRA) across all sites.",
                                    },
                                    {
                                        description: "Implemented proactive incident reporting and corrective action measures.",
                                    },
                                    {
                                        description: "Providing regular safety training for employees on emergency response, PPE usage, and worksite safety procedures.",
                                    },
                                ].map((item, index) => (
                                    <div className="" key={index}>
                                        <div>

                                            <ul className={style.listItem}>
                                                <li>{item.description}</li>
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img
                                src="https://i.ibb.co/sky18WB/d8f30fb5b0132a56c19500440e8fb77dee383ea5.jpg"
                                alt="Iron and Steel Billets"
                                className={style.contentImages}
                            />
                        </div>
                    </div>
                    <div className={`row g-0 pt-5 ${style.firstRow}`}>
                        <div className="col-md-6">
                            <img
                                src="https://i.ibb.co/tMGdYWdH/6146537817862d78510b3c85d20c4c97ba644d05.jpg"
                                alt="Iron and Steel Billets"
                                className={style.contentImages}
                            />
                        </div>
                        <div className={`col-md-6 ${style.contentSection}`}>
                            <div className="py-5 px-4">
                                <h5 className={style.cardHeading}>3. Contractor Safety Management</h5>
                                {[
                                    {
                                        description: "Enforcement of strict safety compliance for all contractors working within GPIL premises.",
                                    },
                                    {
                                        description: "Implemented a mandatory contractor safety induction program covering site-specific risks.",
                                    },
                                    {
                                        description: "Conducting regular safety audits and inspections to ensure compliance.",
                                    },
                                ].map((item, index) => (
                                    <div className="" key={index}>
                                        <div>

                                            <ul className={style.listItem}>
                                                <li>{item.description}</li>
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={`row g-0 pt-5  ${style.firstRow}`}>
                    <div className={`col-md-6 ${style.contentSection}`}>
                            <div className="py-5 px-4">
                                <h5 className={style.cardHeading}>4. Building a Safety Culture</h5>
                                {[
                                    {
                                        description: "Conducting monthly safety awareness programs across all plants.",
                                    },
                                    {
                                        description: "Encouraging active participation in safety drills and leadership walkthroughs.",
                                    },
                                    {
                                        description: "Implementing behavior-based safety initiatives to promote responsible workplace practices.",
                                    },
                                    {
                                        description: "Providing first aid & CPR training to employees for emergency preparedness.",
                                    },
                                ].map((item, index) => (
                                    <div className="" key={index}>
                                        <div>

                                            <ul className={style.listItem}>
                                                <li>{item.description}</li>
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img
                                src="https://i.ibb.co/hJ7Khzpj/2956d1bbe576df923f87f6d125445d7e5d4bd7d1.jpg"
                                alt="Iron and Steel Billets"
                                className={style.contentImages}
                            />
                        </div>
                    </div>
                    <div className={`row g-0 pt-5 ${style.firstRow}`}>
                        <div className="col-md-6">
                            <img
                                src="https://i.ibb.co/wNPHh09m/ecf36a254af13c44fce2a13dd309f06d2a6948c9.jpg"
                                alt="Iron and Steel Billets"
                                className={style.contentImages}
                            />
                        </div>
                        <div className={`col-md-6 ${style.contentSection}`}>
                            <div className="py-5 px-4">
                                <h5 className={style.cardHeading}>5. Performance Monitoring & Improvement</h5>
                                {[
                                    {
                                        description: "Tracking Total Recordable Injury Frequency Rate (TRIFR) to measure safety performance.",
                                    },
                                    {
                                        description: "Uses Root Cause Analysis (RCA) to investigate incidents and prevent recurrence.",
                                    },
                                   
                                ].map((item, index) => (
                                    <div className="" key={index}>
                                        <div>

                                            <ul className={style.listItem}>
                                                <li>{item.description}</li>
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>



                </div>
            </section>
        </>
    )
}

export default OhsSection2