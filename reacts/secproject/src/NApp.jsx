import { useState } from "react";
import authContext from './AuthContext';
import Logout from "./Logout";
import Login from "./Login";

function NApp(props) {
    const [auth, SetAuth] = useState(false);
    const login = () => {
        SetAuth(true);
    }
    const logout = () => {
        SetAuth(false);
    }
    return <>
        <h1>Testing auth with context</h1>
        <authContext.Provider value={{auth: auth, login: login, logout: logout}}>
        <p>{auth?<Logout />:<Login />}</p>
        {/* <p>{auth?"Welcome to our website":"You are logged out"}</p>
        <Login />
        <Logout /> */}
        </authContext.Provider>
    </>
}

export default NApp;