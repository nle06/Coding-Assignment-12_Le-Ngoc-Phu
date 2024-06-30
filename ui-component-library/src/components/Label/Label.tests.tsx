import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './Label';

test('renders label', () => {
  render(<Label text="Label" />);
  const labelElement = screen.getByText(/Label/i);
  expect(labelElement).toBeInTheDocument();
});
