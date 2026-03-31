"use client";

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formStatus, setFormStatus] = useState({ isLoading: false, isSuccess: false, error: '' });

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ isLoading: true, isSuccess: false, error: '' });

    const formData = new FormData(e.currentTarget);
    const payload = {
      agenciaName: formData.get('agenciaName'),
      email: formData.get('email'),
      software: formData.get('software')
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Error al enviar el formulario');
      setFormStatus({ isLoading: false, isSuccess: true, error: '' });
      e.currentTarget.reset();
    } catch (err) {
      setFormStatus({ isLoading: false, isSuccess: false, error: 'Hubo un error enviando el email. Inténtalo de nuevo.' });
    }
  };

  const toggleFaq = (index: number) => {
    if (openFaq === index) setOpenFaq(null);
    else setOpenFaq(index);
  };

  const logos = [
    "Doctoralia", "Clinic Cloud", "Bewe", "GestioMED", "DasiClinic", 
    "Nubimed", "MN Program", "Salud On Me"
  ];

  const faqs = [
    {
      q: "¿Cómo funciona la conexión con tantos softwares a la vez?",
      a: "Salutaigestion.com actúa como un middleware universal. En lugar de desarrollar una integración distinta para Bewe, otra para Doctoralia y otra para Gesten, tu agencia sólo se integra con nuestra API, y nosotros nos encargamos de traducir y enrutar las peticiones al sistema destino de cada clínica."
    },
    {
      q: "¿Está preparada para proyectos con alta demanda de SEO?",
      a: "Totalmente. Entendemos que muchas agencias de IA crean frontends o portales de citas. Nuestra API está diseñada para entregar datos estructurados y ultrarrápidos, 100% compatibles con frameworks como Next.js, favoreciendo la indexación en buscadores (SEO)."
    },
    {
      q: "¿Es seguro a nivel médico? (HIPAA / RGPD)",
      a: "Sí. Toda la información pasa por canales encriptados (TLS 1.3) y no persistimos datos sensibles en nuestros servidores salvo que nos lo exijas por contrato. Cumplimos estrictamente las normativas RGPD y HIPAA para operativas de salud."
    },
    {
      q: "¿Cuánto tiempo me ahorro?",
      a: "En promedio, una agencia IA reduce su time-to-market de 3 meses a tan solo 48 horas de trabajo. No tienes que lidiar con documentaciones obsoletas, fallos de conectividad o limitación de IPs de los softwares legacy."
    }
  ];

  return (
    <main className={styles.main}>
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className="text-gradient">Salutai</span>gestion.com
        </div>
        <nav className={styles.navLinks}>
          <a href="#features">Solución</a>
          <a href="#integrations">Integraciones</a>
          <a href="#faq">Dudas Frecuentes</a>
        </nav>
        <a href="#contact" className={styles.ctaBtnPrimary}>Obtener API Key</a>
      </header>

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroTag}>Para Agencias de IA y Automatización</div>
        <h1 className={styles.heroTitle}>Conecta tu IA con cualquier <span className="text-gradient">Software Médico</span> en minutos.</h1>
        <p className={styles.heroDesc}>
          La primera API abierta que resuelve el dolor de cabeza de las integraciones. 
          Sincroniza agendas, citas y datos clínicos desde tu bot de IA o portal Next.js 
          (100% optimizado para SEO) con los principales softwares del mercado.
        </p>
        <div className={styles.heroCtas}>
          <a href="#contact" className={styles.ctaBtnPrimary}>Contacto y Precios</a>
          <a href="#features" className={styles.ctaBtnSecondary}>Ver Documentación</a>
        </div>
      </section>

      {/* MARQUEE INTEGRACIONES */}
      <section id="integrations" className={styles.marqueeSection}>
        <div className={styles.marqueeTrack}>
          {/* Duplicamos los logos para lograr el efecto infinito */}
          {[...logos, ...logos].map((logo, idx) => (
            <div key={idx} className={styles.marqueeLogo}>◎ {logo}</div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className={styles.features}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>La infraestructura que te faltaba</h2>
          <p className={styles.sectionSubtitle}>Olvídate de APIs inconsistentes y soporte inexistente. Desarrolla features geniales para clínicas, sin pisarte los dedos.</p>
        </div>
        
        <div className={styles.grid}>
          <div className={`${styles.card} glass-panel`}>
            <div className={styles.cardIcon}>⚡</div>
            <h3 className={styles.cardTitle}>Un Punto de Entrada</h3>
            <p className={styles.cardDesc}>Escribe código una sola vez. Conéctate a Salutaigestion.com y obtendrás acceso bidireccional instantáneo a Doctoralia, Bewe, GestioMED, entre muchos otros.</p>
          </div>
          
          <div className={`${styles.card} glass-panel`}>
            <div className={styles.cardIcon}>🔍</div>
            <h3 className={styles.cardTitle}>100% Optimizado para SEO</h3>
            <p className={styles.cardDesc}>Ideal para portales frontend (Next.js/React). Respuesta de milisegundos y formatos de datos listos para renderizado en servidor (SSR), maximizando el SEO de tus clínicas.</p>
          </div>
          
          <div className={`${styles.card} glass-panel`}>
            <div className={styles.cardIcon}>🔒</div>
            <h3 className={styles.cardTitle}>Seguridad Grado Médico</h3>
            <p className={styles.cardDesc}>Despreocúpate de la privacidad. Nuestra capa de middleware incorpora auditoría activa, encriptación AES-256 e interoperabilidad compatible con RGPD europea.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonials}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Credibilidad en el Sector</h2>
        </div>
        <div className={styles.testimonialGrid}>
          <div className={`${styles.card} glass-panel`}>
            <p className={styles.quote}>"Nuestro chatbot de triage en WhatsApp no lograba escribir citas en las agendas de Clinic Cloud de nuestros clientes médicos. Salutaigestion nos arregló este bloqueo tecnológico en solo 48 horas."</p>
            <div className={styles.author}>
              <div className={styles.avatar}></div>
              <div>
                <div className={styles.authorName}>Marcos Torres</div>
                <div className={styles.authorRole}>CTO en MedBot AI Agencies</div>
              </div>
            </div>
          </div>
          <div className={`${styles.card} glass-panel`}>
            <p className={styles.quote}>"Teníamos que crear un paciente y asociarle una consulta por voz desde nuestra IA. Hacer esto uno a uno con Doctoralia y Gesten era inviable. El middleware de Salutaigestion es oro puro."</p>
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
          <h2 className={styles.sectionTitle}>Dudas Frecuentes</h2>
        </div>
        <div>
          {faqs.map((faq, i) => (
            <div key={i} className={styles.accordionItem}>
              <button 
                className={styles.accordionHeader} 
                onClick={() => toggleFaq(i)}
              >
                {faq.q}
                <span className={styles.accordionIcon}>{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && (
                <div className={styles.accordionBody}>{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className={styles.contact}>
        <div className={`${styles.contactBox} glass-panel`}>
          <div>
            <h2 className={styles.sectionTitle} style={{ textAlign: "left" }}>¿Listo para dominar el sector médico?</h2>
            <p className={styles.sectionSubtitle} style={{ marginLeft: 0 }}>
              Deja de perder contratos de IA porque no puedes integrarte al software del cliente. Háblanos y hagamos una prueba de concepto en 10 minutos.
            </p>
          </div>
          <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {formStatus.isSuccess && (
              <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', color: '#34d399', borderRadius: '8px', border: '1px solid rgba(52, 211, 153, 0.3)' }}>
                ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
              </div>
            )}
            {formStatus.error && (
              <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', color: '#f87171', borderRadius: '8px', border: '1px solid rgba(248, 113, 113, 0.3)' }}>
                {formStatus.error}
              </div>
            )}
            <div className={styles.formGroup}>
              <label>Nombre de tu Agencia IA</label>
              <input type="text" name="agenciaName" className={styles.input} placeholder="Ej. Nexus IA..." required disabled={formStatus.isLoading} />
            </div>
            <div className={styles.formGroup}>
              <label>Correo Electrónico (Trabajo)</label>
              <input type="email" name="email" className={styles.input} placeholder="ceo@agencia.com" required disabled={formStatus.isLoading} />
            </div>
            <div className={styles.formGroup}>
              <label>Software clínico principal que te bloquea</label>
              <input type="text" name="software" className={styles.input} placeholder="Doctoralia, Gesten, Bewe..." required disabled={formStatus.isLoading} />
            </div>
            <button type="submit" className={styles.ctaBtnPrimary} style={{ marginTop: '1rem', width: '100%' }} disabled={formStatus.isLoading}>
              {formStatus.isLoading ? 'Enviando petición...' : 'Solicitar Reunión Inmediata'}
            </button>
          </form>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Salutaigestion.com. Todos los derechos reservados. Primera API abierta SEO-ready para sector salud.</p>
      </footer>
    </main>
  );
}
