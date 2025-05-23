import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Certifications from '../../../src/components/sections/Certifications';

describe('Certifications Component', () => {
  it('renders correctly and checks for the heading "Certifications"', () => {
    render(<Certifications />);
    expect(screen.getByRole('heading', { name: /Certifications/i })).toBeInTheDocument();
  });
});
