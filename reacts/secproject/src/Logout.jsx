import React from "react";
import authContext from "./AuthContext";

class Logout extends React.Component {
    static contextType = authContext;
    render() {
        return(<>
            <h1>Thank you for visiting us you can logout now</h1><br />
            <button className="btn btn-primary" onClick={this.context.logout}>Logout</button>
        </>)
    }
}

export default Logout;