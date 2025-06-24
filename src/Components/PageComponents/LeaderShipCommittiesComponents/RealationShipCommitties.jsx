







import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { FaLinkedin } from 'react-icons/fa';
import style from "../LeaderShipCommittiesComponents/Styles/LeaderShipCommitties.module.css"; // Your custom styles
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

const RealationshipCommitties = () => {
  const RealationshipCommittee = [
    {
        img: "https://i.ibb.co/fz47FgqN/Image-Placeholder.png" ,
        name: "Smt. Neha Huddar",
        position: "Women Independent Director"
      },
    {
        img: "https://i.ibb.co/P2YxQsG/Card.png",
        name: "Shri Dinesh Gandhi",
        position: "Whole Time Director"
      },
    {
        img: "https://i.ibb.co/9HGc14yz/Card.png",
        name: "Shri Samir Agarawal",
        position: "Independent Director"
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
            <p className={`${style.auditCommitteeheading}`}>Stakeholders Relationships</p>
          </div>
          <div>
            
          {isMobile ? (
              <div className='row d-flex justify-content-center'>
                <Slider {...settings}>
                  {RealationshipCommittee.map((realationshipcommittee, index) => (
                    <div key={index} className='col-md-3' >
                      <div className={` ${style.audit1Detailscontainer}`}>
                        <div className={`text-center  ${style.imagebox}`}>
                          <img src={realationshipcommittee.img} alt={realationshipcommittee.name} className={` ${style.auditImages}`} />
                        </div>
                        <div className='pt-4 text-center '>
                          <p className={`mb-0 ${style.directorName}`}>{realationshipcommittee.name}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            ) : (
              <div className='row d-flex justify-content-center'>
                {RealationshipCommittee.map((realationshipcommittee, index) => (
                  <div key={index} className='col-md-3' >
                    <div className={` ${style.audit1Detailscontainer}`}>
                      <div className={`text-center ${style.imagebox1}`}>
                        <img src={realationshipcommittee.img} alt={realationshipcommittee.name} className={`${style.auditImages}`} />
                      </div>
                      <div className='pt-4 text-center '>
                        <p className={`mb-0 ${style.directorName}`}>{realationshipcommittee.name}</p>
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
export default RealationshipCommitties;



