import * as types from './../constants/actionTypes'

let initialState = {
  tasks : [
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

}



let myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return {...state}

    case types.ADD_TASK:
      return {
        ...state
	      }

    case types.DELETE_TASK:
			return {
			  ...state
			}
		case types.EDIT_TASK:
			console.log("sda");
			return {
				...state
			}

    default: return state
  }
}

export default myReducer