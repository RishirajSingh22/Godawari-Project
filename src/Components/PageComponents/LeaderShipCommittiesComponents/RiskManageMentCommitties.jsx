

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { FaLinkedin } from 'react-icons/fa';
import style from "../LeaderShipCommittiesComponents/Styles/LeaderShipCommitties.module.css";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

const RiskManageMentCommitties = () => {
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const RiskmanagementCommittee = [
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
      img:"https://i.ibb.co/RGLD76Pf/Card.png",
      name: "Shri Abhishek Agrawal",
      position: "Whole Time Director"
    },
    {
        img: "https://i.ibb.co/9HGc14yz/Card.png",
        name: "Shri Samir Agarawal",
        position: "Independent Director"
      },
 
    {
        img: "https://i.ibb.co/S4bW7Mg9/Card.png",
        name: "SHRI KVSKN RAVINDRA",
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
        <p className={style.auditCommitteeheading}>Risk Management </p>
      </div>
      <div className='container'>

        <div className={style.cardBody1}>
          <div className={style.auditDetailscontainer1}>


            {isMobile ? (
              <div className='row d-flex justify-content-center'>
                <Slider {...settings}>
                  {RiskmanagementCommittee.map((riskmanagementcommittee, index) => (
                    <div key={index} className='col-md-3' >
                      <div className={` ${style.audit1Detailscontainer}`}>
                        <div className={`text-center  ${style.imagebox}`}>
                          <img src={riskmanagementcommittee.img} alt={riskmanagementcommittee.name} className={` ${style.auditImages}`} />
                        </div>
                        <div className='pt-4 text-center '>
                          <p className={`mb-0 ${style.directorName}`}>{riskmanagementcommittee.name}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            ) : (
              <div className='row d-flex justify-content-center'>
                {RiskmanagementCommittee.map((riskmanagementcommittee, index) => (
                  <div key={index} className='col-md-4' >
                    <div className={` ${style.audit1Detailscontainer}`}>
                      <div className={`text-center ${style.imagebox1}`}>
                        <img src={riskmanagementcommittee.img} alt={riskmanagementcommittee.name} className={`${style.auditImages}`} />
                      </div>
                      <div className='pt-4 text-center '>
                        <p className={`mb-0 ${style.directorName}`}>{riskmanagementcommittee.name}</p>
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

export default RiskManageMentCommitties;
