import { FormEvent, useRef } from 'react';
import Button from './atoms/Button';
import LabelInput from './molecules/LabelInput';

export default function Login({
  login,
}: {
  login: (id: number, name: string) => void;
}) {
  // const [id, setId] = useState(0);
  // const [name, setName] = useState('');
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const signIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = idRef.current?.value;
    const name = nameRef.current?.value;
    if (!id || !name) {
      alert('Input the id & name!!');
      return;
    }
    login(+id, name);
  };

  return (
    <>
      <form onSubmit={signIn} className='border p-4'>
        <LabelInput
          label='ID'
          type='number'
          ref={idRef}
          // onChange={(e) => setId(+e.currentTarget.value)}
        />
        <div className='flex'>
          <label htmlFor='name' className='w-24'>
            Name:
          </label>
          <input
            id='name'
            type='text'
            ref={nameRef}
            placeholder='Name...'
            className='inp'
          />
        </div>
        <Button
          text='Sign In'
          type='submit'
          variant='btn-success'
          classNames='float-end mt-3'
        />
      </form>
    </>
  );
}
