import React from 'react';
import styles from '../bussinessHomeComponent/Styles/imageSection.module.css'
import { Link } from 'react-router-dom';

const products = [
  { name: "Structures", image: "https://i.postimg.cc/52nJmtZC/Mask-group-7.png", link: "/structurebussiness" },
  { name: "Poles", image: "https://i.postimg.cc/CMHQ82yZ/Mask-group-10.png", link: "/bussinesspoles" },
  { name: "Pipes", image: "https://i.postimg.cc/xdzs1xy1/Mask-group-13.png", link: "/pipes" },
  { name: "HB Wires", image: "https://i.postimg.cc/YqdDnmCM/Mask-group-11.png", link: "/hbwires" },
  { name: "Wire Rods", image: "https://i.postimg.cc/85dth7Y8/Mask-group-14.png", link: "/wirerods" },
  { name: "Billets", image: "https://i.postimg.cc/c1wNbhpZ/Mask-group-9.png", link: "/bussinessbillets" },
  { name: "Direct Reduced Iron", image: "https://i.postimg.cc/3x6S75Gq/Mask-group-12.png", link: "/spongeiron" },
  { name: "Ferro Alloys", image: "https://i.postimg.cc/GtFwT3F9/Mask-group-8.png", link: "/ferroalloys" },
  { name: "Pellets", image: "https://i.postimg.cc/5yxppxcX/Mask-group-15.png", link: "/pellets" },
];

const ImageSection = () => {
  return (
    <>
      <div className={styles.offeringText}>Our Offerings</div>
      <div className={styles.gridContainer}>
        {products.map((product, index) => (
          <div
            key={index}
            className={styles.card}
            data-aos="fade-up"
            data-aos-delay={index * 200} // Each card appears one by one
          >
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

export default ImageSection;
