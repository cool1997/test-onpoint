import React from 'react'

import styles from './SecondBlock.module.scss'
import { IceBrick } from '../IceBrick/IceBrick'

export const SecondBlock = ({ current, ...props }) => {
  let translate = (current > 1) 
  ? 'translate3d(0,-70px, 1px)' 
  : (current < 1) 
    ? 'translate3d(0,70px, 1px)' 
    : 'translate3d(0, 0px, 1px)'

  const styleTranslate = {
    transform: translate,
    transition: '0.5s'
  }

  return (
    <div className={`${styles.SecondBlock}`}>
      <div className={`${styles.secondBlockTitle}`}>
        Основа терапии —<br/>патогенез СД2
      </div>
      <IceBrick style={styleTranslate} id='1' top='33' left='877'/>
      <IceBrick style={styleTranslate} id='2' top='161' left='82'/>
      <IceBrick style={styleTranslate} id='3' top='442' left='232'/>
      <IceBrick style={styleTranslate} id='4' top='585' left='713'/>
    </div>
  )
}