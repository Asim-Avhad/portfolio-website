/**
 * A generic top-down Formula 1 car, pointing along +x and centred on (0, 0)
 * so it can ride an SVG <animateMotion> path with rotate="auto".
 * No team livery, just the site accent colour.
 */
export default function F1Car({ scale = 1 }: { scale?: number }) {
  return (
    <g transform={`scale(${scale}) translate(-30 -13)`}>
      {/* rear wing */}
      <rect x="0" y="3" width="5" height="20" rx="1" className="fill-fg" />
      {/* rear tyres */}
      <rect x="6" y="0" width="12" height="6" rx="1.6" className="fill-muted" />
      <rect x="6" y="20" width="12" height="6" rx="1.6" className="fill-muted" />
      {/* front tyres */}
      <rect x="39" y="1" width="9" height="5" rx="1.4" className="fill-muted" />
      <rect x="39" y="20" width="9" height="5" rx="1.4" className="fill-muted" />
      {/* suspension arms */}
      <path d="M18 3 L22 9 M18 23 L22 17 M43.5 6 L41 10.5 M43.5 20 L41 15.5" className="stroke-muted" strokeWidth="1" />
      {/* chassis: sidepods narrowing into the nose */}
      <path
        d="M5 9.5 C5 7.5 7 7 9 7 L24 6.5 C29 6.5 31 8 33 9.5 L46 11 C51 11.4 55 12 57 13 C55 14 51 14.6 46 15 L33 16.5 C31 18 29 19.5 24 19.5 L9 19 C7 19 5 18.5 5 16.5 Z"
        className="fill-accent"
      />
      {/* engine cover stripe */}
      <path d="M8 13 L30 13" className="stroke-on-accent" strokeOpacity="0.35" strokeWidth="1.4" strokeLinecap="round" />
      {/* cockpit, halo and helmet */}
      <ellipse cx="31" cy="13" rx="4.6" ry="2.9" className="fill-bg" />
      <circle cx="30.4" cy="13" r="1.9" className="fill-fg" />
      <path d="M27 10.6 Q34.5 13 27 15.4" fill="none" className="stroke-on-accent" strokeWidth="0.9" />
      {/* front wing */}
      <rect x="54" y="4" width="4" height="18" rx="1" className="fill-fg" />
    </g>
  );
}
