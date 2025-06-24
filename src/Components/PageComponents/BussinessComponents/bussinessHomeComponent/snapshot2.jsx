import React from 'react';
import styles from '../bussinessHomeComponent/Styles/snapshot2.module.css';

const Snapshot2 = () => {
    const capacities = [
        { icon: "https://i.postimg.cc/76mpsbLw/Vector-3.png", value: "2,14,000 TPA", label: "Rolling Mill with Gasifier" },
        { icon: "https://i.postimg.cc/76mpsbLw/Vector-3.png", value: "10,000 TPA", label: "Powder Coated Racks/ Panels" },
        { icon: "https://i.postimg.cc/76mpsbLw/Vector-3.png", value: "1,10,000 TPA", label: "Galvanizing Plant along with Gasifier" },
        { icon: "https://i.postimg.cc/76mpsbLw/Vector-3.png", value: "30,000 TPA", label: "Annealing & Winding Wire Unit along with gasifier" },
    ];

    return (
        <div className={`container ${styles.snapshotContainer}`}>
        <h2 className={styles.snapshotTitle}>
          <strong>RR Ispat</strong> <br />
          A unit of Godawari Power & Ispat Ltd
        </h2>
        <div className="row pt-4">
          {capacities.map((capacity, index) => (
            <div 
              key={index} 
              className="col-md-6 col-lg-3" 
              data-aos="fade-up" 
              data-aos-delay={index * 200} // Each card appears one by one
            >
              <div className={styles.snapshotCard}>
                <div className={styles.snapshotBox}>
                  <img 
                    src={capacity.icon} 
                    alt={capacity.label} 
                    className={styles.snapshotIcon} 
                  />
                  <span className={styles.snapshotValue}>{capacity.value}</span>
                </div>
                <p className={styles.snapshotLabel}>{capacity.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    );
};

export default Snapshot2;
