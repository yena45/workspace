import { FaPlus, FaTrashCan } from 'react-icons/fa6';
import Login from './Login.tsx';
import Profile from './Profile.tsx';
import Button from './atoms/Button.tsx';
import { FormEvent, useRef, useState } from 'react';
import { FaRedo, FaSave } from 'react-icons/fa';
import { useCounter } from './hooks/counter-hook.tsx';
import { useSession } from './hooks/session-context.tsx';

export default function My() {
  const { session, removeCartItem, addCartItem } = useSession();
  const { plusCount } = useCounter();
  const [isEditing, setIsEditing] = useState(false);
  const logoutButtonRef = useRef<HTMLButtonElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  const toggleEditing = () => {
    setIsEditing((pre) => !pre);
    plusCount();
  };

  const removeItem = (id: number) => {
    if (confirm('Are u sure?')) {
      removeCartItem(id);
    }
  };

  const saveItem = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const price = priceRef.current?.value;
    // console.log('🚀  name/price:', name, price);
    if (!name) {
      alert('상품명을 입력하세요!');
      return nameRef.current?.focus();
    } else if (!price) {
      alert('금액을 입력하세요!');
      return priceRef.current?.focus();
    }

    addCartItem(name, +price);
    nameRef.current.value = '';
    priceRef.current.value = '';
    nameRef.current.focus();
  };

  return (
    <>
      {session.loginUser ? (
        <div className='flex gap-5'>
          <Profile ref={logoutButtonRef} />
          <Button onClick={() => logoutButtonRef.current?.focus()}>
            MySignOut
          </Button>
        </div>
      ) : (
        <Login />
      )}

      <ul className='my-3 w-2/3 border p-3'>
        {session.cart?.length ? (
          session.cart.map(({ id, name, price }) => (
            <li key={id} className='flex justify-between'>
              <strong>
                {id}. {name}
                <small className='ml-2 font-light text-gray-500'>
                  {price.toLocaleString()}원
                </small>
              </strong>
              <button
                onClick={() => removeItem(id)}
                className='btn btn-danger px-1 py-0'
              >
                <FaTrashCan />
              </button>
            </li>
          ))
        ) : (
          <li className='text-slate-500'>There is no items.</li>
        )}
        <li className='mt-3 text-center'>
          {isEditing ? (
            <form onSubmit={saveItem} className='mt-3 flex gap-3'>
              <input
                ref={nameRef}
                type='text'
                placeholder='name..'
                className='inp'
              />
              <input
                ref={priceRef}
                type='number'
                placeholder='price..'
                className='inp'
              />
              <Button type='reset' onClick={toggleEditing}>
                <FaRedo />
              </Button>
              <Button type='submit' variant='btn-primary'>
                <FaSave />
              </Button>
            </form>
          ) : (
            <Button onClick={toggleEditing}>
              <FaPlus /> Add Item
            </Button>
          )}
        </li>
      </ul>
    </>
  );
}
