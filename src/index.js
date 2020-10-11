import React from 'react'
import ReactDOM from 'react-dom'

import './assets/css/reset.css'
import './assets/css/fonts.css'
import './index.scss'


const render = () => {
  const App = require('./App/App').default


  document.addEventListener('touchmove', (evt)=>{
    evt.preventDefault()
  }, { passive: false })


  ReactDOM.render(
      <App />,
    document.getElementById('root')
  )
}

render()

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App/App', render)
}
