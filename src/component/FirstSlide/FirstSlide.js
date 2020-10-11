import React from 'react'
import styles from './FirstSlide.module.scss'

import { IceBrick } from '../IceBrick/IceBrick'

export const FirstSlide = ({ ...props }) => {
  return (
    <div className={`${styles.FirstSlide} ${styles.horizontalSlide} horizontal-slide`}>
      <div className={`${styles.firstSlideTitle}`}>
        Звенья патогенеза СД2
      </div>
      <div className={`${styles.firstSlideBox}`}/>
      <IceBrick id='5' top='112' left='911'/>
      <IceBrick id='6' top='227' left='666'/>
      <IceBrick id='7' top='554' left='21'/>
    </div>
  )
}