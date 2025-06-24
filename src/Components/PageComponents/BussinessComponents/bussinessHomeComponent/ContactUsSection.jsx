import React from "react";
import style from "./Styles/ContactUsSection.module.css";
import { TfiEmail } from "react-icons/tfi";
import { MdHorizontalRule } from "react-icons/md";

const ContactUsSection = () => {
  return (
    <>
      <section className={style.backgroung}>
        <div className='container'>
          <div className={style.backgroungImage}>
            <div className='row'>

              <div className="col-md-6 col-12 p-md-5 p-4 text-center text-md-start">
                <h6 className={`pt-3 ${style.contactus}`}>
                  Contact Us <MdHorizontalRule />
                </h6>
                <h5 className={`pt-3 ${style.feedback}`}>
                  Got a Query or <br /> Feedback?
                </h5>
                <p className={`pt-3 ${style.error}`}>
                  Please fill the form or send us an email at
                </p>
                <a href="mailto:sales@gpil.com" className={style.email}>
                  <TfiEmail /> <span>sales@gpil.com</span>
                </a>
              </div>


              <div className="col-md-6 col-12 p-md-5 p-4">
                <form className="p-3">
                  <div className="row g-3">

                    <div className="col-md-6 col-12">
                      <input type="text" className="form-control" placeholder="Full Name*" required />
                    </div>
                    <div className="col-md-6 col-12">
                      <input type="text" className="form-control" placeholder="Company*" required />
                    </div>


                    <div className="col-md-6 col-12">
                      <input type="email" className="form-control" placeholder="Enter your email*" required />
                    </div>
                    <div className="col-md-6 col-12">
                      <input type="tel" className="form-control" placeholder="Mobile Number*" required />
                    </div>


                    <div className="col-md-6 col-12">
                      <input type="text" className="form-control" placeholder="Country*" required />
                    </div>
                    <div className="col-md-6 col-12">
                      <input type="text" className="form-control" placeholder="City*" required />
                    </div>


                    <div className="col-12">
                      <textarea className="form-control" placeholder="Description*" required rows="3"></textarea>
                    </div>
                  </div>

                  <div className="mt-4  text-md-end">
                    <button type="submit" className={style.sendBtn}>Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsSection;
