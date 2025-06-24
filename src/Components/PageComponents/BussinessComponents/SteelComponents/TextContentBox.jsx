import React from "react";
import style from "../SteelComponents/Styles/TextContentBox.module.css";

function TextContentBox() {
  return (
    <section className={style.mediaTellingSection}>
      <div className="container-fluid">
        <div className={style.mediatellingHeading}>
          Godawari Power & Ispat Limited (GPIL) is a leading name in India’s
          steel manufacturing industry, renowned for its integrated operations
          and sustainable practices. With advanced manufacturing facilities and
          a robust value chain, GPIL produces high-quality steel products
          tailored to meet diverse industrial and infrastructure needs.
          <br />
          <br />
          GPIL’s focus on innovation, operational excellence, and environmental
          responsibility enables the company to deliver eco-friendly and
          efficient steel solutions. Serving sectors such as construction,
          automotive, and renewable energy, GPIL has established a strong
          presence in domestic markets while expanding its footprint globally.
        </div>
      </div>
    </section>
  );
}

export default TextContentBox;
