import * as types from './../constants/actionTypes'

let initialState = [
    {
        id: 1,
        name: 'hoc react',
        status:'1'
    },
    {
        id: 2,
        name: 'hoc hat',
        status: '0'
    },
    {
        id: 3,
        name: 'hoc redux',
        status: '1'
    }
]

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state
        case types.ADD_TASK:
            state.push(action.task)
            console.log(action);
            return state
        default: return state
    }
}

export default myReducer