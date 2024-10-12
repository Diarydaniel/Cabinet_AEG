"use client";

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'glightbox/dist/css/glightbox.css';

import { Playfair_Display } from 'next/font/google';
import "./globals.css";
import { useEffect } from 'react';
import Script from 'next/script'; // Importation du composant Script de Next.js

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: "swap",
  variable: "--font-playfair-display",
  weight: ['400', '500', '600', '700', '800', '900']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // Utilisation de useEffect pour charger Bootstrap côté client
  useEffect(() => {
    typeof document !== 'undefined'
      ? require('bootstrap/dist/js/bootstrap.bundle.min.js')
      : null;
  }, []);

  return (
    <html lang="en">
      <head>
        {/* Balises meta et liens CSS */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
      </head>
      <body className={playfair.className}>
        {children}
        {/* Script pour Bootstrap */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
          strategy="beforeInteractive" // Charger le script avant l'interaction
        />
      </body>
    </html>
  );
}
