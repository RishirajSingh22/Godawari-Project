import React, { useState } from "react";
import YearCarousel from "./YearCarousel";
import style from "../ReportsComponents/Styles/MidContainer.module.css";
import Pagination from "./Pagination";
function MideConatainer() {
  const [activeIndex, setActiveIndex] = useState(null); // Track active box

  const handleClick = (index) => {
    setActiveIndex(index); // Update active index on click
  };
  return (
    <section className={style.MideConatainer}>
      <YearCarousel />
      <div className={style.boxParent}>
        <div className={style.boxes}>
          {["Q1", "Q2", "Q3", "Q4"].map((quarter, index) => (
            <div
              key={index}
              className={`${style.box} ${
                activeIndex === index ? style.active : ""
              }`}
              onClick={() => handleClick(index)}
            >
              {quarter}
            </div>
          ))}
        </div>
      </div>
      <Pagination />
    </section>
  );
}

export default MideConatainer;
