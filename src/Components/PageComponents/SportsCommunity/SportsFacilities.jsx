import React from 'react'
import style from "./Styles/sportsfacilities.module.css"

const SportsFacilities = () => {
    const data = [
        {
            title: "Distributing Sports Equipment",
            image: "https://i.postimg.cc/tgfvXVGw/image-7.png",
            description:"Enabling access to sports by providing equipment & accessories to underserved players & students",        
            reverse: false
        },
        {
            title: "Organizing Local Tournaments",
            image: "https://i.postimg.cc/Wpm8yyzQ/image-9.png",
            description:"Organizing and supporting Cricket, Football, and Badminton tournaments to encourage active participation and team-building.",        

         
            reverse: true
        },
        {
            title: "Supporting Aspiring Athletes",
            image: "https://i.postimg.cc/FsdRRMS6/image-10.png",
            description:"Offering financial aid and training support to athletes in Boxing, Fencing, Tennikoit, Mountaineering, and Wrestling, helping them excel in their respective fields.",        
            reverse: false
        },
        {
            title: "Milaap Tournament",
            image: "https://i.postimg.cc/wMzCpshH/image-11.png",
            description:"Facilitating a community-driven sports event that brings local youth together through friendly competition, fostering camaraderie, and promoting cricket as a unifying platform.",        
            reverse: true
        }
    ];
    return (
        <section className={style.womenfacilitiesSection}>
            <div className='container-fluid'>
                {data.map((item, index) => (
                    <div key={index} className={`row ${item.reverse ? 'flex-wrap-reverse' : ''}`}>
                        <div className='col-md-6 m-0 p-0'>
                            {!item.reverse && <img src={item.image} alt="img" className={`img-fluid ${style.sportsImages}`} />}
                            {item.reverse && (
                                <div className={style.sportsContent}>
                                    <div className={style.textSection}>
                                        <h5 className={style.sportfacilities}>{item.title}</h5>
                                        <p className={style.sportfacilitidescription}>{item.description}</p>                                      
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className='col-md-6 m-0 p-0'>
                            {item.reverse && <img src={item.image} alt="img" className={`img-fluid ${style.womenImages}`} />}
                            {!item.reverse && (
                                <div className={style.sportsContent}>
                                    <div className={style.textSection}>
                                        <h5 className={style.sportfacilities}>{item.title}</h5>
                                        <p className={style.sportfacilitidescription}>{item.description}</p>             
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SportsFacilities