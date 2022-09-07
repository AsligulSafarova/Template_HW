import React from 'react';
import logo from "./media/buh_one.png";
import s from "./style.module.sass";

export default function NavBar() {
  return (
    <nav className={["wrapper",s.nav].join(" ")}>
    <div className={s.wrapper}>
    <a href="#">
    <img src={logo} alt="avatar"/>
     </a>
<ul className={s.ul}>
    <li>Главная</li>
    <li>услуги</li>
    <li>кейсы</li>
    <li>о компании</li>
    <li>контакты</li>
</ul>
<button className={s.button}>Связаться</button>
    </div>
      </nav>
  )
}
