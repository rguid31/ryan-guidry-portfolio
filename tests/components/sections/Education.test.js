import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Education from '../../../src/components/sections/Education';

describe('Education Component', () => {
  it('renders correctly and checks for the heading "Education"', () => {
    render(<Education />);
    expect(screen.getByRole('heading', { name: /Education/i })).toBeInTheDocument();
  });
});
