'use client';

interface FooterProps {
  className?: string;
}

export default function Footer({ className = 'mt-20' }: FooterProps) {
  return (
    <div
      className={`${className} flex flex-wrap items-center justify-between gap-3 text-xs text-stone-400 max-w-lg w-full`}
    >
      {/* Social media icons */}
      <div className="flex items-center gap-1.5">
        <a
          href="mailto:npanesar@uwaterloo.ca"
          className="group flex h-8 w-8 items-center justify-center rounded-md bg-transparent text-stone-400 hover:bg-stone-800/80 hover:text-stone-100 transition-colors"
          aria-label="Email"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/npanesar"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-8 w-8 items-center justify-center rounded-md bg-transparent text-stone-400 hover:bg-stone-800/80 hover:text-stone-100 transition-colors"
          aria-label="LinkedIn"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" />
          </svg>
        </a>
        <a
          href="https://x.com/NitishPanesar"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-8 w-8 items-center justify-center rounded-md bg-transparent text-stone-400 hover:bg-stone-800/80 hover:text-stone-100 transition-colors"
          aria-label="X (Twitter)"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
