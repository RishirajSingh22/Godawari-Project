import React from 'react'
import style from "../Styles/ImageComponent.module.css"
import TextBox2 from './TextBox2'
import ImageBox2 from './ImageBox2'

function ImageComponent2() {
  return (
   <section className={style.ImageComponent}>
    <TextBox2/>
    <ImageBox2/>
    
   </section>
  )
}

export default ImageComponent2
