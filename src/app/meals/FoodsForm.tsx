'use client';
import { useForm } from 'react-hook-form';
import CheckboxController from '@/controllers/CheckboxController';
import Button from '@/components/Button';
import {
  PlusCircle,
  ShoppingCartSimple,
  PencilSimple,
  SmileySad,
} from '@phosphor-icons/react';

const fakeData: {
  id: string;
  name: string;
}[] = [
  { id: 'popcorn-82572', name: 'Popcorn' },
  { id: 'grilled-bbq-26127', name: 'Grilled BBQ' },
  { id: 'apple-pie-43162', name: 'Apple pie' },
];

interface IForm {
  [key: string]: boolean | undefined;
}

export default function FoodsForm() {
  const { control, handleSubmit, watch } = useForm<IForm>();

  const formData = watch();
  const isGenerateDisabled = !Object.values(formData).some((value) => value);

  const onSubmit = (data: IForm) => {
    const idsToSearch: string[] = [];
    const ids = Object.keys(data);
    for (const id of ids) {
      if (data[id]) {
        idsToSearch.push(id);
      }
    }
    console.log(idsToSearch);
  };

  const onEdit = (id: string) => {
    console.log('open edit dish', id);
  };

  const onAdd = () => {
    console.log('open add dish');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {!fakeData.length ? (
        <div className='mb-16 text-center'>
          <p className='text-2xl text-gray-400'>No dishes yet</p>
          <SmileySad className='mx-auto mt-4 text-gray-400' size={32} />
        </div>
      ) : (
        <div className='mb-6 max-h-96 overflow-y-auto'>
          {fakeData.map((food) => (
            <div
              key={food.id}
              className='flex items-center justify-between rounded px-4 py-2 odd:bg-gray-800'
            >
              <CheckboxController
                id={food.id}
                control={control}
                name={food.name}
              />
              <PencilSimple
                onClick={() => onEdit(food.id)}
                className='cursor-pointer text-gray-200 active:text-gray-400'
                size={24}
              />
            </div>
          ))}
        </div>
      )}
      <div className='flex items-center justify-between'>
        <Button
          onClick={onAdd}
          type='button'
          title='Add dish'
          rightIcon={<PlusCircle size={32} />}
        />
        <Button
          disabled={isGenerateDisabled}
          type='submit'
          title='Generate'
          rightIcon={<ShoppingCartSimple size={32} />}
        />
      </div>
    </form>
  );
}
