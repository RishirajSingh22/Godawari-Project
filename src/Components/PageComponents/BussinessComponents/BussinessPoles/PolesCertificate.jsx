import React from 'react';
import styles from "./Styles/polescertificate.module.css";

const certifications = [
    "IS 2062 / BSEN 10025 Structural steel for hot - rolled products",
    "BSEN ISO 1461 Hot-dip galvanized coating specifications",
    "IS 875 Wind load considerations for stable pole designs",
    "ISO 14713 Protection against corrosion for steel structures",
    "Approved by: PWD,AAI, Indian Railways, SEBs, PGCIL, IOCL, BPCL, HPC"
];

const PolesCertificate = () => {
    return (
        <div className={styles.PolesCertifications}>
        <div className="container">
          <h1 className={`text-center py-3 ${styles.certificateheading}`}>
            Certifications & Compliance
          </h1>
          <div className="row justify-content-center p-3">
            {certifications.map((cert, index) => (
              <div
                className={`col-sm-2 m-2 ${styles.PolesCertificationsContent1}`}
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200} // Each card appears one by one
              >
                <div className={`py-4 ${styles.PolesCertificationsItem}`}>
                  <h6 className={`text-center ${styles.PolesCertificationsHead}`}>
                    {cert}
                  </h6>
                </div>
              </div>
            ))}
          </div>
      
          <div className="text-center pt-4">
            <button className={styles.downloadBtn}>Download Brochure</button>
          </div>
        </div>
      </div>
      
    );
};

export default PolesCertificate;
