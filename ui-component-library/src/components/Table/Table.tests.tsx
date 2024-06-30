import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';  // Assuming Table is in the same directory

describe('Table Component', () => {
    test('renders table with content', () => {
        render(
            <Table>
                <tbody>
                    <tr>
                        <td>Cell 1</td>
                    </tr>
                </tbody>
            </Table>
        );
        const cellElement = screen.getByText('Cell 1');
        expect(cellElement).toBeInTheDocument();
    });
});
