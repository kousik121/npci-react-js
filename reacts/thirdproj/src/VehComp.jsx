import React from "react";
import { useDispatch, useSelector } from "react-redux";

function VehComp(props) {
    const counter = useSelector(state => state);
    const dispatch = useDispatch();
    return <>
        <div className="jumbotron">
            <h1 className="aler alert-success">{JSON.stringify(counter)}</h1>
        </div>
        <br />
        <br />
        <button onClick={(e) => dispatch({type: 'INC'})} className="btn btn-primary">Cars</button>
        <button onClick={(e) => dispatch({type: 'DEC'})} className="btn btn-success">Bikes</button>
    </>
}

export default VehComp;