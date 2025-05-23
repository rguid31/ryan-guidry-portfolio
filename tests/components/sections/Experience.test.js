import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Experience from '../../../src/components/sections/Experience';

// Mock ExperienceTiles
jest.mock('../../../src/components/sections/ExperienceTiles', () => {
  return () => <div data-testid="mocked-experience-tiles">Mocked ExperienceTiles</div>;
});

describe('Experience Component', () => {
  it('renders correctly and checks for the heading "Professional Experience"', () => {
    render(<Experience />);
    expect(screen.getByRole('heading', { name: /Professional Experience/i })).toBeInTheDocument();
  });
});
