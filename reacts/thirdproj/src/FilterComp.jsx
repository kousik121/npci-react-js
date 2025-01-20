import { useFilter } from "@promise_learning/usefilter";
import { useEffect, useState } from "react";

export default function FilterComp(props) {
    const [data, SetData] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts").then(a => a.json()).then(b => SetData(b));
    }, [data])
    let searchData = {
        query: '',
        fields: ["userId"]
    }
    let filterData = {
        userId: [1]
    }
    const {loading, data: result} = useFilter({data, search: searchData, filters: filterData});
    return <>
        <div className="jumbotron">
            <p className="alert alert-info">
                {JSON.stringify(result)}
            </p>
        </div>
    </>
}