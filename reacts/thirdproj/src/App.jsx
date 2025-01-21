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
import FormikComp from './FormikComp'
import FormikFormA from './FormikFormA'
import { validateYupSchema } from 'formik'
import MyRedComp from './MyRedComp'
//import './App.css'

function App() {

  return (
    <>
      <h1>Welcome to formik</h1>
      <br />
      {/*<VehComp />*/}
      {/* <NewCompA /> */}
      {/* <FormCompA /> */}
      {/* <CompMemo /> */}
      {/* <HookComp /> */}
      {/* <CbComp /> */}
      {/* <FilterComp /> */}
      {/* <FormikComp /> */}
      {/* <FormikFormA /> */}
      <MyRedComp />
    </>
  )
}

export const myThunk = () => {
  return (dispatch) => {
    dispatch({
      value: 'hai',
      type: 'INC',
    });
  };
};

export default App
