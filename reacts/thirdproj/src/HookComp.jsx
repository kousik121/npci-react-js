import { useEffect, useState } from "react"
import myHook from "./SatHook";

export default function HookComp(props) {
    return <>
        <div className="jumbotron">
            {
            myHook("https://jsonplaceholder.typicode.com/posts").map(n => <p className="alert alert-success">{JSON.stringify(n)}</p>)
            }
        </div>
    </>
}