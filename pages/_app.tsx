import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import 'leaflet/dist/leaflet.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
