import React from "react";
import style from "./Styles/SpongeSection2.module.css";
import SpongeCapacity from "./SpongeCapacity";

const SpongeSection2 = () => {
  let cutsomer = [
    {
      id: "1",
      image: "https://i.ibb.co/dwNRKND2/cd52cfdb3f2be457922683687d34fcc9.png",
      heading: "Direct Reduction",
      Peregraph:
        "Iron ore is reduced using coal in a solid state, creating porous iron ideal for steelmaking.",
    },
    {
      id: "2",
      image: "https://i.ibb.co/B5vPJn1Q/image-12.png",
      heading: "Energy Recovery",
      Peregraph:
        "The process captures up to 85% waste heat, which is reused to generate steam for electricity, reducing emissions and promoting sustainability.",
    },
    {
      id: "3",
      image: "https://i.ibb.co/V0zJbVSt/image-13.png",
      heading: "Enhanced Efficiency",
      Peregraph:
        "The advanced process eliminates oxygen and impurities, ensuring superior metallurgical properties.",
    },
  ];

  return (
    <>
      <section className={style.section2}>
        <div className="container py-5">
          <p className={`text-center ${style.description}`}>
            Sponge Iron, or Direct Reduced Iron (DRI), is at the core of GPIL's
            steel manufacturing excellence. Through innovative direct reduction
            technology, GPIL transforms iron ore into high-quality DRI, offering
            unmatched cost efficiency, flexibility, and sustainability. With a
            focus on purity and performance, GPIL ensures that its DRI is a
            prime feedstock for steelmaking, reducing energy consumption while
            upholding stringent environmental standards.
          </p>

          <div className="py-5 text-center">
            <h5 className={style.cardHeading}>Production Excellence</h5>
            <div className="row pt-3">
              {cutsomer.map((items, index) => {
                return (
                  <div className="col-12 col-md-4 p-3 text-start" key={items.id}>
                    <div className={style.cutsomerImage}>
                      <img
                        src={items.image}
                        alt={items.heading}
                        className={style.image}
                      />
                    </div>
                    <div className={`text-start ${style.textBox}`}>
                      <h6>{items.heading} </h6>
                      <p className={style.imageDescription}>
                        {items.Peregraph}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="row g-0 align-items-stretch">
            <div className="col-md-6 d-flex">
              <img
                src="https://i.ibb.co/WpFrwQFD/image-14.png"
                alt="Iron and Steel Billets"
                className={style.contentImage}
              />
            </div>
            <div
              className={`col-md-6 d-flex flex-column justify-content-center ${style.contentSection}`}
            >
              <div className="px-4">
                <h5 className={style.cardHeading}>Sustainability Focus</h5>
                {[
                  {
                    title: "Utilizing innovative Waste Heat Recovery Boilers (WHRB) to maximize energy efficiency.",

                  },
                  {
                    title: "IReducing carbon emissions with advanced process designs.",

                  },
                  {
                    title: "Providing environmentally friendly feedstock for steelmaking.",

                  },
                ].map((item, index) => (
                  <div className="d-flex gap-3 pt-4" key={index}>
                    <img
                      src="https://i.ibb.co/XZpVtLyY/Line-38.png"
                      alt="Line"
                      className={style.line}
                    />
                    <div>
                      <h6 className={style.tittle}>{item.title}</h6>

                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>


          <div className="pt-5 pb-5">
            <SpongeCapacity />
          </div>


          <div className="row g-0 align-items-stretch">
            <div
              className={`col-md-6 d-flex flex-column justify-content-center ${style.contentSection}`}
            >
              <div className="p-5">
                <h5 className={style.cardHeading}>Product Highlights</h5>
                {[
                  {
                    title: "High Flexibility",
                    description:
                      "Ideal for electric arc furnaces in steelmaking.",
                  },
                  {
                    title: "Cost Efficiency",
                    description:
                      "Lower energy consumption compared to traditional blast furnaces.",
                  },
                  {
                    title: "Superior Purity",
                    description:
                      "Ensures better quality and performance for downstream applications.",
                  },
                ].map((item, index) => (
                  <div className="d-flex gap-3 pt-4" key={index}>
                    <img
                      src="https://i.ibb.co/XZpVtLyY/Line-38.png"
                      alt="Line"
                      className={style.line}
                    />
                    <div>
                      <h6>{item.title}</h6>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <img
                src="https://i.ibb.co/nMZJD5K4/image-3.png"
                alt="Iron and Steel Billets"
                className="w-100 h-100 object-fit-cover"
              />
            </div>
          </div>

          <div className="text-center pt-5" >
            <div className={style.productioncontainer}>
              <h3>Product Specifications</h3>
            </div>
            <div className={style.productDescription}>
              <h6>Chemical Composition</h6>
              <p>Fe (Metallic): 85% | Fe (Total): 91.5% | Metallization: 93% <br />
              Carbon Content: 0.2% Max | Sulphur: 0.025% ± 0.005% | Phosphorus: 0.030% Max</p>
              <div className={style.verticalLine}></div>
              <h6>Physical Properties</h6>
              <p>Size: 0-20 mm   |      Non-Magnetic Material: Max 1%    |      Fine Particles (-1 mm): Max 5%</p>
           </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpongeSection2;
