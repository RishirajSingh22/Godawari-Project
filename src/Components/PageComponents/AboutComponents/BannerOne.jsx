import style from "../AboutComponents/styles/bannerOne.module.css";
import "aos/dist/aos.css";
function BannerOne() {
  return (
    <>
      <div className={` ${style.videocontainer}`}>
        <video autoPlay muted className={` ${style.backgroundvideo}`}>
          <source
            src="https://media.istockphoto.com/id/1479135181/video/firework-with-audio.mp4?s=mp4-640x640-is&k=20&c=m_PN_5lsIh1oVrWz_siAQyMGOcbwRr9Kuv_JsHRw5x0="
            type="video/mp4"
          />
        </video>
        <div className={` ${style.content}`}></div>
      </div>
    </>
  );
}

export default BannerOne;
