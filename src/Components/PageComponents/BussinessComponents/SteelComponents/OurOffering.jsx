import React from 'react';
import styles from "../SteelComponents/Styles/OurOffering.module.css";
import { Link } from 'react-router-dom';

const products = [
  { name: "Billets", image: "https://i.postimg.cc/fLpM1jQd/Mask-group-16.png",link:"/bussinessbillets" },
  { name: "Wire rods", image: "https://i.postimg.cc/WbMsfkWD/Mask-group-17.png", link:"/wirerods" },
  { name: "HB Wires", image: "https://i.postimg.cc/fbbZLgwX/Mask-group-18.png",link:"/hbwires" },
];

const OurOffering = () => {
  return (
    <>
    <div className={styles.offeringText}>Our Offerings</div>
    <div className={styles.gridContainer}>
      {products.map((product, index) => (
        <div key={index} className={styles.card}>
          <Link to={product.link}>
          <img src={product.image} alt={product.name} className={styles.image} />
          <div className={styles.overlay}></div>
          <p className={styles.title}>{product.name}</p>
          </Link>
        </div>
      ))}
    </div>
    </>
  );
};

export default OurOffering;
