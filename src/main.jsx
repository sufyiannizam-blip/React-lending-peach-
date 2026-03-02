
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from './component/Header.jsx'
import { StrictMode } from 'react'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
