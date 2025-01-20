import { useMemo, useState } from "react";

function CompMemo(props) {
    const [b, SetB] = useState(0);
    const longCal = useMemo(() => longCalculation(), [b]);

    return <>
        <div>
            {longCal}
            {longCalculation()}
        </div>
    </>
}

function longCalculation() {
    let str = '';
    for (let i = 0; i < 20000; i++) {
        str += "Sqrt(" + i + ")=" + Math.sqrt(i) + ";" + "\n";
    }
    return str;
}

export default CompMemo;