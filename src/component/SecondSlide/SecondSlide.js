import React from 'react'

import styles from './SecondSlide.module.scss'
import { IceBrick } from '../IceBrick/IceBrick'

const SecondSlide = ({ ...props }) => {
  return (
    <div className={`${styles.secondSlide} ${styles.horizontalSlide}`}>
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

export default SecondSlide