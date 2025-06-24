import React from 'react'
import style from "../FinancialComponents/Styles/FinancialDetailSection.module.css"
import InvestorDocument from './InvestorDocument'
const FinancialDetailSection = () => {
  return (
    <>
      <section className={style.section}>
        <p className={`text-center  ${style.snapshotheading}`}> Performance Snapshot</p>
       <div className='container'>    

        <div className={style.revenueBox}>
          <ul>
            <li className={style.liPrice}>₹5,455 Cr</li>
            <li className={style.date}>(FY 2023-24)</li>
            <li>Total Revenue</li>
          </ul>
          <ul>
            <li className={style.liPrice}> ₹10,309.39 Cr</li>
            <li className={style.date}> (31.03.2024)</li>
            <li>Market Cap</li>
          </ul>
          <ul>
            <li className={style.liPrice}>CRISIL A1+</li>
            <li>Short Term</li>
          </ul>
          <ul>
            <li className={style.liPrice}>NSE</li>
            <li className={style.nseLi}>840.05</li>
            <li style={{ color: "red" }}>
              -4.50(-0.53 )
              <img src="https://i.ibb.co/b5VXHpN7/Vector.png" alt="Image" />
            </li>
          </ul>
          <ul>
            <li className={style.liPrice}>BSE</li>
            <li className={style.nseLi}>841.50</li>
            <li style={{ color: " rgba(113, 166, 0, 1)" }}>
              +3.60 (+0.43)
              <img src="https://i.ibb.co/7xd3K1Kc/2.png" />
            </li>
          </ul>
        </div>

        </div>
        <InvestorDocument />
      </section>
    </>
  )
}

export default FinancialDetailSection