import React from 'react';
import styles from "../HealthComponent/Styles/GlobalGoals.module.css";

const GlobalGoals = () => {
  const goals = [
    {
      id: 3,
      title: "SDG 3: Good Health and Well-Being",
      description:
        "Ensuring healthy lives and promoting well-being for all, with initiatives targeting early diagnosis, treatment, and enhanced healthcare access.",
      image:
        "https://i.ibb.co/yB8mt7SK/Vector.png",
    },
    {
      id: 10,
      title: "SDG 10: Reduced Inequalities",
      description:
        "Supporting marginalised communities by bridging healthcare gaps and ensuring access to critical medical infrastructure and services.",
      image:
        "https://i.ibb.co/R43ZX9dn/Reduced-Inequalities-1.png",
    },
    {
      id: 17,
      title: "SDG 17: Partnerships for the Goals",
      description:
        "Collaborating with hospitals and organisations to amplify healthcare impact and provide specialised services to underserved populations.",
      image:
        "https://i.ibb.co/4wPVZZpZ/Partnership-for-GOals-1.png",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Aligning Impact with Global Goals</h1>
      <div className={styles.grid}>
        {goals.map((goal) => (
          <div key={goal.id} className={styles.card}>
            <img src={goal.image} alt={goal.title} className={styles.image} />
            <h1 className={styles.title}>{goal.title}</h1>
            <p className={styles.description}>{goal.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlobalGoals;
