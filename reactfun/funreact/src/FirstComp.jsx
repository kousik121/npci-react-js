import React from "react";
import SecComp from "./SecComp";

class FirstComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 'I am coming from parent',
            b: 1009,
            c: [21, 22, 23],
            d: {id: 9001, name: "Jignaesh", mail:"Jignesh@yahoo.com"},
            e: false
        }
    }
    render() {
        return(<>
            <h1>Parent Area</h1>
            <br />
            <hr />
            <br />
            <SecComp a = {this.state.a} b = {this.state.b} c = {this.state.c} d = {this.state.d} e = {this.state.e} />    
        </>)
    }
}

export default FirstComp;