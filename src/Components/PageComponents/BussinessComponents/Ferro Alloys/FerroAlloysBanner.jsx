import React from "react";
import style from "./styles/FerroAlloysBanner.module.css";

const FerroAlloysBanner = () => {
  return (
    <>
      <section className={style.ferroAlloysBanner}>
        <div className="container">
          <h1 className={style.ferroAlloysHeading}>
            Enhancing Steel Strength with
            <br />
            <span>
              Ferro Alloys
            </span>
          </h1>
        </div>
      </section>
    </>
  );
};

export default FerroAlloysBanner;
