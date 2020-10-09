import React from 'react'

import styles from './IceBrick.module.scss'

const IceBrick = ({ style, top, left, id, ...props }) => {
  const transform = (style) ? style.transform : ''
  const transition = (style) ? style.transition : ''
  const styleIceBrick = {
    top: `${top}px`,
    left: `${left}px`,
    transform: `${transform}`,
    transition: `${transition}`
  }
  return (
    <div className={`${styles.iceBrick} ${styles.iceBrick}${id}`} style={styleIceBrick}/>
  )
}

export default IceBrick