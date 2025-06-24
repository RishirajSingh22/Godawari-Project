import React from "react";
import style from "./styles/EnergyBanner.module.css";

const EnergyBanner = () => {
  return (
    <>
      <section className={style.billetsBanner}>
        <div className="container" data-aos="fade-left">
          <h1 className={style.heading}>
            Powering Growth with
            <br />
            <span>Captive Energy Solutions</span>
          </h1>
        </div>
      </section>
    </>
  );
};

export default EnergyBanner;
