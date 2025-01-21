function reducerc(state = {value: ''}, action) {
    switch (action.type) {
        case 'INC':
            return {value: action.value}
        default:
            return {value: 'No value'}
    }
}

export default reducerc;