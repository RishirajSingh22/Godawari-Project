import React from "react";
import style from "./Styles/structureBanner.module.css";
const StructureBanner = () => {
  return (
    <section className={style.structureBanner}>
      <div className="container">
        <h1 className={style.structureBannerHeading}>
        Strength, Precision, and Reliability
          <br />
          <span>
            in All Structures
          </span>
        </h1>
      </div>
    </section>
  );
};

export default StructureBanner;
