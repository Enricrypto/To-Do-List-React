import React, { useState } from 'react';

const Todo = ({ todoList, deleteTask }) => {

    return (
        <div>
            {todoList.map((elem, index) => <div key={index} className="card w-50 mt-2 d-flex justify-content-center">
                <div className="card-body d-flex-column">
                    <h5 className="card-title">{elem}</h5>
                    <button className="btn btn-primary pl-1">Done</button>
                    <button className="btn btn-danger" onClick={() => deleteTask(index)}>Delete</button>
                </div>
            </div>)}
        </div>
    )
};

export default Todo; 
