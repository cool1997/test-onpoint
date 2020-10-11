import React, { useEffect, useState } from 'react'

import styles from './App.module.scss'
import { ToggleItem } from '../component/ToggleItem/ToggleItem'
import { Slide1 } from '../component/Slide1/Slide1'
import { Slide2 } from '../component/Slide2/Slide2'
import { Slide3 } from '../component/Slide3/Slide3'


const App = ({ location, ...props }) => {
	const [initialize, setInitialize] = useState(false)
	const [currentSlide, setCurrentSlide] = useState(3)
	const [startTouch, setStartTouch] = useState(null)
	const [endTouch, setEndTouch] = useState(null)
	

	const slideToggleItemsId = [1,2,3]


	useEffect(() => {
		setInitialize(true)
	}, [])

	useEffect(() => {
		if (initialize) {
			if(startTouch - endTouch > 100 && currentSlide < 3) {
				setCurrentSlide((prev) => prev + 1)
			} else if(endTouch - startTouch > 100 && currentSlide > 1) {
				setCurrentSlide((prev) => prev - 1)
			}
		}
	}, [endTouch])
	

	const Handle = {
		setStartTouch: (evt) => {
			//  evt.preventDefault()
			setStartTouch(evt.touches[0].clientY)
		},
		setEndTouch: (evt) => {
			setEndTouch(evt.changedTouches[0].clientY)
		}
	}


	return (
		<div className={`${styles.App}`}>
			<nav className={`${styles.navbar}`}>
				{slideToggleItemsId.map((item) => <ToggleItem key={item} setCurrentSlide={setCurrentSlide} id={item} checked={currentSlide == item}/>)}
			</nav>

			<main className={`${styles.main} ${currentSlide == 1 ? styles.activeBtn1 : ``}`}
				
				onTouchStart={(evt) => Handle.setStartTouch(evt)}
				onTouchEnd={(evt) => Handle.setEndTouch(evt)}
				style={{transform: `translateY( ${(currentSlide - 1) * -100}vh)`}}>

				<Slide1 className={`${styles.slide}`}/>
				<Slide2 className={`${styles.slide}`}/>
				<Slide3 className={`${styles.slide}`}/>

			</main>
		</div>
	)
}



export default App