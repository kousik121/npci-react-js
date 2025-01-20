import React from "react";
import authContext from "./AuthContext";

class Login extends React.Component {
    static contextType = authContext;
    render() {
        return (<>
            <h1>Enter credentials to login</h1><br />
            <button className="btn btn-primary" onClick={this.context.login}>Login</button>
        </>)
    }
}

export default Login;