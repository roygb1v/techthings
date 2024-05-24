import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

export const metadata = {
  title: 'Find your best laptop',
  description: 'Answer a few questions and let us know decide for you!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" style={{ height: '100%' }}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <section>
          <MantineProvider theme={theme}>
            <Header />
            {children}
            <Footer />
          </MantineProvider>
        </section>
      </body>
    </html>
  );
}
