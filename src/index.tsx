import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeContextProvider } from './assets/theme/ThemeContextProvider'
import App from './App'
import './assets/styles/main.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Router>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </Router>
  </React.StrictMode>
)
