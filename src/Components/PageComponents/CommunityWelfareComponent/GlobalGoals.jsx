import React from 'react';
import styles from "../CommunityWelfareComponent/Styles/GlobalGoals.module.css";

const GlobalGoals = () => {
  const goals = [
    {
      id: 3,
      title: "SDG 3: Good Health and Well-being ",
      description:
        "Public awareness campaigns and social support initiatives contribute to promoting health and well-being.",
      image: "https://i.ibb.co/yB8mt7SK/Vector.png",
    },
    {
      id: 10,
      title: "SDG 5: Gender Equality",
      description:
        "Tailoring centers and operational support empower tribal women with skill-building and self-reliance.",
      image: "https://i.ibb.co/23swKTQh/gender-equality-1.png",
    },
    {
      id: 17,
      title: "SDG 10: Reduced Inequalities",
      description:
        "Welfare programs, financial assistance, and collaborations promote social inclusivity and reduce inequalities.",
      image: "https://i.ibb.co/R43ZX9dn/Reduced-Inequalities-1.png",
    },
    {
      id: 7,
      title: "SDG 6: Clean Water and Sanitation",
      description:
        "Provision of safe drinking water addresses access to clean water for underserved individuals.",
      image: "https://i.ibb.co/TBqdtPMT/Clean-Water-and-Sanitization-1.png",
    },
    {
      id: 8,
      title: "SDG 17: Partnerships for the Goals",
      description:
        "Collaborations with district authorities enhance infrastructural and welfare activities, showcasing partnerships for sustainable development.",
      image: "https://i.ibb.co/4wPVZZpZ/Partnership-for-GOals-1.png",
    },

  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Aligning Impact with Global Goals</h1>
      <div className={styles.grid1}>
        <div className='row align-items-center justify-content-center'>

          {goals.map((goal, index) => (
            <div className='col-md-4 px-5'>
              <div key={goal.id} className={styles.card}>
                <img src={goal.image} alt={goal.title} className={styles.image} />
                <div className={styles.textContent}>
                  <h1 className={styles.title}>{goal.title}</h1>
                  <p className={`${styles.description} ${index === 0 || index === 3 ? styles.marginTop : ''}`}>
                    {goal.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalGoals;
