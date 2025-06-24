import React from "react";
import style from "../ComunityEnviromentComponents/Styles/TextBanner.module.css";
function TextBanner() {
  return (
    <section className={style.textBanner}>
      <div>
        <p className={style.BannerText}>
          At GPIL, sustainability is at the core of our operations. We are
          committed to protecting and enhancing the environment through
          large-scale plantation & Green Belt Development, water conservation,
          and other green initiatives in urban and rural areas. Our efforts are
          aimed at reducing carbon footprints, improving biodiversity, and
          creating a cleaner, healthier future for all.
        </p>
      </div>
    </section>
  );
}

export default TextBanner;
