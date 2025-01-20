import React from "react";
class AComp extends React.Component {
    render() {
        return(
            <>
                <table className="pure-table">
                    <thead>
                        <tr><th>Name</th><th>Email</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Jayesh</td><td>Jayesh@gmail.com</td></tr>
                        <tr><td>Jaya</td><td>Jai@yahoo.com</td></tr>
                        <tr><td>Ram</td><td>Ram@yahoo.com</td></tr>
                    </tbody>
                </table>
            </>
        )
    }
}

export default AComp;