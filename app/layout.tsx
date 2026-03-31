import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Salutaigestion.com | La API Abierta para Softwares Médicos",
  description: "Conecta tu Inteligencia Artificial de forma unificada con Doctoralia, Bewe, GestioMED y más softwares de clínicas mediante Salutaigestion.com.",
  keywords: ["API IA", "software médico", "integración clínica", "Doctoralia API", "Bewe API", "middleware salud", "inteligencia artificial"],
  openGraph: {
    title: "Salutaigestion.com | Conecta IA y Clínicas",
    description: "La primera API abierta que soluciona la integración entre agencias de IA y los softwares médicos líderes en Salutaigestion.com.",
    type: "website",
    locale: "es_ES"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
