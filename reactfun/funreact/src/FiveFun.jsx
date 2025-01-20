import React from "react";

class FiveFun extends React.Component {
    eveA() {
        alert("I am called");
    }
    eveB(e) {
        alert(e.target.value);
    }
    render() {
        return (<>
            <button onClick={this.eveA}>Click me</button>
            <br />
            <input type="text" onChange={this.eveB} />
            <br />
            <select onChange={this.eveB}>
                <option>Physics</option>
                <option>Chemistry</option>
                <option>Maths</option>
            </select>
            <br />
            <input type="checkbox" value="vegan" onChange={this.eveB} />Vegetarian
            <br />
            <input type="radio" id="a1" name="a1" value="male" onChange={this.eveB} />Male
            <input type="radio" id="a1" name="a1" value="female" onChange={this.eveB} />Female
            <br />
            <textarea cols="20" rows="5" placeholder="Enter address"></textarea>
        </>)
    }
}

export default FiveFun;