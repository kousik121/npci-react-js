function reducera(state = {myvalue: ''}, action) {
    switch (action.type) {
        case 'INC':
            return {myvalue: action.myvalue}
        case 'DEC':
            return {myvalue: action.myvalue}
        default:
            return {myvalue: 'Not a valid selection'};
    }
}

export default reducera;