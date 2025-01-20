import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import CorouComp from './CorouComp.jsx'
import NApp from './NApp.jsx'
import MathComp from './MathComp.jsx'
import AComp from './MyHoc.jsx'
import MyHoc from './MyHoc.jsx'
import AppCompA from './AppCompA.jsx'
import ClsA from './ClsA.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <CorouComp /> */}
    {/* <NApp /> */}
    {/* <MathComp /> */}
    {/* <MyHoc /> */}
    {/* <AppCompA /> */}
    <ClsA />
  </StrictMode>,
)
