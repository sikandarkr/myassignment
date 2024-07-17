import React from 'react';
import { render, screen } from '@testing-library/react';
import Demo from './Demo'; // Adjust the path as necessary

describe('Demo Component', () => {
  test('renders hello from demo', () => {
    render(<Demo />);
    const paragraphElement = screen.getByText(/hello from demo/i);
    expect(paragraphElement).toBeInTheDocument();
  });
});
