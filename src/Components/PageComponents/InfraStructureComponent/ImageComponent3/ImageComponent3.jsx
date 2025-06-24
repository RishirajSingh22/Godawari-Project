import React from 'react'
import style from "../Styles/ImageComponent.module.css"
import TextBox3 from './TextBox3'
import ImageBox3 from './ImageBox3'

function ImageComponent3() {
  return (
   <section className={style.ImageComponent}>
        <ImageBox3/>
    <TextBox3/>

   </section>
  )
}

export default ImageComponent3

