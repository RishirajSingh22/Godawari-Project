import React from "react";
import styles from '../OverviewComponents/styles/Godavari.module.css'
import { FaUsers, FaChalkboardTeacher } from "react-icons/fa";

function Godavari() {
  return (
    <section className={`${styles.maincontainer}`}>
    <div className={`container `}>
    <div className={`${styles.godavaricontainer }`}>
      <div className="text-center">
        {/* <h2 className={`${styles.companytitle}`}>Godawari Power & Ispat Limited</h2> */}
        <p className={`mx-auto ${styles.companydescription}`}>
          At GPIL, we believe that our people are our greatest asset. As a
          driving force behind our success, every employee at GPIL is nurtured
          in a supportive, inclusive, and innovative environment that fosters
          growth, collaboration, and excellence.
        </p>
      </div>

      <h2 className={`text-center ${styles.sectiontitle}`}>Strength in Numbers</h2>

      <div className="container">
        <div className="row ">
          {/* Card 1 */}
          <div className="col-md-6  p-2"> 
            <div className={`card ${styles.statscard}`}>
              <div className="card-body">
                <img src="https://i.ibb.co/rfHwzRtn/Layer-1-2.png" alt=""  />
                <p className={`${styles.statsnumber}`}>3400+</p>
                <p className={`${styles.statstext}`}>Strong Workforce Employed</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-2">
            <div className={`card ${styles.statscard}`}>
              <div className="card-body">
              <img src="https://i.ibb.co/pBPSZWcK/Vector-1.png" alt="" />
              <p className={`${styles.statsnumber}`}>90+</p>
                <p className={`${styles.statstext}`}>Training Programs Annually</p>
              </div>
            </div>
          </div>


          {/* Card 2 */}
          {/* <div className="col-md-6">
            <div className={`card ${styles.statscard}`}>
              <div className="card-body">
                <img src="https://i.ibb.co/pBPSZWcK/Vector-1.png" alt="" />
                <h3 className={`${styles.statsnumber}`}>90+</h3>
                <p className={`${styles.statstext}`}>Training Programs Annually</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    </div>
    </section>
  );
}

export default Godavari;

