// import React, { useState } from "react";
// import styles from "../ReportsComponents/Styles/YearCarousel.module.css";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// function YearCarousel() {
//   const [startIndex, setStartIndex] = useState(0);
//   const [activeYear, setActiveYear] = useState("2023-24");

//   const years = [
//     "2028-29", "2027-28", "2026-27", "2025-26",
//     "2024-25", "2023-24", "2022-23", "2021-22",
//     "2020-21", "2019-20"
//   ];


//   const visibleCount = 5;

//   const handlePrev = () => {
//     setStartIndex((prev) => (prev > 0 ? prev - 1 : years.length - visibleCount));
//   };

//   const handleNext = () => {
//     setStartIndex((prev) => (prev < years.length - visibleCount ? prev + 1 : 0));
//   };

//   return (
//     <div className="container">
//       <div className={styles.parentCarousel}>
//         <div className={styles.carouselContainer}>
//           <button className={styles.navButton} onClick={handlePrev}>
//             <FaChevronLeft />
//           </button>
//           <div className={styles.yearButtons}>
//             {years.slice(startIndex, startIndex + visibleCount).map((year) => (
//               <button
//                 key={year}
//                 className={`${styles.yearButton} ${year === activeYear ? styles.active : ""}`}
//                 onClick={() => setActiveYear(year)} // Set active year when clicked
//               >
//                 {year}
//               </button>
//             ))}
//           </div>

//           <button className={styles.navButton} onClick={handleNext}>
//             <FaChevronRight />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default YearCarousel;



import React, { useState, useEffect } from "react";
import styles from "../ReportsComponents/Styles/YearCarousel.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function YearCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const [activeYear, setActiveYear] = useState("2023-24");
  const [visibleCount, setVisibleCount] = useState(6); 
  const years = [
    "2028-29", "2027-28", "2026-27", "2025-26",
    "2024-25", "2023-24", "2022-23", "2021-22",
    "2020-21", "2019-20"
  ];

  useEffect(() => {
    const updateVisibleCount = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setVisibleCount(3);
      }  else if(screenWidth >= 1024 && screenWidth < 1200) 
      {
        setVisibleCount(5); 
      }
      else {
        setVisibleCount(6); 
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : years.length - visibleCount));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < years.length - visibleCount ? prev + 1 : 0));
  };

  return (
    <div className="container">
      <div className={styles.parentCarousel}>
        <div className={styles.carouselContainer}>
          <button className={styles.navButton} onClick={handlePrev}>
            <FaChevronLeft />
          </button>
          <div className={styles.yearButtons}>
            {years.slice(startIndex, startIndex + visibleCount).map((year) => (
              <button
                key={year}
                className={`${styles.yearButton} ${year === activeYear ? styles.active : ""}`}
                onClick={() => setActiveYear(year)}
              >
                {year}
              </button>
            ))}
          </div>
          <button className={styles.navButton} onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default YearCarousel;

