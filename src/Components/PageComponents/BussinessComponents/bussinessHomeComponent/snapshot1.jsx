import React from "react";
import styles from '../bussinessHomeComponent/Styles/snapshot1.module.css'
const CapacitySnapshot = () => {
    const capacities = [
      { icon: "https://i.postimg.cc/mkXrRdp1/ore-1.png", value: "3.05 MTPA", label: "Iron Ore Mining Capacity" },
      { icon: "https://i.postimg.cc/X7rjdkDx/iron-ore-pellets-1.png", value: "2.7 MTPA", label: "Pellet Production Capacity" },
      { icon: "https://i.postimg.cc/qB50JCMK/beam-1.png", value: "0.594 MTPA", label: "Sponge Iron Plant Capacity" },
      { icon: "https://i.postimg.cc/jSzr4g66/welder-1.png", value: "0.525 MTPA", label: "Steel Melting Shop Capacity" },
      { icon: "https://i.postimg.cc/4dFCxrZG/rolled-steel-1.png", value: "0.4 MTPA", label: "Rolling Mill Capacity" },
      { icon: "https://i.postimg.cc/BQFWJYzW/Vector.png", value: "0.1 MTPA", label: "HB Wire Plant Capacity" },
    ];
  
    return (
      <div className={styles.container}>
      <h2 className={styles.title}>Capacity Snapshot</h2>
      <div className={styles.grid}>
        {capacities.map((capacity, index) => (
          <div 
            key={index} 
            className={styles.card} 
            data-aos="fade-up" 
            data-aos-delay={index * 200} 
          >
            <div className={styles.BoxParent}>
              <img 
                src={capacity.icon} 
                alt={capacity.label} 
                className={styles.icon} 
              />
              <div className={styles.value}>{capacity.value}</div>
            </div>
            <div className={styles.label}>{capacity.label}</div>
          </div>
        ))}
      </div>
    </div>
    
    );
  };
  

export default CapacitySnapshot;
