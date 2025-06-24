
import style from "./Styles/towerstracutre.module.css";


import React, { useState } from 'react';



const products = [
    {
        title: "Transmission Line Towers",
        imgSrc: "https://i.postimg.cc/MG6p2zrn/Mask-group-5.png"
    },
    {
        title: "Substation Structures",
        imgSrc: "https://i.postimg.cc/tTj6Zsk2/Mask-group-6.png"
    }
];

const productDetails = {
    "Transmission Line Towers": {
        title: "Transmission Line Towers",
        productImage: "https://i.postimg.cc/MG6p2zrn/Mask-group-5.png",
        description: "Steel Angles are widely used in industrial and infrastructure applications. Designed to withstand high loads and harsh conditions, our Angles are precision-engineered for superior durability.",
        listItems: [
            "L-shaped steel sections for structural bracing and frames",
            "Available in sizes from 70 mm to 200 mm (bundled)",
            "Used in transmission towers, bridges, and industrial buildings"
        ],
        sections: {
            "Product Highlights": [
                "Voltage Capacity: Suitable for 33kV to 400kV transmission lines.",
                "Design Configurations: Available in A-frame, Y-frame, and Twin Pole designs.",
                "Material Strength: High-grade structural steel",
                "Finish Options: Hot-dip galvanized or painted, ensuring corrosion resistance."
            ]
        }
    },
    "Substation Structures": {
        title: "Substation Structures",
        productImage: "https://i.postimg.cc/fyQ9dJv8/solar-mounting-structure-1.png",
        description: "Our customized steel frameworks for high-voltage substations and switchyards ensure efficient power management.",
        listItems: [
            "Capacity: Engineered for switchyards up to 765kV",
            "Structural Components: Includes gantries, beams, equipment mounting structures, and busbar supports",
            "Precision Engineering: Fabricated for seamless integration with power equipment",
            "Applications: Power substations, transformer yards, and grid interconnection projects"
        ],
        sections: {
            "Product Highlights": [
                "Capacity: Engineered for switchyards up to 765kV",
                "Precision Engineering: Fabricated for seamless integration with power equipment"
            ]
        }
    }
};

const TowerStructure = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <section className={style.structurePolesSection2}>
            <div className='container'>
                <h1 className={`text-center ${style.structureSteelHeading}`}>Transmission Line Towers & Substation Structures</h1>
                <div className={style.structurePolesHeaderSection}>
                    <p className={style.structurePolesDescription}>
                        GPIL manufactures high-performance galvanized steel structures at its state-of-the-art TLT Mill, ensuring reliable power transmission and substation infrastructure.
                    </p>
                </div>

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
                                    <div className={style.tableHeading}>
                                        <h6>Manufacturing Strength</h6>
                                    </div>
                                    <div className="table-responsive">
                                        <table className={`table table-bordered ${style.ohsTable}`}>
                                            <tbody>
                                                <tr>
                                                    <td>60,000 MT Transmission Line Towers</td>
                                                    <td>6,000 MT Substation Structures</td>
                                                    <td>CNC Fabrication For Dimensional Precision</td>
                                                    <td>Hot-dip Galvanization For durability & rust resistance</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default TowerStructure;
