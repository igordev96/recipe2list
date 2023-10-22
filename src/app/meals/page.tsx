import { Title } from '@/components/Title';
import FoodsForm from './FoodsForm';

export default function Meals() {
  return (
    <main>
      <Title className='mb-3'>Your dishes:</Title>
      <FoodsForm />
    </main>
  );
}
