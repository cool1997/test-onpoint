import React from 'react'

import styles from './Slide2.module.scss'

export const Slide2 = ({ ...props }) => {
  return (
    <section className={`${props.className} ${styles.Slide2}`}>
        <h2 className={`${styles.title}`}>
            Основа терапии —<br/>патогенез СД2
        </h2>
    </section>
  )
}