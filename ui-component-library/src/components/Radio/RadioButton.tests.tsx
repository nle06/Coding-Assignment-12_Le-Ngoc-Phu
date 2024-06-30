import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';

test('renders radio button', () => {
  render(<RadioButton name="radioGroup" options={[{ label: 'Option 1', value: '1' }]} />);
  const radioElement = screen.getByLabelText(/Option 1/i);
  expect(radioElement).toBeInTheDocument();
});

test('radio button is disabled', () => {
  render(<RadioButton name="radioGroup" options={[{ label: 'Option 1', value: '1' }]} disabled />);
  const radioElement = screen.getByLabelText(/Option 1/i);
  expect(radioElement).toBeDisabled();
});
