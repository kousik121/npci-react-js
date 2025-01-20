import axios from "axios";
import { useEffect, useState } from "react";

const FourFun = function(props) {
    const [data, SetData] = useState([]);
    const [dataa, SetDataa] = useState([]);
    const [datab, SetDatab] = useState([]);
    const url = 'https://jsonplaceholder.typicode.com/posts';
    useEffect(() => {
        axios.get(url).then(a => SetData(a.data));
        axios.post(url, {id: 10, name: 'Satish'}).then(c => SetDataa(c.data));
        axios.put(url + "/1").then(c => SetDatab(c));
    }, []);
    return (<>
        {JSON.stringify(data)}
        <hr />
        <h1>Posted data</h1>
        {JSON.stringify(dataa)}
        <br />
        {JSON.stringify(datab)}
    </>)
}

export default FourFun;