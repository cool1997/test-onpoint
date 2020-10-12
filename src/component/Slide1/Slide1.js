import React from 'react'

import styles from './Slide1.module.scss'


export const Slide1 = ({ ...props }) => {
  return (
    <section className={`${props.className} ${styles.Slide1}`} id={props.id}>
        <h2 className={`${styles.title}`}>
          Всегда ли цели терапии СД2<br/>на поверхности?
        </h2>
    </section>
  )
}