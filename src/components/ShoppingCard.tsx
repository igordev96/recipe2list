'use client';
import { formatDate } from '@/utils/format';
import { ShoppingCartSimple } from '@phosphor-icons/react';

export function ShoppingCard() {
  return (
    <div className='flex h-24 w-24 cursor-pointer flex-col items-center justify-center gap-2 rounded bg-gray-400 transition-colors hover:bg-gray-600'>
      <ShoppingCartSimple className='text-white' size={42} />
      <div className='flex flex-col items-center gap-1'>
        <span className='text-xs font-semibold text-white'>
          {formatDate({
            dateInMilli: new Date().getTime(),
            month: true,
            day: true,
            year: true,
          })}
        </span>
        <span className='text-xs font-light text-white'>
          {formatDate({
            dateInMilli: new Date().getTime(),
            hour: true,
            minute: true,
          })}
        </span>
      </div>
    </div>
  );
}
