import React from "react";
import style from  "../SpongeComponent/Styles/SpongeCapacity.module.css";

const SpongeCapacity = () => {
  return (
    <div >
      <div className='py-5' >
        <div className='position-relative'>
          <img src="https://i.ibb.co/gLfPtvVt/Group-15756-4.png"  alt="" className={style.snapshotImage} />
          <h5 className={style.snapshotHeading}>Capacity Snapshot</h5>
        </div>
        <div className={` ${style.snapContent}`}>
        <div className="d-flex justify-content-around text-start">
            <p className={style.underlineptextleft}>Current Capacity</p>
            <p className={style.underlineptextright}>0.594 MTPA</p>
          </div>
          <hr className={` mx-auto pt-0 border-dark ${style.underlinehr}`} />
          <div className="d-flex justify-content-around">
            <p className={`text-start ${style.underlineptextleft}`}>Utilisation Level</p>
            <p className={style.underlineptextright}>100%</p>
          </div>
        
        </div>
      </div>
    </div>

  );
};

export default SpongeCapacity;
