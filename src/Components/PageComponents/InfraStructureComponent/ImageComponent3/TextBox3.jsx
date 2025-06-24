import React from "react";
import style from "../Styles/TextBox.module.css";
function TextBox3() {
  return (
    <section className={style.textboxSection}>
      <h1 className={style.heading}>Recreational & Public Spaces</h1>
      <ul className={style.Ullist}>
        <li>
          Development of parks, playgrounds, and cultural spaces to enhance
          community engagement and recreation.
        </li>
        <li>
          Renovation and beautification of cultural congregation spaces for
          community events and gatherings.
        </li>
        <li>
          Upgradation of local hospitals to provide better healthcare services.
        </li>
        <li>
          Implementation of modern sanitation facilities to promote hygiene in
          public spaces and schools.
        </li>
      </ul>
    </section>
  );
}

export default TextBox3;
