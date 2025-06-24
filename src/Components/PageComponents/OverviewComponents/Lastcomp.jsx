import React from "react";
import styles from "../OverviewComponents/styles/Lastcomp.module.css"


function Lastcomp() {
  return (
    <section className={`${styles.lastcompcontainer} `}>

    <div  className={`${styles.maincontainer2} container`} >
    <div className={`d-flex align-items-center justify-content-center container-fluid`}>
      <div className={`${styles.textcenter} text-white`}>
        <h1 className={styles.title}>Be a Part of GPIL’s Vision</h1>
        <p className={styles.description}>
          Join GPIL to unlock endless opportunities in a workplace that values
          innovation, inclusivity, and excellence. Together, we will build not
          just careers, but a better future.
        </p>
        <button className={`btn btn-light btn-lg ${styles.custombtn}`}>
          Start your journey with GPIL today →
        </button>
      </div>
    </div>
    </div>
    </section>
  );
}

export default Lastcomp;
