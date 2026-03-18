import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Home', href: '/', active: true },
  { label: 'Studio', href: '#studio', active: false },
  { label: 'About', href: '#about', active: false },
  { label: 'Journal', href: '#journal', active: false },
  { label: 'Reach Us', href: '#reach', active: false },
] as const;

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

      <nav className="relative z-10 flex row justify-between px-8 py-6 max-w-7xl mx-auto">
        <a
          href="/"
          className="text-3xl tracking-tight text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Velorah<sup className="text-xs">®</sup>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm transition-colors hover:text-foreground ${
                link.active ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button
          className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03]"
          aria-label="Begin Journey"
        >
          Begin Journey
        </Button>
      </nav>

      <section className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 py-[90px]">
        <h1
          className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal animate-fade-rise"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Where <em className="not-italic text-muted-foreground">dreams</em> rise{' '}
          <em className="not-italic text-muted-foreground">through the silence.</em>
        </h1>

        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay">
          We're designing tools for deep thinkers, bold creators, and quiet rebels. Amid the chaos, we
          build digital spaces for sharp focus and inspired work.
        </p>

        <Button className="liquid-glass rounded-full px-14 py-5 text-base text-foreground mt-12 hover:scale-[1.03] cursor-pointer animate-fade-rise-delay-2">
          Begin Journey
        </Button>
      </section>
    </main>
  );
}
