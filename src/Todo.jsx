import React from "react";

function Todo ({id, task, handleRemove}) {
    // handle removing a todo when click event happens
    const remove = () => handleRemove(id);

    return (
        <div>
            <div>
                {task}
            </div>
            <button onClick={remove}>Remove Todo</button>
        </div>
    )
}

export default Todo;