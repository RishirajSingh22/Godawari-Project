import React from "react";
import style from "../Styles/TextBox.module.css";
function TextBox() {
  return (
    <section className={style.textboxSection}>
      <h1 className={style.heading}>Welfare Programs</h1>
      <ul className={style.Ullist}>
        <li>
          Established an old-age home to provide care and support for senior
          citizens.
        </li>
        <li>
          Providing operational support for free stitching and tailoring
          centres, empowering women through skill-building initiatives.
        </li>
      </ul>
    </section>
  );
}

export default TextBox;
