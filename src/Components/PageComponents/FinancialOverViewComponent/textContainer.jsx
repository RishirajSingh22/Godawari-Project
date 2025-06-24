import React from "react";
import style from "../FinancialOverViewComponent/Styles/textContainer.module.css";
import ImageComponent from "./imageComponent";
import { Link } from "react-router-dom";
function TextContainer() {
  return (
    <section className={style.sectionMediaTelling}>
      <div className="container">
        <div className={style.textParent}>
          <p className={style.text}>
            Godawari Power & Ispat Limited (GPIL) is a leading name in India's
            steel and energy sectors, driven by innovation, sustainability and
            operational excellence. With a vertically integrated business model,
            GPIL focuses on delivering superior value across the steel value
            chain, supported by robust financial performance, advanced
            technologies and a commitment to environmental responsibility.
          </p>
        </div>
        <p className={style.snapshot}> Performance Snapshot</p>

        <div className={style.revenueBox}>
          <ul>
            <li className={style.liPrice}>₹5,455 Cr</li>
            <li className={style.date}>(FY 2023-24)</li>
            <li>Total Revenue</li>
          </ul>
          <ul>
            <li className={style.liPrice}> ₹10,309.39 Cr</li>
            <li className={style.date}> (31.03.2024)</li>
            <li>Market Cap</li>
          </ul>
          <ul>
            <li className={style.liPrice}>CRISIL A1+</li>
            <li>Short Term</li>
          </ul>
          <ul>
            <li className={style.liPrice}>NSE</li>
            <li className={style.nseLi}>840.05</li>
            <li style={{ color: "red" }}>
              -4.50(-0.53 )
              <img src="https://i.ibb.co/b5VXHpN7/Vector.png" alt="Image" />
            </li>
          </ul>
          <ul>
            <li className={style.liPrice}>BSE</li>
            <li className={style.nseLi}>841.50</li>
            <li style={{ color: " rgba(113, 166, 0, 1)" }}>
              +3.60 (+0.43)
              <img src="https://i.ibb.co/7xd3K1Kc/2.png" />
            </li>
          </ul>
        </div>

        <div className={style.media}>
          <p>Media</p>
          <p> Telling Our Story</p>
        </div>
        <div className={style.investor}>
          <button>View All</button>
          <Link to={"/mediapublication"}><button>Publications</button></Link>
          <Link to={"/mediapublication"}><button>Press Releases</button></Link>
        </div>
        <ImageComponent />
        <div className={style.bottomText}>
          <p>Strength in Numbers</p>
          <p>
            Access detailed financial statements and performance metrics that
            highlight our operational excellence and sustainable growth.
          </p>
          <Link to={"/investormediafinancial"}>
            <button className="px-3">
              Know more
              <span className={style.arrow}>
                <img
                  src="https://i.ibb.co/yFfCschm/Arrow-Right.png"
                  alt="Arrow-Right"
                />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TextContainer;
