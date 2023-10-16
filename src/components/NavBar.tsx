'use client';
import { NavItem } from './NavItem';

const links: Array<'meals' | '/' | 'profile'> = ['meals', '/', 'profile'];

export function NavBar() {
  return (
    <footer className='fixed bottom-0 w-[100dvw] -translate-x-7 border-t border-solid border-gray-400'>
      <nav className='flex h-24 items-center justify-between'>
        {links.map((link) => (
          <NavItem key={link} title={link} />
        ))}
      </nav>
    </footer>
  );
}
