import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Portfolio from '../../../src/components/sections/Portfolio';

// Mock next/link
jest.mock('next/link', () => {
  return ({children, href}) => {
    return <a href={href}>{children}</a>;
  }
});

describe('Portfolio Component', () => {
  it('renders correctly and checks for headings and project titles', () => {
    render(<Portfolio />);
    expect(screen.getByRole('heading', { name: /Portfolio/i, level: 2 })).toBeInTheDocument();
    expect(screen.getByText(/Interactive Media Portfolio/i)).toBeInTheDocument();
  });
});
