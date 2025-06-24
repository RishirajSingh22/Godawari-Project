import React from "react";
import style from "../FinancialOverViewComponent/Styles/imageComponent.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
function ImageComponent() {
  return (

    <div className="container">

      <div className={style.ImageComponent}>
        <div className={`${style.image1} ${style.container}`}>
          <img src="https://i.ibb.co/qMY2ndK2/bg1.jpg" alt="image"></img>
          <div className={style.text}>
            <p className={style.date}>March 20, 2024</p>
            <p>
              Uniformly ground iron ore fines are processed for upgradation
              through Beneficiation...
            </p>
            <button>
              Know more
              <span className={style.arrow}>
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        </div>
        <div className={`${style.image2} ${style.container}`}>
          <img src="https://i.ibb.co/whJFpQvh/87175d6116bf028afb7975204290a6e9387b5ab9.jpg" alt="image"></img>
          <div className={style.text}>
            <p className={style.date}>March 20, 2024</p>
            <p>
              Uniformly ground iron ore fines are processed for upgradation
              through Beneficiation...
            </p>
            <button>
              Know more
              <span className={style.arrow}>
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        </div>
        <div className={`${style.image3} ${style.container}`}>
          <img src="https://i.ibb.co/fzCLHChn/e58641b42c11dc3eded5cbf27d45bbc25dd2425b.jpg" alt="image"></img>
          <div className={style.text}>
            <p className={style.date}>March 20, 2024</p>
            <p>
              Uniformly ground iron ore fines are processed for upgradation
              through Beneficiation...
            </p>
            <button>
              Know more 
              <span className={style.arrow}>
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageComponent;
