import { BiShield } from "react-icons/bi";
import { BsTruckFlatbed } from "react-icons/bs";
import styles from "./styles/MiningContent.module.css";


export default function MiningOperations() {
  return (
    <section className={styles.miningPage}>
      <div className="container">
        <div className={`${styles.headerSection} text-center text-white py-5`}>     
            <div className="p-sm-5 py-2">             
                <p className={`mb-4 ${styles.miningDescription}`}>
                  At Godavari Power & Ispat (GPIL), mining operations form the
                  backbone of our integrated steel value chain. With 2 captive
                  iron ore mines, GPIL ensures a stable and reliable supply of raw
                  materials for its operations. This backward integration not only
                  safeguards the company from market fluctuations but also
                  underscores our commitment to cost efficiency and
                  sustainability.
                </p>
                <p className={`mb-4 ${styles.miningDescription}`}>
                  By employing strategic mine planning, rigorous quality control,
                  and adherence to environmental regulations, GPIL leads the way
                  in responsible mining practices. With ambitious plans for
                  capacity expansion, GPIL is poised to further strengthen its
                  role in supporting industrial growth while prioritizing
                  environmental stewardship.
                </p>            
            </div>      
        </div>

        <div className={`${styles.minesSection} py-5`}>
          <div className="container">
            <h2 className={`${styles.sectionTitle} text-center text-white mb-5`}>
              Our Mines
            </h2>
            <div className="row">
              <div className="col-md-6">
                <div className={`${styles.mineCard} mb-4`}>
                  <div className={styles.mineImage}>
                    <img
                      src="https://i.postimg.cc/c4f67Fzh/image-14.png"
                      alt="Aridongri Iron Ore Mine"
                      className="img-fluid w-100"
                    />
                    <h3 className={styles.mineName}>Aridongri Iron Ore Mine</h3>
                  </div>
                  <div className={styles.mineDetails}>
                    <div className={styles.detailRow}>
                      <span className={styles.detailLabel}>
                        Current Capacity:
                      </span>
                      <span className={styles.detailValue}>2.35 MTPA</span>
                    </div>
                    <div className={styles.detailRow}>
                      <span className={styles.detailLabel}>
                        Estimated reserves:
                      </span>
                      <span className={styles.detailValue}>
                        60 million tonne's
                      </span>
                    </div>
                    <div className={styles.detailRow}>
                      <span className={styles.detailLabel}>
                        Proposed Capacity:
                      </span>
                      <span className={styles.detailValue}>5.00 MTPA</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={`${styles.mineCard} mb-4`}>
                  <div className={styles.mineImage}>
                    <img
                      src="https://i.postimg.cc/7LjyWkG2/image-15.png"
                      alt="Boria Tibbu Iron Ore Mine"
                      className="img-fluid w-100"
                    />
                    <h3 className={styles.mineName}>Boria Tibbu Iron Ore Mine</h3>
                  </div>
                  <div className={styles.mineDetails}>
                    <div className={styles.detailRow}>
                      <span className={styles.detailLabel}>
                        Current Capacity:
                      </span>
                      <span className={styles.detailValue}>0.70 MTPA</span>
                    </div>
                    <div className={styles.detailRow}>
                      <span className={styles.detailLabel}>
                        Estimated reserves:
                      </span>
                      <span className={styles.detailValue}>
                        85 million tonne's
                      </span>
                    </div>
                    <div className={styles.detailRow}>
                      <span className={styles.detailLabel}>
                        Proposed Capacity:
                      </span>
                      <span className={styles.detailValue}>4.00 MTPA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.highlightsSection} py-5`}>
          <div className="container">
            <h2 className={`${styles.sectionTitle} text-center text-white mb-5`}>
              Key Highlights
            </h2>
            <div className="row justify-content-center">
              <div className="col-md-5 p-3  ">
                <div className={`${styles.highlightCard} p-4`}>
                  <div className={styles.highlightIcon}>
                    <BsTruckFlatbed className={styles.highlightCardIcon} />
                  </div>
                  <h3 className={`${styles.highlightValue}`}>
                    ₹4,000<span className={styles.perUnit}>/tonne</span>
                  </h3>
                  <p className={styles.highlightText} >
                    Savings Through Captive Mining
                  </p>
                </div>
              </div>
              <div className="col-md-5 p-3">
                <div className={`${styles.highlightCard} p-4`}>
                  <div className={styles.highlightIcon}>
                    <BiShield className={styles.highlightCardIcon}  />
                  </div>
                  <h3 className={`${styles.highlightValue}`}>
                    ~35 Years
                  </h3>
                  <p className={styles.highlightText}>
                    Security of Resource Supply
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
