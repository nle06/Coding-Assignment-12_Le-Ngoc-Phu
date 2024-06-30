import React from 'react';
import { render, screen } from '@testing-library/react';
import TableCell from './TableCell';  // Adjust the path as necessary

describe('TableCell Component', () => {
    test('renders table cell', () => {
        render(<TableCell>Cell Content</TableCell>);
        const cellElement = screen.getByText('Cell Content');
        expect(cellElement).toBeInTheDocument();
    });
});
