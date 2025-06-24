import React, { useState } from "react";
import style from "../ReportsComponents/Styles/Pagination.module.css";
function Pagination() {
    const pageItems = [
        { id: 1, name: "Press Release Q2FY25 Financial and Operational Performance" },
        { id: 2, name: "Press Release Q1FY25 Financial and Operational Performance" },
        { id: 3, name: "Press Release regarding Q4 & FY24 Financial and Operational" },
        {id:4,name:"Press Release for Q3 FY 2020"},
        {id:5,name:"Press Release for Q2 FY 2019"},
        {id:6,name:"Press Release regarding Q4 & FY24 Financial and Operational"},
        {id:7,name:"Press Release for Q3 FY 2020"},
    ];
    const [items, setitems] = useState(pageItems);
  return (
    
      <div className={`container ${style.parentPagination}`}>
        <ul className={style.pagination}>
          {items.map((item, index) => (
            <li key={index} className={style.paginationChild}>
              <p  className={style.paginationLink}>
                {item.name}
              </p>
              <img src="https://i.ibb.co/LDWnb8KG/noun-pdf-4680876-1.png"/>
            </li>
          ))}
        </ul>
      </div>

  );
}

export default Pagination;
