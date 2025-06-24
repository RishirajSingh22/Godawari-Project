import React, { useState } from 'react';
import style from "./Styles/structuresteel.module.css";

const products = [
    {
        title: "Angles",
        imgSrc: "https://i.postimg.cc/7hV7xrrQ/40bb91bda13a67d80e7b4807a61a319a.jpg"
    },
    {
        title: "Channels",
        imgSrc: "https://i.postimg.cc/j5yPFJgT/ff4e36eec10e4b533d1b458fd39f8ecd.jpg"
    },
    {
        title: "Beams",
        imgSrc: "https://i.postimg.cc/Pq2B8Pzt/f52392a86b18de192462e04a2f726da0.jpg"
    },
    {
        title: "Strips | Coils",
        imgSrc: "https://i.postimg.cc/vTgFybnG/a8adf2762135c10ce546ca538a798920.png"
    }
];

const productDetails = {
    "Angles": {
        title: "Angles",
        productImage:"https://i.postimg.cc/7hV7xrrQ/40bb91bda13a67d80e7b4807a61a319a.jpg",
        description: "Steel Angles are widely used in industrial and infrastructure applications. Designed to withstand high loads and harsh conditions, our Angles are precision-engineered for superior durability.",
        listItems: [
            "L-shaped steel sections for structural bracing and frames",
            "Available in sizes from 70 mm to 200 mm (bundled)",
            "Used in transmission towers, bridges, and industrial buildings",
        ],
        sections: {
            "Product Highlights": [
                "Voltage Capacity: Suitable for 33kV to 400kV transmission lines.",
                "Design Configurations: Available in A-frame, Y-frame, and Twin Pole designs.",
                "Material Strength: High-grade structural steel",
                "Finish Options: Hot-dip galvanized or painted, ensuring corrosion resistance.",
            ]
        }
    },
    "Channels": {
        title: "Channels",
        productImage: "https://i.postimg.cc/j5yPFJgT/ff4e36eec10e4b533d1b458fd39f8ecd.jpg",
        description: "Steel Channels provide structural integrity and support in a variety of industries. Our Channels are designed for superior weight distribution, load-bearing capacity, and easy fabrication.",
        listItems: [
            "C-shaped sections (ISMC) offering high bending strength",
            "Sizes range from 75 mm to 300 mm web depth",
            "Ideal for construction, material handling systems, and machine frames",
        ],
        sections: {
            "Product Highlights": [
                "Excellent Load Distribution – Designed to enhance the stability of structures",
                "High Ductility & Toughness – Ensures durability under extreme conditions",
                "Smooth Surface Finish – Easy to fabricate and weld for customized applications."
            ]
        }
    },
    "Beams": {
        title: "Beams",
        productImage: "https://i.postimg.cc/Pq2B8Pzt/f52392a86b18de192462e04a2f726da0.jpg",
        description: "Steel Beams provide the essential structural framework for large infrastructure projects, offering superior support, rigidity, and resistance to bending.",
        listItems: [
            "I-section and H-section beams with excellent load-bearing capacity",
            "Available in sizes from 100 mm to 200 mm flange width",
            "Used in building structures, crane girders, and large industrial frameworks",
        ],
        sections: {
            "Product Highlights": [
                "Exceptional Load-Bearing Capacity – Engineered for heavy-duty applications",
                "High Impact Resistance – Withstands extreme forces and pressure",
                "Long-Lasting Performance – Manufactured for superior durability and reliability",
            ]
        }
    },
    "Strips | Coils": {
        title: "Strips | Coils",
        productImage: "https://i.postimg.cc/vTgFybnG/a8adf2762135c10ce546ca538a798920.png",
        description: "Steel Strips are precision-engineered with uniform thickness and superior flexibility for various industrial applications.",
        listItems: [
            "Hot-rolled steel strips in 1.2 mm to 6 mm thickness",
            "Coil widths range from 280 mm to 620 mm",
            "Used in guard rails, tubular structures, and fabrication",
        ],
        sections: {
            "Product Highlights": [
                "Superior Surface Finish – Ensures smooth application in industrial processes",
                "High Flexibility & Strength – Designed for bending, welding, and shaping.",
                "Consistent Thickness & Width – Precision-controlled rolling for uniformity",
            ]
        }
    }
};

const StructureSteel = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <section className={style.structurePolesSection2}>
            <div className='container'>
                <div className='text-center p-5 '>
                    <p className={style.structureDescription}>At GPIL, we take pride in manufacturing high-quality structural steel products that power industries, infrastructure, and engineering projects. From construction and heavy engineering to power transmission and transportation, our structural steel solutions are designed to meet the highest industry standards, ensuring reliability, strength, and long-term performance. We also offer hot-dip galvanizing for all structural products, providing superior corrosion resistance and durability for demanding applications.</p>
                </div>

                <h1 className={`text-center ${style.structureSteelHeading}`}>Structural Steel Components</h1>
                <p className={style.steeldesc}>Manufactured with high-precision rolling technology, these components ensure dimensional accuracy, superior strength, and corrosion resistance for diverse industrial applications.</p>
                <div className="row justify-content-center">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="col-md-3 col-sm-6 py-2 px-5 p-sm-2"
                            onClick={() => setSelectedProduct(product.title)}
                        >
                            <div className={`${style.productImages} ${selectedProduct === product.title ? style.selected : ''}`}>
                                <img src={product.imgSrc} className={style.productImage} alt={product.title} />
                                <div className={style.productImagesOverlay}></div>
                                <p className={style.productImagesTitle}>{product.title}</p>
                            </div>
                        </div>
                    ))}
                </div>


                {selectedProduct && (
                    <div className='container py-5'>
                        <div className="row pt-5">
                            <div className="col-md-4">
                                <img src={productDetails[selectedProduct].productImage} alt={selectedProduct} className={`img-fluid object-fit-cover ${style.structureListLeftImage}`} />
                            </div>
                            <div className="col-md-8">
                                <div className={style.structureStructureSection2energyContentList}>
                                    <h2 className={style.structureListItemMainHeading}>{productDetails[selectedProduct].title}</h2>
                                    <p className={style.structureProductDescription}>{productDetails[selectedProduct].description}</p>

                                    <ul>
                                        {productDetails[selectedProduct].listItems.map((item, idx) => (
                                            <li className={style.structureListItems} key={idx}>{item}</li>
                                        ))}
                                    </ul>

                                    {Object.entries(productDetails[selectedProduct].sections).map(([sectionTitle, items], index) => (
                                        <div key={index}>
                                            <h5 className={`m-3 ${style.structureListSubHeading}`}>{sectionTitle}</h5>
                                            <ul>
                                                {items.map((item, idx) => (
                                                    <li className={style.structureListItems} key={idx}>{item}</li>
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
        </section>
    );
};

export default StructureSteel;
