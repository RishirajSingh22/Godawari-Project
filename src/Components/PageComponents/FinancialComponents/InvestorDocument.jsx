import React from 'react';
import style from "../FinancialComponents/Styles/InvestorDocument.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const InvestorDocument = () => {
    return (
        <>
            <div className='container'>
                <h4 className={` text-center my-5 ${style.investorDocumenth4}`}>Investor Documnets</h4>

                <div className='row pb-5'>
                    <div className='col-md-4 p-3'>
                        <div>
                            <img src="https://i.ibb.co/j94MjfXt/bdc03dc073c90f579539a4366475fa51883f47ca.png" alt="image" className={`${style.Images}`}></img>
                        </div>
                        <div className={`d-flex justify-content-between align-items-center ${style.reportSection}`}>
                            <p>Querterly Reports</p>
                            <Link to={"/investormediareports"}><button className={style.arrowIcon}> <FaArrowRightLong  /></button></Link>
                        </div>
                    </div>
                    <div className='col-md-4 p-3'>
                        <div>
                            <img src="https://i.ibb.co/27QcJWnY/8e39c823d911e71b9be213ba0e1c0bce51776865.png" alt="image" className={`${style.Images}`}></img>
                        </div>
                        <div className={`d-flex justify-content-between align-items-center ${style.reportSection}`}>
                            <p>Annual Reports</p>
                          <Link to={"/investormediareports"}> <button className={style.arrowIcon}> <FaArrowRightLong  /></button></Link> 
                        </div>
                    </div>
                    <div className='col-md-4 p-3'>
                        <div>
                            <img src="https://i.ibb.co/4w6f2cD1/0556fd8ae98992fcf104f13d92bccdf0dc524776-1.png" alt="image" className={`${style.Images}`}></img>
                        </div>
                        <div className={`d-flex justify-content-between align-items-center ${style.reportSection}`}>
                            <p>Investor Deck</p>
                            <Link to={"/investormediareports"}> <button className={style.arrowIcon}> <FaArrowRightLong  /></button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InvestorDocument