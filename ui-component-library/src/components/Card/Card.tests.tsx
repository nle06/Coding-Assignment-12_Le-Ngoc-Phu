import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders card', () => {
  render(<Card title="Card Title" content="This is the card content." />);
  const titleElement = screen.getByText(/Card Title/i);
  expect(titleElement).toBeInTheDocument();
});

test('card is disabled', () => {
  render(<Card title="Card Title" content="This is the card content." disabled />);
  const cardElement = screen.getByText(/Card Title/i).closest('div');
  expect(cardElement).toHaveStyle('opacity: 0.5');
});
