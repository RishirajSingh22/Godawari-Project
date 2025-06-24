import React from "react";
import style from "./Styles/wireRods.module.css"
const WireRodsComponent = () => {
  return (
    <div className="container">
      <div className='py-5' >
        <div className='position-relative'>
          <img src="https://i.ibb.co/ychbbgHN/Group-15756-1.png" alt="" className={style.snapshotImage} />
          <h5 className={style.snapshotHeading}>Capacity Snapshot</h5>
        </div>
        <div className={style.snapContent}>
          <div className='d-flex justify-content-around'>
            <p className={style.underlineptextleft}>Rolling Mill Capacity</p>
            <p className={style.underlineptextright}>0.4 MTPA</p>
          </div>
        </div>
      </div>

      <div className='row g-0 pt-5'>
        <div className="col-md-6">
          <img
            src="https://i.ibb.co/yn0DKMpX/image-2.png"
            alt="Image"
            className={style.contentImages}
          />
        </div>

        <div className={`col-md-6 ${style.contentSection}`}>
          <div className="p-md-5 p-3 ">
            <h5 className={style.cardHeading}>Product Highlights</h5>
            {[
              {
                title: "High dimensional accuracy",
              },
              {
                title: "Designed to meet industry standards and applications",
              },
              {
                title: "Stringent quality testing",
              },
              {
                title: "Environmentally conscious",
              },
            ].map((item, index) => (


              <div className="d-flex gap-3 pt-4" key={index}>
                <img
                  src="https://i.ibb.co/XZpVtLyY/Line-38.png"
                  alt="Line"
                  className={style.line}
                />

                <div>
                  <h6> {item.title}</h6>
                </div>
              </div>

            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WireRodsComponent;
