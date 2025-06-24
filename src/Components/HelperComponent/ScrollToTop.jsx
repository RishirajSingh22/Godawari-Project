// import React, { useEffect } from 'react'

// const ScrollToTop = () => {


//   useEffect(()=>{
//     window.scrollTo(0,0)
//   },[])
//   return null;
    
  
// }

// export default ScrollToTop
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); 

  return null;
};

export default ScrollToTop;
