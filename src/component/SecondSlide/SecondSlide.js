import React from 'react'

import styles from './SecondSlide.module.scss'
import { IceBrick } from '../IceBrick/IceBrick'

export const SecondSlide = ({ ...props }) => {
  return (
    <div className={`${styles.secondSlide} ${styles.horizontalSlide} horizontal-slide`}>
      <div className={`${styles.secondSlideTitle}`}>
        Смертельный октет
      </div>
      <div className={`${styles.secondSlideBox}`}/>
      <IceBrick id='8' top='94' left='474'/>
      <IceBrick id='9' top='239' left='46'/>
      <IceBrick id='10' top='571' left='899'/>
    </div>
  )
}