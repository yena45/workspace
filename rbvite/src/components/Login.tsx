import { FormEvent } from 'react';

export default function Login({
  login,
}: {
  login: (id: number, name: string) => void;
}) {
  // const [id, setId] = useState(0);
  // console.log('🚀  id:', id);

  const signIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const eles = e.currentTarget.elements;
    const { id, name } = eles as typeof eles & {
      id: HTMLInputElement;
      name: HTMLInputElement;
    };
    // console.log('$$$', id, name);
    if (!id.value || !name.value) {
      alert('Input the id & name!!');
      id.focus();
      return;
    }

    login(+id.value, name.value);
  };

  return (
    <form onSubmit={signIn}>
      ID:
      <input
        id='id'
        type='number'
        placeholder='Name...'
        // onChange={(e) => setId(+e.currentTarget.value)}
      />
      Name:
      <input
        id='name'
        type='text'
        autoComplete='off'
        placeholder='Password...'
        // onChange={(e) => setName(e.currentTarget.value)}
      />
      <button>Sign In</button>
    </form>
  );
}
