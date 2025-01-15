import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Mulish } from 'next/font/google';

const mainFont = Mulish({
  variable: '--font-main',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${mainFont.variable} font-serif`}>
      <Component {...pageProps} />
    </main>
  );
}
