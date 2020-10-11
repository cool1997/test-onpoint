import React, { useState } from 'react'

import styles from './Slider.module.scss'


export const Slider = ({ changeSlide, ...props }) => {
  const [position, setPosition] = useState(0)
  const [startPos, setStartPos] = useState(0)
  const [endPos, setEndPos] = useState(588)
  const [centerPos, setCenterPos] = useState(296)
  const [touchEnd, setTouchEnd] = useState(false)


  const Handle = {
    onTouchStart: (evt) => {
      setTouchEnd(false)
      setStartPos(evt.touches[0].clientX - position)
    },
  
    onTouchMove: (evt) => {
      const relPos = evt.touches[0].clientX - startPos
      if(relPos >= endPos || relPos <= 0 ) return
      setPosition(relPos)
      if(position < centerPos / 2) {
        changeSlide(0)
      } else if (position >= centerPos / 2 && position < endPos - ((endPos - centerPos) / 2)) {
        changeSlide(1)
      } else {
        changeSlide(2)
      }
    },
  
    onTouchEnd: (evt) => {
      setTouchEnd(true)
      if(position < centerPos / 2) {
        setPosition(0)
      } else if (position >= centerPos / 2 && position < endPos - ((endPos - centerPos) / 2)) {
        setPosition(centerPos)
      } else {
        setPosition(endPos)
      }
    },
  }


  return (
    <div className={`${styles.Slider}`}>
      <div className={`${styles.sliderLine}`}>
        <div 
          className={`${styles.sliderProgress}`} 
          style={{width: position, transition: touchEnd ? '1s': '0s'}}/>
        <div  
          className={`${styles.sliderIcon}`} 
          style={{transform: `translate(${position}px, -50%)`, transition: touchEnd ? '1s': '0s'}} 
          onTouchStart={Handle.onTouchStart}
          onTouchMove={Handle.onTouchMove}
          onTouchEnd={Handle.onTouchEnd}
          >
        </div>
      </div>
      <div className={`${styles.sliderPoints}`}>
        <span>1988</span>
        <span>2009</span>
        <span>2016</span>
      </div>
    </div>
  )
  
}