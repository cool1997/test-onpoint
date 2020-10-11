import React, { useEffect, useState } from 'react'

import styles from './Slide3.module.scss'
import { Slider } from '../Slider/Slider'
import { FirstSlide } from '../FirstSlide/FirstSlide'
import { SecondSlide } from '../SecondSlide/SecondSlide'
import { ThirdSlide } from '../ThirdSlide/ThirdSlide'
import { horizontalScroll } from '../horizontalScroll/horizontalScroll'


export const Slide3 = ({ ...props }) => {
  const [activeSlide, setActiveSlide] = useState(0)
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
    <section className={`${props.className} ${styles.Slide3}`}>
      <div className={`${styles.wrapper} slides-wrapper`}>
        <FirstSlide/>
        <SecondSlide/>
        <ThirdSlide/>
      </div>
      <Slider changeSlide={Handle.onSlideChange}/>
    </section>
  )
}