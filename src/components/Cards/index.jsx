import React from 'react';
import s from "./style.module.sass";


export default function Cards({title, img, link_title}) {
  const style ={
    backgroundImage:`url(${img})`,
    backgroundRepeat: "no-repeat",
    objectFit:"cover",
    backgroundAttachment: "center",
    backgroundSize: "cover"
    
  }
  return (
    <div className={s.card} style ={style}>
     <p>{title}</p>
     <button  className = {s.button}>{link_title}</button>
    </div>
  )
}
