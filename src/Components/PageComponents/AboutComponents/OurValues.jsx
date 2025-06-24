import style from "../AboutComponents/styles/ourValue.module.css";
import { HiBadgeCheck } from "react-icons/hi";
import { RiChatAiFill } from "react-icons/ri";
import { FaBalanceScaleRight } from "react-icons/fa";
import { IoIosBusiness } from "react-icons/io";

import 'animate.css';



function OurValues() {
  return (
    <section className={style.ourValueSection}>
      <div className="container">
        <div className={style.ourValueContent}>
          <h3 data-aos="fade-up" >Our Values</h3>
          <div className="row wow animate__animated animate__fadeInLeft">
            <div className="col-sm-3" data-aos="fade-up" data-aos-delay="100">
              <div className={style.ourValueIcons}><HiBadgeCheck /></div>
              <strong>Quality</strong>
            </div>
            <div className="col-sm-3" data-aos="fade-up" data-aos-delay="200">
              <div className={style.ourValueIcons}><RiChatAiFill /></div>
              <strong>Customer Focus</strong>
            </div>
            <div className="col-sm-3" data-aos="fade-up" data-aos-delay="300">
              <div className={style.ourValueIcons}><FaBalanceScaleRight /></div>
              <strong>Integrity & Ethics</strong>
            </div>
            <div className="col-sm-3" data-aos="fade-up" data-aos-delay="400">
              <div className={style.ourValueIcons}><IoIosBusiness /></div>
              <strong>Corporate Social Responsbility</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurValues;
