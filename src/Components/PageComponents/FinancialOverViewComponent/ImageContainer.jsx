import React from "react";
import style from "../FinancialOverViewComponent/Styles/imageContainer.module.css";
function ImageContainer() {
  return (
    <section>
      {" "}
      <div className={`contaner ${style.ecosystem}`}>
        <div className={`px-3  ${style.visionariHeading}`}>
          <p className={`mx-auto ${style.p1}`}> Investor & Media<br/>
          Bridging Growth and Transparency</p>
  
        </div>
      </div>
    </section>
  );
}

export default ImageContainer;
