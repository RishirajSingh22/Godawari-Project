import React from "react";
import style from "../ReportsComponents/Styles/TopImage.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
function TopImage() {
  return (
    <section>
      {" "}
      <div className={`contaner-fluid ${style.ecosystem}`}>
        <div className={`${style.visionariHeading}`}>
          <p className={`mx-auto ${style.p1}`}>Quarterly Reports</p>
        </div>
        <div className={style.topImageButton}>
          <button>
            Annual Reports
            <span className={style.arrow}>
              <FaArrowRightLong />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default TopImage;
