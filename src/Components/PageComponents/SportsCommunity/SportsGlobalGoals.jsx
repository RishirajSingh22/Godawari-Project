import React from 'react'
import style from "./Styles/sportsglobalgoals.module.css"

const SportsGlobalGoals = () => {
    const goalsData = [
        {
            imgSrc: "https://i.postimg.cc/XJ5TygV9/health-icon-1.png",
            title: "SDG 3: Good Health and Well-being",
            description: "Public awareness campaigns and social support initiatives contribute to promoting health and well-being."
        },
        {
            imgSrc: "https://i.postimg.cc/BQ4dXDR1/Group.png",
            title: "SDG 5: Gender Equality",
            description: "Tailoring centers and operational support empower tribal women with skill-building and self-reliance."
        },
        {
            imgSrc: "https://i.postimg.cc/tg33Z1KY/Untitled-2.png",
            title: "SDG 8: Reduced InequalitiesSDG 8: Decent Work & Economic Growth",
            description: "Providing training and financial aid to create career pathways in sports."
        },
        {
            imgSrc: "https://i.ibb.co/BHfJVPg8/Reduced-Inequalities-1.png",
            title: "SDG 10: Reduced Inequalities",
            description: "Welfare programs, financial assistance, and collaborations promote social inclusivity and reduce inequalities."
        },
        {
            imgSrc: "https://i.postimg.cc/SRvCFcMt/community-sustainability-environment-ecology-urban-city-alternative-1.png",
            title: "SDG 11: Sustainable Cities and Communities",
            description: "Initiatives to enhance public spaces, cultural heritage sites, and community facilities contribute to making cities and communities inclusive and sustainable."
        },
        {
            imgSrc: "https://i.postimg.cc/d1KLC42Y/Partnership-for-GOals-1.png",
            title: "SDG 17: Partnerships for the Goals",
            description: "Collaborations with district authorities enhance infrastructural and welfare activities, showcasing partnerships for sustainable development."
        },
    
        {
            imgSrc: "https://i.postimg.cc/RFCHWg1D/Untitled-1.png",
            title: "SDG 16: Peace, Justice & Strong Institutions",
            description: "Promoting discipline, teamwork, and fair play through sports."
        }
    ];
    return (
        <section className={style.womenGlobalgoalsBanner}>
            <div className='container'>
                <h2 className={`text-center ${style.goalsHeading}`}>Aligning Impact with Global Goals</h2>
                <div className={style.allGoal}>
                    <div className='row justify-content-center'>
                        {goalsData.map((goal, index) => (
                            <div key={index} className='col-md-6 col-lg-3 col-sm-6 p-4 text-center'>
                                <img src={goal.imgSrc} alt={goal.title} className={style.logo} />
                                <div className={style.headingcontainer}>
                                    <h6 className={style.goalSubheadings}>{goal.title}</h6>
                                </div>
                                <div className={style.goaldescripation}>
                                    <p>{goal.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SportsGlobalGoals