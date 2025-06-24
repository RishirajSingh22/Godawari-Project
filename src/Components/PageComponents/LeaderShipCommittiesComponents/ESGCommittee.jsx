import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { FaLinkedin } from 'react-icons/fa';
import style from "../LeaderShipCommittiesComponents/Styles/LeaderShipCommitties.module.css"; // Your custom styles
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

const ESGCommitties = () => {
  const EsgCommittee = [
    {
      img: "https://i.ibb.co/S4bW7Mg9/Card.png",
      name: "Shri Sunil Duggal",
      position: "Independent Director"
    },
    {
      img: "https://i.ibb.co/rRHWsVMK/Card.png",
      name: "Shri Hukum Chand Daga",
      position: "Independent Director"
    },
    {
      img: "https://i.ibb.co/VWY1hDYb/Card.png",
      name: "Smt. Roma Ashok Balwani",
      position: "Women Independent Director"
    },
    {
      img: "https://i.ibb.co/RGLD76Pf/Card.png",
      name: "Shri Abhishek Agrawal",
      position: "Whole Time Director"
    }
  ];
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    nextArrow: <MdOutlineArrowForwardIos />,
    prevArrow: <MdOutlineArrowBackIos />
  };

  return (
    <>
      <section className={style.auditCommittee}>
        <div className='container'>
          <div className="text-center  mt-5">
            <p className={`${style.auditCommitteeheading}`}>ESG Committee</p>
          </div>
          <div>

            {isMobile ? (
              <div className='row d-flex justify-content-center'>
                <Slider {...settings}>
                  {EsgCommittee.map((esgcommittee, index) => (
                    <div key={index} className='col-md-3 p-5' >
                      <div className={` ${style.audit1Detailscontainer}`}>
                        <div className={`text-center  ${style.imagebox}`}>
                          <img src={esgcommittee.img} alt={esgcommittee.name} className={` ${style.auditImages}`} />
                        </div>
                        <div className='pt-4 text-center '>
                          <p className={`mb-0 ${style.directorName}`}>{esgcommittee.name}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            ) : (
              <div className='row d-flex justify-content-center'>
                {EsgCommittee.map((esgcommittee, index) => (
                  <div key={index} className='col-md-3 gap-5' >
                    <div className={` ${style.audit1Detailscontainer}`}>
                      <div className={`text-center ${style.imagebox1}`}>
                        <img src={esgcommittee.img} alt={esgcommittee.name} className={`${style.auditImages}`} />
                      </div>
                      <div className='pt-4 text-center '>
                        <p className={`mb-0 ${style.directorName}`}>{esgcommittee.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </section>
    </>
  );
}
export default ESGCommitties;



