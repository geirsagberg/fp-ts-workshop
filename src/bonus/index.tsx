import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

const App = () => <div>Hello</div>

const appEl = document.createElement('div')
document.body.append(appEl)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  appEl
)
