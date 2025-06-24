import React from "react";
import style from "../Styles/TextBox.module.css";
function TextBox2() {
  return (
    <section className={style.textboxSection}>
      <h1 className={style.heading}>Roads & Educational Infrastructure</h1>
      <ul className={style.Ullist}>
        <li>
          Construction of a robust rural road network to boost agricultural
          activities and improve connectivity.
        </li>
        <li>
          Building community toilets and drainage systems to support the "Clean
          India Mission.
        </li>
        <li>
          Repair, levelling, and cleaning of monsoon-affected roads for smooth
          and safe usage by the community.
        </li>
        <li>
          Installation of LED streetlights and other safety measures in rural
          areas.
        </li>
        <li>
          Construction of classrooms, playgrounds, prayer sheds, school
          kitchens, and toilet blocks in rural schools to provide better
          learning environments for students.
        </li>
      </ul>
    </section>
  );
}

export default TextBox2;
