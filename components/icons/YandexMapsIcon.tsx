type IconProps = {
  className?: string;
};

export function YandexMapsIcon({ className = "route-icon" }: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 100"
      width="22"
      height="22"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient
          id="yandex-maps-grad"
          x1="40"
          y1="100"
          x2="40"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#FF6122" />
          <stop offset="1" stopColor="#F22411" />
        </linearGradient>
      </defs>
      <path
        fill="url(#yandex-maps-grad)"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 40C0 17.9 17.9 0 40 0s40 17.9 40 40c0 11-4.5 21-11.7 28.3-1.9 1.9-4.4 4-7.2 6.3-7.8 6.5-17.3 14.3-18.1 22.4C42.9 98.6 41.7 100 40 100c-1.7 0-2.8-1.4-3-3-.7-8.1-10.2-16-18.1-22.4-2.8-2.3-5.3-4.4-7.2-6.3C4.2 61 0 50.6 0 40zm54 0c.1 7.7-6.1 14.1-13.8 14.2S26.1 48.1 26 40.4c0-.1 0-.3 0-.4.1-7.7 6.5-13.9 14.2-13.8C47.8 26.3 53.9 32.4 54 40z"
      />
    </svg>
  );
}
