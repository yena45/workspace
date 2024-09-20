type Props = {
  text: string;
  variant: string;
};

export default function Button({ text, variant = '' }: Props) {
  return <button className='btn btn-success float-end mt-3'> {text} </button>;
}
