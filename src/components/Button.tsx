'use client';
import { ComponentProps, ReactNode } from 'react';

type ButtonProps = ComponentProps<'button'> & {
  title: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  styleType?: 'normal' | 'send';
};

const styleTypes = {
  normal: 'bg-zinc-900 active:bg-zinc-800',
  send: 'bg-green-800 active:bg-green-700',
};

export default function Button(props: ButtonProps) {
  const {
    title,
    leftIcon,
    rightIcon,
    className,
    styleType = 'normal',
    ...rest
  } = props;

  const buttonClass = styleTypes[styleType];

  return (
    <button
      className={`flex items-center gap-2 rounded-lg px-3 py-2 font-bold text-gray-200 disabled:bg-zinc-800 disabled:text-gray-400 ${buttonClass} ${className}`}
      {...rest}
    >
      {leftIcon}
      {title}
      {rightIcon}
    </button>
  );
}
