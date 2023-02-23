const Increment = (num) => {
    return {
        type:'INCREMENT',
        payload: num
    }
}

const Decrement = () => {
    return {
        type:'DECREMENT',
    }
}

const Multiplication = (num) => {
    return {
        type:'MULTIPLICATION',
        payload:num
    }
}

const Division = () => {
    return {
        type:'DIVISION',
    }
}

export {Increment, Decrement,Multiplication,Division}