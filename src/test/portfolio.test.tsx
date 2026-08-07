import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HeroSection from '@/components/HeroSection';
import ContactSection from '@/components/ContactSection';

describe('portfolio content', () => {
  it('renders the hero name and primary call-to-action', () => {
    render(<HeroSection />);

    expect(screen.getByText(/G Vishnu Vardhan Raju/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Explore Projects/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /View GitHub/i })).toBeInTheDocument();
  });

  it('renders contact links for email, linkedin and github', () => {
    render(<ContactSection />);

    expect(screen.getByRole('link', { name: /vishnuvardhanraju01346@gmail.com/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
  });
});
