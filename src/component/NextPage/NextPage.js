import React from 'react';

import styles from './NextPage.module.scss'


export const NextPage = ({ ...props }) => {
  return (
    <div className={`${styles.NextPage}`}>
      <div className={`${styles.moveDown}`}>
        <div>Листайте вниз</div>
        <span className={`${styles.arrowDown}`}></span>
      </div>
      <div className={`${styles.moveDownBg}`}></div>
    </div>
  )
}