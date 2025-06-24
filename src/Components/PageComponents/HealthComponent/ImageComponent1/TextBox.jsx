import React from 'react'
import style from "../Styles/TextBox.module.css"
function TextBox() {
  return (
    <section className={style.textboxSection}>
        <h1 className={style.heading}>F-95 Physiotherapy Unit  </h1>
        <ul  className={style.Ullist}>
          <li>Advanced equipment, skilled physiotherapists for physiotherapy services and specialized treatment for musculoskeletal, neurological, and orthopaedic conditions, such as pain management, injury rehabilitation, post-surgical recovery, and mobility improvement to enhance functional health.</li>
       <li>Address ergonomics-related issues, ensuring better posture, reduced strain, and improved workplace well-being for GPIL employees.</li>
       <li>Employee training on posture correction, stretching, strengthening exercises, and ergonomics to prevent injuries and improve daily movement efficiency.</li>
        </ul>
    </section>
  )
}

export default TextBox
