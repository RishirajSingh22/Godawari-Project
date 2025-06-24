import { Link } from "react-router-dom";
import style from "../AboutComponents/styles/visinories.module.css"
import { FaArrowRightLong } from "react-icons/fa6";
function Visinories() {
  return (
    <section className={style.visinoriesSection}>
      <div className="container">
        <div className={` ${style.visinoriesContent}`} data-aos="fade-up">
          <h3> Visionaries Leading Excellence</h3>
          <p>At the helm of GPIL is a visionary leadership team that drives its mission of operational excellence and sustainable growth. Their strategic foresight ensures GPIL stays ahead in a competitive industry, balancing innovation with responsible practices.</p>
          <Link to={"/leadershipBdo"}>
            <button className={style.knowmoreBtn}>
              Know more
              <FaArrowRightLong />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Visinories