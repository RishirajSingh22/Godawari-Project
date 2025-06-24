import React from 'react';
import styles from "../InfraStructureComponent/Styles/GlobalGoals.module.css";

const GlobalGoals = () => {
  const goals = [
    {
      id: 3,
      title: "SDG 6: Clean Water and Sanitation ",
      description:
        "Efforts in water management ensure access to clean water for drinking and irrigation..",
      image: "https://i.ibb.co/JR5psgvH/Clean-Water-and-Sanitization-1.png",
    },
    {
      id: 10,
      title: "SDG 19: Industry Innovation and Infrastructure",
      description:
        "Development of sustainable infrastructure like the Make in India Square and improved roads aligns with fostering resilient infrastructure and innovation.",
      image: "https://i.ibb.co/svtBXyWN/Infrastructure-Industry-Innovation-1.png",
    },
    {
      id: 17,
      title: "SDG 11: Sustainable Cities and Communities",
      description:
        "Initiatives to enhance public spaces, cultural heritage sites, and community facilities contribute to making cities and communities inclusive and sustainable.",
      image: "https://i.ibb.co/Q3PPJJbL/Community-sustainability.png",
    },
    {
      id: 13,
      title: "SDG 17: Climate Action",
      description:
        "Use of sustainable materials like scrap in projects promotes environmental consciousness and supports climate action goals.",
      image: "https://i.ibb.co/whQdyHtJ/Vector-1.png",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Aligning Impact with Global Goals</h1>
      <div className={styles.grid}>
        {goals.map((goal, index) => (
          <div key={goal.id} className={styles.card}>
            <img src={goal.image} alt={goal.title} className={styles.image} />
            <div className={styles.textContent}>
              <h1 className={styles.title}>{goal.title}</h1>
              <p className={`${styles.description} ${index === 0 || index === 3 ? styles.marginTop : ''}`}>
                {goal.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlobalGoals;
