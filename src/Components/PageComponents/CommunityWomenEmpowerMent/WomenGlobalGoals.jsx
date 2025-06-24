import React from 'react'
import style from "./Styles/womenglobalgoal.module.css"

const WomenGlobalGoals = () => {
    const goalsData = [
        {
            imgSrc: "https://i.ibb.co/G43S9W27/gender-equality-1.png",
            title: "SDG 5: Gender Equality",
            description: "Promoting equal opportunities and financial independence for women."
        },
        {
            imgSrc: "https://i.ibb.co/BHfJVPg8/Reduced-Inequalities-1.png",
            title: "SDG 8: Reduced Inequalities",
            description: "Uplifting marginalized women through structured training programs"
        },
        {
            imgSrc: "https://i.postimg.cc/d1KLC42Y/Partnership-for-GOals-1.png",
            title: "SDG 8: Decent Work & Economic Growth",
            description: "Providing skill-based training for sustainable livelihoods."
        }
    ];
    return (
        <section className={style.womenGlobalgoalsBanner}>
        <div className="container">
          <h2 className={`text-center ${style.goalsHeading}`}>Aligning Impact with Global Goals</h2>
          <div className={style.allGoal}>
            <div className="row">
              {goalsData.map((goal, index) => (
                <div
                  key={index}
                  className="col-md-6 col-lg-3 col-sm-6 p-4 text-center mx-auto"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 200}`} // 200ms delay for each card
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
}

export default WomenGlobalGoals