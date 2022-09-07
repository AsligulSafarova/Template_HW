import React from 'react';
import Cards from '../Cards';
import s from "./style.module.sass"

export default function CardsList({infos}) {
  return (
    <section className={[ "wrapper", s.cards].join(" ")} >
    <div className = {s.wrapper}>
    <p className={s.p}>Наши услуги</p>
     <h1 className={s.h2}>Мы специализируемся</h1>
   <div className={s.container}>

  {
    infos.map(el=><Cards key={el.id} {...el}/>)
}  
</div>
    </div> 
    </section>
  )
}
