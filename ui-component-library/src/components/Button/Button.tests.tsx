import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button', () => {
  render(<Button label="Button" />);
  const buttonElement = screen.getByText(/Button/i);
  expect(buttonElement).toBeInTheDocument();
});

test('changes background color when disabled', () => {
  render(<Button label="Button" disabled />);
  const buttonElement = screen.getByText(/Button/i);
  expect(buttonElement).toHaveStyle('background-color: #d3d3d3');
});
