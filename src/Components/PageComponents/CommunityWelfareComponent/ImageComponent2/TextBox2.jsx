import React from "react";
import style from "../Styles/TextBox.module.css";
function TextBox2() {
  return (
    <section className={style.textboxSection}>
      <h1 className={style.heading}>Social Support</h1>
      <ul className={style.Ullist}>
        <li>
        Offering financial assistance for marriages, senior citizen care, and public awareness programs.
        </li>
        <li>
        Supporting Gaushalas to honour and protect cows, contributing to spiritual and environmental well-being.
        </li>
        <li>
          Repair, levelling, and cleaning of monsoon-affected roads for smooth
          and safe usage by the community.
        </li>
       
      </ul>
    </section>
  );
}

export default TextBox2;
