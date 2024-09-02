import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import TranslationsProvider from '@/components/TranslationsProvider';
import initTranslations from '../i18n';
import { Container } from '@/components/ui/container';
import { AOSInit } from '@/components/AOSInit';
import { ThemeProvider } from '@/components/ThemeProvider';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'Welcome to our website!',
  keywords: 'example, home, page, keywords'
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const namespaces = ['home', 'common', 'about', 'sessions'];

  const { resources } = await initTranslations({
    locale: params.locale,
    namespaces: namespaces
  });

  return (
    <html lang="en" className="scroll-smooth">
      <body className={montserrat.className}>
        <AOSInit />
        <ThemeProvider>
          <TranslationsProvider
            locale={params.locale}
            namespaces={namespaces}
            resources={resources}>
            <Container>{children}</Container>
          </TranslationsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
