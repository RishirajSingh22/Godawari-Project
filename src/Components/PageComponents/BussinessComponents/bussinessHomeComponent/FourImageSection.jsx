import React from "react";
import styles from "../bussinessHomeComponent/Styles/FourImageSection.module.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap import

const FourImageSection = () => {
    const industries = [
        {
            title: "Steel",
            description: "We are a leading name in India's steel manufacturing industry, renowned for integrated operations and sustainable practices.",
            button: "Know more",
            image: "https://i.postimg.cc/0yrD8zdk/Mask-group-3.png",
            link: "/steel"
        },
        {
            title: "Ferro Alloys",
            description: "With advanced facilities, we deliver high-quality silico manganese that meets the rigorous demands of the steel industry.",
            button: "Know more",
            image: "https://i.postimg.cc/90MFG7fz/Mask-group-4.png",
            link: "/ferroalloys"
        },
        {
            title: "Energy",
            description: "By integrating diverse energy sources for captive use, including renewable and conventional power, we ensure energy efficiency and lesser environmental impact.",
            button: "Know more",
            image: "https://i.postimg.cc/xjxd9tsm/Mask-group-5.png",
            link: "/energy"
        },
        {
            title: "Mining",
            description: "With 2 captive iron ore mines, our mining operations form the backbone of our integrated steel value chain.",
            button: "Know more",
            image: "https://i.postimg.cc/dVdQmvJR/Mask-group-6.png",
            link: "/mining"
        }
    ];

    return (
        <section className={styles.industriesContainer}>
            <div>
                <div className="row m-0 p-0">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="col-md-6 col-lg-3 m-0 p-0"
                            data-aos="fade-up"
                            data-aos-delay={index * 300}
                        >
                            <div
                                className={styles.industryCard}
                                style={{ backgroundImage: `url(${industry.image})` }}
                            >
                                <div className={styles.overlayLayer}></div>
                                <div className={styles.contentContainer}>
                                    <h2 className={styles.title}>{industry.title}</h2>
                                    <div className={styles.details}>
                                        <p className={styles.description}>{industry.description}</p>
                                        <Link to={industry.link}>
                                            <button className={styles.buttonContainer}>
                                                {industry.button} →
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FourImageSection;
