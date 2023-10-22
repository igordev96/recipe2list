import { ShoppingCard } from '@/components/ShoppingCard';
import { Title } from '@/components/Title';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home() {
  return (
    <main>
      <Title className='mb-6'>Shopping Lists</Title>
      <section className='flex max-h-[460px] flex-wrap justify-between gap-4 overflow-y-auto'>
        {array.map((item) => (
          <ShoppingCard key={item} />
        ))}
      </section>
    </main>
  );
}
