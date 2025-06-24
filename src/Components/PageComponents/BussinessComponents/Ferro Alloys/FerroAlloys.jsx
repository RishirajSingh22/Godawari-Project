import styles from "./styles/FerroAlloys.module.css";
export default function FerroAlloys() {
  return (
    <section className={styles.energyPage}>
      <div className="container">

        <div className={styles.headerSection}>
          <p className={styles.headerText}>
            Godawari Power & Ispat Limited (GPIL) is a trusted producer of
            ferroalloys, essential for strengthening and refining steel. With
            advanced facilities and a commitment to sustainable manufacturing,
            GPIL delivers high-quality silico manganese that meets the rigorous
            demands of the steel industry.
          </p>
        </div>
        <div className="container">

        <div className="row py-5">
          <div className="col-md-6 p-0">
            <div className={styles.energyImage}>
              <img
                src="https://i.ibb.co/xKSpZytj/steel-manufacturing-molten-jpg.png"
                alt="Cooling Towers"
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
          <div className="col-md-6 p-0">
            <div className={`p-5  ${styles.energyStatsRow1}`}>
              <img
                className={styles.energyIcon}
                size={48}
                src="https://i.ibb.co/xqHqYGJM/Group-1.png"
                alt=""
              />
              <div className={styles.statValueRow1}>16500 TPA</div>
              <div className={styles.statLabel}>Ferro Alloys Plant Capacity</div>
            </div>
          </div>

        </div>
        <div className="row py-5">
          <div className="col-md-6 p-0">
            <div className={`p-5 text-start ${styles.energyStats}`}>
              <div className={`p-2 ${styles.statValue}`}>Silico Manganese</div>
              <ul className="pt-4">
                <li>
                  Enhances steel’s strength, ductility, and resistance to
                  corrosion
                </li>
                <li className="mt-3">
                  Widely used in the its production of structural and alloy steels .
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 p-0">

            <div className={styles.energyImage}>
              <img
                src="https://i.ibb.co/bg3bmVL3/silico-manganese-banner.png"

                alt="Cooling Towers"
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 p-0">
            <div className={styles.energyImage}>
              <img
                src="https://i.ibb.co/tT1GMdBx/image-20.png"
                alt="Cooling Towers"
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
          <div className="col-md-6 p-0">
            <div className={`p-5 text-start ${styles.energyStats}`}>
              <div className={`p-2 ${styles.statValue}`}>Applications</div>
              <ul className="pt-4">
                <li>
                  Used in steel melting shops for a like refining steel properties .
                </li>
                <li className="mt-3">
                  Integral to industries like construction, automotive, and heavy engineering
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>


      </div>

    </section>
  );
}
