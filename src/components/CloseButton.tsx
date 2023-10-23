import { X } from '@phosphor-icons/react';
import { ComponentProps } from 'react';

export default function CloseButton(props: ComponentProps<'button'>) {
  const { className, ...rest } = props;

  return (
    <button
      className={`flex h-7 w-7 items-center justify-center rounded-full bg-red-500 transition-colors hover:bg-red-800 active:bg-red-800 ${className}`}
      {...rest}
    >
      <X className='text-gray-200' size={24} />
    </button>
  );
}
