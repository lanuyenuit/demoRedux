import * as types from './../constants/actionTypes'

export const listAll = () => {
	return {
		type: types.LIST_ALL

	}
}

export const addTask = (task) => {
	return {
		type: types.ADD_TASK,
		task
	}

}

export const deleteTask = () => {
	return {
		type: types.DELETE_TASK
	}
}