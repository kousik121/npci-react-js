import { useState } from "react";
import { set } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

function ChdCompFrm(props) {
    const counter = useSelector(state => state);
    const dispatch = useDispatch();
    return <>
        <h1 className="alert alert-info">
            {counter.myvalue}
        </h1>
    </>
}

export default ChdCompFrm;