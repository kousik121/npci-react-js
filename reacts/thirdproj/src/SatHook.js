import axios from "axios";
import { useEffect, useState } from "react";

export default function myHook(url) {
    const [data, SetData] = useState([]);
    useEffect(() => {
        axios.get(url).then(a => SetData(a.data));
        // fetch(url).then(a => a.json()).then(b => SetData(b));
    }, [url]);
    return [data];
}