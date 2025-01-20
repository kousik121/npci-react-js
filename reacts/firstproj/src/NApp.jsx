import React from "react";
import AComp from "./AComp.jsx";
import BComp from "./BComp.jsx";
import CComp from "./CComp.jsx";
import ServComp from "./ServComp.jsx";
function NApp(props) {
    return (
    <>
        {/* <h1>Entry point</h1>
        <br /> */}
        {/* <CompA />
        <CompB /> 
        <CompC /> */}
        {/* <div className="pure-g">
            <div className="pure-u-1-3"><p><CompA /></p></div>
            <div className="pure-u-1-3"><p><CompB /></p></div>
            <div className="pure-u-1-3"><p><CompC /></p></div>
        </div> */}
        {/* <MyForm /> */}
        {/* <AComp />
        <BComp /> */}
        {/* <CComp /> */}
        <ServComp />
    </>
    )
}
class CompA extends React.Component {
    render() {
        return (
            <>
                <h1 style={{backgroundColor: 'aquamarine', color: 'blue', textAlign: 'center'}}>First</h1>
            </>
        )
    }
}

const CompB = class extends React.Component{
    render() {
        return (
            <>
                <h1 style={{backgroundColor: 'olive', color: 'black'}}>This is yet another component!</h1>
            </>
        )
    }
}

class Cars {
    constructor(name, brand) {
        this.name = name;
        this.brand= brand;
    }
    toString() {
        return `Name:${this.name}\tBrand:${this.brand}`;
    }
}

function retCars() {
    let aCars = [];
    let arr1 = ['Octovia', 'Punto', 'Lilac', 'Swift', 'Continental'];
    let arr2 = ['Skoda', 'Fiat', 'Cadillac', 'Maruti', 'Lincoln'];
    for (let i = 0; i < arr1.length; i++) {
        let car = new Cars(arr1[i], arr2[i]);
        aCars.push(car);
    }
    return aCars;
}

class CompC extends React.Component {
    render() {
        return(
            <>
                <center>
                    <table className="pure-table pure-table-striped">
                        <thead>
                            <tr><th>Name</th><th>Brand</th></tr>
                        </thead>
                        <tbody>
                            {
                                retCars().map(n => <tr key={n.name}><td>{n.name}</td><td>{n.brand}</td></tr>)
                            }
                        </tbody>
                    </table>
                    <button className="pure-button pure-button-primary">CSS button</button>
                </center>
            </>
        )
    }
}

class MyForm extends React.Component {
    render() {
        return (
            <>
                <center>
                    <table className="pute-table pure-table-horizontal">
                        <thead>
                            <tr><th></th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Name</td><td><input type = "text" id = "name" placeholder="Enter Name"/></td></tr>
                            <tr><td>Email</td><td><input type="email" id="email" placeholder="Enter Email"/></td></tr>
                            <tr><td>Mobile</td><td><input type="text" id="mobile" placeholder="Enter mobile"/></td></tr>
                            <tr><td>Address</td><td><textarea rows="5" cols="23"></textarea></td></tr>
                            <tr><td><input type="submit" className="pure-button pure-button-primary" value="Register"/></td><td><input type="reset" className="pure-button pure-button-primary" value="Cancel" /></td></tr>
                        </tbody>
                    </table>
                </center>
            </>
        )
    }
}

export default NApp;