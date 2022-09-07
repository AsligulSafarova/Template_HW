import React from 'react';
import {dat} from "./datas/data";
import AboutCompany from '../AboutCompany';
import s from "./style.module.sass"

export default function index() {
  return (
    <main>
<div className={["wrapper",s.wrapper].join(" ")}>
   <div className={["wrapper",s.text]}>
     <p className={s.about}>О нас</p>
    <p className={s.company}>Компания <span className={s.span}>ИвановПром</span> </p>
    <p className={s.lorem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptas autem omnis,
     incidunt inventore officia in reprehenderit magnam harum sapiente
     sed vel nulla laborum reiciendis repudiandae voluptatum repellat possimus aliquid.lorem
     rem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptas autem omnis,
</p>
   </div>
   
<div className={["wrapper",s.map].join(" ")}> 
   {
        dat.map(el=><AboutCompany key={el.id} {...el}/>)
    }
</div>
         </div>
 
    </main>
  )  
}
