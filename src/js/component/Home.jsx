import React, { useState } from "react";
import Todo from "./TodoList.jsx"
import Task from "./Task.jsx";

const Home = () => {

	const [todoList, setTodoList] = useState([]);

	const addTask = (task) => {
		setTodoList([...todoList, task])
	};

	const deleteTask = (index) => {
		setTodoList(todoList.filter((elem, currentIndex) => index != currentIndex))
	}

	return (
		<div className="container to-do-list">
			<h1 className="text-center" >To-do-List</h1>
			<Task addTask = {addTask} />
			{todoList.length ? 
				<Todo todoList={todoList} deleteTask = {deleteTask} />
			:
			<div className="d-flex flex-column align-items-center">"No tasks, add a task"</div>}
		</div>
	);
};

export default Home;
