import { useState } from "react";
import LogComp from "./LogComp";
import PowComp from "./PowComp";
import RootComp from "./RootComp";

function MathComp(props) {
    const [a, SetA] = useState(0);
    return <>
        Select a number for Math Ops;
        <select className="dropdown" onChange={(e) => SetA(e.target.value)}>
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => <option className="dropdown-item">{n}</option>)
            }
        </select>
        <DrawLine />
        <h1>Client area</h1>
        <DrawLine />
        <LogComp a = {a}/>
        <DrawLine />
        <RootComp a = {a}/>
        <DrawLine />
        <PowComp a = {a}/>
    </>
}

function DrawLine() {
    return<>
        <hr /><br />
    </>
}

export default MathComp;