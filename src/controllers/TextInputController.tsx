import { Controller, UseControllerProps } from 'react-hook-form';

type TextInputControllerProps = UseControllerProps & {
  placeholder: string;
  className?: string;
};

export default function TextInputController(props: TextInputControllerProps) {
  const { placeholder, className, ...rest } = props;
  return (
    <Controller
      {...rest}
      render={({ field: { value, onChange, name } }) => (
        <div className={`relative ${className}`}>
          <input
            enterKeyHint='enter'
            value={value}
            onChange={(e) => onChange(e.currentTarget.value)}
            className='peer w-full rounded px-3 py-1.5 text-xl text-zinc-800 outline-none focus:outline-1 focus:outline-purple-600'
            id={name}
            type='text'
          />
          <label
            className={`absolute transition-all peer-focus:-top-5 peer-focus:left-0 peer-focus:translate-y-0 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-gray-200 ${
              value
                ? '-top-5 left-0 translate-y-0 text-sm font-semibold text-white'
                : 'left-3 top-1/2 -translate-y-1/2'
            }`}
            htmlFor={name}
          >
            {placeholder}
          </label>
        </div>
      )}
    />
  );
}
