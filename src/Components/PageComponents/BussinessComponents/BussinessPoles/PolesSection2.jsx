
import React, { useState } from 'react';
import styles from "./Styles/polesSection2.module.css";

const products = [
    {
        title: "Monopoles",
        imgSrc: "https://i.postimg.cc/CLx8nLMd/Mask-group.png"
    },
    {
        title: "High Mast Poles",
        imgSrc: "https://i.postimg.cc/tTbZq9mq/Mask-group-1.png"
    },
    {
        title: "Custom Steel Poles",
        imgSrc: "https://i.postimg.cc/C5PzskM5/Mask-group-2.png"
    }
];

const productDetails = {
    "Monopoles": {
        title: "Monopoles – The Future of Power Transmission",
        productImage: "https://i.postimg.cc/CLx8nLMd/Mask-group.png",
        sections: {
            "Product Specifications": [
                "Voltage Capacity: Suitable for 33kV to 400kV transmission lines.",
                "Design Configurations: Available in A-frame, Y-frame, and Twin Pole designs.",
                "Height Range: Customizable as per project requirements.",
                "Material Strength: High-grade structural steel, ensuring superior load-bearing capacity",
                "Finish Options: Hot-dip galvanized or painted, complying with corrosion-resistant standards",

            ],
            "Product Highlights": [
                "Compact Footprint: Requires significantly less space than conventional towers.",
                "Rapid Installation: Modular design for quick assembly and deployment.",
                "Minimal Maintenance: Long service life with minimal upkeep",
                "Corrosion Protection: Fully hot-dip galvanized for enhanced durability.",
            ],
            "Applications": [
                "Power transmission and distribution networks.",
                "Space-restricted installations in metropolitan areas.",
                "Smart city projects and urban grids."
            ],
            "Certifications & Approvals": [
                "ISO 1461 & ISO 14713: Hot-dip galvanised coatings for corrosion resistance.",
                "PGCIL Approval: Approved for use in power transmission infrastructure.",
                "State Electricity Board Approvals: Compliant with multiple state utilities for public infrastructure projects"
            ]
        }
    },
    "High Mast Poles": {
        title: "High Mast Poles – Engineered for Large-Scale Applications",
        productImage: "https://i.postimg.cc/tTbZq9mq/Mask-group-1.png",
        sections: {
            "Stadium Mast Poles": [
                "Height Range: 16M to 60M",
                "Fixture Capacity: Supports 12 to 171 luminaries",
                "Head Frame Designs: Available in Round, Rectangle, Circle & Trapezoidal configurations",
                "Applications: Stadiums, sports complexes and large public spaces"
            ],
            "Flag Mast Poles": [
                "Height Range: 16M to 50M",
                "Wind Load Resistance: Designed for stability in high-wind conditions",
                "Customizable Design: Available in multiple configurations based on location",
                "Applications: National flags, corporate flags and high-visibility installations"
            ],
            "Signage Mast Poles": [
                "Height Range: 9M to 30M",
                "Load Handling: Engineered for large-scale signboards, hoardings, and traffic signage",
                "Stability: Built to withstand extreme weather conditions",
                "Applications: Highways, expressways, metro corridors, and commercial advertising"
            ]
        }
    },
    "Custom Steel Poles": {
        title: "Custom Steel Poles – Engineered for Urban & Industrial Needs",
        productImage: "https://i.postimg.cc/C5PzskM5/Mask-group-2.png",
        sections: {
            "Octagonal Poles": [
                "Height Range: 3M to 12M",
                "Brackets: Available in Sword, Swan, and Decorative fittings",
                "Finish: Hot-dip galvanized for corrosion resistance"
            ],
            "Conical Poles": [
                "Height Range: 3M to 12M",
                "Customization: Special designs like bent poles & decorative Ambrossia poles",
                "Material Strength: Built for power distribution, traffic signals & lighting"
            ],
            "Swaged Tubular Poles": [
                "Height Range: 5M to 14M, with thickness variations from 2.5mm to 7.2mm",
                "Manufacturing Process: Swaging technology for increased durability",
                "Longevity: Rust-resistant & hot-dip galvanized"
            ]
        }
    }
};

const PolesSection2 = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <section className={styles.polesSection2}>
            <div className='container'>
                <div className={styles.polesHeaderSection}>
                    <p className={styles.polesDescription} data-aos="fade-up" >
                        At GPIL, we manufacture high-performance steel poles designed to meet the demands of urban infrastructure, highways, power transmission, railways and smart city applications. Engineered for strength, durability and longevity, our poles are available in hot-dip galvanized and painted finishes, ensuring superior corrosion resistance. With an annual manufacturing capacity of 24,000 MT, we offer a diverse range of poles tailored to multiple industries.
                    </p>
                </div>

                <h1 className={`text-center ${styles.portfolioHeading}`}>Product Portfolio</h1>

                <div className="row justify-content-center">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="col-md-3 col-sm-6 py-2 px-5 p-sm-2"
                            onClick={() => setSelectedProduct(product.title)}
                            data-aos="fade-up"
                            data-aos-delay={index * 100} 
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
  <div className="container py-5">
    <div className="row pt-5">
      <div 
        className="col-md-4"
        data-aos="fade-up"
        key={selectedProduct} // Key change forces re-animation
      >
        <img 
          src={productDetails[selectedProduct].productImage} 
          alt={selectedProduct} 
          className={`img-fluid object-fit-cover ${styles.listLeftImage}`} 
        />
      </div>
      <div 
        className="col-md-8"
        data-aos="fade-up"
        data-aos-delay="200"
        key={selectedProduct + "-details"} // Forces re-animation on change
      >
        <div className={styles.StructureSection2energyContentList}>
          <h2 className={styles.ListItemMainHeading}>
            {productDetails[selectedProduct].title}
          </h2>
          {Object.entries(productDetails[selectedProduct].sections).map(([sectionTitle, items], index) => (
            <div key={index}>
              <h5 className={`m-3 ${styles.ListSubHeading}`}>{sectionTitle}</h5>
              <ul>
                {items.map((item, idx) => (
                  <li className={styles.listItems} key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)}

            </div>

            <div className='container'>
                <h2 className={`text-center pb-4 mt-5 ${styles.menufactureHeading}`}>Manufacturing Excellence</h2>

                <div className='row'>
                    <div className='col-md-6 p-4' data-aos="fade-up"  data-aos-dela="100" >
                        <div>
                            <img src="https://i.postimg.cc/9fL5MpLD/image-12.png" alt="" className={`img-fluid ${styles.manufacurImages}`} />
                        </div>
                        <div className={styles.manufacurContent}>
                            <h5 className={`${styles.menufactureListSubHeading}`}> Advanced Production Capabilities</h5>
                            <ul>
                                <li className={styles.listItems}>24,000 MT Annual Capacity</li>
                                <li className={styles.listItems}>CTL Precision Cutting</li>
                                <li className={styles.listItems}>Press Brake Machines</li>
                                <li className={styles.listItems}>Saw Machines</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-6 p-4' data-aos="fade-up"  data-aos-dela="200">
                        <div>
                            <img src="https://i.postimg.cc/bdc4MFwB/image-13.png" alt="" className={`img-fluid ${styles.manufacurImages}`} />
                        </div>
                        <div className={styles.manufacurContent}>
                            <h5 className={`${styles.menufactureListSubHeading}`}>In-House Hot-Dip Galvanization</h5>
                            <ul>
                                <li className={styles.listItems}>Three Zinc Bath Plants – Capable of handling pole sizes up to 13.1M length</li>
                                <li className={styles.listItems}>120,000 MT Annual Galvanizing Capacity – Ensures superior corrosion resistance</li>
                                <li className={styles.listItems}>ISO 1461 & ISO 14713 Compliant – Adhering to global anti-corrosion standards</li>
                            </ul>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default PolesSection2;
