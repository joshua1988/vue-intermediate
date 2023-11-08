const addOneItem = function(state, todoItem) {
	const obj = {completed: false, item: todoItem};
	localStorage.setItem(todoItem, JSON.stringify(obj));
	state.todoItems.push(obj);
};

const removeOneItem = function(state, payload) {
	state.todoItems.splice(payload.index, 1);
	localStorage.removeItem(payload.todoItem.item);
};

const toggleOneItem = function(state, payload) {
	state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
	localStorage.removeItem(payload.todoItem.item);
	localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
};

const clearAllItems = function(state) {
	state.todoItems = [];
	localStorage.clear();
};

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems };
