import React, { useState } from 'react'
import style from "../MediaPublicationComponents/Styles/PublicationTab.module.css"
import { FaArrowRightLong } from "react-icons/fa6";

const publications = [
  {
    id: 1,
    date: "Apr 26, 2018",
    title: "Celebrate World Earth Day 2018",
    imageUrl: "https://i.ibb.co/rRwHpQs7/image.jpg"
  },
  {
    id: 2,
    date: "Apr 26, 2018",
    title: "GPIL Observes National Fire & Safety Day",
    imageUrl: "https://i.ibb.co/mC0gJBFT/Group-15762.jpg"
  },
  {
    id: 3,
    date: "Mar 13, 2018",
    title: "Holi Milan celebration in GPIL",
    imageUrl: "https://i.ibb.co/PsCkW3HC/Group-15770.jpg"
  }
];

const PressReleases = [
  {
    id: 1,
    date: "Apr 26, 2018",
    title: "Press Release Q2FY25 Financial and Operational Performance",
  },
  {
    id: 2,
    date: "Apr 26, 2018",
    title: "Press Release Q2FY25 Financial and Operational Performance",
  },
  {
    id: 3,
    date: "Apr 26, 2018",
    title: "Press Release Q2FY25 Financial and Operational Performance",
  },
  {
    id: 4,
    date: "Apr 26, 2018",
    title: "Press Release Q2FY25 Financial and Operational Performance",
  },
  {
    id: 5,
    date: "Apr 26, 2018",
    title: "Press Release Q2FY25 Financial and Operational Performance",
  },
  {
    id: 6,
    date: "Apr 26, 2018",
    title: "Press Release Q2FY25 Financial and Operational Performance",
  },
];

const PublicationTab = () => {
  const [activeTab, setActiveTab] = useState('publication');

  return (
    <>
      <section className={style.publicationTabSection}>
        <div className="container">
          <div className='text-center py-5'>
            <button 
              className={`btn ${activeTab === 'publication' ? style.activeBtn : ''} ${style.publicationBtn}`} 
              onClick={() => setActiveTab('publication')}
            >
              Publications
            </button>
            <button 
              className={`btn m-3 ${activeTab === 'pressReleases' ? style.activeBtn : ''} ${style.publicationBtn}`} 
              onClick={() => setActiveTab('pressReleases')}
            >
              Press Releases
            </button>
          </div>

          {/* Conditional rendering based on activeTab */}
          {activeTab === 'publication' && (
            <div className={style.newsCard}>
              {publications.map((publication) => (
                <div key={publication.id} className='col-10 mx-auto pt-4'>
                  <div>
                    <img
                      src={publication.imageUrl}
                      alt="publication image"
                      className={`${style.newsImage}`}
                    />
                  </div>
                  <div className={`p-3 d-flex flex-column  ${style.newsDetails}`}>
                    <p className='mb-1 '>{publication.date}</p>
                    <h4 className='mb-0'>{publication.title}</h4>
                    <button className={`ms-auto text-center ${style.readMorebtn}`}>
                      Read More <FaArrowRightLong className='ms-2'/>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'pressReleases' && (
            <div className={style.newsCard}>
              {PressReleases.map((pressrelease) => (
                <div key={pressrelease.id} className='col-10 mx-auto pt-4'>
                  <div className={`p-3 d-flex ${style.newsDetails}`}>
                    <div>
                      <p className='mb-1'>{pressrelease.date}</p>
                      <h4 className='mb-0'>{pressrelease.title}</h4>
                    </div>
                    <button className={`ms-auto d-flex justify-content-center align-items-center ${style.nextArrowIcon}`}>
                      <FaArrowRightLong />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PublicationTab;
