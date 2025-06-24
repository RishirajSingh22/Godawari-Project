import React from "react";
import style from "../bussinessHomeComponent/Styles/bannerSection2.module.css";

function BannerSection2() {
  return (
    <section className={style.mediaTellingSection}>
      <div className="container-fluid">
        <div data-aos="fade-up" data-aos-delay="100">
          <div className={style.imageLogoParent}>
            <img
              src="https://i.ibb.co/sJHgqndJ/25-2.png"
              alt=""
              className={style.imageLogo}
            />
          </div>
          <h6 className={style.yearTrust}>Years of Trust, Growth & Progress </h6>
        </div>

        <div className={style.mediatellingHeading} data-aos="fade-up" data-aos-delay="200">
          Godawari Power & Ispat Limited (GPIL) stands as a trailblazer in
          India’s secondary steel manufacturing sector, celebrating 25 years of
          resilience, innovation, and sustainable growth.
          <br />
          <br />
          As a vertically integrated player, GPIL transforms raw materials into
          high-quality products that power industries and infrastructure across
          the globe. Rooted in a strong legacy and guided by a vision for a
          sustainable future, GPIL continues to drive progress while balancing
          industrial growth with environmental responsibility.
        </div>
      </div>
    </section>
  );
}

export default BannerSection2;
