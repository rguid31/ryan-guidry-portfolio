import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../../../src/components/sections/Hero';

// Mock next/link
jest.mock('next/link', () => {
  return ({children, href}) => {
    return <a href={href}>{children}</a>;
  }
});

describe('Hero Component', () => {
  it('renders the hero section with key elements', () => {
    render(<Hero />);
    
    // Check for the main heading
    expect(screen.getByRole('heading', { name: /Ryan Guidry/i })).toBeInTheDocument();
    
    // Check for the tagline
    expect(screen.getByText(/Passionate Web Developer | Data Science Explorer | Engineering Innovator/i)).toBeInTheDocument();
    
    // Check for the call to action button
    expect(screen.getByRole('link', { name: /Explore My Portfolio/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Explore My Portfolio/i })).toHaveAttribute('href', '#portfolio');
  });
});
