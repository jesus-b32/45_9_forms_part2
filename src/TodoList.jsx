import React, {useState} from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

function TodoList () {
    // todos is an array of todo objects
    const [todos, setTodos] = useState([]);

    // update state by adding current todos and newTodo, made from form data, to setState
    function addTodo(newTodo) {
        setTodos(todos => [...todos, newTodo]);
    }

    // filter out todo with matching id
    function removeTodo(id) {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }

    // create box compnents from boxes state
    const todoComponents = todos.map(todo => (
        <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            handleRemove={removeTodo}
        />
        )
    )

    return (
        <div>
            <NewTodoForm addTodo={addTodo}/>
            {todoComponents}
        </div>
    )
}

export default TodoList;
