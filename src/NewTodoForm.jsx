import React, {useState} from "react";
import { v4 as uuid } from 'uuid';


function NewTodoForm ({ addTodo }) {
        /**
     * formDate is an object that holds 
     *  task
     *  */
    const [formData, setFormData] = useState({task: ''});

    /** Update local state w/curr state of input elem */
    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };
    
        /** Send {backgroundColor, width, height} to parent
    *    & clear form. */
    const handleSubmit = evt => {
        evt.preventDefault();
        addTodo({ ...formData, id: uuid() });
        setFormData({ task: "" });
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">Task: </label>
                <input
                onChange={handleChange}
                type="text"
                name="task"
                value={formData.task}
                id="task"
                />
                <button id="newTodoButton">Add a TODO!</button>
            </form>
        </div>
    );

}

export default NewTodoForm;