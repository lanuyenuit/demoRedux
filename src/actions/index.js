import * as types from './../constants/actionTypes'

export const listAll = () => {
	return {
		type: types.LIST_ALL

	}
}

export const addTask = (task) => {
	console.log("add task")
	return {
		type: types.ADD_TASK,
		task
	}

}

export const deleteTask = (id) => {
	return {
		type: types.DELETE_TASK,
		id
	}
}

export const editTask = (id) => {
	return {
		type: types.EDIT_TASK,
		id
	}
}