import React from "react";
import style from "../Styles/TextBox.module.css";
function TextBox() {
  return (
    <section className={style.textboxSection}>
      <h1 className={style.heading}>
      Water Management Irrigation and Drinking Water
      </h1>
      <ul className={style.Ullist}>
        <li>
          Construction and renovation of water bodies to meet irrigation and
          drinking water needs.
        </li>
        <li>
          Installation of overhead water storage tanks and pipelines to improve
          drinking water supply.
        </li>
        <li>
          Borewell setups to ensure groundwater availability for drinking
          purposes.
        </li>
        <li>
          Implementation of rainwater harvesting and groundwater recharge
          systems for water conservation, preservation, and augmentation.
        </li>
      </ul>
    </section>
  );
}

export default TextBox;
