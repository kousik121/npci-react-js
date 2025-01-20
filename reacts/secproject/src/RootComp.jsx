function RootComp(props) {
    return <>
        <h1 className="alert alert-primary">Sqrt({props.a}) = {Math.sqrt(props.a)}</h1>
    </>
}

export default RootComp;