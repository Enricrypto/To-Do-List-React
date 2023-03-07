import React, { useState } from 'react';

const Todo = ({ setTodoList, todoList }) => {


    const [showButton, setShowButton] = useState(false);

    const handleClick = (item) => {
        setTodoList(todoList.filter((elem, index) => index !== item))
    }

    return (
        <div>
            {todoList.map((elem, index) => <div key={index} className="card w-50 mt-2">
                <div className="card-body d-flex justify-content-around align-items-center" onMouseEnter={() => { setShowButton(true) }} onMouseLeave={() => { setShowButton(false) }}>
                    <h5 className="card-title">{elem}</h5>
                    {showButton &&
                        <button className="btn btn-danger" onClick={() => handleClick(index)}>Delete</button>
                    }
                </div>
            </div>)}
        </div>
    )
};

export default Todo; 
