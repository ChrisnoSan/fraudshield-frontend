import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FraudShield AI — Detección de Fraude en Seguros",
  description:
    "Agente inteligente para detección de fraude en el mercado asegurador peruano",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
