import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';

test('renders hero image', () => {
  render(<HeroImage src="https://via.placeholder.com/800x400" alt="Hero Image" height="400px" />);
  const heroImageElement = screen.getByRole('img', { name: /Hero Image/i });
  expect(heroImageElement).toBeInTheDocument();
});

test('hero image is disabled', () => {
  render(<HeroImage src="https://via.placeholder.com/800x400" alt="Hero Image" height="400px" disabled />);
  const heroImageElement = screen.getByRole('img', { name: /Hero Image/i });
  expect(heroImageElement).toHaveStyle('opacity: 0.5');
});
