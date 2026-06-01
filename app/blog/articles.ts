// Contenido del blog de Salutai.
//
// Cada artículo se define como datos estructurados (blocks) para poder
// renderizarlos de forma consistente y enlazarlos entre sí. Los enlaces
// internos dentro del texto usan sintaxis markdown: [texto](/blog/slug) o
// [texto](/#contact). El negrita se escribe con **dobles asteriscos**.

export const SITE = "https://salutaigestion.com";

export type ContentBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string };

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  date: string; // ISO
  dateLabel: string;
  keywords: string[];
  blocks: ContentBlock[];
  related: string[];
  ctaTitle?: string;
}

export const articles: Article[] = [
  {
    slug: "integraciones-software-gestion-captar-clientes",
    title:
      "Por qué tu agencia de IA pierde contratos sanitarios por culpa de las integraciones",
    excerpt:
      "El motivo número uno por el que una clínica te dice 'no' no es tu IA: es que no puedes conectarte a su software de gestión. Te lo explicamos y cómo darle la vuelta.",
    category: "Estrategia",
    readingTime: "6 min",
    date: "2026-05-20",
    dateLabel: "20 may 2026",
    keywords: [
      "integración software gestión",
      "captar clientes clínicas",
      "agencia IA salud",
      "contratos sanitarios",
    ],
    blocks: [
      {
        type: "p",
        text: "Tu producto de IA funciona. La demo deja con la boca abierta. El director de la clínica asiente, pregunta el precio… y entonces lanza la frase que mata el contrato: **«¿esto se conecta con nuestro software?»**. Y ahí, demasiadas veces, la respuesta honesta es «depende» o «tendríamos que estudiarlo».",
      },
      {
        type: "p",
        text: "Ese titubeo cuesta dinero. No pierdes el contrato porque tu IA sea peor que la competencia, lo pierdes porque **no puedes garantizar que vas a integrarte con el sistema de gestión del cliente** en un plazo razonable. La clínica ya vive dentro de Doctoralia, Bewe o Clinic Cloud, y no va a cambiar de software por ti.",
      },
      {
        type: "h2",
        text: "La integración es el verdadero producto",
      },
      {
        type: "p",
        text: "En el sector salud, el software de gestión no es un detalle técnico: es el sistema operativo del negocio. Ahí viven las agendas, los pacientes, las facturas y los recordatorios. Una IA que no escribe ni lee de ese sistema es una demo bonita que vive en una pestaña aparte. El valor real aparece cuando tu agente **reserva una cita de verdad en la agenda real**.",
      },
      {
        type: "p",
        text: "Por eso la pregunta sobre integración no es una objeción más: es LA objeción. Si la resuelves en la primera reunión, pasas de «proveedor interesante» a «proveedor que cierra». Si la dejas abierta, el ciclo de venta se alarga meses y muchos clientes simplemente desaparecen.",
      },
      {
        type: "h2",
        text: "El coste invisible de integrar a mano",
      },
      {
        type: "p",
        text: "La trampa habitual es prometer la integración y construirla cliente a cliente. Cada software médico tiene su propia API (cuando la tiene), su documentación desactualizada, sus límites de IP absurdos y su soporte fantasma. Multiplica eso por cada clínica nueva y tu equipo de producto se convierte en un equipo de fontanería de integraciones. Lo desglosamos en detalle en [el coste oculto de integrar uno a uno](/blog/una-api-vs-integrar-uno-a-uno-coste-oculto).",
      },
      {
        type: "p",
        text: "La alternativa es dejar de tratar cada integración como un proyecto y tratarla como infraestructura. Es exactamente la idea detrás de [un middleware de integración clínica](/blog/que-es-middleware-integracion-clinica): te integras una sola vez y llegas a todos los softwares del mercado.",
      },
      {
        type: "h2",
        text: "Cómo darle la vuelta en la próxima reunión",
      },
      {
        type: "ul",
        items: [
          "Cambia el discurso: no vendas «IA», vende «IA ya conectada a tu agenda».",
          "Lleva una prueba de concepto real, no una demo simulada. Aprende a montar una en minutos en [cómo cerrar clientes con una demo de integración](/blog/captar-clientes-clinicos-demo-integracion).",
          "Ten preparada la respuesta a las tres preguntas que toda clínica hace: ¿se conecta con MI software?, ¿es seguro con los datos?, ¿cuánto tarda?",
        ],
      },
      {
        type: "quote",
        text: "Dejas de competir por quién tiene la IA más lista y empiezas a competir por quién entrega valor antes. La integración es ese atajo.",
      },
      {
        type: "p",
        text: "Salutai existe precisamente para que la integración deje de ser tu cuello de botella comercial. Una sola API te conecta a Doctoralia, Bewe, GestioMED y compañía, para que en tu próxima reunión la respuesta a «¿esto se conecta?» sea siempre **«sí, y te lo demuestro ahora mismo»**.",
      },
    ],
    related: [
      "que-es-middleware-integracion-clinica",
      "captar-clientes-clinicos-demo-integracion",
      "una-api-vs-integrar-uno-a-uno-coste-oculto",
    ],
    ctaTitle: "¿Listo para no volver a perder un contrato por una integración?",
  },

  {
    slug: "que-es-middleware-integracion-clinica",
    title: "Qué es un middleware de integración clínica (y por qué lo necesitas)",
    excerpt:
      "Integrar uno a uno no escala. Un middleware traduce una única API tuya a todos los softwares de gestión médica. Te explicamos el concepto sin jerga.",
    category: "Conceptos",
    readingTime: "5 min",
    date: "2026-05-12",
    dateLabel: "12 may 2026",
    keywords: [
      "middleware integración clínica",
      "API software médico",
      "integración salud",
      "qué es middleware",
    ],
    blocks: [
      {
        type: "p",
        text: "«Middleware» suena a palabra de arquitecto de software, pero la idea es muy simple: es **una capa intermedia que habla por ti con muchos sistemas distintos**, para que tú solo tengas que hablar con ella una vez.",
      },
      {
        type: "h2",
        text: "El problema que resuelve",
      },
      {
        type: "p",
        text: "Imagina que cada clínica usa un software diferente: una Doctoralia, otra Bewe, otra Clinic Cloud, otra un sistema interno que montó un primo en 2014. Cada uno tiene su forma de crear una cita, su formato de datos y sus reglas. Si integras a mano, escribes y mantienes un conector por cada uno. Diez clientes con cuatro softwares distintos = cuatro integraciones a mantener para siempre. Ese laberinto lo describimos en [el mapa de APIs del software médico en España](/blog/apis-software-medico-espana-doctoralia-bewe).",
      },
      {
        type: "h2",
        text: "Cómo funciona un middleware",
      },
      {
        type: "p",
        text: "Tú te integras **una sola vez** con la API del middleware. Cuando tu IA quiere crear una cita, se la pides al middleware con un formato único y estándar. Él se encarga de traducir esa petición al idioma concreto del software de cada clínica y de enrutarla al sistema correcto. Para ti, reservar en Bewe o en Doctoralia es exactamente la misma llamada.",
      },
      {
        type: "ul",
        items: [
          "**Una interfaz, muchos destinos:** un endpoint tuyo, decenas de softwares detrás.",
          "**Traducción y normalización:** los datos te llegan siempre con la misma estructura, sin importar de dónde vengan.",
          "**Mantenimiento delegado:** cuando un software cambia su API, lo arregla el middleware, no tú.",
        ],
      },
      {
        type: "quote",
        text: "Pasas de mantener N integraciones frágiles a mantener una sola, estable y documentada.",
      },
      {
        type: "h2",
        text: "Por qué importa para una agencia de IA",
      },
      {
        type: "p",
        text: "Porque convierte la integración de un proyecto de meses en una llamada de API. Eso significa prototipos en horas, no en sprints, y demos reales delante del cliente. Es la diferencia entre [perder contratos por las integraciones](/blog/integraciones-software-gestion-captar-clientes) y cerrarlos en la primera reunión. Y, como todo ocurre en el sector salud, el middleware adecuado ya viene preparado para [cumplir RGPD y HIPAA](/blog/rgpd-hipaa-integraciones-ia-salud).",
      },
      {
        type: "p",
        text: "Salutai es ese middleware para el sector clínico: una API abierta que te conecta a todos los softwares de gestión médica relevantes del mercado, para que dediques tu energía a tu producto y no a la fontanería.",
      },
    ],
    related: [
      "apis-software-medico-espana-doctoralia-bewe",
      "una-api-vs-integrar-uno-a-uno-coste-oculto",
      "rgpd-hipaa-integraciones-ia-salud",
    ],
    ctaTitle: "Intégrate una vez, llega a todos los softwares",
  },

  {
    slug: "apis-software-medico-espana-doctoralia-bewe",
    title:
      "Doctoralia, Bewe, Clinic Cloud: el laberinto de APIs del software médico español",
    excerpt:
      "Un recorrido honesto por el ecosistema de software de gestión clínica en España y por qué integrarse con cada uno por separado es una pesadilla.",
    category: "Ecosistema",
    readingTime: "7 min",
    date: "2026-05-04",
    dateLabel: "4 may 2026",
    keywords: [
      "Doctoralia API",
      "Bewe API",
      "Clinic Cloud integración",
      "software gestión clínica España",
    ],
    blocks: [
      {
        type: "p",
        text: "El sector salud español no tiene un software de gestión, tiene decenas. Y eso, para una agencia de IA que quiere venderle a clínicas, es a la vez una oportunidad enorme y un campo de minas técnico.",
      },
      {
        type: "h2",
        text: "Un mercado fragmentado por diseño",
      },
      {
        type: "p",
        text: "Doctoralia domina la captación y la reserva online. Bewe es fuerte en clínicas estéticas y wellness. Clinic Cloud, GestioMED, Nubimed, MN Program y muchos otros se reparten consultas, fisioterapias, dentales y centros médicos. Cada uno nació para un nicho, con su propia base de datos y su propia visión de qué es «una cita».",
      },
      {
        type: "p",
        text: "Para el cliente final está bien: elige el que encaja con su especialidad. Para ti, que quieres que tu IA funcione en cualquier clínica, significa que **no hay un estándar al que conectarte**.",
      },
      {
        type: "h2",
        text: "Por qué cada API es un mundo",
      },
      {
        type: "ul",
        items: [
          "**Documentación desigual:** algunas APIs están bien documentadas, otras viven en un PDF de 2019 o directamente no son públicas.",
          "**Autenticación distinta:** tokens, OAuth, claves por IP, credenciales por clínica… cada software, su ritual.",
          "**Modelos de datos incompatibles:** lo que en uno es un 'paciente' en otro es un 'cliente' con campos distintos y formatos de fecha diferentes.",
          "**Límites y soporte:** rate limits opacos y soporte técnico que puede tardar semanas en contestar.",
        ],
      },
      {
        type: "quote",
        text: "No estás integrando una API. Estás integrando diez filosofías distintas de cómo gestionar una clínica.",
      },
      {
        type: "h2",
        text: "El error de tratarlo cliente a cliente",
      },
      {
        type: "p",
        text: "La reacción instintiva es: «empezamos por Doctoralia, que es el grande, y ya veremos». El problema es que tu siguiente cliente usa Bewe, y el siguiente Clinic Cloud, y de repente tienes tres integraciones a medio mantener y un equipo quemado. Hicimos los números en [una API vs. integrar uno a uno](/blog/una-api-vs-integrar-uno-a-uno-coste-oculto), y el coste oculto es brutal.",
      },
      {
        type: "h2",
        text: "La salida: una capa de abstracción",
      },
      {
        type: "p",
        text: "En lugar de hablar con cada software, hablas con [un middleware de integración clínica](/blog/que-es-middleware-integracion-clinica) que ya domina ese laberinto por ti. Una sola integración, todos los softwares detrás, y la traducción resuelta. Es lo que permite [hacer una prueba de concepto en 48 horas](/blog/integracion-rapida-48-horas-poc) en lugar de en un trimestre.",
      },
      {
        type: "p",
        text: "Salutai mantiene esos conectores actualizados para que tú no tengas que leer una sola línea de documentación de Doctoralia o Bewe. Tú llamas a nuestra API; nosotros hablamos su idioma.",
      },
    ],
    related: [
      "que-es-middleware-integracion-clinica",
      "una-api-vs-integrar-uno-a-uno-coste-oculto",
      "integracion-rapida-48-horas-poc",
    ],
    ctaTitle: "Salta el laberinto de APIs médicas",
  },

  {
    slug: "integracion-rapida-48-horas-poc",
    title: "De 3 meses a 48 horas: cómo acelerar la integración con software clínico",
    excerpt:
      "La velocidad de integración es una ventaja comercial. Te enseñamos cómo pasar de un proyecto trimestral a una prueba de concepto en dos días.",
    category: "Velocidad",
    readingTime: "5 min",
    date: "2026-04-25",
    dateLabel: "25 abr 2026",
    keywords: [
      "integración rápida software médico",
      "prueba de concepto clínica",
      "POC integración",
      "time to value salud",
    ],
    blocks: [
      {
        type: "p",
        text: "En venta B2B sanitaria, el tiempo mata más contratos que el precio. Cada semana que pasa entre el «me interesa» y el «funciona con mi sistema» es una semana en la que el cliente puede enfriarse, cambiar de prioridad o escuchar a un competidor.",
      },
      {
        type: "h2",
        text: "Por qué la integración tradicional tarda meses",
      },
      {
        type: "ul",
        items: [
          "Semanas pidiendo y esperando credenciales de la API del software del cliente.",
          "Días descifrando documentación incompleta o desactualizada.",
          "Idas y venidas con soportes que tardan en responder.",
          "Pruebas en entornos que no replican bien el real.",
        ],
      },
      {
        type: "p",
        text: "Nada de esto aporta valor al cliente. Es pura fricción. Y se repite, como vimos en [el laberinto de APIs médicas](/blog/apis-software-medico-espana-doctoralia-bewe), por cada software nuevo.",
      },
      {
        type: "h2",
        text: "Qué cambia con una capa de integración lista",
      },
      {
        type: "p",
        text: "Cuando la traducción a cada software ya está resuelta por [un middleware](/blog/que-es-middleware-integracion-clinica), tu trabajo se reduce a llamar a una API documentada y estable. El time-to-value se desploma:",
      },
      {
        type: "ol",
        items: [
          "Te integras una vez con la API del middleware (horas, no semanas).",
          "Pides una clave y empiezas a leer agendas y crear citas de prueba el mismo día.",
          "Montas una prueba de concepto sobre el software real del cliente en 48 horas.",
        ],
      },
      {
        type: "quote",
        text: "Pasar de 3 meses a 48 horas no es una mejora incremental: cambia quién gana el contrato.",
      },
      {
        type: "h2",
        text: "La velocidad como argumento de venta",
      },
      {
        type: "p",
        text: "Cuando puedes decirle a una clínica «en dos días te enseño esto funcionando sobre tu propio sistema», dejas de ser una promesa y pasas a ser una demostración. Esa es la base de [cerrar clientes con una demo de integración real](/blog/captar-clientes-clinicos-demo-integracion), y la razón por la que [las integraciones deciden qué agencia gana](/blog/integraciones-software-gestion-captar-clientes).",
      },
      {
        type: "p",
        text: "Con Salutai, montar esa prueba de concepto es cuestión de horas. Pedimos tu caso, te damos acceso y te ayudamos a tener la primera cita escrita en la agenda real antes de que el café se enfríe.",
      },
    ],
    related: [
      "captar-clientes-clinicos-demo-integracion",
      "apis-software-medico-espana-doctoralia-bewe",
      "que-es-middleware-integracion-clinica",
    ],
    ctaTitle: "Monta tu prueba de concepto en 48 horas",
  },

  {
    slug: "captar-clientes-clinicos-demo-integracion",
    title: "Cómo captar más clientes clínicos con una demo de integración real",
    excerpt:
      "Una demo que escribe de verdad en la agenda del cliente vende sola. Te contamos cómo convertir la integración en tu mejor argumento comercial.",
    category: "Ventas",
    readingTime: "6 min",
    date: "2026-04-16",
    dateLabel: "16 abr 2026",
    keywords: [
      "captar clientes clínicas",
      "demo integración",
      "venta IA salud",
      "prueba de concepto ventas",
    ],
    blocks: [
      {
        type: "p",
        text: "Hay dos tipos de demo. La que enseña una pantalla bonita con datos inventados, y la que **escribe una cita real en la agenda real del cliente delante de sus ojos**. La primera genera interés. La segunda genera contratos.",
      },
      {
        type: "h2",
        text: "Por qué la demo simulada ya no basta",
      },
      {
        type: "p",
        text: "Las clínicas han visto muchas demos de IA. Saben que un vídeo o un entorno de pruebas se puede maquillar. Lo que no se puede fingir es que tu agente reserve una cita que aparece, en directo, en su Doctoralia o su Bewe. Ese momento elimina la objeción más importante: «¿pero esto funcionará con MI sistema?».",
      },
      {
        type: "h2",
        text: "El guion de una demo que cierra",
      },
      {
        type: "ol",
        items: [
          "Pregunta qué software de gestión usan antes de la reunión.",
          "Conecta tu producto a ese software a través del middleware (sin integraciones a medida).",
          "En la reunión, lanza tu agente de IA y haz que cree una cita real.",
          "Enseña la cita apareciendo en su propia agenda. Silencio. Venta.",
        ],
      },
      {
        type: "p",
        text: "El requisito para hacer esto sin sufrir es poder integrarte rápido con cualquier software. Por eso esta táctica solo es viable cuando la integración tarda [48 horas en vez de 3 meses](/blog/integracion-rapida-48-horas-poc).",
      },
      {
        type: "quote",
        text: "Nadie discute el precio cuando acaba de ver su propia agenda actualizándose sola.",
      },
      {
        type: "h2",
        text: "Convierte la integración en propuesta de valor",
      },
      {
        type: "p",
        text: "No vendas «tenemos IA». Vende «nos conectamos a tu software y automatizamos X desde el primer día». Es un mensaje que entiende hasta el cliente menos técnico, y que te diferencia de las agencias que [pierden el contrato en la pregunta de la integración](/blog/integraciones-software-gestion-captar-clientes).",
      },
      {
        type: "p",
        text: "Y como trabajas con datos de salud, poder decir que todo viaja cifrado y cumple [RGPD y HIPAA](/blog/rgpd-hipaa-integraciones-ia-salud) cierra la última duda del responsable de la clínica.",
      },
      {
        type: "p",
        text: "Con Salutai preparas esa demo en horas: nos dices el software del cliente, te damos acceso y llegas a la reunión con la integración ya funcionando. Lo demás lo hace la cara del cliente al ver su agenda moverse sola.",
      },
    ],
    related: [
      "integracion-rapida-48-horas-poc",
      "integraciones-software-gestion-captar-clientes",
      "chatbots-ia-clinicas-acceso-agenda",
    ],
    ctaTitle: "Prepara tu próxima demo ganadora",
  },

  {
    slug: "rgpd-hipaa-integraciones-ia-salud",
    title: "RGPD y HIPAA en integraciones de IA con software sanitario: guía práctica",
    excerpt:
      "Trabajar con datos de salud sube el listón de seguridad. Qué debes garantizar al integrar tu IA con software clínico, explicado sin abogados.",
    category: "Seguridad",
    readingTime: "7 min",
    date: "2026-04-07",
    dateLabel: "7 abr 2026",
    keywords: [
      "RGPD integración salud",
      "HIPAA IA",
      "seguridad datos clínicos",
      "compliance software médico",
    ],
    blocks: [
      {
        type: "p",
        text: "En la mayoría de sectores, un fallo de integración es un bug. En salud, puede ser una brecha de datos sensibles con consecuencias legales y reputacionales. Por eso, cuando le vendes a una clínica, la seguridad no es un extra: es un requisito de entrada.",
      },
      {
        type: "h2",
        text: "Qué protege exactamente la normativa",
      },
      {
        type: "p",
        text: "El RGPD (Europa) y la HIPAA (EE. UU.) regulan cómo se tratan los datos personales y, en especial, los datos de salud, que están en la categoría más protegida. Para tu integración, esto se traduce en unos cuantos principios prácticos.",
      },
      {
        type: "ul",
        items: [
          "**Cifrado en tránsito:** todo dato que viaja entre tu IA, el middleware y el software clínico debe ir cifrado (TLS 1.3).",
          "**Minimización:** pide y guarda solo los datos que necesitas. Lo que no almacenas no se puede filtrar.",
          "**Control de acceso:** credenciales por cliente, permisos acotados y trazabilidad de quién hace qué.",
          "**Trazabilidad:** registros de auditoría para poder demostrar qué pasó y cuándo.",
        ],
      },
      {
        type: "quote",
        text: "La pregunta de la clínica no es '¿es legal?', es '¿me vas a meter en un problema?'. Tu trabajo es que la respuesta sea un no rotundo.",
      },
      {
        type: "h2",
        text: "El riesgo de integrar a mano",
      },
      {
        type: "p",
        text: "Cuando integras cada software por tu cuenta, también asumes tú toda la responsabilidad de seguridad de cada conector: gestión de credenciales, cifrado, almacenamiento. Multiplicado por cada software, como vimos en [el laberinto de APIs médicas](/blog/apis-software-medico-espana-doctoralia-bewe), la superficie de error crece peligrosamente.",
      },
      {
        type: "h2",
        text: "Cómo lo simplifica una capa especializada",
      },
      {
        type: "p",
        text: "Un [middleware diseñado para salud](/blog/que-es-middleware-integracion-clinica) centraliza el cifrado, la gestión de credenciales y la auditoría en un único punto que ya cumple la normativa. Tú heredas ese cumplimiento en lugar de reconstruirlo por cada cliente, y puedes decirlo con confianza en [tu demo de venta](/blog/captar-clientes-clinicos-demo-integracion).",
      },
      {
        type: "p",
        text: "Salutai opera dentro del sector salud desde el primer día: TLS 1.3, cifrado AES-256, no persistimos datos sensibles salvo que el contrato lo exija, y cumplimos RGPD y HIPAA porque es el suelo, no el techo. Así, la conversación de seguridad deja de frenar tus contratos.",
      },
    ],
    related: [
      "que-es-middleware-integracion-clinica",
      "apis-software-medico-espana-doctoralia-bewe",
      "captar-clientes-clinicos-demo-integracion",
    ],
    ctaTitle: "Integra con seguridad médica de serie",
  },

  {
    slug: "seo-sanitario-portales-citas-tiempo-real",
    title: "SEO sanitario: portales de citas que posicionan con datos en tiempo real",
    excerpt:
      "Un portal de reservas que carga rápido y muestra disponibilidad real posiciona mejor y convierte más. Cómo lograrlo con datos servidos al instante.",
    category: "SEO",
    readingTime: "6 min",
    date: "2026-03-28",
    dateLabel: "28 mar 2026",
    keywords: [
      "SEO sanitario",
      "portal de citas",
      "SSR datos clínicos",
      "posicionamiento clínicas",
    ],
    blocks: [
      {
        type: "p",
        text: "Muchos proyectos de IA para salud acaban incluyendo un portal: una web donde el paciente busca, ve disponibilidad y reserva. Y ahí entran en juego dos cosas que suelen ir reñidas: posicionar en Google y mostrar datos en tiempo real.",
      },
      {
        type: "h2",
        text: "Por qué el SEO y la disponibilidad real chocan",
      },
      {
        type: "p",
        text: "Google premia páginas rápidas y con contenido renderizado en servidor (SSR). Pero la disponibilidad de citas cambia cada minuto y vive dentro del software de gestión de la clínica. Si para pintar una página tienes que esperar a una API lenta o hacer mil llamadas en el navegador, tu Core Web Vitals se hunde y tu posicionamiento con él.",
      },
      {
        type: "h2",
        text: "La clave: datos estructurados y rápidos",
      },
      {
        type: "ul",
        items: [
          "**Respuesta en milisegundos** para que el SSR no se quede esperando.",
          "**Formato consistente** para generar datos estructurados (schema.org) que Google entiende.",
          "**Una sola fuente** aunque detrás haya muchos softwares distintos, para no complicar el frontend.",
        ],
      },
      {
        type: "p",
        text: "Conseguir esto integrando cada software a mano es muy difícil: cada API responde a su ritmo y con su formato. Con [un middleware que normaliza los datos](/blog/que-es-middleware-integracion-clinica), tu portal recibe siempre la misma estructura, lista para renderizar en Next.js, Astro o Remix.",
      },
      {
        type: "quote",
        text: "Un portal de citas rápido no es solo mejor UX: es más tráfico orgánico y más reservas sin pagar por cada clic.",
      },
      {
        type: "h2",
        text: "SEO como argumento para la clínica",
      },
      {
        type: "p",
        text: "A una clínica le encanta oír «vas a aparecer en Google y los pacientes reservarán solos». Si además tu portal muestra huecos reales sacados de su agenda, tienes un producto difícil de rechazar. Es otra forma de [convertir la integración en venta](/blog/captar-clientes-clinicos-demo-integracion).",
      },
      {
        type: "p",
        text: "Salutai devuelve datos rápidos y estructurados, listos para SSR, desde cualquier software clínico. Construyes el portal una vez y posiciona igual de bien tanto si la clínica usa Doctoralia como si usa Clinic Cloud.",
      },
    ],
    related: [
      "que-es-middleware-integracion-clinica",
      "captar-clientes-clinicos-demo-integracion",
      "chatbots-ia-clinicas-acceso-agenda",
    ],
    ctaTitle: "Sirve datos clínicos listos para posicionar",
  },

  {
    slug: "chatbots-ia-clinicas-acceso-agenda",
    title: "Chatbots y agentes de IA para clínicas: por qué fracasan sin acceso a la agenda",
    excerpt:
      "Un chatbot que no puede reservar es un buscador de FAQ. El salto a agente útil ocurre cuando escribe y lee de la agenda real. Aquí está el porqué.",
    category: "Casos de uso",
    readingTime: "5 min",
    date: "2026-03-18",
    dateLabel: "18 mar 2026",
    keywords: [
      "chatbot clínica",
      "agente IA salud",
      "reservar cita IA",
      "integración agenda médica",
    ],
    blocks: [
      {
        type: "p",
        text: "El chatbot de WhatsApp de la clínica responde horarios, explica tratamientos y es simpático. Pero cuando el paciente dice «vale, resérvame el jueves a las 10», contesta «llama a recepción». En ese instante, toda la magia se desvanece.",
      },
      {
        type: "h2",
        text: "La diferencia entre responder y resolver",
      },
      {
        type: "p",
        text: "Un chatbot que solo responde es un FAQ con buena conversación. Un agente que resuelve **lee la disponibilidad real, crea la cita y la confirma** en el sistema de la clínica. La diferencia para el negocio es enorme: uno entretiene, el otro reduce llamadas, evita huecos vacíos y trabaja 24/7.",
      },
      {
        type: "p",
        text: "Y esa diferencia depende por completo de una cosa: que tu IA tenga acceso de lectura y escritura a la agenda que vive dentro del software de gestión.",
      },
      {
        type: "h2",
        text: "Por qué cuesta tanto dar ese acceso",
      },
      {
        type: "ul",
        items: [
          "La agenda está en Doctoralia, Bewe o el software de turno, cada uno con su API.",
          "Necesitas leer huecos libres y escribir citas sin pisar reservas existentes.",
          "Todo con datos de salud, así que [con cifrado y cumplimiento RGPD/HIPAA](/blog/rgpd-hipaa-integraciones-ia-salud).",
        ],
      },
      {
        type: "p",
        text: "Construir eso para cada clínica es justo el tipo de trabajo que [hace fracasar los proyectos por las integraciones](/blog/integraciones-software-gestion-captar-clientes).",
      },
      {
        type: "quote",
        text: "Tu IA puede ser brillante razonando, pero si no escribe en la agenda real, el paciente no consigue su cita y la clínica no ve el valor.",
      },
      {
        type: "h2",
        text: "El acceso a la agenda como cimiento",
      },
      {
        type: "p",
        text: "Con [un middleware de integración](/blog/que-es-middleware-integracion-clinica), tu agente pide huecos y crea citas con una única llamada estándar, sea cual sea el software de la clínica. Eso es lo que convierte un chatbot en un empleado digital, y lo que te permite [demostrarlo en vivo](/blog/captar-clientes-clinicos-demo-integracion).",
      },
      {
        type: "p",
        text: "Salutai le da a tu IA acceso bidireccional a la agenda de cualquier software clínico a través de una sola API. Tú te centras en que el agente converse bien; nosotros nos encargamos de que la cita acabe escrita donde tiene que estar.",
      },
    ],
    related: [
      "integraciones-software-gestion-captar-clientes",
      "que-es-middleware-integracion-clinica",
      "captar-clientes-clinicos-demo-integracion",
    ],
    ctaTitle: "Dale a tu agente acceso a la agenda real",
  },

  {
    slug: "una-api-vs-integrar-uno-a-uno-coste-oculto",
    title: "Una sola API vs. integrar uno a uno: el coste oculto de no usar un middleware",
    excerpt:
      "Integrar cada software 'a mano' parece barato hasta que sumas el mantenimiento. Comparamos los dos caminos con números reales.",
    category: "ROI",
    readingTime: "6 min",
    date: "2026-03-09",
    dateLabel: "9 mar 2026",
    keywords: [
      "coste integración software",
      "middleware ROI",
      "una API vs muchas",
      "mantenimiento integraciones",
    ],
    blocks: [
      {
        type: "p",
        text: "«No necesitamos un middleware, integramos Doctoralia nosotros y listo.» Es una frase razonable… para el primer cliente. El problema aparece en el quinto, cuando ya arrastras cuatro integraciones distintas y un backlog de bugs que nadie quiere tocar.",
      },
      {
        type: "h2",
        text: "El coste que sí se ve",
      },
      {
        type: "p",
        text: "Integrar un software tiene un coste inicial evidente: días de desarrollo para leer la documentación, autenticarse, mapear datos y probar. Llamémoslo el precio de entrada. Es el único coste que la mayoría calcula.",
      },
      {
        type: "h2",
        text: "El coste que no se ve (y duele más)",
      },
      {
        type: "ul",
        items: [
          "**Mantenimiento perpetuo:** cada software actualiza su API y rompe tu conector cuando menos lo esperas.",
          "**Multiplicación:** cada cliente nuevo puede traer un software nuevo. El trabajo no se reutiliza, se acumula.",
          "**Coste de oportunidad:** cada hora de tu equipo arreglando integraciones es una hora que no dedica a tu producto.",
          "**Riesgo de seguridad:** más conectores propios = más superficie para un fallo con datos de salud.",
        ],
      },
      {
        type: "quote",
        text: "Integrar uno a uno no es un gasto único: es una suscripción a un problema que crece con tu negocio.",
      },
      {
        type: "h2",
        text: "Hagamos los números",
      },
      {
        type: "p",
        text: "Imagina que cada integración cuesta 3 semanas y luego 2 días al mes de mantenimiento. Con cuatro softwares, son 12 semanas iniciales y 8 días al mes para siempre, solo en fontanería. Con [un middleware](/blog/que-es-middleware-integracion-clinica), es **una** integración inicial y cero mantenimiento de conectores, porque eso lo asume el middleware. Esa cuenta es la que convierte [3 meses de trabajo en 48 horas](/blog/integracion-rapida-48-horas-poc).",
      },
      {
        type: "h2",
        text: "Cuándo compensa cada opción",
      },
      {
        type: "p",
        text: "Si solo vas a tener un cliente, con un único software, para siempre, intégralo a mano. En cualquier otro escenario realista —varios clientes, varios softwares, crecimiento— el middleware gana por goleada. Y te evita [perder contratos por no poder integrarte rápido](/blog/integraciones-software-gestion-captar-clientes).",
      },
      {
        type: "p",
        text: "Salutai sustituye N integraciones frágiles por una sola estable. Pagas una vez el coste de aprender nuestra API y te olvidas del mantenimiento de Doctoralia, Bewe o el software que venga después.",
      },
    ],
    related: [
      "que-es-middleware-integracion-clinica",
      "integracion-rapida-48-horas-poc",
      "integraciones-software-gestion-captar-clientes",
    ],
    ctaTitle: "Cambia N integraciones por una sola",
  },

  {
    slug: "checklist-integrar-ia-software-clinica",
    title: "Checklist: qué comprobar antes de integrar tu IA con el software de una clínica",
    excerpt:
      "Una lista práctica para no llevarte sorpresas: lo que debes verificar sobre el software, los datos y la seguridad antes de prometer una integración.",
    category: "Práctico",
    readingTime: "5 min",
    date: "2026-02-27",
    dateLabel: "27 feb 2026",
    keywords: [
      "checklist integración clínica",
      "integrar IA software médico",
      "requisitos integración salud",
      "antes de integrar",
    ],
    blocks: [
      {
        type: "p",
        text: "Antes de prometerle a una clínica que tu IA se integrará con su sistema, conviene hacer unas comprobaciones. Esta checklist te ahorra los «ups» que descarrilan un proyecto a mitad de camino.",
      },
      {
        type: "h2",
        text: "1. Sobre el software de gestión",
      },
      {
        type: "ul",
        items: [
          "¿Qué software usan exactamente y qué versión/plan? (Doctoralia, Bewe, Clinic Cloud…)",
          "¿Permite ese plan acceso por API o hay que subir de plan?",
          "¿Hay un único software o conviven varios entre sedes?",
        ],
      },
      {
        type: "h2",
        text: "2. Sobre los datos y las operaciones",
      },
      {
        type: "ul",
        items: [
          "¿Necesitas solo leer (disponibilidad) o también escribir (crear citas)?",
          "¿Qué entidades intervienen: pacientes, profesionales, servicios, salas?",
          "¿Cómo se identifican los huecos libres para no solapar reservas?",
        ],
      },
      {
        type: "h2",
        text: "3. Sobre seguridad y cumplimiento",
      },
      {
        type: "ul",
        items: [
          "¿Va todo cifrado en tránsito? ¿Dónde se almacena qué?",
          "¿Cumples [RGPD y HIPAA](/blog/rgpd-hipaa-integraciones-ia-salud) en todo el flujo?",
          "¿Quién es responsable de las credenciales y cómo se revocan?",
        ],
      },
      {
        type: "h2",
        text: "4. Sobre el tiempo y el riesgo",
      },
      {
        type: "ul",
        items: [
          "¿Cuánto tardas en tener una prueba de concepto funcionando? (objetivo: [48 horas](/blog/integracion-rapida-48-horas-poc))",
          "¿Qué pasa cuando el software actualice su API? ¿Quién mantiene el conector?",
          "¿Este trabajo se reutiliza con el próximo cliente o empiezas de cero?",
        ],
      },
      {
        type: "quote",
        text: "Si responder a esta lista te da vértigo, no es que tu proyecto sea malo: es que estás asumiendo la integración tú solo.",
      },
      {
        type: "h2",
        text: "El atajo a casi toda la checklist",
      },
      {
        type: "p",
        text: "La mayoría de estas preguntas dejan de ser tu problema cuando usas [un middleware de integración clínica](/blog/que-es-middleware-integracion-clinica): la compatibilidad con cada software, la normalización de datos, el cifrado y el mantenimiento ya están resueltos. Tú te concentras en tu IA y en [cerrar el contrato](/blog/integraciones-software-gestion-captar-clientes).",
      },
      {
        type: "p",
        text: "Con Salutai, marcas casi toda esta lista con un solo proveedor: una API, todos los softwares, seguridad médica de serie y prueba de concepto en horas. Cuéntanos el software del cliente y te decimos al momento si encaja.",
      },
    ],
    related: [
      "que-es-middleware-integracion-clinica",
      "rgpd-hipaa-integraciones-ia-salud",
      "integracion-rapida-48-horas-poc",
    ],
    ctaTitle: "Repasa tu integración con nosotros",
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelated(slug: string): Article[] {
  const article = getArticle(slug);
  if (!article) return [];
  return article.related
    .map((s) => getArticle(s))
    .filter((a): a is Article => Boolean(a));
}
