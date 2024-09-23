import {
  ForwardedRef,
  forwardRef,
  ReactNode,
  useImperativeHandle,
  useState,
} from 'react';

type TitleProps = {
  text: string;
  name: string;
};

const Title = ({ text, name }: TitleProps) => {
  return (
    <h1 className='text-3xl'>
      {text} {name}
    </h1>
  );
};

const Body = ({ children }: { children: ReactNode }) => {
  return (
    <div className='red' style={{ color: 'blue' }}>
      {children}
    </div>
  );
};

type Props = {
  name: string;
  age: number;
  count: number;
  plusCount: () => void;
  minusCount: () => void;
};

export type MyHandler = {
  jumpHelloState: () => void;
};

function Hello(
  { name, age, count, plusCount, minusCount }: Props,
  ref: ForwardedRef<MyHandler>
) {
  const [myState, setMyState] = useState(0);
  let v = 1;

  const handler: MyHandler = {
    jumpHelloState: () => setMyState((pre) => pre * 10),
  };
  useImperativeHandle(ref, () => handler);

  return (
    <div className='my-5 border border-slate-300 p-3'>
      <Title text='Hello~' name={name} />
      <Body>
        <h3 className='text-center text-2xl'>myState: {myState}</h3>
        This is Hello Body Component. {v} - {age}
      </Body>
      <button
        onClick={() => {
          v++;
          setMyState(myState + 1);
          plusCount();
        }}
        className='btn'
      >
        Hello(+)
      </button>
      <strong id='cnt' className='mx-5'>
        {count}
      </strong>
      <button onClick={() => minusCount()} className='btn btn-danger'>
        Minus
      </button>
    </div>
  );
}

const ImpHello = forwardRef(Hello);

export default ImpHello;
