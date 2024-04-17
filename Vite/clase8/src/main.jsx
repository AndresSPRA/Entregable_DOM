import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Time from './Time.jsx'
import Calculator from './Small_calc.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Time />
    <Calculator />
    <App />
  </React.StrictMode>,
)
