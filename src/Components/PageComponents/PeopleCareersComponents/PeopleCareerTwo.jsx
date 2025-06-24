import React from 'react';
import style from "../PeopleCareersComponents/Styles/PeopleCareerTwo.module.css";

const PeopleCareerTwo = () => {
    return (
        <>
            <section className={`${style.peopleCareerSection1}`} >        
                <p className={` ${style.section2heading}`}>Be a Part of GPILs Vision</p>     
            </section>

            <section className={`mt-0 ${style.peopleCareerSection2}`}>
                <div className='container py-5'>
                    <div className={`text-center   `}>
                        {/* <p className={`${style.section2heading}`}>Be a Part of GPILs Vision</p> */}
                        <div className='px-5 mt-4'>
                            <p>Steel is the backbone of progress — and our people are the strength behind it.</p>
                            <p >We're always on the lookout for individuals who are passionate about building a better tomorrow through innovation, hard work and commitment.</p>
                        </div>
                        <div className={`mt-5 ${style.joinusdiv}`}>
                            <p>Interested in joining us?
                                <br />
                                Send your resume to <a href="/">career@godawaripower.com</a> <br />
                                We'll be in touch if there's a match!
                            </p>
                        </div>
                    </div>
                </div>

            </section>



        </>

    )
}

export default PeopleCareerTwo