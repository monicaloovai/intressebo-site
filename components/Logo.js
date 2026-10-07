export default function Logo({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" aria-hidden="true">
      <rect x="26" y="50" width="68" height="52" rx="16" fill="var(--green)" />
      <path
        d="M16 60 L60 23 L104 60"
        fill="none"
        stroke="var(--blue)"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="41" y="80" width="10" height="13" rx="5" fill="#fff" />
      <rect x="55" y="71" width="10" height="22" rx="5" fill="#fff" />
      <rect x="69" y="61" width="10" height="32" rx="5" fill="#fff" />
      <circle cx="101" cy="25" r="11" fill="var(--amber)" stroke="var(--bg)" strokeWidth="5" />
    </svg>
  );
}
