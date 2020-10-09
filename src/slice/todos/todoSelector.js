import { createSelector } from 'reselect'


const TodoSelector = {
	todoList: (state) => state.todo.todoList,
	sortType: (state) => state.todo.sortType,
	isReverseSort: (state) => state.todo.isReverseSort,
}


export const getSortedTodoList = createSelector(
	TodoSelector.todoList, TodoSelector.sortType, TodoSelector.isReverseSort,
	(items, sortType, isReverse) => {
		let list = [...items]
		switch (sortType) {
			case `date`:
				list.sort((a, b) => a.id - b.id)
				break

			case `done`:
				list.sort((a, b) => a.completed - b.completed)
				break

			default:
				break
		}
		return (
			!isReverse
				? list
				: list.reverse()
		)
	})