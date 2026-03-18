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

      <section className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
        <p className="text-foreground text-base sm:text-lg leading-relaxed">
          Nitish Panesar
        </p>
      </section>
    </main>
  );
}
