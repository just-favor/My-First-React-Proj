import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import './Styles/header.css'
// import './Styles/first-hero.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
