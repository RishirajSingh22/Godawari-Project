import React from 'react'
import style from "../MediaReportsComponents/Styles/QuarterlyReports.module.css";


const QuarterlyReports = () => {
  return (
    <>
    <section className={`${style.quarterlySection}`}>
        <div className={style.querterlyContainer}>
            <h1 className='text-center'>Querterly Reports</h1>
            <button className={`${style.annualBtn}`}> Annual Reports</button>

        </div>
        
        </section></>

  )
}

export default QuarterlyReports;