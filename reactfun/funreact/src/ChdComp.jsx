import React from "react";


class ChdComp extends React.Component {
    render() {
        return (<>
            <div style={{ backgroundColor: 'aquamarine', color: 'red' }}>
                The value coming from parent is :<b>{this.props.a}</b>
            </div>
            <br /><hr /><br />
            Enter a value to send to parent:<input type="text" onChange={this.props.b} />
        </>)
    }
}

export default ChdComp;