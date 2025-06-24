import React from "react";
import style from "../ComunityOverviewComponents/Styles/ImageTextImage.module.css";
import { Link } from "react-router-dom";

const data = [
  {
    title: "Empowering Dreams Through",
    heading: "Education & Skill Development",
    text: "Our initiatives focus on positively impacting communities by actively enhancing educational outcomes, expanding access to education, and elevating quality. We achieve this by empowering individuals through targeted upskilling in Technical Literacy, Digital Literacy, Confidence-Building, and Elementary English.",
    image: "https://i.postimg.cc/zGQwQNjJ/image-1.png",
    link: "/communityeducation",
    reverse: false,
  },
  {
    title: "Healing Communities With",
    heading: "Healthcare",
    text: "We focus on implementing initiatives that tackle health determinants like nutrition and hygiene to improve health outcomes. Our goal is to enhance healthcare access and provide essential support to healthcare services.",
    image: "https://i.postimg.cc/VNCssnbb/image-3.png",
    link: "/healthcare",
    reverse: true,
  },
  {
    title: "Building Foundations for Growth With",
    heading: "Infrastructure",
    text: "To enhance the quality of life for extended communities, we have been actively upgrading infrastructure and implementing impactful measures.",
    image: "https://i.postimg.cc/QCxr7TVm/image-4.png",
    link: "/infrastructure",
    reverse: false,
  },
  {
    title: "Transforming Lives With",
    heading: "Community Welfare",
    text: "We have been actively organising local community engagements to strengthen and enhance social support, promote mental well-being, and deepen our understanding of the challenges and opportunities that our community faces.",
    image: "https://i.postimg.cc/zfCmPjgp/image-5.png",
    link: "/welfare",
    reverse: true,
  },
  {
    title: "The Core of Our Operations",
    heading: "Environment",
    text: "We can only grow in a competitive environment by addressing economic, social, and environmental concerns with a focused approach. To become environmentally friendly at all levels, we have established greenbelt areas at all of our plant locations.",
    image: "https://i.postimg.cc/BQXrGsFj/image-6.png",
    link: "/comunityEnviroment",
    reverse: false,
  },
  {
    title: "Inspiring Excellence Through",
    heading: "Sports",
    text: "Leveraging the universal language of sports, our initiatives aim at breaking down barriers, empowering individuals, catalysing positive change at the grassroots level, and fostering inclusive communities.",
    image: "https://i.postimg.cc/PJcFqpDP/image-7.png",
    link: "/sports",
    reverse: true,
  },
  {
    title: "Building a Future of Equality &",
    heading: "Opportunity for Women",
    text: "We are committed to fostering inclusive growth by empowering women with the skills and opportunities needed to achieve financial independence and self-reliance.",
    image: "https://i.postimg.cc/qRD1mhjj/image-8.png",
    link: "/womenemporment",
    reverse: false,
  },
];

function ImageTextComponent() {
  return (
    <section className={style.facilitiesSection}>
    <div className="container-fluid">
      {data.map((item, index) => (
        <div
          className={`row ${item.reverse ? "flex-wrap-reverse" : ""}`}
          key={index}
        >
          {item.reverse ? (
            <>
              <div className="col-md-6 m-0 p-0" data-aos="fade-up" data-aos-delay="100">
                <img src={item.image} alt="img" className={style.Images} />
              </div>
              <div className="col-md-6 m-0 p-0" data-aos="fade-up" data-aos-delay="300">
                <div className={style.school}>
                  <div className={style.textSection} style={{ textAlign: "end" }}>
                    <h5>{item.title}</h5>
                    <p className={style.headings}>{item.heading}</p>
                    <ul>
                      <li className={style.listText}>{item.text}</li>
                      <Link to={item.link}>
                        <button className={style.FourImageButton}>Know more →</button>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-md-6 m-0 p-0" data-aos="fade-up" data-aos-delay="100">
                <div className={style.school}>
                  <div className={style.textSection}>
                    <h5>{item.title}</h5>
                    <h2 className={style.headings}>{item.heading}</h2>
                    <ul>
                      <li className={style.listText}>{item.text}</li>
                      <Link to={item.link}>
                        <button className={style.FourImageButton}>Know more →</button>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 m-0 p-0" data-aos="fade-up" data-aos-delay="300">
                <img src={item.image} alt="img" className={style.Images} />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  </section>
  
  );
}

export default ImageTextComponent;
