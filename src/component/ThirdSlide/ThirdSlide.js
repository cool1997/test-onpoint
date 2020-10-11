import React from 'react'

import styles from './ThirdSlide.module.scss'
import { IceBrick } from '../IceBrick/IceBrick'

export const ThirdSlide = props => {
  return (
    <div className={`${styles.thirdSlide} ${styles.horizontalSlide} horizontal-slide`}>
      <div className={`${styles.thirdSlideTitle}`}>
        Звенья патогенеза СД2
      </div>
      <div className={`${styles.thirdSlideBox}`}/>
      <IceBrick id='11' top='109' left='-5'/>
      <IceBrick id='12' top='212' left='936'/>
      <IceBrick id='13' top='588' left='153'/>
    </div>
  )
}