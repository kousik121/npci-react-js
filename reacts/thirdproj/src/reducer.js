function reducer(state = {vehicle: ''}, action) {
    switch (action.type) {
        case 'INC':
            return {vehicle: 'Its a car'}
        case 'DEC':
            return {vehicle: 'Its a bike'}
        default:
            return {vehicle: 'Not a valid value'};
    }
}

export default reducer;