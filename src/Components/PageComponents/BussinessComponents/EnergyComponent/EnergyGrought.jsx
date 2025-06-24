import { FcFactory } from "react-icons/fc";
import styles from "./styles/EnergyGrought.module.css";
import { SiUnacademy } from "react-icons/si";

export default function EnergyGrought() {
  return (
    <div className={styles.energyPage}>
      <div className="container">


      {/* Header Section */}
      <div className={styles.headerSection}>
        <p className={styles.headerText}>
          At Godavari Power & Ispat (GPIL), energy is at the heart of
          sustainable operations. By integrating diverse energy sources,
          including renewable and conventional power, GPIL ensures energy
          efficiency and reduced environmental impact.
        </p>
      </div>

      {/* Energy Capacity Grid */}
      <div className={styles.energyGrid}>
        {/* Solar Power Section */}
        <div className={`${styles.energyRow} mt-5`}>
          <div className={styles.energyImage}>
            <img
              src="https://i.ibb.co/B5QcYqSB/image-15.png"
              alt="Solar Panel Farm"
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>
          <div className={styles.energyStats}>
            <img
              className={styles.energyIcon}
              size={48}
              src="https://i.ibb.co/FkP0pdtY/Layer-2.png"
              alt=""
            />
            <div className={styles.statValue}>83.2 MWp</div>
            <div className={styles.statLabel}>
              Commissioned Solar
              <br />
              Power Capacity
            </div>
          </div>
        </div>
        {/* Biomass Power Section */}
        <div className={`${styles.energyRow} mt-5`}>
          <div className={styles.energyStats}>
            <img
              className={styles.energyIcon}
              size={48}
              src="https://i.ibb.co/4rFRLm3/Group-15748.png"
              alt=""
            />
            <div className={styles.statValue}>20 MW</div>
            <div className={styles.statLabel}>Biomass Power Capacity</div>
          </div>
          <div className={styles.energyImage}>
            <img
              src="https://i.ibb.co/chZJcB5m/image-16.png"
              alt="Cooling Towers"
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>
        </div>
         {/* Biomass Power Section */}
         <div className={`${styles.energyRow} mt-5`}>
          <div className={styles.energyImage}>
            <img
              src="https://i.ibb.co/SL1XFG7/image-17.png"
              alt="Cooling Towers"
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>
          <div className={styles.energyStats}>
            <img
              className={styles.energyIcon}
              size={48}
              src="https://i.ibb.co/pB5WSzjH/Group-15750.png"
              alt=""
            />
            <div className={styles.statValue}>42 MW</div>
            <div className={styles.statLabel}>Waste Heat Recovery Capacity</div>
          </div>
        </div>
        {/* Biomass Power Section */}
        <div className={`${styles.energyRow} mt-5`}>
          <div className={styles.energyStats}>
            <img
              className={styles.energyIcon}
              size={48}
              src="https://i.ibb.co/fVZsKjKn/Vector-3.png"
              alt=""
            />
            <div className={styles.statValue}>XX MW</div>
            <div className={styles.statLabel}>Wind Power Turbine Capacity</div>
          </div>
          <div className={styles.energyImage}>
            <img
              src="https://i.ibb.co/TMZyh8YQ/image-18.png"
              alt="Cooling Towers"
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>
        </div>
        {/* Biomass Power Section */}
        <div className={`${styles.energyRow} mt-5`}>
          <div className={styles.energyImage}>
            <img
              src="https://i.ibb.co/WNDjfn2t/image-19.png"
              alt="Cooling Towers"
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>
          <div className={styles.energyStats}>
            <img
              className={styles.energyIcon}
              size={48}
              src="https://i.ibb.co/wFdJHxps/Group-15751.png"
              alt=""
            />
            
            <div className={styles.statValue}>36 MW</div>
            <div className={styles.statLabel}>
              Coal-Based Thermal <br /> Power Capacity
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
