import React from "react";
import TodoCard from "./todoCard";
function todoList({ todos, filter, setTodos, changeIsCompleted }) {
	let todoDivs;
	if (filter === "all") {
		todoDivs = todos.map((todo) => (
			<TodoCard
				todo={todo}
				setTodos={setTodos}
				changeIsCompleted={changeIsCompleted}
				key={todo.todoText}
			/>
		));
		if (todoDivs.length === 0)
			todoDivs = (
				<h3 className=" my-5  border py-3 text-dark text-center">No task</h3>
			);
	} else if (filter === "active") {
		todoDivs = todos
			.filter((todo) => !todo.isCompleted)
			.map((todo) => (
				<TodoCard
					todo={todo}
					setTodos={setTodos}
					changeIsCompleted={changeIsCompleted}
					key={todo.todoText}
				/>
			));
		if (todoDivs.length === 0)
			todoDivs = (
				<h3 className=" my-5  border py-3 text-dark text-center">
					No active task
				</h3>
			);
	} else if (filter === "completed") {
		todoDivs = todos
			.filter((todo) => todo.isCompleted)
			.map((todo) => (
				<TodoCard
					todo={todo}
					setTodos={setTodos}
					changeIsCompleted={changeIsCompleted}
					key={todo.todoText}
				/>
			));
		// if no completed task
		if (todoDivs.length === 0)
			todoDivs = (
				<h3 className=" my-5  border py-3 text-dark text-center">
					No completed task
				</h3>
			);
	}

	return <div className="row mx-0 mt-2 todoList  ">{todoDivs}</div>;
}

export default todoList;
