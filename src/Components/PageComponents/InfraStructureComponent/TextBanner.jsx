import React from "react";
import style from "../InfraStructureComponent/Styles/TextBanner.module.css";
function TextBanner() {
  return (
    <section className={style.textBanner}>
      <div>
        <p className={style.BannerText}>
        GPIL enhances infrastructure through its CSR initiatives by developing essential facilities and systems for societal growth. These efforts strengthen community development and contribute to sustainable progress.
        </p>
      </div>
    </section>
  );
}

export default TextBanner;
