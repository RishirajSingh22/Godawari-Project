import React from 'react';
import style from "../CommunityEducationComponents/Styles/EducationGlobalGoals.module.css";

const goalsData = [
    {
        imgSrc: "https://i.ibb.co/QF87p8b7/Quality-Education-1.png",
        title: "SDG 4: Quality Education",
        description: "Ensuring inclusive and equitable quality education and promoting lifelong learning opportunities for all."
    },
    {
        imgSrc: "https://i.ibb.co/G43S9W27/gender-equality-1.png",
        title: "SDG 5: Gender Equality",
        description: "Empowering girls and ensuring equal access to quality education for all genders through targeted initiatives."
    },
    {
        imgSrc: "https://i.ibb.co/svtBXyWN/Infrastructure-Industry-Innovation-1.png",
        title: "SDG 9: Industry, Innovation, and Infrastructure",
        description: "Enhancing digital learning infrastructure to foster advanced and innovative education."
    },
    {
        imgSrc: "https://i.ibb.co/BHfJVPg8/Reduced-Inequalities-1.png",
        title: "SDG 10: Reduced Inequalities",
        description: "Supporting marginalised and tribal communities through specialised education programs and financial aid."
    },
];

const EducationGlobalGoals = () => {
    return (
<section className={style.GlobalgoalsBanner}>
  <div className="container">
    <h2 className={`text-center ${style.goalsHeading}`}>Aligning Impact with Global Goals</h2>
    <div className={style.allGoal}>
      <div className="row">
        {goalsData.map((goal, index) => (
          <div
            key={index}
            className="col-md-6 col-lg-3 col-sm-6 p-4 text-center"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`} // 100ms gap for each column
          >
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
};

export default EducationGlobalGoals;
