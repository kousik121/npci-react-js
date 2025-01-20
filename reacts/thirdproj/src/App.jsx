import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import VehComp from './VehComp'
import NewCompA from './NewCompA'
import FormCompA from './FromCompA'
import CompMemo from './CompMemo'
import HookComp from './HookComp'
import CbComp from './CbComp'
import FilterComp from './FilterComp'
//import './App.css'

function App() {

  return (
    <>
      <h1>Welcome to state mgt with redux</h1>
      <br />
      {/*<VehComp />*/}
      {/* <NewCompA /> */}
      {/* <FormCompA /> */}
      {/* <CompMemo /> */}
      {/* <HookComp /> */}
      {/* <CbComp /> */}
      <FilterComp />
    </>
  )
}

export default App
