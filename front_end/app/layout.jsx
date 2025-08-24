import './globals.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { siteConfig } from '../constants/site-config';


export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['news', 'articles', 'journals', 'breaking news', 'current events'],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'fa',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: '@timenew',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html data-theme="lofi" lang="fa">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
