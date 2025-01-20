import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import PApp from './PApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ParComp />
  </StrictMode>,
)
