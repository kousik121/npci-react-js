import React from "react";

const myref = React.createRef();
class ClsA extends React.Component{
    constructor(props) {
        super(props);
    }
    eve(e) {
        myref.current.focus();
    }
    render() {
        return (<>
            <input type="text" /><br />
            <input type="text" ref={myref} /><br />
            <input type="text" /><br />
            <input type="text" /><br />
            <button onClick={this.eve}>Go to Email</button>
        </>)
    }
}

export default ClsA;