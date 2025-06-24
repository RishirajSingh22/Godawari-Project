import style from "../AboutComponents/styles/bannerTwo.module.css"

function BannerTwo() {
  return (
    <section className={style.bannerTwOSection}>
        <div className="container">
            <div className={` ${style.bannerTwoContent}`} data-aos="fade-up">
                <h3 data-aos="fade-up">Godawari Power & Ispat Limited</h3>
                <span>Shaping Steel, Building Futures</span>
                <p>Godawari Power & Ispat Limited (GPIL) stands as a pioneer in India’s secondary steel  manufacturing sector, with a legacy built on resilience, innovation and sustainability. From mining  iron ore to producing high-quality steel, GPIL’s vertically integrated operations reflect precision  and excellence across its value chain.</p>
                <p>
                As GPIL enters its next phase of growth, it remains committed with a strategic focus on  sustainability and aligning its operations with emerging global standards. </p>
            </div>
        </div>
    </section>
  )
}

export default BannerTwo