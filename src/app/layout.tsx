import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import { UserProvider } from '@/context/UserContext';
import { Header } from '@/components/Header';
import { NavBar } from '@/components/NavBar';
import './globals.css';

const nunitoSans = Nunito_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Recipe 2 List',
  description: 'Built by igordev96',
  manifest: '/manifest.json',
  themeColor: '#3f3f46',
  icons: {
    apple: '/icon.png',
  },
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang='en'>
      <UserProvider>
        <body
          className={`overflow-hidden bg-zinc-700 p-7 ${nunitoSans.className}`}
        >
          <Header className='mb-16' />
          {children}
          <NavBar />
        </body>
      </UserProvider>
    </html>
  );
}
