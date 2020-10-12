import React, { useEffect, useState } from 'react'

import styles from './App.module.scss'
import { ToggleItem } from '../component/ToggleItem/ToggleItem'
import { Slide1 } from '../component/Slide1/Slide1'
import { Slide2 } from '../component/Slide2/Slide2'
import { Slide3 } from '../component/Slide3/Slide3'


const App = ({ location, ...props }) => {
	const [initialize, setInitialize] = useState(false)
	const [currentSlide, setCurrentSlide] = useState(1)
	const [currentSlideX, setCurrentSlideX] = useState(1)
	const [startTouch, setStartTouch] = useState(null)
	const [endTouch, setEndTouch] = useState(null)
	const [startTouchX, setStartTouchX] = useState(null)
	const [endTouchX, setEndTouchX] = useState(null)
	

	const slideToggleItemsId = [1,2,3]


	useEffect(() => {
		setInitialize(true)
	}, [])

	useEffect(() => {
		if (initialize) {
			if((startTouch - endTouch) > 100 && currentSlide < 3) {
				setCurrentSlide((prev) => prev + 1)
			} else if(endTouch - startTouch > 100 && currentSlide > 1) {
				setCurrentSlide((prev) => prev - 1)
			} else if(startTouchX - endTouchX > 100 && currentSlide == 3 &&
				currentSlideX > 1) {
				setCurrentSlideX((prev) => prev - 1)
			} else if(endTouchX - startTouchX > 100 && currentSlide == 3 &&
				currentSlideX < 3) {
				setCurrentSlideX((prev) => prev + 1)
			}
		}
	}, [endTouch])

	useEffect(() => {
		window.location.hash = `0${currentSlide}`
		setCurrentSlideX(1)
	}, [currentSlide])

	useEffect(() => {
		if(currentSlide == 3) {
			window.location.hash = `00${currentSlideX}`
		}
	}, [currentSlideX])
	

	const Handle = {
		setStartTouch: (evt) => {
			setStartTouch(evt.touches[0].clientY)
			setStartTouchX(evt.touches[0].clientX)
		},
		setEndTouch: (evt) => {
			setEndTouch(evt.changedTouches[0].clientY)
			setEndTouchX(evt.changedTouches[0].clientX)
		}
		// setStartTouch: (evt) => {
		// 	//  evt.preventDefault()
		// 	setStartTouch(evt.touches[0].clientY)
		// },
		// setEndTouch: (evt) => {
		// 	setEndTouch(evt.changedTouches[0].clientY)
		// }
	}


	return (
		<div className={`${styles.App}`}>
			<nav className={`${styles.navbar}`}>
				{slideToggleItemsId.map((item) => <ToggleItem key={item} setCurrentSlide={setCurrentSlide} id={item} checked={currentSlide == item}/>)}
			</nav>

			<main className={`${styles.main} ${currentSlide == 1 ? styles.activeBtn1 : ``}`}
				
				onTouchStart={(evt) => Handle.setStartTouch(evt)}
				onTouchEnd={(evt) => Handle.setEndTouch(evt)}>

				<Slide1 id={`01`} className={`${styles.slide}`}/>
				<Slide2 id={`02`} className={`${styles.slide}`}/>
				{/* <Slide3 id={`03`} className={`${styles.slide}`}/> */}
				<div id={`03`} className={`${styles.slide}`}>
					<div id={`001`} className={`${styles.slide} ${styles.slide001}`}>
						hi1
					</div>
					<div id={`002`} className={`${styles.slide} ${styles.slide002}`}>
						hi2
					</div>
					<div id={`003`} className={`${styles.slide} ${styles.slide003}`}>
						hi3
					</div>
				</div>
			</main>
		</div>
	)
}



export default App




//////////////////////////////////////////////////////

// import React, { useEffect, useState } from 'react'

// import styles from './App.module.scss'
// import { ToggleItem } from '../component/ToggleItem/ToggleItem'
// import { Slide1 } from '../component/Slide1/Slide1'
// import { Slide2 } from '../component/Slide2/Slide2'
// import { Slide3 } from '../component/Slide3/Slide3'


// const App = ({ location, ...props }) => {
// 	const [initialize, setInitialize] = useState(false)
// 	const [currentSlide, setCurrentSlide] = useState(1)
// 	const [startTouch, setStartTouch] = useState(null)
// 	const [endTouch, setEndTouch] = useState(null)
	

// 	const slideToggleItemsId = [1,2,3]


// 	useEffect(() => {
// 		setInitialize(true)
// 	}, [])

// 	useEffect(() => {
// 		if (initialize) {
// 			if(startTouch - endTouch > 100 && currentSlide < 3) {
// 				setCurrentSlide((prev) => prev + 1)
// 			} else if(endTouch - startTouch > 100 && currentSlide > 1) {
// 				setCurrentSlide((prev) => prev - 1)
// 			}
// 		}
// 	}, [endTouch])

// 	useEffect(() => {
// 		window.location.hash = `0${currentSlide}`
// 	}, [currentSlide])
	

// 	const Handle = {
// 		setStartTouch: (evt) => {
// 			//  evt.preventDefault()
// 			setStartTouch(evt.touches[0].clientY)
// 		},
// 		setEndTouch: (evt) => {
// 			setEndTouch(evt.changedTouches[0].clientY)
// 		}
// 	}


// 	return (
// 		<div className={`${styles.App}`}>
// 			<nav className={`${styles.navbar}`}>
// 				{slideToggleItemsId.map((item) => <ToggleItem key={item} setCurrentSlide={setCurrentSlide} id={item} checked={currentSlide == item}/>)}
// 			</nav>

// 			<main className={`${styles.main} ${currentSlide == 1 ? styles.activeBtn1 : ``}`}
				
// 				onTouchStart={(evt) => Handle.setStartTouch(evt)}
// 				onTouchEnd={(evt) => Handle.setEndTouch(evt)}>

// 				<Slide1 id={`01`} className={`${styles.slide}`}/>
// 				<Slide2 id={`02`} className={`${styles.slide}`}/>
// 				<Slide3 id={`03`} className={`${styles.slide}`}/>
// 			</main>
// 		</div>
// 	)
// }



// export default App





////////////////////////////////////////////

// import React, { useEffect, useState } from 'react'

// import styles from './App.module.scss'
// import { ToggleItem } from '../component/ToggleItem/ToggleItem'
// import { Slide1 } from '../component/Slide1/Slide1'
// import { Slide2 } from '../component/Slide2/Slide2'
// import { Slide3 } from '../component/Slide3/Slide3'


// const App = ({ location, ...props }) => {
// 	const [initialize, setInitialize] = useState(false)
// 	const [currentSlide, setCurrentSlide] = useState(3)
// 	const [startTouch, setStartTouch] = useState(null)
// 	const [endTouch, setEndTouch] = useState(null)
	

// 	const slideToggleItemsId = [1,2,3]


// 	useEffect(() => {
// 		setInitialize(true)
// 	}, [])

// 	useEffect(() => {
// 		if (initialize) {
// 			if(startTouch - endTouch > 100 && currentSlide < 3) {
// 				setCurrentSlide((prev) => prev + 1)
// 			} else if(endTouch - startTouch > 100 && currentSlide > 1) {
// 				setCurrentSlide((prev) => prev - 1)
// 			}
// 		}
// 	}, [endTouch])
	

// 	const Handle = {
// 		setStartTouch: (evt) => {
// 			//  evt.preventDefault()
// 			setStartTouch(evt.touches[0].clientY)
// 		},
// 		setEndTouch: (evt) => {
// 			setEndTouch(evt.changedTouches[0].clientY)
// 		}
// 	}


// 	return (
// 		<div className={`${styles.App}`}>
// 			<nav className={`${styles.navbar}`}>
// 				{slideToggleItemsId.map((item) => <ToggleItem key={item} setCurrentSlide={setCurrentSlide} id={item} checked={currentSlide == item}/>)}
// 			</nav>

// 			<main className={`${styles.main} ${currentSlide == 1 ? styles.activeBtn1 : ``}`}
				
// 				onTouchStart={(evt) => Handle.setStartTouch(evt)}
// 				onTouchEnd={(evt) => Handle.setEndTouch(evt)}
// 				style={{transform: `translateY( ${(currentSlide - 1) * -100}vh)`}}>

// 				<Slide1 className={`${styles.slide}`}/>
// 				<Slide2 className={`${styles.slide}`}/>
// 				<Slide3 className={`${styles.slide}`}/>

// 			</main>
// 		</div>
// 	)
// }



// export default App