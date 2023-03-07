import React, {useState} from 'react';

const Task = ({todoList, setTodoList}) => {

    const [task, setTask] = useState('');

    const handleChange = (event) => {
		setTask(event.target.value);
	};

	const handleKeyDown = (event) => {
		if (event.keyCode === 13) {
			setTodoList([...todoList, task])
			event.target.value = '';
		};
	};

    return (
        <div className="d-flex flex-column align-items-center mt-2">
            <input className="todo-input" type="text" onChange={handleChange} onKeyDown={handleKeyDown} />
        </div>
    )
};

export default Task; 