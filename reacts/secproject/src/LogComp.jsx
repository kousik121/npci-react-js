function LogComp(props) {
    return <>
        <h1 className="alert alert-primary">Log({props.a}) = {Math.log(props.a)}</h1>
    </>
}

export default LogComp;