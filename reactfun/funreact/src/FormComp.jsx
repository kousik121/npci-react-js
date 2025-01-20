import React from "react";

class FormComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        return (<>
            <form onSubmit={(e) => {
                e.preventDefault();
                const obj = {username: this.state.username, password: this.state.password};
                alert(JSON.stringify(obj));
            }}>
                <table>
                    <tr><td>Username</td><td><input style={{backgroundColor:'magenta'}} type="text" onChange={(e) => this.setState({username: e.target.value})}/></td></tr>
                    <tr><td>Password</td><td><input style={{backgroundColor: 'greenyellow'}} type="password" onChange={(e) => this.setState({password: e.target.value})}/></td></tr>
                    <tr><td><input style={{backgroundColor: 'burlywood'}} type="submit" value="Send" /></td><td><input style={{backgroundColor: 'aqua'}} type="reset" value="Cancel" /></td></tr>
                </table>
            </form>
        </>)
    }
}

export default FormComp;