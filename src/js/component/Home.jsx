import React, { useState } from "react";
import Todo from "./TodoList.jsx"
import Task from "./Task.jsx";

const Home = () => {

	const [todoList, setTodoList] = useState([]);

	return (
		<div className="container">
			<Task todoList={todoList} setTodoList={setTodoList}/>
			{todoList.length ? 
			<div className="card p-5 mt-2 d-flex justify-content-center">
				<Todo todoList={todoList} setTodoList={setTodoList}/>
			</div>
			:
			<div className="d-flex flex-column align-items-center">"No tasks, add a task"</div>}
			</div>
	);
};

export default Home;
