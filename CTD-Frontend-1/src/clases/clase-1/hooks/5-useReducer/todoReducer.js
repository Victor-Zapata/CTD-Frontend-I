
export const initialState = ([{
    toDo: 'compran pan'
}]);

const todoReducer = ( state = initialState, action = {} ) => {
    switch (action.type) {
        case '[TODO] add todo':
            return [...state, action.payload]
    
        default:
            return initialState;
    }
}

export default todoReducer;