import React from 'react';
import { render, screen } from '@testing-library/react';
import TableRow from './TableRow';  // Adjust the import path as necessary

describe('TableRow Component', () => {
    test('renders table row', () => {
        render(
            <table>
                <tbody>
                    <TableRow>
                        <td>Cell 1</td>
                    </TableRow>
                </tbody>
            </table>
        );
        const cellElement = screen.getByText('Cell 1');
        expect(cellElement).toBeInTheDocument();
    });
});
