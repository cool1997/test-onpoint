import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter} from 'react-router-dom'

import './assets/css/reset.css'
import './assets/css/fonts.css'
import './index.scss'


const render = () => {
  const App = require('./App/App').default

  ReactDOM.render(
    <HashRouter basename={'https://cool1997.github.io/test-onpoint/'}>
      <App />
    </HashRouter>,
    document.getElementById('root')
  )
}

render()

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App/App', render)
}