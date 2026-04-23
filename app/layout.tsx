import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Salutai — La API abierta para softwares médicos",
  description:
    "Middleware único: conecta tu IA con Doctoralia, Bewe, GestioMED y 20+ softwares clínicos. De 3 meses a 48 horas.",
  keywords: [
    "API IA",
    "software médico",
    "integración clínica",
    "Doctoralia API",
    "Bewe API",
    "middleware salud",
  ],
  openGraph: {
    title: "Salutai — Conecta IA y Clínicas",
    description:
      "Una sola API. Todos los softwares médicos. Construye para clínicas sin morir en integraciones legacy.",
    type: "website",
    locale: "es_ES",
  },
};

export const viewport: Viewport = {
  themeColor: "#0D0D10",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${instrumentSerif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
