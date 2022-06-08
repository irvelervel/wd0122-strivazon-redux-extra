import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style/index.css'

import { Provider } from 'react-redux'
import store from './redux/store'
// if @reduxjs/toolkit provides the main redux logic, in plain JS,
// react-redux provides the bridge between redux AND react

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
    {/* in this way we're providing the redux logic to the WHOLE application tree */}
  </Provider>
)
