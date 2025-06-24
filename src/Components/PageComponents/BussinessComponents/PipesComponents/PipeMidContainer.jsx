import React, { useState } from 'react';
import styles from "../PipesComponents/Styles/PipeMidContainer.module.css";
import PipeTextBox from './PipeTextBox';
import "animate.css";

const products = [
  {
    title: "Electric Resistance Welded Pipes",
    imgSrc: "https://i.postimg.cc/pLnvFwtt/Mask-group.png"
  },
  {
    title: "Hollow Section Pipes (RHS & SHS)",
    imgSrc: "https://i.postimg.cc/2yKpqwc6/Mask-group-1.png"
  }
];

const productDetails = {
  "Electric Resistance Welded Pipes": {
    title: "Electric Resistance Welded Pipes",
    productImage: "https://i.postimg.cc/5yhT373x/52b1630a7af6ec67259b18ac1ae9e9d5.png",
    description: "Our ERW pipes are built for structural and fluid transportation needs, ensuring high weld integrity and strength.",
    specifications: [
      "Size Range: 15 NB to 500 NB",
      "Thickness: 2mm – 5mm",
      "Material: Pre-cut Steel conforming to IS 1239",
      "Finish Options: Black, without surface treatments"
    ]
  },
  "Hollow Section Pipes (RHS & SHS)": {
    title: "Hollow Section Pipes (RHS & SHS)",
    productImage: "https://i.postimg.cc/2yKpqwc6/Mask-group-1.png",
    description: "Designed for high structural integrity, our Rectangular and Square Hollow Sections (RHS & SHS) offer strength-to-weight efficiency for construction, infrastructure, and industrial applications.",
    specifications: [
      "Sizes Available: Square Hollow Sections (SHS): 15x15 mm to 150x150 mm",
      "Rectangular Hollow Sections (RHS): 40x20 mm to 200x100 mm",
      "Thickness Range: 2.0 mm - 6.0 mm",
      "Material: IS 4923 structural steel",
      "Length: 4 m - 8 m",
      "Finish Options: Black without surface treatments"
    ]
  }
};

const PipeMidContainer = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className={styles.midContainer}>
      <PipeTextBox />
      <div className={styles.container}>
        <div className={styles.ProductContainer}>
          <h2 className={styles.heading}>Product Portfolio</h2>
          {/* <div className={styles.tabs}>
            {products.map((product, index) => (
              <div
                key={index}
                className={styles.tab}
                style={{ backgroundImage: `url('${product.imgSrc}')` }}
                onClick={() => setSelectedProduct(product.title)}
              >
                <p className={styles.ImageText}>{product.title}</p>
              </div>
            ))}
              
          </div> */}
          <div className="row justify-content-center">
            {products.map((product, index) => (
              <div
                key={index}
                className="col-md-3 col-sm-6 py-2 px-5 p-sm-2 "
                onClick={() => setSelectedProduct(product.title)}
              >
                <div className={`${styles.tabImage} ${selectedProduct === product.title ? styles.selected : ''}`}>
                  <img src={product.imgSrc} className={styles.tabImage} alt={product.title} />
                  <div className={styles.tabImageOverlay}></div>
                  <p className={styles.tabImageTitle}>{product.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedProduct && (
          <div className={styles.productSection}>
            <img
              src={productDetails[selectedProduct].productImage}
              alt={selectedProduct}
              className={styles.productImage}
            />
            <div className={styles.productInfo}>
              <h3 className={styles.productTitle}>{productDetails[selectedProduct].title}</h3>
              <p className={styles.productDescription}>{productDetails[selectedProduct].description}</p>

              <h6 className={styles.specificationsTitle}>Product Specifications:</h6>
              {productDetails[selectedProduct].specifications && (
                <ul className={styles.specifications}>
                  {productDetails[selectedProduct].specifications.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        <h2 className={styles.certificationsHeading}>Certifications & Compliance</h2>
        <div className={styles.certParent}>
          <div className={styles.certifications}>
            <div className={styles.certBox}><p className={styles.certTitle}>IS 4923 Indian Standard for Hollow Steel Sections</p></div>
            <div className={styles.certBox}><p className={styles.certTitle}>IS 1161 / IS 9295 Steel tubes for construction and structural applications</p></div>
            <div className={styles.certBox}><p className={styles.certTitle}>IS 3601 Steel Tubes for Mechanical and General Engineering Purposes</p></div>
            <div className={styles.certBox}><p className={styles.certTitle}>IS 1239 / IS 9598 ERW Steel pipes for water, gas & structural uses</p></div>
          </div>
        </div>

        <div className='text-center pt-5'>
          <button className={styles.downloadBtn}>Download Brochure</button>
        </div>
      </div>
    </div>
  );
};

export default PipeMidContainer;
