import React, { useState } from 'react';
import styles from "./Styles/railwaystracture.module.css";

const products = [
    {
        title: "Portal Frames",
        imgSrc: "https://i.postimg.cc/tTj6Zsk2/Mask-group-6.png"
    },
    {
        title: "Masts",
        imgSrc: "https://i.postimg.cc/j5yPFJgT/ff4e36eec10e4b533d1b458fd39f8ecd.jpg"
    },
    {
        title: "Two-Track Cantilever",
        imgSrc: "https://i.postimg.cc/Pq2B8Pzt/f52392a86b18de192462e04a2f726da0.jpg"
    }
];


const productDetails = {
    "Portal Frames": {
        title: "Portal Frames",
        productImage: "https://i.postimg.cc/mkFhmRmt/f344236d3e88f89fb8c4e663e0d2b23653883efa.jpg",
        description: "High-strength steel structures designed for efficient railway electrification, ensuring safe power distribution.",
        listItems: [
            "Designed for high-speed rail and metro corridors",
            "Manufactured with corrosion-resistant materials",
            "Supports loads of up to 40M span"
        ]
    },
    "Masts": {
        title: "Masts",
        productImage: "https://i.postimg.cc/j5yPFJgT/ff4e36eec10e4b533d1b458fd39f8ecd.jpg",
        description: "Engineered for multiple-track electrification, spanning 10M to 40M.",
        listItems: [
            "Ideal for rail yards and metro networks",
            "Supports high voltage transmission lines",
            "Hot-dip galvanized for durability"
        ]
    },
    "Two-Track Cantilever": {
        title: "Two-Track Cantilever",
        productImage: "https://i.postimg.cc/Pq2B8Pzt/f52392a86b18de192462e04a2f726da0.jpg",
        description: "Optimized for lightweight, high-strength rail electrification systems.",
        listItems: [
            "Designed for overhead line equipment",
            "Suitable for high-speed and metro rail",
            "Durable and weather-resistant"
        ]
    }
};

const RailwayStructure = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <section className={styles.structureSection}>
            <div className='container'>
                <h1 className={`text-center ${styles.structureSteelHeading}`}>Railway Overhead Equipment Structures</h1>
                <p className={`text-center ${styles.structureDescription}`}>GPIL manufactures high-strength steel structures for railway electrification, supporting efficient and safe power distribution.</p>

                   <div className="row justify-content-center">
                                       {products.map((product, index) => (
                                           <div
                                               key={index}
                                               className="col-md-3 col-sm-6 py-2 px-5 p-sm-2"
                                               onClick={() => setSelectedProduct(product.title)}
                                           >
                                               <div className={`${styles.productImages} ${selectedProduct === product.title ? styles.selected : ''}`}>
                                                   <img src={product.imgSrc} className={styles.productImage} alt={product.title} />
                                                   <div className={styles.productImagesOverlay}></div>
                                                   <p className={styles.productImagesTitle}>{product.title}</p>
                                               </div>
                                           </div>
                                       ))}
                                   </div>

                {selectedProduct && (
                    <div className='container py-5'>
                        <div className="row pt-5">
                            <div className="col-md-4">
                                <img src={productDetails[selectedProduct].productImage} alt={selectedProduct} className={`img-fluid object-fit-cover ${styles.productDetailImage}`} />
                            </div>
                            <div className="col-md-8">
                                <div className={styles.productDetailContent}>
                                    <h2 className={styles.productDetailHeading}>{productDetails[selectedProduct].title}</h2>
                                    <p className={styles.productDetailDescription}>{productDetails[selectedProduct].description}</p>
                                    <ul>
                                        {productDetails[selectedProduct].listItems.map((item, idx) => (
                                            <li className={styles.productDetailListItem} key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default RailwayStructure;
