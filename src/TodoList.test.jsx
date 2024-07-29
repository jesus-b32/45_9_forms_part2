import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";
import { describe, it, expect, vi } from "vitest";



describe('TodoList', () => {
    function addTodo(todoList, task = "code") {
        const taskInput = todoList.getByLabelText("Task:");
        fireEvent.change(taskInput, { target: { value: task }});
        const submitButton = todoList.getByText("Add a TODO!");
        fireEvent.click(submitButton);
    }
    
    
    it("renders without crashing", function() {
        render(<TodoList />);
    });
    
    it("matches snapshot", function() {
        const { asFragment } = render(<TodoList />);
        expect(asFragment()).toMatchSnapshot();
    });
    
    it("can add a todo", function() {
        const list = render(<TodoList />);
        addTodo(list);
        
        // expect form to clear and todo to be on the page
        expect(list.getByLabelText("Task:")).toHaveValue("");
        expect(list.getByText("code")).toBeInTheDocument();
        expect(list.getByText("Remove Todo")).toBeInTheDocument();
    });
    
    it("can delete a todo", function() {
        const list = render(<TodoList />);
        addTodo(list);
        
        fireEvent.click(list.getByText("Remove Todo"));
        
        // expect todo to be gone
        expect(list.queryByText("code")).not.toBeInTheDocument();
    });
})
