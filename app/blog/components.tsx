import Link from "next/link";
import styles from "./blog.module.css";

export function BlogHeader() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <svg
          className={styles.logoMark}
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          aria-hidden="true"
        >
          <rect width="64" height="64" rx="14" fill="#C8FF3A" />
          <path d="M24 18h16v10h10v8H40v10H24V36H14v-8h10z" fill="#0D0D10" />
          <circle
            cx="48"
            cy="16"
            r="7"
            fill="#FF5A36"
            stroke="#0D0D10"
            strokeWidth="3"
          />
        </svg>
        <span>
          <span className={styles.logoWord}>salutai</span>
          <span className={styles.logoSuffix}>.gestion</span>
        </span>
      </Link>
      <nav className={styles.navLinks}>
        <Link href="/#features">Cómo funciona</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/#faq">Dudas</Link>
      </nav>
      <Link href="/#contact" className={styles.ctaBtnPrimary}>
        Obtener API Key →
      </Link>
    </header>
  );
}

export function BlogFooter() {
  return (
    <footer className={styles.footer}>
      <p>© 2026 Salutai · Todos los derechos reservados</p>
      <Link href="/blog">Todos los artículos →</Link>
    </footer>
  );
}

export function CtaBox({ title }: { title?: string }) {
  return (
    <section className={styles.ctaBox}>
      <h2 className={styles.ctaBoxTitle}>
        {title ? (
          title
        ) : (
          <>
            ¿Listo para <em>dejar de sufrir</em> con las integraciones?
          </>
        )}
      </h2>
      <p className={styles.ctaBoxText}>
        Una sola API te conecta con Doctoralia, Bewe, GestioMED y todos los
        softwares clínicos. Te montamos una prueba de concepto en 10 minutos.
      </p>
      <div className={styles.ctaButtons}>
        <Link href="/#contact" className={styles.ctaBtnPrimary}>
          Solicitar reunión →
        </Link>
        <Link href="/blog" className={styles.ctaBtnSecondary}>
          Seguir leyendo
        </Link>
      </div>
    </section>
  );
}
