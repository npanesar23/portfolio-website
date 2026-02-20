import { renderHook } from '@testing-library/react';
import { LanguageProvider, useLanguage } from '../contexts/LanguageContext';
import { ReactNode } from 'react';
import { describe, it, expect } from 'vitest';

const wrapper = ({ children }: { children: ReactNode }) => (
  <LanguageProvider>{children}</LanguageProvider>
);

describe('LanguageContext', () => {
  it('returns translation for known key', () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });
    expect(result.current.t('home.title')).toBe("hi i'm nitish");
  });
});
