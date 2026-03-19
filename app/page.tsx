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

        <ul className="mt-12 w-full max-w-3xl mx-auto space-y-8 translate-x-6">
          <li>
            <a
              href="https://www.tinybox.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 hover:opacity-95"
            >
              <img
                src="/tinybox-logo.png"
                alt="Tinybox Systems logo"
                className="w-12 h-12 object-contain mt-1"
              />
              <div className="text-left">
                <div className="text-foreground text-base sm:text-lg font-medium">
                  Growth &amp; Go-to-Market (GTM) @ Tinybox Systems
                </div>
                <div className="text-foreground/90 text-sm sm:text-base mt-1">
                  Summer 2026 Internship
                </div>
              </div>
            </a>
          </li>

          <li>
            <a
              href="https://www.meridianadvertisinggroup.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 hover:opacity-95"
            >
              <img
                src="/meridian-logo.png"
                alt="Meridian Advertising Group logo"
                className="w-12 h-12 object-contain mt-1"
              />
              <div className="text-left">
                <div className="text-foreground text-base sm:text-lg font-medium">
                  Founder @ Meridian Advertising Group
                </div>
                <div className="text-foreground/90 text-sm sm:text-base mt-1">
                  Jan 2026 - present
                </div>
              </div>
            </a>
          </li>

          <li>
            <a
              href="https://uwaterloo.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 hover:opacity-95"
            >
              <img
                src="/uwaterloo_logo.jpeg"
                alt="University of Waterloo logo"
                className="w-12 h-12 object-contain mt-1"
              />
              <div className="text-left">
                <div className="text-foreground text-base sm:text-lg font-medium">
                  Geospatial Data Science @ University of Waterloo
                </div>
                <div className="text-foreground/90 text-sm sm:text-base mt-1">
                  Sept 2024 - present
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
