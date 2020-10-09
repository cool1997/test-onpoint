import React from 'react'

import styles from './Navbar.module.scss'


export const Navbar = ({ current = 0, changeSlide, ...props }) => {
	return (
		<nav className={`${styles.Navbar}`}>
			<button 
				className={`${styles.item}`} 
				id={`0`} 
				onClick={changeSlide} 
				style={{background: (current == 0) ? '#f78b1f': '#fff'}}/>
			<button 
				className={`${styles.item}`} 
				id={`1`} 
				onClick={changeSlide} 
				style={{background: (current == 1) ? '#f78b1f': '#fff'}}/>
			<button 
				className={`${styles.item}`} 
				id={`2`} 
				onClick={changeSlide} 
				style={{background: (current == 2) ? '#f78b1f': '#fff'}}/>
		</nav>
	)
}



// import React from 'react'
// import { NavLink } from 'react-router-dom'

// import styles from './Navbar.module.scss'


// export const Navbar = ({ current = 0, changeSlide, ...props }) => {
// 	return (
// 		<nav className={`${styles.Navbar}`}>
// 			<NavLink 
// 				className={`${item}`} 
// 				id={`0`} 
// 				onClick={changeSlide} 
// 				activeClassName={styles.active} 
// 				to={`/slide1`}/>
// 			<NavLink 
// 				className={`${item}`} 
// 				id={`1`} 
// 				onClick={changeSlide} 
// 				activeClassName={styles.active} 
// 				to={`/slide2`}/>
// 			<NavLink 
// 				className={`${item}`} 
// 				id={`2`} 
// 				onClick={changeSlide} 
// 				activeClassName={styles.active} 
// 				to={`/slide3`}/>
// 		</nav>
// 	)
// }
