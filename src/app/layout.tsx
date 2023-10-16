import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import { UserProvider } from '@/context/UserContext';
import './globals.css';

const nunitoSans = Nunito_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Recipe 2 List',
  description: 'Built by igordev96',
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang='en'>
      <UserProvider>
        <body className={`bg-zinc-700 p-7 ${nunitoSans.className}`}>
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
