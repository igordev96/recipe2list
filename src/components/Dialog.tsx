'use client';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import CloseButton from './CloseButton';

type DialogProps = {
  title: string;
  isOpen: boolean;
  closeDialog: () => void;
  children: ReactNode;
};

export default function Dialog(props: DialogProps) {
  const { title, isOpen, closeDialog, children } = props;

  return (
    isOpen &&
    createPortal(
      <div className='absolute left-0 top-0 h-screen w-screen bg-slate-800 p-7'>
        <div className='mb-12 flex items-center justify-between'>
          <p className='text-[2rem] font-bold text-white'>{title}</p>
          <CloseButton onClick={closeDialog} />
        </div>
        {children}
      </div>,
      document.body,
    )
  );
}
