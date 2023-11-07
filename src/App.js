import { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./components/todoList";
import ButtonGroup from "./components/buttonGroup";
function App() {
	const [todos, setTodos] = useState([
		{ todoText: "Learn React", isCompleted: false },
		{ todoText: "Meet friend for lunch", isCompleted: false },
		{ todoText: "Build really cool todo app", isCompleted: false },
	]);

	const [filter, setFilter] = useState("all");
	function addTodo(e) {
		e.preventDefault();
		if (e.target[0].value) {
			setTodos([{ todoText: e.target[0].value, isCompleted: false }, ...todos]);
		}
	}
	function getUncompletedItem() {
		return todos.filter((todo) => !todo.isCompleted).length;
	}
	const uncompletedItem = getUncompletedItem();
	function changeIsCompleted(todo) {
		setTodos(
			todos.map((item) => {
				if (item.todoText === todo.todoText) {
					return { ...item, isCompleted: !item.isCompleted };
				}
				return item;
			})
		);
	}
	return (
		<>
			<div className="container border rounded border-3 border-dark  	  p-5  main">
				<h1 className="text-center  mb-3">To Do</h1>

				<form onSubmit={addTodo}>
					<input
						className="w-100 p-2"
						placeholder="What needs to be done?"
					></input>
				</form>
				<TodoList
					filter={filter}
					changeIsCompleted={changeIsCompleted}
					setTodos={setTodos}
					todos={todos}
				></TodoList>
				<ButtonGroup
					uncompletedItem={uncompletedItem}
					clearCompleted={setTodos}
					setFilter={setFilter}
				></ButtonGroup>
			</div>
		</>
	);
}

export default App;
