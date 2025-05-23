import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../../../src/components/sections/About';

// Mock next/link
jest.mock('next/link', () => {
  return ({children, href}) => {
    return <a href={href}>{children}</a>;
  }
});

// Mock PersonalityDashboard
jest.mock('../../../src/components/PersonalityDashboard.jsx', () => {
  return () => <div data-testid="mocked-personality-dashboard">Mocked PersonalityDashboard</div>;
});

describe('About Component', () => {
  it('renders correctly and checks for the heading "About Me"', () => {
    render(<About />);
    expect(screen.getByRole('heading', { name: /About Me/i })).toBeInTheDocument();
  });
});
