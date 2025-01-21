function reducerd(state, action) {
    switch (action.type) {
        case 'INC':
            return {count: state.count + 1}
        case 'DEC':
            return {count: state.count - 1}
        default:
            return "Not permitted";
    }
}

export default reducerd;