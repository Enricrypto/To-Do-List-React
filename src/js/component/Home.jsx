import React, { useState } from "react";
import Todo from "./TodoList.jsx"
import Task from "./Task.jsx";

const Home = () => {

	const [todoList, setTodoList] = useState([]);

	const addTask = (task) => {
		setTodoList([...todoList, task])
	};

	const todo = (item) => {
		setTodoList(todoList.filter((elem, index) => {
		return index !== item})); 
	}

	return (
		<div className="container to-do-list">
			<h1 className="text-center" >To-do-List</h1>
			<Task addTask = {addTask}/>
			{todoList.length ? 
			<div className="card p-5 mt-2 d-flex justify-content-center">
				<Todo todoList={todoList} todo={todo} />
			</div>
			:
			<div className="d-flex flex-column align-items-center">"No tasks, add a task"</div>}
			</div>
	);
};

export default Home;
