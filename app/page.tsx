"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formStatus, setFormStatus] = useState({
    isLoading: false,
    isSuccess: false,
    error: "",
  });

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setFormStatus({ isLoading: true, isSuccess: false, error: "" });

    const formData = new FormData(form);
    const payload = {
      agenciaName: formData.get("agenciaName"),
      email: formData.get("email"),
      software: formData.get("software"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Error al enviar el formulario");
      setFormStatus({ isLoading: false, isSuccess: true, error: "" });
      form.reset();
    } catch {
      setFormStatus({
        isLoading: false,
        isSuccess: false,
        error: "Hubo un error enviando el email. Inténtalo de nuevo.",
      });
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const logos = [
    "Doctoralia",
    "Clinic Cloud",
    "Bewe",
    "GestioMED",
    "DasiClinic",
    "Nubimed",
    "MN Program",
    "Salud On Me",
  ];

  const faqs = [
    {
      q: "¿Cómo os conectáis a tantos softwares a la vez?",
      a: "Actuamos como un middleware universal. En vez de picar una integración distinta para Bewe, otra para Doctoralia y otra para Gesten, tu agencia se integra una sola vez con nuestra API y nosotros traducimos y enrutamos las peticiones al sistema destino de cada clínica.",
    },
    {
      q: "¿Funciona bien para proyectos con fuerte componente SEO?",
      a: "Sí. Muchos de nuestros clientes montan portales de citas con Next.js o Astro. Nuestra API devuelve datos estructurados y rápidos, listos para SSR, lo que ayuda a posicionar sin sacrificar experiencia.",
    },
    {
      q: "¿Es seguro a nivel médico (HIPAA / RGPD)?",
      a: "Todo pasa por canales cifrados (TLS 1.3) y no persistimos datos sensibles salvo que el contrato lo exija. Cumplimos RGPD y HIPAA porque operamos dentro del sector salud, no porque toque.",
    },
    {
      q: "¿Cuánto me ahorro en tiempo?",
      a: "Pasamos de 3 meses de integración a unas 48 horas. Sin leer doc obsoleta, sin pelearte con soporte, sin limitaciones de IP absurdas.",
    },
  ];

  return (
    <main className={styles.main}>
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.logo}>
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
        </div>
        <nav className={styles.navLinks}>
          <a href="#features">Cómo funciona</a>
          <a href="#integrations">Integraciones</a>
          <a href="#faq">Dudas</a>
        </nav>
        <a href="#contact" className={styles.ctaBtnPrimary}>
          Obtener API Key →
        </a>
      </header>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.sticker}>
          De 3 meses a 48h
          <span className={styles.stickerSmall}>Garantizado</span>
        </div>

        <div className={styles.heroTag}>
          <span className={styles.liveDot}></span>
          Hecho para agencias de IA
        </div>

        <h1 className={styles.heroTitle}>
          Conecta tu IA con <em>cualquier</em> software médico.{" "}
          <span className="text-coral">Sin dolor.</span>
        </h1>

        <p className={styles.heroDesc}>
          Una sola API, todos los softwares clínicos del mercado. Deja de perder
          contratos porque Doctoralia y Bewe son un laberinto.
        </p>

        <div className={styles.heroCtas}>
          <a href="#contact" className={styles.ctaBtnPrimary}>
            Empieza a integrar →
          </a>
          <a href="#features" className={styles.ctaBtnSecondary}>
            Ver cómo funciona
          </a>
        </div>

        <svg
          className={styles.ekgWrapper}
          viewBox="0 0 900 60"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className={styles.ekgLine}
            d="M0 30 L180 30 L200 30 L215 10 L230 50 L250 5 L270 55 L290 30 L450 30 L470 30 L485 14 L500 46 L520 30 L700 30 L720 30 L735 18 L750 42 L770 30 L900 30"
          />
        </svg>
      </section>

      {/* MARQUEE */}
      <section id="integrations" className={styles.marqueeSection}>
        <div className={styles.marqueeLabel}>Integramos</div>
        <div className={styles.marqueeTrack}>
          {[...logos, ...logos].map((logo, idx) => (
            <div key={idx} className={styles.marqueeLogo}>
              {logo}
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className={styles.features}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Cómo te ayudamos</span>
          <h2 className={styles.sectionTitle}>
            La infraestructura que te <em>faltaba</em>
          </h2>
          <p className={styles.sectionSubtitle}>
            Olvida APIs inconsistentes y soporte fantasma. Construye features
            reales sin pisarte los dedos con el legacy.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <span className={styles.cardNumber}>01</span>
            <div className={styles.cardIcon}>◎</div>
            <h3 className={styles.cardTitle}>Un solo endpoint</h3>
            <p className={styles.cardDesc}>
              Escribe código una vez. Conectas a Salutai y tienes acceso
              bidireccional a Doctoralia, Bewe, GestioMED y compañía. Sin
              repetir trabajo por cada cliente.
            </p>
          </div>

          <div className={styles.card}>
            <span className={styles.cardNumber}>02</span>
            <div className={`${styles.cardIcon} ${styles.cardIconCoral}`}>
              ⚡
            </div>
            <h3 className={styles.cardTitle}>SEO-ready</h3>
            <p className={styles.cardDesc}>
              Respuesta en milisegundos y datos listos para SSR. Ideal si tu
              stack es Next.js, Astro o Remix y necesitas posicionar portales de
              citas rápido.
            </p>
          </div>

          <div className={styles.card}>
            <span className={styles.cardNumber}>03</span>
            <div className={`${styles.cardIcon} ${styles.cardIconCream}`}>
              ✦
            </div>
            <h3 className={styles.cardTitle}>Seguridad médica</h3>
            <p className={styles.cardDesc}>
              TLS 1.3, cifrado AES-256, auditoría activa y cumplimiento
              RGPD/HIPAA. Sin trucos: diseñado para sector salud desde el minuto
              cero.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonials}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Desde la trinchera</span>
          <h2 className={styles.sectionTitle}>
            Gente que ya <em>duerme</em> mejor
          </h2>
        </div>
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialCard}>
            <p className={styles.quote}>
              Nuestro chatbot de triage en WhatsApp no podía escribir citas en
              las agendas de Clinic Cloud. Salutai lo desbloqueó en 48 horas.
              Literalmente.
            </p>
            <div className={styles.author}>
              <div className={styles.avatar}></div>
              <div>
                <div className={styles.authorName}>Marcos Torres</div>
                <div className={styles.authorRole}>
                  CTO · MedBot AI Agencies
                </div>
              </div>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <p className={styles.quote}>
              Integrar Doctoralia y Gesten a mano era inviable. Con Salutai
              hicimos POC en una tarde y cerramos el contrato la misma semana.
            </p>
            <div className={styles.author}>
              <div className={styles.avatar}></div>
              <div>
                <div className={styles.authorName}>Laura G.</div>
                <div className={styles.authorRole}>Product Manager IA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className={styles.faq}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Dudas frecuentes</span>
          <h2 className={styles.sectionTitle}>
            Lo que <em>todos</em> preguntan
          </h2>
        </div>
        <div>
          {faqs.map((faq, i) => (
            <div key={i} className={styles.accordionItem}>
              <button
                className={styles.accordionHeader}
                onClick={() => toggleFaq(i)}
                aria-expanded={openFaq === i}
              >
                {faq.q}
                <span className={styles.accordionIcon}>
                  {openFaq === i ? "−" : "+"}
                </span>
              </button>
              {openFaq === i && (
                <div className={styles.accordionBody}>{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={styles.contact}>
        <div className={styles.contactBox}>
          <div>
            <span className={styles.sectionKicker}>Hablemos</span>
            <h2 className={styles.sectionTitle} style={{ textAlign: "left" }}>
              ¿Listo para <em>dejar de sufrir</em>?
            </h2>
            <p
              className={styles.sectionSubtitle}
              style={{ marginLeft: 0, textAlign: "left", maxWidth: "100%" }}
            >
              Deja de perder contratos de IA porque no puedes integrarte al
              software del cliente. Te hacemos POC en 10 minutos.
            </p>
          </div>
          <form
            onSubmit={handleFormSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
            {formStatus.isSuccess && (
              <div className={styles.successMsg}>
                ¡Recibido! Te escribimos en breve.
              </div>
            )}
            {formStatus.error && (
              <div className={styles.errorMsg}>{formStatus.error}</div>
            )}
            <div className={styles.formGroup}>
              <label>Nombre de tu agencia</label>
              <input
                type="text"
                name="agenciaName"
                className={styles.input}
                placeholder="Ej. Nexus IA"
                required
                disabled={formStatus.isLoading}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Email de trabajo</label>
              <input
                type="email"
                name="email"
                className={styles.input}
                placeholder="ceo@agencia.com"
                required
                disabled={formStatus.isLoading}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Software clínico que te bloquea</label>
              <input
                type="text"
                name="software"
                className={styles.input}
                placeholder="Doctoralia, Gesten, Bewe…"
                required
                disabled={formStatus.isLoading}
              />
            </div>
            <button
              type="submit"
              className={styles.formBtn}
              disabled={formStatus.isLoading}
            >
              {formStatus.isLoading ? "Enviando…" : "Solicitar reunión →"}
            </button>
          </form>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>
          © {new Date().getFullYear()} Salutai · Todos los derechos reservados
        </p>
        <p className={styles.footerMade}>
          Hecho con <span>♥</span> en Barcelona
        </p>
      </footer>
    </main>
  );
}
