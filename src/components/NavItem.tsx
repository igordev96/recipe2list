'use client';

import { usePathname } from 'next/navigation';
import { ForkKnife, ShoppingCartSimple, User } from '@phosphor-icons/react';
import { ComponentProps } from 'react';

type NavItemProps = {
  title: '/' | 'meals' | 'profile';
};

export function NavItem(props: NavItemProps) {
  const { title } = props;
  const pathName = usePathname();

  const isActiveClass =
    pathName === title ? 'border-t-2 border-solid border-gray-200' : '';

  const NavIcon =
    title === '/' ? ForkKnife : title === 'meals' ? ShoppingCartSimple : User;

  const handleOnClick = () => {
    console.log(title);
  };

  return (
    <div
      className={`flex h-full grow cursor-pointer items-center justify-center text-white transition-colors hover:text-gray-400 ${isActiveClass}`}
      onClick={handleOnClick}
    >
      <NavIcon size={48} />
    </div>
  );
}
