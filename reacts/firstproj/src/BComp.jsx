import React from "react";
const BComp = class extends React.Component {
    render() {
        return (
            <>
                <ul style={{ listStyleType: 'none'}}>
                    {
                        [11,21,31,41, 51].map(n => <li key={n}><ul style={{listStyleType: 'none'}}><li>{n}</li><li style={{alignContent: 'space-around'}}>{Math.sqrt(n)}</li></ul></li>)
                    }
                </ul>
            </>
        )
    }
}

export default BComp;