import { Header } from '@/components/Header';
import { NavBar } from '@/components/NavBar';
import { ShoppingCard } from '@/components/ShoppingCard';
import { Title } from '@/components/Title';

const array = [1, 2, 3, 4, 5, 6];

export default function Home() {
  return (
    <main>
      <Header className='mb-16' />
      <Title className='mb-6'>Shopping Lists</Title>
      <div className='flex flex-wrap justify-between gap-4'>
        {array.map((item) => (
          <ShoppingCard key={item} />
        ))}
      </div>
      <NavBar />
    </main>
  );
}
