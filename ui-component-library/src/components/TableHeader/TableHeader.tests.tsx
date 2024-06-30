import React from 'react';
import { render, screen } from '@testing-library/react';
import TableHeader from './TableHeader';  // Adjust the import path as necessary

describe('TableHeader Component', () => {
    test('renders table header', () => {
        render(
            <table>
                <TableHeader>
                    <tr><th>Header 1</th></tr>
                </TableHeader>
            </table>
        );
        const headerElement = screen.getByText('Header 1');
        expect(headerElement).toBeInTheDocument();
    });
});
