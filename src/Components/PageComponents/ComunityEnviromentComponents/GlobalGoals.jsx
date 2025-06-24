import React from 'react';
import styles from "../ComunityEnviromentComponents/Styles/GlobalGoals.module.css";

const GlobalGoals = () => {
  const goals = [
    {
      id: 3,
      title: "SDG 6: Clean Water and Sanitation ",
      description:
        "Through pond development and water conservation projects.",
      image: "https://i.ibb.co/JR5psgvH/Clean-Water-and-Sanitization-1.png",
    },
    {
      id: 10,
      title: "SDG 15:  Life on Land",
      description:
        "Through extensive reforestation, improving soil quality, and creating wildlife habitats",
      image: "https://i.ibb.co/svtBXyWN/Infrastructure-Industry-Innovation-1.png",
    },
    {
      id: 17,
      title: "SDG 11: Sustainable Cities and Communities",
      description:
        "By enhancing green spaces and roadside plantations",
      image: "https://i.ibb.co/Q3PPJJbL/Community-sustainability.png",
    },
    {
      id: 13,
      title: "SDG 13: Climate Action",
      description:
        "By afforestation and improving biodiversity through large-scale tree plantations.",
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
