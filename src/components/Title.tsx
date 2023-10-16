import { ComponentProps, ReactNode } from 'react';

type TitleProps = ComponentProps<'p'> & {
  children: ReactNode;
};

export function Title(props: TitleProps) {
  const { children, className, ...rest } = props;

  return (
    <p className={`text-2xl font-bold text-white ${className}`} {...rest}>
      {children}
    </p>
  );
}
