import React from 'react';
import style from "./Styles/womenempimages.module.css";

const data = [
    {
        title: "Stitching & Tailoring Centers",
        image: "https://i.postimg.cc/d3Yt73Kt/image-4.png",
        points: [
            "Established vocational training centers to equip women with stitching and tailoring skills.",
            "Operating in rural and tribal areas to ensure access for marginalized communities.",
            "Helps women gain financial independence by creating self-employment opportunities."
        ],
        reverse: false
    },
    {
        title: "Usha Silai School Partnership",
        image: "https://i.postimg.cc/Zn44bQrW/image-5.png",
        points: [
            "In collaboration with Usha Social Services (USS), GPIL supports the Usha Silai School Program—a nationwide initiative empowering women through sewing-based training.",
            "Provides women in remote villages and hamlets with skills for self-employment.",
            "Encourages entrepreneurship by developing village-level enterprises.",
            "Strengthens networks for economic sustainability and self-reliance.",
           
        ],
        reverse: true
    },
    {
        title: "Income Generation & Enterprise Development",
        image: "https://i.postimg.cc/tJqGQxjP/image-6.png",
        points: [
            "Promotes sustainable livelihoods through skill-based employment opportunities.",
            "Facilitates networking and collaboration among women entrepreneurs.",
            "Encourages economic independence and long-term financial stability.",
        ],
        reverse: false
    }
];

const WomenEmpImages = () => {
    return (
        <section className={style.womenfacilitiesSection}>
        <div className="container-fluid">
          {data.map((item, rowIndex) => (
            <div key={rowIndex} className={`row ${item.reverse ? "flex-wrap-reverse" : ""}`}>
              <div
                className="col-md-6 m-0 p-0"
                data-aos="fade-up"
                data-aos-delay={`${rowIndex * 200}`} // 200ms delay for each row
              >
                {!item.reverse && (
                  <img src={item.image} alt="img" className={`img-fluid ${style.womenImages}`} />
                )}
                {item.reverse && (
                  <div className={style.school}>
                    <div className={style.textSection}>
                      <h5 className={style.facilitiesheadings}>{item.title}</h5>
                      <ul>
                        {item.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="col-md-6 m-0 p-0"
                data-aos="fade-up"
                data-aos-delay={`${rowIndex * 200 + 100}`} // Slight delay for second column
              >
                {item.reverse && (
                  <img src={item.image} alt="img" className={`img-fluid ${style.womenImages}`} />
                )}
                {!item.reverse && (
                  <div className={style.school}>
                    <div className={style.textSection}>
                      <h5 className={style.facilitiesheadings}>{item.title}</h5>
                      <ul>
                        {item.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      
    );
};

export default WomenEmpImages;
