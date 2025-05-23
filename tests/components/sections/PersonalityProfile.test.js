import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PersonalityProfile from '../../../src/components/sections/PersonalityProfile';

describe('PersonalityProfile Component', () => {
  it('renders correctly and checks for the heading "My Personality Profile"', () => {
    render(<PersonalityProfile />);
    expect(screen.getByRole('heading', { name: /My Personality Profile/i })).toBeInTheDocument();
  });
});
