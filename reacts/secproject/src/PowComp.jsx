function PowComp(props) {
    return <>
        <h1 className="alert alert-primary">Pow({props.a}, 2) = {Math.pow(props.a, 2)}</h1>
    </>
}

export default PowComp;