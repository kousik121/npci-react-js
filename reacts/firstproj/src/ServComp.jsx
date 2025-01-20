import React from "react";

class ServComp extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            data: []
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos').then(a => a.json()).then(b => this.setState({data: b}));
    }

    render(){
        return (
            <>
                {/* <h1>{JSON.stringify(this.state.data)}</h1> */}
                <table className="pure-table pure-table-striped">
                    <thead>
                        <tr><th>UserId</th><th>Id</th><th>Title</th><th>Completed</th></tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map(n => <tr><td>{n.userId}</td><td>{n.id}</td><td>{n.title}</td><td>{n.completed}</td></tr>)
                        }
                    </tbody>
                </table>
            </>
        )
    }
}

export default ServComp;