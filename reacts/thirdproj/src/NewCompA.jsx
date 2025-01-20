import { useDebugValue } from "react";
import { useDispatch, useSelector } from "react-redux";

function NewCompA(props) {
    const counter = useSelector(state => state);    //mapStateToProps
    const dispatch = useDispatch();     //mapDispatchToProps
    return <>
        <div className="jumbotron">
            <h1 className="alert alert-danger">
                {JSON.stringify(counter)}
            </h1>
        </div>
        <button className="btn btn-success" value="Octova Skoda" onClick={(e) => dispatch({type: 'INC', myvalue: e.target.value})}>Skoda</button>
        <button className="btn btn-danger" value="Bennele Cruizer" onClick={(e) => dispatch({type: 'DEC', myvalue: e.target.value})}>Cruizer</button>
    </>
}

export default NewCompA;