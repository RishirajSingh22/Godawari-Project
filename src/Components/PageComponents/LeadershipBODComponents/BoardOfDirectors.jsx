import React, { useState } from 'react';
import style from "../LeadershipBODComponents/Styles/BoardOfDirectors.module.css";
import { FaLinkedin } from "react-icons/fa";
import AuditCommittoes from '../LeaderShipCommittiesComponents/AuditCommittoes';
import CSRCommitties from '../LeaderShipCommittiesComponents/CSRCommitties';
import ESGCommitties from '../LeaderShipCommittiesComponents/ESGCommittee';
import NominationCommitties from '../LeaderShipCommittiesComponents/NominationCommittes';
import RealationshipCommitties from '../LeaderShipCommittiesComponents/RealationShipCommitties';
import RiskManageMentCommitties from '../LeaderShipCommittiesComponents/RiskManageMentCommitties';

const BoardOfDirectors = () => {
  const [activeTab, setActiveTab] = useState("directors");

  const DirectorsDetails = [
    {
      img: "https://i.ibb.co/dJtsn4SY/Image-Placeholder.png",
      name: "B.L. Agarawal",
      position: "Chairman & Managing Director"
    },
    {
      img: "https://i.ibb.co/s95mBJMN/Card.png",
      name: "Dinesh Agrawal",
      position: "Whole Time Director"
    },
    {
      img: "https://i.ibb.co/RGLD76Pf/Card.png",
      name: "Abhishek Agrawal",
      position: "Whole Time Director"
    },
    {
      img: "https://i.ibb.co/zTpxyH2b/Card.png",
      name: "Sidhharth Agrawal",
      position: "Whole Time Director"
    },
    {
      img: "https://i.ibb.co/P2YxQsG/Card.png",
      name: "Dinesh Gandhi",
      position: "Whole Time Director"
    },
    {
      img: "https://i.ibb.co/LzcWgmQG/Card.png",
      name: "Mr. Vinod Pillai",
      position: "Non-Executive Director"
    },
    {
      img: "https://i.ibb.co/9HGc14yz/Card.png",
      name: "Mr. Samir Agarawal",
      position: "Independent Director"
    },
    {
      img: "https://i.ibb.co/TpR6FpC/Card.png",
      name: "Mr. Raj Kamal Bindal",
      position: "Independent Director"
    },
    {
      img: "https://i.ibb.co/S4bW7Mg9/Card.png",
      name: "Mr. Sunil Duggal",
      position: "Independent Director"
    },
    {
      img: "https://i.ibb.co/VWY1hDYb/Card.png",
      name: "Mrs. Roma Ashok Balwani",
      position: "Women Independent Director"
    },
    {
      img: "https://i.ibb.co/rRHWsVMK/Card.png",
      name: "Mr. Hukum Chand Daga",
      position: "Independent Director"
    },
    {
      img: "https://i.ibb.co/fz47FgqN/Image-Placeholder.png",
      name: "Mrs. Neha Huddar",
      position: "Women Independent Director"
    }
  ];

  return (
    <section className={`${style.BoardOfDirectorssection}`}>
      <div className="container">
          {/* <p className={` ${style.p1}`}> Visionaries Leading Excellence</p> */}
          <p className={`text-center pt-5 ${style.p2}`}>At the helm of GPIL is a visionary leadership team that drives its mission of operational excellence and sustainable growth. Their strategic foresight ensures GPIL stays ahead in a competitive industry, balancing innovation with responsible practices.</p>



        <div  className={`text-center pt-5 mb-5 ${style.leaderButtons}`}>
          <button
            className={`btn ${style.bodbutton} ${activeTab === "directors" ? style.activeButton : ""}`}
            onClick={() => setActiveTab("directors")}
          >
            Board Of Directors
          </button>
          <button
            className={`btn ${style.commitiesbutton} ${activeTab === "committees" ? style.activeButton : ""}`}
            onClick={() => setActiveTab("committees")}
          >
            Internal Committees
          </button>
        </div>

        {activeTab === "directors" ? (
        <div className='container'>

          <div className='row'>
            {DirectorsDetails.map((person, index) => (
              <div key={index} className={`col-md-4 col-sm-6 col-12 p-4 text-sm-center ${style.directorImagesBox1}`}>
                <div className={`${style.directorImagesBox}`}>
                <div><img src={person.img} alt={person.name} className={`rounded-top img-fluid ${style.directorImages}`} /></div>
                <div className='d-flex justify-content-between  py-3'>
                  <div className='text-start ps-3 '>
                    <p className={` ${style.directorName}`}>{person.name}</p>
                    <p className={` ${style.directorpossition}`}>{person.position}</p>
                  </div>
                  <p className='pe-3'><FaLinkedin className={`${style.linkdenicons}`} /></p>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        ) : (
          <>
            <AuditCommittoes />
            <NominationCommitties />
            <CSRCommitties />
            <RiskManageMentCommitties />
            <RealationshipCommitties />
            <ESGCommitties />
          </>
        )}
      </div>
    </section>
  );
}

export default BoardOfDirectors;

