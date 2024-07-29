import { render, fireEvent } from '@testing-library/react';
import Todo from './Todo';
import { describe, it, expect, vi } from 'vitest';

describe('Todo', () => {
    //smoke test
    it('renders App component', () => {
        render(<Todo/>);
    })

    //snapshot test
    it('matches snapshot', () => {
        const {asFragment} = render(<Todo/>);
        expect(asFragment()).toMatchSnapshot();
    })

    it("runs the delete function on button click", function() {
        const removeMock = vi.fn();
        const { getByText } = render(<Todo handleRemove={removeMock} />);
        const deleteButton = getByText("Remove Todo");
        fireEvent.click(deleteButton);
        expect(removeMock).toHaveBeenCalled();
    });
})