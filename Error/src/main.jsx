import React from 'react'
import Navbar from './Navbar.jsx'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Navbar/>
    <App />
  </React.StrictMode>,
)
