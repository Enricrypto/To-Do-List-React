import React, {useState} from 'react';

const Task = ({addTask}) => {

    const [task, setTask] = useState('');

    const handleChange = (event) => {
		setTask(event.target.value);
	};

	const handleKeyDown = (event) => {
		if (event.keyCode === 13) {
			addTask(task);
			setTask('');
		};
	};

    return (
        <div className="d-flex flex-column align-items-center mt-2">
            <input defaultValue = {task} className="todo-input" type="text" onChange={handleChange} onKeyDown={handleKeyDown} />
        </div>
    )
};

export default Task; 