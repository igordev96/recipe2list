'use client';
import { ComponentProps, ReactNode } from 'react';

type ButtonProps = ComponentProps<'button'> & {
  title: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

export default function Button(props: ButtonProps) {
  const { title, leftIcon, rightIcon, ...rest } = props;

  return (
    <button
      className='flex items-center gap-2 rounded-lg bg-zinc-900 px-3 py-2 font-bold text-gray-200 active:bg-zinc-800 disabled:bg-zinc-800 disabled:text-gray-400'
      {...rest}
    >
      {leftIcon}
      {title}
      {rightIcon}
    </button>
  );
}
