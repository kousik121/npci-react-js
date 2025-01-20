import React from "react";

class SecComp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<>
            <h1>Child area</h1>
            <br />
            <hr />
            <h1>{this.props.a}</h1>
            <br />
            {this.props.b}
            <br />
            {/* {this.props.c.map(n => <p>{n}</p>)} */}
            <br />
            <h1>{JSON.stringify(this.props.d)}</h1>
            <br />
            {this.props.e?<p>True</p>:<p>False</p>}
        </>)
    }
}

export default SecComp;