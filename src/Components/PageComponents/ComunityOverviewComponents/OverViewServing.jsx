import React from "react";
import styles from "../ComunityOverviewComponents/Styles/OverviewServing.module.css"

export default function OverViewServing() {
  return (
    <div className={styles.container}>
      <div className={styles.statsWrapper}>
        <div className={styles.statBox} data-aos="fade-up" data-aos-delay="100">
          <div className={styles.iconWrapper}>
            <img src="https://i.postimg.cc/G3T8mYdx/Layer-1.png" alt="Beneficiaries" />
          </div>
          <h2 className={styles.statNumber}>49,749</h2>
          <p className={styles.statLabel}>Total Beneficiaries</p>
        </div>
        <div className={styles.statBox} data-aos="fade-up" data-aos-delay="300">
          <div className={styles.iconWrapper}>
            <img src="https://i.postimg.cc/qgfCpBNr/Vector.png" alt="CSR Expenditure" />
          </div>
          <h2 className={styles.statNumber}>₹26 CR+</h2>
          <p className={styles.statLabel}>CSR Expenditure<br /> (FY-2023-2024)</p>
        </div>
      </div>
      <div className={styles.ethosSection} data-aos="fade-up" data-aos-delay="500">
        <h3>
          At GPIL, we are driven by one core ethos
          <span className={styles.highlight}>
            ‘Serving Society through Industry.’
          </span>
        </h3>
        <p className={styles.description}>
          In a free enterprise, we believe the community is not merely a stakeholder
          in business but is, in fact, the very purpose of its existence. Therefore,
          embedded within our core values is a resolute dedication to ensure that every
          action we take resonates with our commitment to society and harmonises with
          nature’s delicate balance.
        </p>
      </div>
    </div>
 
  );
};
