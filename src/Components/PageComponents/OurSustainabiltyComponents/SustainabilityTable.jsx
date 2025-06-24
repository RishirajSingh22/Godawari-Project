import React from 'react';
import style from "./Styles/sustainabiltytable.module.css";
import { FaArrowRight } from "react-icons/fa6";

const SustainabilityTable = () => {
    return (
        <>
            <section className={style.tableSection}>
                <div className="container py-5">
                    <h1 className={`text-center ${style.heading}`}>Aligning Impact with Global Goals</h1>

                    <div>
                        <div className={`${style.tableHeading}`}>
                            <h6>Decarbonisation Efforts</h6>
                        </div>
                        <div className="table-responsive">
                            <table className={`table table-bordered ${style.ohsTable}`}>
                                <thead>
                                    <tr>
                                        <th >SDG 7: Affordable & Clean Energy</th>
                                        <th >SDG 9: Industry, Innovation & Infrastructure</th>
                                        <th >SDG 11: Sustainable Cities & Communities</th>
                                        <th >SDG 13: Climate Action</th>
                                        <th >SDG 15: Life on Land</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Expanding renewable energy capacities through solar power.</td>
                                        <td>Advancing green hydrogen, waste heat recovery, and
                                            energy-efficient upgrades.</td>
                                        <td>Developing the 120-acre Oxyzone green belt, improving air quality and biodiversity.</td>
                                        <td>Cutting carbon emissions through energy optimization, reduced coal use, and transparent GHG tracking.</td>
                                        <td>Enhancing ecosystems with afforestation, native plantations, and water conservation ponds.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='py-5'>
                        <div className={`${style.tableHeading}`}>
                            <h6>Driving Efficiency</h6>
                        </div>

                        <div className="table-responsive">
                            <table className={`table table-bordered ${style.ohsTable}`}>
                                <thead>
                                    <tr>
                                        <th>SDG 6: Clean Water & Sanitation</th>
                                        <th>SDG 9: Industry, Innovation & Infrastructure</th>
                                        <th>SDG 12: Responsible Consumption & Production</th>
                                        <th>SDG 15: Life on Land</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Optimizing water management to achieve lower consumption in steel production.</td>
                                        <td>Boosting efficiency with
                                            high-tech furnaces, turbines, and process improvements.</td>
                                        <td>Reducing power consumption per ton of steel through smarter operations.</td>
                                        <td>Strengthening biodiversity through plantations, gardens, and green initiatives.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <div className={`${style.tableHeading}`}>
                            <h6>Sustainable Practices</h6>
                        </div>

                        <div className="table-responsive">
                            <table className={`table table-bordered ${style.ohsTable}`}>
                                <thead>
                                    <tr>
                                        <th>SDG 9: Industry, Innovation & Infrastructure </th>
                                        <th>SDG 12: Responsible Consumption & Production</th>
                                        <th>SDG 13: Climate Action </th>
                                        <th>SDG 17: Partnerships for the Goals</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Driving hydrogen adoption through industry collaborations and research.</td>
                                        <td>Adhering to global GHG reduction standards and sustainable production practices.</td>
                                        <td>Exploring carbon capture and utilization technologies for long-term emission reductions.</td>
                                        <td>Collaborating with leading institutions to accelerate sustainability-driven innovations.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='text-center py-5'>
                        <h2 className={style.operationHeading}>Beyond Operations</h2>
                        <p className={style.beyondPara}>At GPIL, sustainability extends beyond our facilities. While we integrate decarbonisation efforts, efficient and sustainable practices into our operations, we also contribute to broader environmental welfare. Through large-scale afforestation, water conservation, and public green initiatives, we actively support ecological balance in the communities we serve.</p>
                        <div className=''>
                            <button className={style.downloadBtn}>Community  <FaArrowRight /></button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default SustainabilityTable;
