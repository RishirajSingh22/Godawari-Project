import React from "react";
import style from "../CommunityWelfareComponent/Styles/TextBanner.module.css";
function TextBanner() {
  return (
    <section className={style.textBanner}>
      <div>
        <p className={style.BannerText}>
          GPIL’s community welfare initiatives address social challenges by
          fostering inclusive growth. These programs provide essential support
          to ensure a higher quality of life for all.
        </p>
      </div>
    </section>
  );
}

export default TextBanner;
