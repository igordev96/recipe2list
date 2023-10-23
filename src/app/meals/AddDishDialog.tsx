'use client';
import { useForm } from 'react-hook-form';
import Dialog from '@/components/Dialog';
import TextInputController from '@/controllers/TextInputController';
import Button from '@/components/Button';
import {
  Hamburger,
  PencilSimple,
  PlusCircle,
  TrashSimple,
} from '@phosphor-icons/react';

const fakeIngredients: {
  ingredient: string;
  amount: number | string;
  unit: string;
}[] = [
  {
    ingredient: 'Tomatoes',
    amount: 2,
    unit: 'cups',
  },
  {
    ingredient: 'Onions',
    amount: 1,
    unit: 'medium',
  },
  {
    ingredient: 'Garlic',
    amount: 2,
    unit: 'cloves',
  },
  {
    ingredient: 'Olive Oil',
    amount: 2,
    unit: 'tablespoons',
  },
  {
    ingredient: 'Basil',
    amount: 1 / 4,
    unit: 'cup',
  },
  {
    ingredient: 'Salt',
    amount: 1,
    unit: 'teaspoon',
  },
  {
    ingredient: 'Pepper',
    amount: 1 / 2,
    unit: 'teaspoon',
  },
  {
    ingredient: 'Pasta',
    amount: 8,
    unit: 'ounces',
  },
  {
    ingredient: 'Parmesan Cheese',
    amount: 1 / 2,
    unit: 'cup',
  },
  {
    ingredient: 'Red Pepper Flakes',
    amount: 1 / 4,
    unit: 'teaspoon',
  },
];

type AddDishDialogProps = {
  isOpen: boolean;
  closeDialog: () => void;
};

export default function AddDishDialog(props: AddDishDialogProps) {
  const { isOpen, closeDialog } = props;
  const { control: dishControl, handleSubmit: dishHandleSubmit } = useForm();
  const { control: ingredientsControl, handleSubmit: ingredientsHandleSubmit } =
    useForm();

  return (
    <Dialog title='Add your dish' isOpen={isOpen} closeDialog={closeDialog}>
      <section className='flex h-[calc(100%_-_96px)] flex-col'>
        <TextInputController
          defaultValue=''
          className='mb-12'
          control={dishControl}
          name='dish-name'
          placeholder='Dish name'
        />
        <p className='mb-3 font-semibold text-white'>Ingredients</p>
        <div className='mb-10 max-h-96 overflow-y-auto'>
          {fakeIngredients.map((ingredient) => (
            <div
              key={Math.random()}
              className='flex items-center justify-between rounded px-4 py-2 odd:bg-gray-600'
            >
              <p className='text-gray-300'>
                <span>{ingredient.amount} </span>
                <span>{ingredient.unit} </span>
                <span>{ingredient.ingredient}</span>
              </p>
              <div className='flex items-center gap-3'>
                <PencilSimple
                  className='cursor-pointer text-gray-200 active:text-gray-400'
                  size={24}
                />
                <TrashSimple
                  className='cursor-pointer text-red-500 active:text-red-700'
                  size={24}
                />
              </div>
            </div>
          ))}
        </div>
        <div className='mt-auto flex flex-col gap-5'>
          <TextInputController
            defaultValue=''
            control={ingredientsControl}
            name='ingredient'
            placeholder='Ingredient'
          />
          <div className='grid grid-cols-[1fr_2fr] gap-5'>
            <TextInputController
              defaultValue=''
              control={ingredientsControl}
              name='amount'
              placeholder='Amount'
            />
            <TextInputController
              defaultValue=''
              control={ingredientsControl}
              name='unit'
              placeholder='Unit'
            />
          </div>
          <Button
            className='justify-center'
            title='Add ingredient'
            rightIcon={<PlusCircle size={32} />}
          />
        </div>
        <Button
          className='mt-3 justify-center'
          styleType='send'
          title='Create dish'
          rightIcon={<Hamburger size={32} />}
        />
      </section>
    </Dialog>
  );
}
