import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from '../../../src/components/sections/Contact';

describe('Contact Component', () => {
  it('renders correctly and checks for heading and button', () => {
    render(<Contact />);
    expect(screen.getByRole('heading', { name: /Get in touch/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument();
  });
});
