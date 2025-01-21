import { useReducer } from "react";
import reducerd from "./reducerd";

const initialState = {count: 0}

function MyRedComp(props) {
    const [state, dispatch] = useReducer(reducerd, initialState);
    function inc() {
        dispatch({type: 'INC'})
    }
    function dec() {
        dispatch({type: 'DEC'})
    }
    return <>
        <h1>{state.count}</h1>
        <br />
        <button onClick={inc}>INC</button>
        <button onClick={dec}>DEC</button>
    </>
}

export default MyRedComp;