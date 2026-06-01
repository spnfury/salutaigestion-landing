import styles from "./blog.module.css";

// Portada generativa por artículo: SVG on-brand, determinista a partir del
// slug (misma entrada -> mismo dibujo). Sin imágenes externas.

const ACCENTS: Record<string, string> = {
  Estrategia: "#C8FF3A",
  Conceptos: "#FF5A36",
  Ecosistema: "#F4F0E8",
  Velocidad: "#C8FF3A",
  Ventas: "#FF5A36",
  Seguridad: "#C8FF3A",
  SEO: "#FF5A36",
  "Casos de uso": "#C8FF3A",
  ROI: "#FF5A36",
  Práctico: "#F4F0E8",
};

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

// Línea tipo electrocardiograma con un pico cuya posición depende del hash.
function ekgPath(h: number): string {
  const baseline = 250;
  const peakX = 260 + (h % 240);
  const seg = (x: number, dy: number) => `${x} ${baseline + dy}`;
  return [
    `M0 ${baseline}`,
    `H${peakX - 70}`,
    `L${seg(peakX - 50, 0)}`,
    `L${seg(peakX - 32, -70)}`,
    `L${seg(peakX - 14, 120)}`,
    `L${seg(peakX + 6, -170)}`,
    `L${seg(peakX + 26, 90)}`,
    `L${seg(peakX + 44, 0)}`,
    `H800`,
  ].join(" ");
}

export function Cover({
  slug,
  category,
  variant = "wide",
}: {
  slug: string;
  category: string;
  variant?: "wide" | "card";
}) {
  const accent = ACCENTS[category] ?? "#C8FF3A";
  const h = hash(slug);
  const cx = 480 + (h % 220);
  const cy = 60 + ((h >> 4) % 120);
  const r = 110 + ((h >> 8) % 70);

  return (
    <svg
      className={variant === "card" ? styles.coverCard : styles.coverWide}
      viewBox="0 0 800 360"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`Portada de la categoría ${category}`}
    >
      <defs>
        <linearGradient id={`bg-${h}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#14141a" />
          <stop offset="1" stopColor="#0d0d10" />
        </linearGradient>
        <radialGradient id={`glow-${h}`} cx="0.72" cy="0.18" r="0.85">
          <stop offset="0" stopColor={accent} stopOpacity="0.28" />
          <stop offset="1" stopColor={accent} stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="800" height="360" fill={`url(#bg-${h})`} />
      <rect width="800" height="360" fill={`url(#glow-${h})`} />

      {/* Círculos concéntricos */}
      <g transform={`translate(${cx} ${cy})`}>
        <circle
          r={r}
          fill="none"
          stroke={accent}
          strokeOpacity="0.18"
          strokeWidth="1.5"
        />
        <circle
          r={r * 0.66}
          fill="none"
          stroke={accent}
          strokeOpacity="0.14"
          strokeWidth="1.5"
        />
        <circle
          r={r * 0.33}
          fill="none"
          stroke={accent}
          strokeOpacity="0.1"
          strokeWidth="1.5"
        />
      </g>

      {/* Línea EKG */}
      <path
        d={ekgPath(h)}
        fill="none"
        stroke={accent}
        strokeWidth="3"
        strokeOpacity="0.92"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Badge logo (cruz médica) */}
      <g transform="translate(48 48)">
        <rect width="56" height="56" rx="13" fill={accent} />
        <path
          d="M21 16h14v9h9v7h-9v9H21V32h-9v-7h9z"
          fill="#0D0D10"
        />
      </g>

      {/* Etiqueta de categoría */}
      <text
        x="48"
        y="320"
        fill={accent}
        fontFamily="var(--font-sans), system-ui, sans-serif"
        fontSize="20"
        fontWeight="600"
        letterSpacing="3"
      >
        {category.toUpperCase()}
      </text>
    </svg>
  );
}
