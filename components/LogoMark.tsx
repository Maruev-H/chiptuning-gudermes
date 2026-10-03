type LogoMarkProps = {
  className?: string;
  title?: string;
};

export function LogoMark({ className = "logo-svg", title }: LogoMarkProps) {
  const gradientId = "logo-light-grad";

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0ff8a" />
          <stop offset="50%" stopColor="#d7ff3f" />
          <stop offset="100%" stopColor="#aee600" />
        </linearGradient>
      </defs>

      <ellipse
        cx="50"
        cy="83"
        rx="38"
        ry="3"
        fill="#000000"
        fillOpacity="0.18"
      />

      <rect x="18" y="65" width="10" height="18" rx="3" fill="#07090b" />
      <rect x="72" y="65" width="10" height="18" rx="3" fill="#07090b" />

      <path
        d="M20 68 L20 48 C20 40 24 36 30 33 L38 18 C40 13 45 10 50 10 C55 10 60 13 62 18 L70 33 C76 36 80 40 80 48 L80 68 C80 70 78 72 76 72 L24 72 C22 72 20 70 20 68 Z"
        fill="#11171c"
      />

      <path
        d="M37 23 L63 23 C67 23 69 26 71 31 L73 38 L27 38 L29 31 C31 26 33 23 37 23 Z"
        fill="#f3f6f8"
      />

      <rect x="42" y="54" width="16" height="6" rx="2" fill="#07090b" />

      <circle cx="28" cy="55" r="5" fill="#2a333b" />
      <circle cx="72" cy="55" r="5" fill="#2a333b" />
      <circle cx="28" cy="55" r="2.2" fill="#f3f6f8" />
      <circle cx="72" cy="55" r="2.2" fill="#f3f6f8" />

      <path
        d="M55 35 L40 60 H50 L45 85 L65 55 H53 Z"
        fill={`url(#${gradientId})`}
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
