import React from 'react'
import style from "./Styles/ohstablesection.module.css"

const OhsTableSection = () => {
    return (
        <>
            <section className={style.tableSection}>
                <div className="container py-5">
                    <h1 className={`text-center ${style.heading}`}>Aligning Impact with Global Goals</h1>
                    <div>
                        <div className={`${style.tableHeading}`}>
                            <h6>Safety Practices</h6>
                        </div>
                        <div className="table-responsive">
                            <table className={`table table-bordered ${style.ohsTable}`}>
                                <thead>
                                    <tr>
                                      <th>SDG 3: Good Health and 
                                      Well-being</th>
                                      <th>SDG 8: Decent Work and Economic Growth</th>
                                      <th>SDG 9: Industry, Innovation, and Infrastructure</th>
                                      <th>SDG 17: Partnerships for the Goals</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Ensuring a safe work environment and providing medical coverage for employees.</td>
                                        <td>Strengthening workplace safety to protect workers and enhance productivity.</td>
                                        <td>Leveraging technology and innovation for improved occupational safety.</td>
                                        <td>Collaborating with safety organizations, industry experts, and government bodies to advance workplace safety.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default OhsTableSection