import React, { useState } from 'react'
// import { Route, Switch } from 'react-router-dom'

import styles from './App.module.scss'
import { Navbar } from '../component/Navbar/Navbar'
import { FirstBlock } from '../component/FirstBlock/FirstBlock'
import { SecondBlock } from '../component/SecondBlock/SecondBlock'
import { ThirdBlock } from '../component/ThirdBlock/ThirdBlock'


const App = ({ ...props }) => {
	const [current, setCurrent] = useState(0)
	// const [translateLayer, setTranslateLayer] = useState(false)
	const [startTouchY, setStartTouchY] = useState(null)
	const [EndTouchY, setEndTouchY] = useState(null)

	const Handle = {
		onTouchStart: (evt) => {
			setStartTouchY(evt.touches[0].clientY)
			// setTranslateLayer(false)
		},
		onTouchEnd: (evt) => {
			setEndTouchY(evt.changedTouches[0].clientY)
			if(startTouchY - EndTouchY > 50 && current <= 1) {
				setCurrent((prev) => ++prev)
			}
			if(startTouchY - EndTouchY < -50 && current >= 1) {
				setCurrent((prev) => --prev)
			}
			// setTranslateLayer(true)
		},	
		onChangeSlide: (evt) => {
			setCurrent(evt.target.id)
			// setTranslateLayer(true)
		},
	}


	return (
		<div 
			className={`${styles.App}`}
			onTouchStart={Handle.onTouchStart}
			onTouchEnd={Handle.onTouchEnd}>
			
			<Navbar 
				changeSlide={Handle.onChangeSlide} 
				current={current}/>

			<main 
				className={`${styles.main}`}
				style={{transform: `translateY( ${current * -100}%)`}}>

				{
					// <Switch>
					// 	<Route path='/slide1' render={() => <FirstBlock id={`slide1`}  translateLayer={translateLayer} current={current}/>} />
					// 	<Route path='/slide2' render={() => <SecondBlock id={`slide2`}  current={current}/>} />
					// 	<Route path='/slide3' render={() => <ThirdBlock id={`slide3`} />} />
					// 	<Route path='/' exact render={() => <FirstBlock />} />
					// </Switch>
				}

				<FirstBlock 
					id={`slide1`} 
					// translateLayer={translateLayer}
					current={current}/>
				<SecondBlock 
					id={`slide2`} 
					current={current}/>
				<ThirdBlock 
					id={`slide3`}/>

			</main>
		</div>
	)
}


export default App