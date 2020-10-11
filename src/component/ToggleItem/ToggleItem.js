import React from 'react'

import styles from './ToggleItem.module.scss'


export const ToggleItem = ({ checked, setCurrentSlide, id, ...props }) => {
    return (
        <>
            <input 
                className={`visually-hidden`} 
                checked={checked}
                onChange={()=>setCurrentSlide(id)}
                id={id} 
                type={`radio`} 
                name={`slide`}/>
            <label 
                className={`${styles.ToggleItem}`}
                htmlFor={id}/>
        </>
    )
}