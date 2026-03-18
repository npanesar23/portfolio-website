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
  it('renders the cinematic hero heading', () => {
    render(<Home />, { wrapper });
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Where dreams rise through the silence\./,
      }),
    ).toBeInTheDocument();
  });

  it('renders the logo and CTAs', () => {
    render(<Home />, { wrapper });
    expect(screen.getByText('Velorah')).toBeInTheDocument();
    expect(screen.getAllByText('Begin Journey')).toHaveLength(2);
  });
});
