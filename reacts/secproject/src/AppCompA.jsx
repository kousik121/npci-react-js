import React from "react";
import {setState, useRef, useState, useEffect} from "react";

function AppCompA(props) {
    const [ip, SetIp] = useState(0);
    const count = useRef(0);
    useEffect(() => {
        count.current = count.current + 1
    })
    return <>
        <h1 className="alert alert-info">{ip}</h1>
        <br />
        <input type="text" value={ip} onChange={(e) => SetIp(e.target.value)} />
        <br />
        <button className="btn btn-success">{count.current}</button>
    </>
}

export default AppCompA;