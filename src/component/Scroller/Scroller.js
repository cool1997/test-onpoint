import React, { useState } from 'react'

import styles from './Scroller.module.scss'


export const Scroller = ({ ...props }) => {
  const [position, setPosition] = useState(0)
  const [startPos, setStartPos] = useState(0)
  const [endPos, setEndPos] = useState(588)
  const [centerPos, setCenterPos] = useState(296)
  const [touchEnd, setTouchEnd] = useState(false)


  const Handle = {
    onTouchStart: (evt) => {
      this.setState({
        touchEnd: false,
        startPos: evt.touches[0].clientX - this.state.position
      })
    },
  
    onTouchMove: (evt) => {
      const { position, centerPos, endPos } = this.state
      const relPos = evt.touches[0].clientX - this.state.startPos
      if(relPos >= this.state.endPos || relPos <= 0 ) return
      this.setState({
        position: relPos
      })
      if(position < centerPos / 2) {
        this.props.changeSlide(0)
      } else if (position >= centerPos / 2 && position < endPos - ((endPos - centerPos) / 2)) {
        this.props.changeSlide(1)
      } else {
        this.props.changeSlide(2)
      }
    },
  
    onTouchEnd: (evt) => {
      const { position, centerPos, endPos } = this.state
      this.setState({
        touchEnd: true
      })
      if(position < centerPos / 2) {
        this.setState({ position: 0 })
      } else if (position >= centerPos / 2 && position < endPos - ((endPos - centerPos) / 2)) {
        this.setState({ position: centerPos })
      } else {
        this.setState({ position: endPos })
      }
    },
  }

  //   const { position } = this.state
  return (
    <div className={`${styles.scroller}`}>
      <div className={`${styles.scrollerLine}`}>
        <div 
          className={`${styles.scrollerProgress}`} 
          style={{width: position, transition: this.state.touchEnd ? '1s': '0s'}}/>
        <div  
          className={`${styles.scrollerIcon}`} 
          style={{transform: `translate(${this.state.position}px, -50%)`, transition: this.state.touchEnd ? '1s': '0s'}} 
          onTouchStart={Handle.onTouchStart}
          onTouchMove={Handle.onTouchMove}
          onTouchEnd={Handle.onTouchEnd}
          >
        </div>
      </div>
      <div className={`${styles.scrollerPoints}`}>
        <span>1988</span>
        <span>2009</span>
        <span>2016</span>
      </div>
    </div>
  )
  
}