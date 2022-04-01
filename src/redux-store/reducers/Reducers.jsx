
const initialState = 1
export const Reduder = (state = initialState, action) => {

    // if (action.type === 'INCREMENT') {
    //     return state + action.payload
    // }
    // else if (action.type === 'DECREMENT') {
    //     return state - action.payload
    // }
    // return state

    switch (action.type) {
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state - 1 >= 1 ? state - 1 : 1




        default: return state;
    }
}