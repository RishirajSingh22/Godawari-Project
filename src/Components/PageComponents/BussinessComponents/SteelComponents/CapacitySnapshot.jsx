import React from "react";
import styles from '../SteelComponents/Styles/CapacitySnapshot.module.css'
const CapacitySnapshot = () => {
    const capacities = [
      { icon:"https://i.postimg.cc/xCgd7Spk/welder-1-1.png", value: "0.525 MTPA", label: "Steel Melting Shop (Billets)" },
      { icon: "https://i.postimg.cc/brJvfF4m/rolled-steel-1-1.png" , value: "0.4 MTPA", label: "Rolling Mill (Wire Rode)" },
      { icon: "https://i.postimg.cc/tJM4qNjp/steel-wire-1.png", value: "0.1 MTPA", label: "HB Wire Plant Capacity" },
      ];
  
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Capacity Snapshot</h2>
        <div className={styles.grid}>
          {capacities.map((capacity, index) => (
            <div key={index} className={styles.card}>
            <div  className={styles.BoxParent}>
              <img src={capacity.icon} alt={capacity.label} className={styles.icon} />
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
