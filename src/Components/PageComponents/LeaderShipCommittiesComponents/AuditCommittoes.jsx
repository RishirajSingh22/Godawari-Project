import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { FaLinkedin } from 'react-icons/fa';
import style from "../LeaderShipCommittiesComponents/Styles/LeaderShipCommitties.module.css"; // Your custom styles
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

const AuditCommittoes = () => {
  const AuditCommittee = [
    {
      img: "https://i.ibb.co/rRHWsVMK/Card.png",
      name: "Shri Hukum Chand Daga",
      position: "Independent Director"
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
            <p className={`${style.auditCommitteeheading}`}>Audit </p>
          </div>
          <div>
            
          {isMobile ? (
              <div className='row d-flex justify-content-center'>
                <Slider {...settings}>
                  {AuditCommittee.map((auditcommittee, index) => (
                    <div key={index} className='col-md-3' >
                      <div className={` ${style.audit1Detailscontainer}`}>
                        <div className={`text-center  ${style.imagebox}`}>
                          <img src={auditcommittee.img} alt={auditcommittee.name} className={` ${style.auditImages}`} />
                        </div>
                        <div className='pt-4 text-center '>
                          <p className={`mb-0 ${style.directorName}`}>{auditcommittee.name}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            ) : (
              <div className='row d-flex justify-content-center'>
                {AuditCommittee.map((auditcommittee, index) => (
                  <div key={index} className='col-md-3' >
                    <div className={` ${style.audit1Detailscontainer}`}>
                      <div className={`text-center ${style.imagebox1}`}>
                        <img src={auditcommittee.img} alt={auditcommittee.name} className={`${style.auditImages}`} />
                      </div>
                      <div className='pt-4 text-center '>
                        <p className={`mb-0 ${style.directorName}`}>{auditcommittee.name}</p>
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
export default AuditCommittoes;



