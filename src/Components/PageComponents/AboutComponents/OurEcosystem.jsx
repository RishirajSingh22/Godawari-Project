import { Link } from "react-router-dom";
import style from "../AboutComponents/styles/ourEcosystem.module.css"
import { FaArrowRightLong } from "react-icons/fa6";
function OurEcosystem() {
  return (
    <section className={style.ecosystemSection}>
      <div className="container"  data-aos="fade-left"> 
        <div className={`wow animate__animated animate__backInLeft ${style.ourEcoContent}`}   >
          <h3>Our Ecosystem</h3>
          <p>Our strong network forms the core of Godawari Power & Ispat, enabling us to expand our capabilities, innovate sustainably and deliver long-term value across industries.</p>
          <Link to={"/Ecosystem"}>
          <button className={style.knowmoreBtnecosystem}>
            Know more
            <FaArrowRightLong className="ms-2" />
          </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default OurEcosystem