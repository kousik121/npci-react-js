import React from "react";

var newData = {
    data: 'This is the data coming from HOC....',
    dataa: Math.sqrt(2)
}

var MyHoc = ComposedComponent => class extends React.Component {
    componentDidMount() {
        this.setState({data: newData.data})
    }
    render() {
        return <ComposedComponent {...this.state} {...this.props} />
    }
}

var MyHoca = ComposedComponent => class extends React.Component {
    componentDidMount() {
        this.setState({dataa: newData.dataa})
    }
    render() {
        return <ComposedComponent {...this.state} {...this.props} />
    }
}

class AComp extends React.Component {
    render() {
        return (<>
            <h1>{this.props.data}</h1>
            <br />
            <label className="badge badge-danger">{this.props.dataa}</label>
        </>)
    }
}

export default MyHoca(MyHoc(AComp));