import { formatDate } from '@/utils/format';

export function Header(props: React.ComponentProps<'header'>) {
  const dateNowObject = {
    dateInMilli: new Date().getTime(),
    weekday: true as true,
    month: true as true,
    day: true as true,
  };

  return (
    <header {...props}>
      <h1 className='text-sm text-gray-300'>Welcome!</h1>
      <h2 className='text-xl font-semibold text-gray-100'>
        {formatDate(dateNowObject)}
      </h2>
    </header>
  );
}
