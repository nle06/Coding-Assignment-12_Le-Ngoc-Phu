import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

test('renders text', () => {
  render(<Text content="This is a text component" />);
  const textElement = screen.getByText(/This is a text component/i);
  expect(textElement).toBeInTheDocument();
});
