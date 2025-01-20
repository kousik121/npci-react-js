
class ParComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aval: '',
            bval: ''
        }
        this.first = this.first.bind(this);
        this.sec = this.sec.bind(this);
    }

    first(e) {
        this.setState({ aval: e.target.value })
    }
    sec(e) {
        this.setState({ bval: e.target.value })
    }

    render() {
        return (<>
            <h1>Parent Area</h1>
            <div style={{ backgroundColor: 'azure', color: 'royalblue' }}>
                Value coming from child component:<b>{this.state.bval}</b>
            </div>
            <br />
            <input type="text" onChange={this.first} />
            <br />
            <hr />
            <br />
            <h1>Child Area</h1>
            <ChdComp a={this.state.aval} b={this.sec} />
        </>)
    }
}