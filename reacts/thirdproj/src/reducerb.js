function reducerb(state = {myvalue: ''}, action) {
    switch (action.type) {
        case 'INC':
            return {myvalue: action.myvalue}
        case 'DEC':
            return {myvalue: action.myvalue}
        default:
            return {myvalue: 'Invalid format'};
    }
}

export default reducerb;