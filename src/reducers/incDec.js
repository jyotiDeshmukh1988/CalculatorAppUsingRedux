const initialState = 0

const IncreDecrementno = (state=initialState,action) => {
    switch(action.type) {
        case 'INCREMENT': return state + action.payload
        case 'DECREMENT': return state > 0 ? state - 1 : 0  
        default : return state       
    }
}

export default IncreDecrementno