import React from "react";
import styles from '../OverviewComponents/styles/Employee.module.css'
import { FiArrowUpRight } from "react-icons/fi";

function Employee() {
  return (
    <section  className={styles.maincontainer}>

      <div className="container">
    <div className={`${styles.employeecontainer} `}>
      <div className="text-center">
        <h2 className={styles.sectiontitle}>Employee Well-being & Engagement</h2>
        <p className={styles.sectionsubtitle}>
          Your well-being is our commitment. GPIL fosters a holistic approach that balances
          work-life needs while ensuring everyone feels valued.
        </p>
      </div>

      <div className="container">
        <div className="row">
          {/* Card 1 - Health & Well-being */}
          <div className="col-md-6 p-2">
            <div className={`card ${styles.employeecard}`}>
              <img
                src="https://i.ibb.co/4ZbzNxc1/MUR-5502.png"
                className={styles.cardimg}
                alt="Health &  Well-being"
              />
              <div className={styles.cardoverlay}>
                <h5>Health & <br /> Well-being</h5>
                <a href="#" className={styles.learnmore}>Learn more<FiArrowUpRight /></a>
              </div>
            </div>
          </div>

          {/* Card 2 - Engagement Initiatives */}
          <div className="col-md-6 p-2">
            <div className={`card ${styles.employeecard}`}>
              <img
                src="https://i.ibb.co/dsdJxTwz/MUR-5238.png"
                className={styles.cardimg}
                alt="Engagement Initiatives"
              />
              <div className={`${styles.cardoverlay}`}>
                <h5>Engagement Initiatives</h5>
                <a href="#" className={styles.learnmore}>Learn more <FiArrowUpRight /></a>
              </div>
            </div>
          </div>

          {/* Card 3 - Commitment to Health & Safety */}
          <div className="col-md-12 p-2">
            <div className={`card ${styles.employeecard}`}>
              <img
                src="https://i.ibb.co/sdRNWCtL/image.png"
                className={styles.cardimg}
                alt="Commitment to Health & Safety"
              />
              <div className={styles.cardoverlay}>
                <h5>Commitment to Health & Safety</h5>
                <a href="#" className={styles.learnmore}>Learn more <FiArrowUpRight /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>
  );
}

export default Employee;

