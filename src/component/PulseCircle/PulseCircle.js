import React from 'react'

import styles from './PulseCircle.module.scss'


export const PulseCircle = ({ 
  top, left, style, textTop, textLeft, dia, text, ...props 
}) => {
  const myStyle = {
    top: `${top}px`,
    left: `${left}px`,
    transform: style.transform,
    transition: style.transition
  }
  const styleText = {
    top: `${textTop}px`,
    left: `${textLeft}px`
  }
  const styleMainCircle = {
    width: `${dia}px`,
    height: `${dia}px`
  }
  const styleSubCircle = {
    width: `${Math.ceil(dia / 3)}px`,
    height: `${Math.ceil(dia / 3)}px`,
    top: `${Math.floor(dia / 3)}px`,
    left: `${Math.floor(dia / 3)}px`
  }
  return (
    <div className={`${styles.pulseCircle}`} style={myStyle}>
      <div className={`${styles.pulseCircleWrap}`}>
        <div className={`${styles.circleText}`} style={styleText}>{text}</div>
        <div className={`${styles.circle1}`} style={styleMainCircle}></div>
        <div className={`${styles.circle2}`} style={styleSubCircle}></div>
        <div className={`${styles.circle3}`} style={styleSubCircle}></div>
        <div className={`${styles.circle4}`} style={styleSubCircle}></div>
      </div>
    </div>
  )
}