import React from "react";
import style from "../ComunityEnviromentComponents/Styles/ImageComponent.module.css";
import TextBanner from "./TextBanner";

function ImageComponent() {
  return (
    <>
   <section className={style.facilitiesSection}>
  <TextBanner />
  <div className="container-fluid">
    {/* first row */}
    <div className="row">
      <div className="col-md-6 m-0 p-0" data-aos="fade-up" data-aos-delay="100">
        <img src="https://i.postimg.cc/RFstVrd2/image-1.png" alt="img" className={style.Images} />
      </div>
      <div className="col-md-6 m-0 p-0" data-aos="fade-up" data-aos-delay="300">
        <div className={style.school}>
          <div className={style.textSection}>
            <h5 className={style.headings}>
              OXYZONE
              <br />
              <span>A Massive Green Belt Initiative</span>
            </h5>
            <ul>
              <li>Developed and maintain OXYZONE, a 102-acre green belt in Siltara Industrial Area.</li>
              <li>Houses thousands of trees, creating a natural carbon sink to improve air quality and biodiversity.</li>
              <li>Helps in noise reduction and provides a green buffer around industrial activities.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* second row */}
    <div className="row flex-wrap-reverse">
      <div className="col-md-6 m-0 p-0" data-aos="fade-up" data-aos-delay="100">
        <div className={style.school}>
          <div className={style.textSection}>
            <h5 className={style.headings}>Water Conservation & Pond Development</h5>
            <ul>
              <li>Constructed a dedicated pond for storing groundwater and rainwater to irrigate OXYZONE efficiently.</li>
              <li>Undertaking pond digging and cleaning in rural areas to support better water conservation and recharge groundwater levels.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-6 m-0 p-0" data-aos="fade-up" data-aos-delay="300">
        <img src="https://i.postimg.cc/rsDrDhYs/image-2.png" alt="img" className={style.Images} />
      </div>
    </div>

    {/* third row */}
    <div className="row">
      <div className="col-md-6 m-0 p-0" data-aos="fade-up" data-aos-delay="100">
        <img src="https://i.postimg.cc/wxrNCp7m/image-4.png" alt="img" className={style.Images} />
      </div>
      <div className="col-md-6 m-0 p-0" data-aos="fade-up" data-aos-delay="300">
        <div className={style.school}>
          <div className={style.textSection}>
            <h5 className={style.headings}>Beautification & Green Landscaping</h5>
            <ul>
              <li>Maintaining gardens and plantations at Swami Vivekananda Airport, Raipur, enhancing the city's green cover.</li>
              <li>Conducting roadside plantation projects in both rural and urban areas to improve environmental aesthetics and air quality.</li>
              <li>Carrying out plantation and landscaping work in public spaces to create cleaner, greener surroundings.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* fourth row */}
    <div className="row flex-wrap-reverse">
      <div className="col-md-6 m-0 p-0" data-aos="fade-up" data-aos-delay="100">
        <div className={style.school}>
          <div className={style.textSection}>
            <h5 className={style.headings}>Greening Educational Campuses & Raising Awareness</h5>
            <ul>
              <li>Implementing tree plantation programs in schools and colleges to promote a greener environment in educational institutions.</li>
              <li>Conducting awareness programs to educate students about environmental conservation and sustainability.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-6 m-0 p-0" data-aos="fade-up" data-aos-delay="300">
        <img src="https://i.postimg.cc/rsDrDhYs/image-2.png" alt="img" className={style.Images} />
      </div>
    </div>
  </div>
</section>

    </>
  );
}

export default ImageComponent;
