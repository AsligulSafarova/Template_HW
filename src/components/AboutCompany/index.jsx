import React from 'react';
import s from "./style.module.sass"

export default function AboutCompany({value, title, link_title, link_url}) {
  return (
    <div className ={s.container}>
    <p className={s.value}>{value}</p>
    <p className={s.title}>{title}</p>
    <p className={s.link}>{link_title}</p>

    </div>
  )
}
