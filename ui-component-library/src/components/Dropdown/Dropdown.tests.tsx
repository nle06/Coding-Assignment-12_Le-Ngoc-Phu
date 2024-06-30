import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

test('renders dropdown', () => {
  render(<Dropdown options={['Option 1', 'Option 2', 'Option 3']} />);
  const optionElement = screen.getByText(/Option 1/i);
  expect(optionElement).toBeInTheDocument();
});

test('dropdown is disabled', () => {
  render(<Dropdown options={['Option 1', 'Option 2', 'Option 3']} disabled />);
  const selectElement = screen.getByRole('combobox');
  expect(selectElement).toBeDisabled();
});
