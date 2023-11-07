import React from "react";
function TodoCard({ todo, changeIsCompleted, setTodos }) {
	function completed(e) {
		if (e.target.tagName === "BUTTON") return;
		else if (e.target.tagName === "P")
			e.target.parentElement.classList.toggle("completed");
		else e.target.classList.toggle("completed");
		setTodos((prev) =>
			prev.map((item) => {
				if (item.todoText === todo.todoText) {
					return { ...item, isCompleted: !item.isCompleted };
				}
				return item;
			})
		);
	}
	function deleteTodo() {
		setTodos((prev) => prev.filter((item) => item !== todo));
	}
	return (
		<div
			onClick={completed}
			className="border border-dark mt-2 py-2 rounded   mx-0 row  "
		>
			<p className="todoText 	col-10 mb-0">{todo.todoText}</p>
			<button onClick={deleteTodo} className=" ms-auto  btn-close"></button>
		</div>
	);
}

export default TodoCard;
