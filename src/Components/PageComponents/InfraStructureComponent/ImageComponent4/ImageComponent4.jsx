import React from 'react'
import style from "../Styles/ImageComponent.module.css"
import ImageBox4 from './ImageBox4'
import TextBox4 from './TextBox4'

function ImageComponent4() {
  return (
   <section className={style.ImageComponent}>
    <TextBox4/>
     <ImageBox4/>
   
    
   </section>
  )
}

export default ImageComponent4

