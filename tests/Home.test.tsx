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

  it('renders resume bullet sections', () => {
    render(<Home />, { wrapper });
    expect(
      screen.getByText('Geospatial Data Science @ University of Waterloo'),
    ).toBeInTheDocument();
    expect(screen.getByText('Growth & Go-to-Market (GTM) @ Tinybox Systems')).toBeInTheDocument();
    expect(screen.getByText('Co-Founder @ Meridian Advertising Group')).toBeInTheDocument();
  });
});
