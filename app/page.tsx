export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground flex flex-col">
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4" />
      </video>

      <div className="relative z-10 w-full flex flex-col items-center px-6 pt-10">
        <h1
          className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal text-foreground animate-fade-rise text-center"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Nitish Panesar
        </h1>

        <ul className="mt-12 w-full max-w-3xl mx-auto space-y-8 translate-x-28">
          <li>
            <div className="flex items-start gap-4">
              <a
                href="https://www.tinybox.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src="/tinybox-logo.png"
                  alt="Tinybox Systems logo"
                  className="w-10 h-10 object-contain mt-1"
                />
              </a>
              <a
                href="https://www.tinybox.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-left block hover:opacity-95"
              >
                <div className="text-foreground text-sm sm:text-base font-medium">
                  Growth &amp; Go-to-Market (GTM) @ Tinybox Systems
                </div>
                <div className="text-foreground/90 text-sm mt-1">
                  Summer 2026 Internship
                </div>
              </a>
            </div>
          </li>

          <li>
            <div className="flex items-start gap-4">
              <a
                href="https://www.meridianadvertisinggroup.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src="/meridian-logo.png"
                  alt="Meridian Advertising Group logo"
                  className="w-10 h-10 object-contain mt-1"
                />
              </a>
              <a
                href="https://www.meridianadvertisinggroup.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-left block hover:opacity-95"
              >
                <div className="text-foreground text-sm sm:text-base font-medium">
                  Founder @ Meridian Advertising Group
                </div>
                <div className="text-foreground/90 text-sm mt-1">
                  Jan 2026 - present
                </div>
              </a>
            </div>
          </li>

          <li>
            <div className="flex items-start gap-4">
              <a
                href="https://uwaterloo.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src="/uwaterloo_logo.jpeg"
                  alt="University of Waterloo logo"
                  className="w-10 h-10 object-contain mt-1"
                />
              </a>
              <a
                href="https://uwaterloo.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-left block hover:opacity-95"
              >
                <div className="text-foreground text-sm sm:text-base font-medium">
                  Geospatial Data Science @ University of Waterloo
                </div>
                <div className="text-foreground/90 text-sm mt-1">
                  Sept 2024 - present
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>

      <div
        className="absolute bottom-10 right-10 z-10 flex items-center gap-4"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        <a
          href="mailto:npanesar@uwaterloo.ca"
          aria-label="Email npanesar@uwaterloo.ca"
          className="liquid-glass rounded-full p-3 text-foreground hover:opacity-95 hover:scale-[1.03] transition-transform"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 4h16v16H4z" opacity="0" />
            <path d="M4 6h16" />
            <path d="M4 6l8 7 8-7" />
            <path d="M4 6v12h16V6" />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/npanesar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="liquid-glass rounded-full p-3 text-foreground hover:opacity-95 hover:scale-[1.03] transition-transform"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0.5 8.5H4.5V24H0.5V8.5zM8.5 8.5H12.3V10.9H12.35C13.02 9.64 14.4 8.5 16.55 8.5C20.4 8.5 21.5 11.04 21.5 14.24V24H17.5V15.2C17.5 13.55 17.47 11.35 15.2 11.35C12.9 11.35 12.5 13.2 12.5 14.98V24H8.5V8.5z" />
          </svg>
        </a>
      </div>
    </main>
  );
}
