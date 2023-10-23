'use client';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from '@phosphor-icons/react';
import { Controller, UseControllerProps } from 'react-hook-form';

type CheckboxControllerProps = UseControllerProps & {
  id: string;
  name: string;
};

export default function CheckboxController(props: CheckboxControllerProps) {
  const { id, name, ...rest } = props;

  return (
    <Controller
      name={id}
      {...rest}
      render={({ field: { onChange, value } }) => (
        <div className='flex items-center gap-4'>
          <Checkbox.Root
            className='flex h-4 w-4 items-center justify-center rounded bg-gray-200 transition-colors'
            id={id}
            onCheckedChange={onChange}
            checked={value}
          >
            <Checkbox.Indicator className='text-blue-700'>
              <Check size={16} />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <label className='cursor-pointer text-gray-300' htmlFor={id}>
            {name}
          </label>
        </div>
      )}
    />
  );
}
