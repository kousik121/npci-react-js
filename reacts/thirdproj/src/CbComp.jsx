import { useCallback, useState } from "react";

var funCount = new Set();

export default function CbComp(props) {
    const [no, SetNo] = useState(0);
    const [num, SetNum] = useState(0);
    const incN = useCallback(() => {SetNo(no + 1)}, [no]);
    const decN = useCallback(() => {SetNo(no - 1)}, [no]);
    const incNum = useCallback(() => {SetNum(num + 1)}, [num]);
    funCount.add(incN);
    funCount.add(decN);
    funCount.add(incNum);
    return <>
        <p className="alert alert-info">{no}</p>
        <br />
        <p>Function count: {funCount.size}</p>
        <br />
        <button onClick={incN}>Inc</button>
        <button onClick={decN}>Dec</button>
        <button onClick={incNum}>IncFun</button>
    </>
}