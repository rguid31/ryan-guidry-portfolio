import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';

// Helper component to consume and display theme context
const TestComponent = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme-display">{theme}</span>
      <button onClick={toggleTheme} data-testid="toggle-button">
        Toggle Theme
      </button>
    </div>
  );
};

// Mock localStorage
const mockLocalStorage = (() => {
  let store = {};
  return {
    getItem: jest.fn((key) => store[key] || null),
    setItem: jest.fn((key, value) => {
      store[key] = value.toString();
    }),
    clear: () => {
      store = {};
    },
    removeItem: jest.fn((key) => {
      delete store[key];
    }),
  };
})();

// Mock window.matchMedia
const mockMatchMedia = jest.fn();

describe('ThemeContext', () => {
  beforeEach(() => {
    // Clear mocks and localStorage before each test
    mockLocalStorage.clear();
    mockMatchMedia.mockClear();
    Object.defineProperty(window, 'localStorage', {
      value: mockLocalStorage,
      writable: true,
    });
    Object.defineProperty(window, 'matchMedia', {
      value: mockMatchMedia,
      writable: true,
    });
    // Reset documentElement attribute for a clean slate
    document.documentElement.removeAttribute('data-theme');
  });

  test('initializes theme from localStorage if available', () => {
    mockLocalStorage.setItem('theme', 'dark');
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    expect(screen.getByTestId('theme-display')).toHaveTextContent('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  test('initializes theme based on prefers-color-scheme (dark) if no localStorage', () => {
    mockMatchMedia.mockReturnValue({
      matches: true, // Prefers dark
      media: '(prefers-color-scheme: dark)',
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    });

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    expect(screen.getByTestId('theme-display')).toHaveTextContent('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });
  
  test('initializes theme based on prefers-color-scheme (light) if no localStorage', () => {
    mockMatchMedia.mockReturnValue({
      matches: false, // Prefers light
      media: '(prefers-color-scheme: dark)',
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    });

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    // Defaults to 'light' if prefers-color-scheme is not dark
    expect(screen.getByTestId('theme-display')).toHaveTextContent('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });


  test('defaults to "light" theme if no localStorage and no prefers-color-scheme', () => {
     mockMatchMedia.mockReturnValue({
      matches: false, // Prefers light or no preference
      media: '(prefers-color-scheme: dark)',
      onchange: null,
      addListener: jest.fn(), // Mock addListener
      removeListener: jest.fn(), // Mock removeListener
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    });
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    expect(screen.getByTestId('theme-display')).toHaveTextContent('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });

  test('toggleTheme switches theme from light to dark and updates localStorage and document attribute', () => {
    mockMatchMedia.mockReturnValue({ matches: false, media: '(prefers-color-scheme: dark)' }); // Start with light
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme-display')).toHaveTextContent('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');

    act(() => {
      fireEvent.click(screen.getByTestId('toggle-button'));
    });

    expect(screen.getByTestId('theme-display')).toHaveTextContent('dark');
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith('theme', 'dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  test('toggleTheme switches theme from dark to light and updates localStorage and document attribute', () => {
    mockLocalStorage.setItem('theme', 'dark'); // Start with dark
     render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme-display')).toHaveTextContent('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    
    act(() => {
      fireEvent.click(screen.getByTestId('toggle-button'));
    });

    expect(screen.getByTestId('theme-display')).toHaveTextContent('light');
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith('theme', 'light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });
  
  test('useTheme throws error if used outside of ThemeProvider', () => {
    // Suppress console.error output for this specific test
    const originalError = console.error;
    console.error = jest.fn();

    expect(() => render(<TestComponent />)).toThrow('useTheme must be used within a ThemeProvider');
    
    // Restore console.error
    console.error = originalError;
  });
});
