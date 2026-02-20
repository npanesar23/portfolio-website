'use client';

import { createContext, useContext, ReactNode } from 'react';

const translations: Record<string, string> = {
  'home.title': "hi i'm nitish",
  'incoming.title': 'incoming',
  'incoming.role1': 'growth',
  'incoming.item1': 'tinybox systems',
  'hero.currently': 'currently',
  'current.role1': 'geomatics + computing',
  'current.school': 'uwaterloo',
  'nav.blogs': 'future',
  'life.ultimate.left': 'building',
  'life.ultimate.right': 'meridian advertising agency',
};

interface LanguageContextType {
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const t = (key: string) => translations[key] ?? key;
  return (
    <LanguageContext.Provider value={{ t }}>
      {children}
    </LanguageContext.Provider>
  );
};
