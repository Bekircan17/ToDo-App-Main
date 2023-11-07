import React, { useState } from "react";

function ButtonGroup({ uncompletedItem, setFilter, clearCompleted }) {
	return (
		<div className="mt-2 row text-center">
			<p className="col-lg-2 text-dark col-12 my-auto">
				{uncompletedItem} item left
			</p>
			<div className="col-lg-6  col-12 mx-auto ">
				<button
					onClick={() => {
						setFilter("all");
					}}
					className="	 btn-outline-dark m-2  btn"
				>
					All
				</button>
				<button
					onClick={() => {
						setFilter("active");
					}}
					className="	 btn-outline-dark m-2  btn"
				>
					Active
				</button>
				<button
					onClick={() => {
						setFilter("completed");
					}}
					className=" btn-outline-dark m-2 btn"
				>
					Completed
				</button>
			</div>
			<button
				onClick={() => {
					clearCompleted((prev) => prev.filter((todo) => !todo.isCompleted));
				}}
				className="col-lg-3 col-12 	 clearCompleted   btn-outline-dark me-3 my-auto   ms-auto btn"
			>
				Clear Completed
			</button>
		</div>
	);
}

export default ButtonGroup;
