import React from "react";
import styles from "./Styles/structureSection2.module.css";
import TowerStructure from "./TowerStructure";
import StructureSteel from "./StucutreSteel";
import RailwayStructure from "./RailwayStructure";
const StructureSection2 = () => {
  return (
    <section>
      <StructureSteel />
      <TowerStructure />

      <div className={`${styles.Certifications}`}>
        <div className={`${styles.StructureSection2energyGrid1}`}>
          <h1 className={`text-center ${styles.certificatHeading}`}>Certifications & Compliance</h1>
          <div
            className={`row justify-content-center py-5 m-0 p-0 ${styles.StructureSection2CertificationsContent}`}
          >
            <div className="col-sm-2 ">
              <div className={`p-3 ${styles.StructureSection2Certifications}`}>
                <h5
                  className={`text-center ${styles.StructureSection2CertificationsHead}`}
                >
                  PGCIL
                </h5>
              </div>
            </div>
            <div className="col-sm-2">
              <div className={`${styles.StructureSection2Certifications}`}>
                <h5
                  className={`text-center ${styles.StructureSection2CertificationsHead}`}
                >
                  State Electricity Board Certifications
                </h5>
              </div>
            </div>{" "}
            <div className="col-sm-2">
              <div className={`${styles.StructureSection2Certifications}`}>
                <h5
                  className={`text-center ${styles.StructureSection2CertificationsHead}`}
                >
                  IS 802, 2062, 4759, 1893
                </h5>
              </div>
            </div>{" "}
            <div className="col-sm-2">
              <div className={`${styles.StructureSection2Certifications}`}>
                <h5
                  className={`text-center ${styles.StructureSection2CertificationsHead}`}
                >
                  ASTM A123
                </h5>
              </div>
            </div>
            <div className="col-sm-2">
              <div className={`${styles.StructureSection2Certifications}`}>
                <h5
                  className={`text-center ${styles.StructureSection2CertificationsHead}`}
                >
                  IEC 60652
                </h5>
              </div>
            </div>
          </div>

          <RailwayStructure />

          <div className="container">
            <div className="Manufacturing pt-5">
              <h1 className={styles.manufactureHeading}>Manufacturing Excellence</h1>
              <div className="row py-5">
                <div className={"col-md-4 p-2 "}>
                  {/* <div className={`${styles.containt}`}>  */}

                  <div>
                    <img
                      src="https://i.postimg.cc/rsj51G11/53fdbfdb77b9c12c91d8230e4ba0eb51bef5ca48.jpg"
                      alt="img"
                      className={`img-fluid ${styles.productImage}`}
                    />
                  </div>
                  <div
                    className={`py-4 px-2 ${styles.StructureSection2energyContaint}`}
                  >
                    <h6> Advanced Rolling & Fabrication</h6>
                    <ul>
                      <li>
                        High-tech Hot Rolled Coil Cum Structure Mill for superior
                        precision.
                      </li>
                      <li>
                        CNC machining and automated fabrication for high accuracy.
                      </li>
                    </ul>
                  </div>
                  {/* </div> */}
                </div>
                <div className="col-md-4 p-2">
                  <div>
                    <img
                      src="https://i.ibb.co/VWxtn87z/5d73a7d807be7cf054882ddfd959c34b834d8623.jpg"
                      alt="img"
                      className={`img-fluid ${styles.productImage}`}
                    />
                  </div>
                  <div
                    className={`py-4 px-2  ${styles.StructureSection2energyContaint}`}
                  >
                    <h6>In-House Galvanizing Facilities</h6>
                    <ul>
                      <li>
                        120,000 MT annual capacity for corrosion protection.
                      </li>
                      <li>
                        Large-scale zinc galvanization baths ensure long-lasting
                        durability.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 p-2 ">
                  <div>
                    <img
                      src="https://i.postimg.cc/gkMvrDkd/7afd25cb187f9966204313e067e1d357750909fb.jpg"
                      alt="img"
                      className={`img-fluid ${styles.productImage}`}
                    />
                  </div>
                  <div
                    className={`py-4 px-2  ${styles.StructureSection2energyContaint}`}
                  >
                    <h6>Engineering & Testing</h6>
                    <ul>
                      <li>
                        Proto assembly yard for trial fit-ups and structural
                        validation.
                      </li>
                      <li>
                        Certified designs tested at CPRI and Power Grid labs.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='my-5 text-center'>
                  <button className={styles.downloadBtn}>Download Brochure</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StructureSection2;
