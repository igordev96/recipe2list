'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ForkKnife, ShoppingCartSimple, User } from '@phosphor-icons/react';

type NavItemProps = {
  title: 'lists' | 'meals' | 'profile';
};

export function NavItem(props: NavItemProps) {
  const { title } = props;
  const pathName = usePathname();

  const isActiveClass =
    pathName === `/${title}` ? 'border-t-2 border-solid border-gray-200' : '';

  const NavIcon =
    title === 'meals'
      ? ForkKnife
      : title === 'lists'
      ? ShoppingCartSimple
      : User;

  const handleOnClick = () => {
    console.log(title, pathName);
  };

  return (
    <Link
      className={`flex h-full grow cursor-pointer items-center justify-center text-white transition-colors hover:text-gray-400 ${isActiveClass}`}
      href={`/${title}`}
    >
      <NavIcon size={48} />
    </Link>
  );
}
