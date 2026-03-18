import { render, screen } from '@testing-library/react';
import Home from '../app/page';
import { LanguageProvider } from '../contexts/LanguageContext';
import { describe, it, expect } from 'vitest';
import { ReactNode } from 'react';

// Wrapper for the context
const wrapper = ({ children }: { children: ReactNode }) => (
  <LanguageProvider>{children}</LanguageProvider>
);

describe('Home Page', () => {
  it('renders the centered name text', () => {
    render(<Home />, { wrapper });
    expect(screen.getByText('Nitish Panesar')).toBeInTheDocument();
  });

  it('does not render any CTAs/buttons', () => {
    render(<Home />, { wrapper });
    expect(screen.queryByRole('button', { name: /begin journey/i })).not.toBeInTheDocument();
  });
});
