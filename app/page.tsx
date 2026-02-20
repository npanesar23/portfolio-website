'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-12 relative z-10">
      {/* Hero Section */}
      <div className="max-w-lg w-full space-y-1 md:space-y-2 mx-auto">
        <div className="flex items-start justify-between mb-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-normal text-white">
            {t('home.title')}
          </h1>
        </div>

        {/* Incoming section (on top) */}
        <div>
          <p className="mb-2 text-stone-100 text-xs md:text-sm font-medium">
            {t('incoming.title')}
          </p>
          <ul className="text-xs md:text-sm text-stone-400 space-y-1">
            <li>
              <a
                href="https://www.tinybox.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80"
              >
                <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
                  {t('incoming.role1')}
                </span>
                <img src="/tinybox-logo.png" alt="tinybox systems" className="w-4 h-4" />
                <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
                  {t('incoming.item1')}
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* Currently section */}
        <div>
          <p className="mb-2 text-stone-100 text-xs md:text-sm font-medium">
            {t('hero.currently')}
          </p>
          <ul className="text-xs md:text-sm text-stone-400 space-y-1">
            <li>
              <a
                href="https://uwaterloo.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80"
              >
                <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
                  {t('current.role1')}
                </span>
                <img src="/uwaterloo_logo.jpeg" alt="uwaterloo" className="w-4 h-4" />
                <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
                  {t('current.school')}
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="h-auto min-h-[80px] md:min-h-[60px]">
          <div className="mt-4 space-y-3">
            <div>
              <p className="mb-2 text-stone-100 text-xs md:text-sm font-medium">{t('nav.blogs')}</p>
              <div className="-mx-2 px-2">
                <ul className="text-xs md:text-sm text-stone-400 space-y-1">
                  <li>
                    <a
                      href="https://meridianadvertisinggroup.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 -mx-2 px-2 py-0.5 rounded-md transition-colors hover:bg-stone-800/80"
                    >
                      <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
                        {t('life.ultimate.left')}
                      </span>
                      <img src="/meridian-logo.png" alt="meridian advertising agency" className="w-4 h-4 mix-blend-lighten" />
                      <span className="text-stone-400 group-hover:text-stone-100 transition-colors">
                        {t('life.ultimate.right')}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
