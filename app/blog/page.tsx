import type { Metadata } from "next";
import Link from "next/link";
import styles from "./blog.module.css";
import { articles } from "./articles";
import { BlogHeader, BlogFooter, CtaBox } from "./components";

export const metadata: Metadata = {
  title: "Blog · Salutai — Integraciones de IA con software clínico",
  description:
    "Guías y estrategias sobre cómo integrar tu IA con el software de gestión de las clínicas para captar más clientes. Doctoralia, Bewe, Clinic Cloud y más.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog · Salutai",
    description:
      "Cómo integrar tu IA con el software de gestión clínica y convertir esa integración en contratos.",
    type: "website",
    locale: "es_ES",
  },
};

export default function BlogIndex() {
  return (
    <main className={styles.page}>
      <BlogHeader />

      <section className={styles.indexHero}>
        <span className={styles.kicker}>El blog de Salutai</span>
        <h1 className={styles.indexTitle}>
          Integra, <em>conecta</em> y cierra más clientes
        </h1>
        <p className={styles.indexSubtitle}>
          Todo lo que una agencia de IA necesita saber para conectarse al
          software de gestión de las clínicas y convertir esa integración en su
          mayor ventaja comercial.
        </p>
      </section>

      <section className={styles.grid}>
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className={styles.card}
          >
            <div className={styles.cardMeta}>
              <span className={styles.cardTag}>{article.category}</span>
              <span>{article.readingTime}</span>
            </div>
            <h2 className={styles.cardTitle}>{article.title}</h2>
            <p className={styles.cardExcerpt}>{article.excerpt}</p>
            <span className={styles.cardReadMore}>Leer artículo →</span>
          </Link>
        ))}
      </section>

      <CtaBox />
      <BlogFooter />
    </main>
  );
}
