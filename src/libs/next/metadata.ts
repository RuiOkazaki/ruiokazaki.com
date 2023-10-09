import { Metadata } from 'next';

export const metadata: Metadata = {
  viewport: {
    minimumScale: 1,
    initialScale: 1,
    width: 'device-width',
    userScalable: false,
  },
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
  ],
  manifest: '/site.webmanifest',
};
