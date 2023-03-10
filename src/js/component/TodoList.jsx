import React, { useState } from 'react';

const Todo = ({ todoList, todo }) => {

    const [showButton, setShowButton] = useState(false);

    return (
        <div>
            {todoList.map((elem, index) => <div key={index} className="card w-50 mt-2 d-flex justify-content-center">
                <div className="card-body d-flex justify-content-around align-items-center" onMouseEnter={() => { setShowButton(true) }} onMouseLeave={() => { setShowButton(false) }}>
                    <h5 className="card-title">{elem}</h5>
                    {showButton &&
                        <button className="btn btn-danger" onClick={()=> todo(index)}>Delete</button>
                    }
                </div>
            </div>)}
        </div>
    )
};

export default Todo; 
