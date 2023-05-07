import React, { useState } from 'react';

const Todo = ({ todoList, deleteTask }) => {

    return (
        <>
            {todoList.map((elem, index) => <div key={index} className="card d-flex flex-column align-items-center mt-2">
                    <h5 className="card-title">{elem}</h5>
                    <div className="d-flex flex-row">
                    <button className="btn btn-primary m-3">Done</button>
                    <button className="btn btn-danger m-3" onClick={() => deleteTask(index)}>Delete</button>
                    </div>
            </div>)}
        </>
    )
};

export default Todo; 
