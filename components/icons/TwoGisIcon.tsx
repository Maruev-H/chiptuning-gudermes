type IconProps = {
  className?: string;
};

/** Упрощённая иконка 2ГИС в фирменных цветах (читается в маленьком размере). */
export function TwoGisIcon({ className = "route-icon" }: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="22"
      height="22"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="48" height="48" rx="10" fill="#19AA1E" />
      <path fill="#FFB919" d="M0 0h48v14L0 8V0z" />
      <path fill="#82D714" d="M0 42l48-8v14H0V42z" />
      <path
        fill="#0073FA"
        d="M24 10c8.3 0 14 6.4 14 13.3 0 2.8-.6 5.7-2 8.7-8.2 0-10.2 5.9-10.6 9.6L25 44l-2.2.3c-.1-.8-.2-2-.3-3.5-.4-3.7-2.3-9.7-10.6-9.7-1.4-3-2-5.9-2-8.7C9.9 16.4 15.7 10 24 10z"
      />
      <circle cx="24" cy="23" r="5.5" fill="#FFFFFF" />
    </svg>
  );
}
