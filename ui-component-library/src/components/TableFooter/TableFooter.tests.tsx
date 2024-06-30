import React from 'react';
import { render, screen } from '@testing-library/react';
import TableFooter from './TableFooter';  // Ensure this path matches the location of your component

describe('TableFooter Component', () => {
    test('renders table footer', () => {
        render(
            <TableFooter>
                <tr><td>Footer 1</td></tr>
            </TableFooter>
        );
        const footerElement = screen.getByText('Footer 1');
        expect(footerElement).toBeInTheDocument();
    });
});
