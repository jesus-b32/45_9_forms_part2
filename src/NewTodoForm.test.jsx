import { render, fireEvent } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';
import { describe, it, expect, vi } from 'vitest';

describe('NewTodoForm', () => {
    //smoke test
    it('renders App component', () => {
        render(<NewTodoForm/>);
    })

    //snapshot test
    it('matches snapshot', () => {
        const {asFragment} = render(<NewTodoForm/>);
        expect(asFragment()).toMatchSnapshot();
    })

    it("runs the addTodo function on form submit", function() {
        const createMock = vi.fn();
        const { getByText } = render(<NewTodoForm addTodo={createMock} />);
        const createButton = getByText("Add a TODO!");
        fireEvent.click(createButton);
        expect(createMock).toHaveBeenCalled();
    });
})