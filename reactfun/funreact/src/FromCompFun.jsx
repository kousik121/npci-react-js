import { use } from "react";
import { useState } from "react"

function FormCompFun(props) {
    const [username, SetUsername] = useState('');
    const [password, SetPassword] = useState('');
    return(<>
        <form onSubmit={(e) => {
            e.preventDefault();
            alert(username + " " + password)
        }} method="post">
            <table>
                <tr><td>Email</td><td><input type="text" onChange={(e) => SetUsername(e.target.value)}/></td></tr>
                <tr><td>Password</td><td><input type="password" onChange={(e) => SetPassword(e.target.value)}/></td></tr>
                <tr><td><input type="submit" value="Send" /></td><td><input type="reset" value="Cancel" /></td></tr>
            </table>
        </form>
    </>)
}

export default FormCompFun;