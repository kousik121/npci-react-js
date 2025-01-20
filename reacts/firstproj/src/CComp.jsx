import React from "react";

export default class CComp extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            x: 10.645,
            y: 'This is a string value as state',
            z: false,
            k: {id: 1001, name: 'Sunidhi', email: 'sunidhi@yahoo.com'},
            l: [10, 11, 21, 23, 24]
        }
    }
    componentDidMount() {
        this.setState({x: 1000});
        this.setState({y: "New String value"});
        this.setState({z: true});
        this.setState({k: {id: 2001, name: 'Jaisankar', email: 'jai@benaras.com'}});
        this.setState({l: [1, 2, 3, 4 ,5]})
    }

    render() {
        return (
            <>
                <h1>{this.state.x}</h1><br />
                <h2>{this.state.y}</h2><br />
                <p>
                    {
                        this.state.z?<p>This is true</p>:<p>This is false</p>
                    }
                </p>
                <p>{JSON.stringify(this.state.k)}</p>
                <table className="pure-table pure-table-primary">
                    <thead>
                        <tr><th>Number</th><th>Root</th></tr>
                    </thead>
                    <tbody>
                        {
                            this.state.l.map(n => <tr><td>{n}</td><td>{Math.sqrt(n)}</td></tr>)
                        }
                    </tbody>
                </table>
            </>
        )
    }
}