import { useEffect, useState } from "react";

function FirstFun(props) {
    const [a, SetA] = useState(1009);
    const [meher, SetMeher] = useState('This is a string');
    const [c, SetC] = useState(false);
    const [d, SetD] = useState({id: 1009, name: 'Sureshwar', email: 'sureshwar@gmail.com'});
    const [e, SetE] = useState([1, 2, 3, 4]);
    const [data, SetData] = useState([]);
    const url = 'https://jsonplaceholder.typicode.com/todos';
    useEffect(() => {
        SetA(9001);
        SetMeher("This is a changed string");
        SetC(true);
        SetD({id: 9090, name: 'Junaid', email: 'Junaid@yahoo.com'});
        SetE([3, 4, 5, 6]);
        fetch(url).then(a => a.json()).then(b => SetData(b));
    }, []);
    return(<>
        <h1 style={{backgroundColor: 'black', color: 'yellow'}}>
            This is our first functional component
            <br />
            {a}
            <br />
            {meher}
            <br />
            {JSON.stringify(d)}
            <br />
            {c? 'This is true': 'This is false'}
            <br />
            {e.map(n => <p>{n}</p>)}
            <br />
        </h1>
        <h2>{JSON.stringify(data)}</h2>
    </>)
}

export default FirstFun;