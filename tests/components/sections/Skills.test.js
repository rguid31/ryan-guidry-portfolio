import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Skills from '../../../src/components/sections/Skills';

describe('Skills Component', () => {
  it('renders correctly and checks for the heading "Skills & Expertise"', () => {
    render(<Skills />);
    expect(screen.getByRole('heading', { name: /Skills & Expertise/i })).toBeInTheDocument();
  });
});
