import React from 'react';
import style from "./Styles/socialsection2.module.css";
import { FaArrowRight } from "react-icons/fa6";

const stakeholderData = [
    {
        title: "Ethical Governance & Compliance",
        description: "Upholding integrity, fairness, and accountability in all business practices",
        imgSrc: "https://i.ibb.co/vx86nFrp/government-1.png"
    },
    {
        title: "Stakeholder Collaboration",
        description: "Engaging with employees, customers and investors for sustainable growth",
        imgSrc: "https://i.ibb.co/XxMWfsnN/g5223.png"
    },
    {
        title: "Human Rights & Fair Labor Practices",
        description: "Ensuring ethical sourcing, safe working conditions and equitable employment opportunities",
        imgSrc: "https://i.ibb.co/4RSb78T7/consumer-protection-1.png"
    },
    {
        title: "Employee Well-being & Development",
        description: "Investing in continuous learning, leadership development and mental wellness",
        imgSrc: "https://i.ibb.co/MyTC2Dn2/wellbeing-1.png"
    }
];

const diversityData = [
    {
        title: "Equal Employment Opportunities",
        description: "Merit-based hiring and career progression",
        imgSrc: "https://i.ibb.co/vvMwsYc1/equal-opportunities-1.png"
    },
    {
        title: "Women’s Leadership Development",
        description: "Promoting female participation in leadership roles",
        imgSrc: "https://i.ibb.co/hF4QWb8w/Group-1.png"
    },
    {
        title: "Safe & Inclusive Workplaces",
        description: "Implementation of POSH (Prevention of Sexual Harassment) policies and gender-neutral initiatives",
        imgSrc: "https://i.ibb.co/4nNRh55p/office-desk-1.png"
    },
    {
        title: "Cultural & Workforce Diversity",
        description: "Encouraging diverse perspectives to drive innovation and performance",
        imgSrc: "https://i.ibb.co/S42X6jdP/diversity-1.png"
    }
];

const SocialSection2 = () => {
    return (
        <section className={style.socialSection2}>
            <div className='container'>
                <p className={style.socialDescription}>
                    At GPIL, our social responsibility involves a commitment to creating safer workplaces, empowering communities and promoting an inclusive, ethical culture. From ensuring occupational health & safety (OHS) for our workforce to driving transformative community initiatives, we aim to ensure that our growth is sustainable, people-centric and impactful.
                </p>

                <div>
                    <h2 className={style.stakeholderHeading}>Responsible Business & Stakeholder Engagement</h2>
                    <div className='row'>
                        {stakeholderData.map((card, index) => (
                            <div key={index} className='col-md-3 col-sm-6 p-2'>
                                <div className={style.cardImagecontainer}>
                                    <img src={card.imgSrc} alt={card.title} className={style.cardsImages} />
                                </div>
                                <div className={style.cardContain}>
                                    <h6 className={style.cardTittle}> {card.title}</h6>
                                    <p>{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='py-5 '>
                    <h2 className={style.stakeholderHeading}>Diversity, Equity & Inclusion</h2>
                    <div className='row'>
                        {diversityData.map((card, index) => (
                            <div key={index} className='col-md-3 col-sm-6 p-2'>
                                <div className={style.cardImagecontainer}>
                                    <img src={card.imgSrc} alt={card.title} className={style.cardsImages} />
                                </div>
                                <div className={style.cardContain}>
                                    <h6 className={style.cardTittle}>{card.title}</h6>
                                    <p>{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={style.HealthSection}>
                <div className='container'>

                    <div className='row py-5'>
                        <div className='col-md-6 p-5'>
                            <div>
                                <img src="https://i.ibb.co/VW2cR8kb/image-16.png" alt="" className='img-fluid'/>
                            </div>
                        </div>
                        <div className='col-md-6 p-5'>
                            <div>
                                <h6>Occupational Health & Safety​</h6>
                                <p>A strong and resilient organization begins with its people. At GPIL, safety is a fundamental priority embedded in our operations. We are committed to Occupational Health & Safety to create a safe work environment for all employees, contractors and visitors through proactive risk management, regular training, and advanced safety programs.</p>
                                <div className='pt-4'>
                                    <button className={style.downloadBtn}>Know more <FaArrowRight /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.beyondSection}>
                <div className='container'>

                    <div className='row py-5'>
                        <div className='col-md-6 p-5'>
                            <div>
                                <h6>Beyond Operations​</h6>
                                <p>At GPIL, our commitment goes beyond our facilities, driving education, skill development, healthcare, sustainable infrastructure, women empowerment, and community welfare. Through community-driven initiatives, we uplift lives, create opportunities, and foster long-term growth for a more inclusive future.</p>
                                <div className='pt-4'>
                                    <button className={style.downloadBtn}>Know more <FaArrowRight /></button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 p-5'>
                            <div>
                                <img src="https://i.ibb.co/GQ6Gr1JG/image-17.png" alt="" className='img-fluid'/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default SocialSection2;