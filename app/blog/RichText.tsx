import Link from "next/link";
import { Fragment } from "react";
import styles from "./blog.module.css";

// Parser mínimo de texto enriquecido:
//  - [texto](/ruta)  -> enlace interno (next/link)
//  - [texto](https://) -> enlace externo
//  - **texto**       -> negrita
const TOKEN = /(\[[^\]]+\]\([^)]+\))|(\*\*[^*]+\*\*)/g;

export function RichText({ text }: { text: string }) {
  const parts = text.split(TOKEN).filter(Boolean);

  return (
    <>
      {parts.map((part, i) => {
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const [, label, href] = link;
          if (href.startsWith("/")) {
            return (
              <Link key={i} href={href} className={styles.inlineLink}>
                {label}
              </Link>
            );
          }
          return (
            <a
              key={i}
              href={href}
              className={styles.inlineLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          );
        }

        const bold = part.match(/^\*\*([^*]+)\*\*$/);
        if (bold) {
          return <strong key={i}>{bold[1]}</strong>;
        }

        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
