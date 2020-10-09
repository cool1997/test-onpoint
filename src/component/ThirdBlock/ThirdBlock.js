import React, { useEffect, useState } from 'react'

import styles from './ThirdBlock.module.scss'
import { FirstSlide } from '../FirstSlide/FirstSlide'
import { SecondSlide } from '../SecondSlide/SecondSlide'
import { ThirdSlide } from '../ThirdSlide/ThirdSlide'
import { horizontalScroll } from '../horizontalScroll/horizontalScroll'
import { Scroller } from '../Scroller/Scroller'

export const ThirdBlock = ({ ...props }) => {
  const [activeSlide, setActiveSlide] = useState(0)
  // const [prevSlide, setPrevSlide] = useState(0)
  const [scroller, setScroller] = useState({moveRight: null})


  useEffect(() => {
    setScroller(horizontalScroll())
  }, [])


  const Handle = {
    onSlideChange: (active) => {
      if (active == activeSlide) return
      if(activeSlide < active) {
        scroller.moveRight(activeSlide, active)
      } else {
        scroller.moveLeft(activeSlide, active)
      }
      setActiveSlide(active)
    }
  }

  
  return (
    <div className={`${styles.ThirdBlock}`}>
      <div className={`${styles.slidesWrapper}`}>
        <FirstSlide/>
        <SecondSlide/>
        <ThirdSlide/>
      </div>
      <Scroller changeSlide={() => Handle.onSlideChange()}/>
    </div>
  )
}