import React from 'react';
import style from "../SpongeComponent/Styles/"

const ContactUsSection2= () => {
    return (
        <>
            <section className={style.backgroung}>
                <div className='container'>
                    <div className={style.backgroungImage}>
                        <div className='row'>
                            <div className='col-md-6 p-5'>
                                <h6 className={`${style.contactus}`}> Contct Us </h6>
                                <h5 className={`${style.feedback}`}>Get a Query or
                                Feedback?</h5>
                                <p >Please fill the form or send us an email at</p>

                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUsSection2