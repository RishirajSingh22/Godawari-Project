import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { FaLinkedin } from 'react-icons/fa';
import style from "../LeaderShipCommittiesComponents/Styles/LeaderShipCommitties.module.css";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

const NominationCommitties = () => {
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const NomCommittee = [
    {
      img: "https://i.ibb.co/VWY1hDYb/Card.png",
      name: "Smt. Roma Ashok Balwani",
      position: "Women Independent Director"
    },
    {
      img: "https://i.ibb.co/fz47FgqN/Image-Placeholder.png",
      name: "Smt. Neha Sunil Huddar",
      position: "Women Independent Director"
    },
    {
      img: "https://i.ibb.co/9HGc14yz/Card.png",
      name: "Shri Samir Agarawal",
      position: "Independent Director"
    },
    {
      img: "https://i.ibb.co/TpR6FpC/Card.png",
      name: "Shri Raj Kamal Bindal",
      position: "Independent Director"
    },
  ];


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
    <section className={style.auditCommittee}>
      <div className="text-center mt-5">
        <p className={style.auditCommitteeheading}>Nominations & Renumerations</p>
      </div>
      <div className='container'>

        <div className={style.cardBody1}>
          <div className={style.auditDetailscontainer1}>


            {isMobile ? (
              <div className='row d-flex justify-content-center'>
                <Slider {...settings}>
                  {NomCommittee.map((nomcommittee, index) => (
                    <div key={index} className='col-md-3' >
                      <div className={` ${style.audit1Detailscontainer}`}>
                        <div className={`text-center  ${style.imagebox}`}>
                          <img src={nomcommittee.img} alt={nomcommittee.name} className={` ${style.auditImages}`} />
                        </div>
                        <div className='pt-4 text-center '>
                          <p className={`mb-0 ${style.directorName}`}>{nomcommittee.name}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            ) : (
              <div className='row d-flex justify-content-center'>
                {NomCommittee.map((nomcommittee, index) => (
                  <div key={index} className='col-md-3' >
                    <div className={` ${style.audit1Detailscontainer}`}>
                      <div className={`text-center ${style.imagebox1}`}>
                        <img src={nomcommittee.img} alt={nomcommittee.name} className={`${style.auditImages}`} />
                      </div>
                      <div className='pt-4 text-center '>
                        <p className={`mb-0 ${style.directorName}`}>{nomcommittee.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NominationCommitties;
