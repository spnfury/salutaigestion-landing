import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../blog.module.css";
import { articles, getArticle, getRelated } from "../articles";
import { BlogHeader, BlogFooter, CtaBox } from "../components";
import { RichText } from "../RichText";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = getArticle(params.slug);
  if (!article) return { title: "Artículo no encontrado · Salutai" };

  return {
    title: `${article.title} · Salutai`,
    description: article.excerpt,
    keywords: article.keywords,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      locale: "es_ES",
      publishedTime: article.date,
    },
  };
}

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const related = getRelated(params.slug);

  return (
    <main className={styles.page}>
      <BlogHeader />

      <article className={styles.article}>
        <nav className={styles.breadcrumb}>
          <Link href="/blog">Blog</Link> / {article.category}
        </nav>

        <header className={styles.articleHeader}>
          <div className={styles.articleMeta}>
            <span className={styles.cardTag}>{article.category}</span>
            <span>{article.dateLabel}</span>
            <span>·</span>
            <span>{article.readingTime} de lectura</span>
          </div>
          <h1 className={styles.articleTitle}>{article.title}</h1>
          <p className={styles.articleExcerpt}>{article.excerpt}</p>
        </header>

        <div className={styles.body}>
          {article.blocks.map((block, i) => {
            switch (block.type) {
              case "h2":
                return <h2 key={i}>{block.text}</h2>;
              case "p":
                return (
                  <p key={i}>
                    <RichText text={block.text} />
                  </p>
                );
              case "ul":
                return (
                  <ul key={i}>
                    {block.items.map((item, j) => (
                      <li key={j}>
                        <RichText text={item} />
                      </li>
                    ))}
                  </ul>
                );
              case "ol":
                return (
                  <ol key={i}>
                    {block.items.map((item, j) => (
                      <li key={j}>
                        <RichText text={item} />
                      </li>
                    ))}
                  </ol>
                );
              case "quote":
                return (
                  <p key={i} className={styles.quote}>
                    <RichText text={block.text} />
                  </p>
                );
              default:
                return null;
            }
          })}
        </div>
      </article>

      <CtaBox title={article.ctaTitle} />

      {related.length > 0 && (
        <section className={styles.related}>
          <h2 className={styles.relatedTitle}>Sigue leyendo</h2>
          <div className={styles.relatedGrid}>
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className={styles.relatedCard}
              >
                <span className={styles.relatedCardTag}>{r.category}</span>
                <h3 className={styles.relatedCardTitle}>{r.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      )}

      <BlogFooter />
    </main>
  );
}
