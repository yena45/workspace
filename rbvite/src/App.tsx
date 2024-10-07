import { memo, useReducer, useRef, useState } from 'react';
import Hello, { MyHandler } from './components/Hello';
import My from './components/My';
import { SessionProvider } from './components/hooks/session-context';
import { useDebounce } from './components/hooks/timer-hooks';
import useToggle from './components/hooks/toggle';
import { Route, Routes, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';
import { NotFound } from './components/NotFound';
import Button from './components/atoms/Button';
import Items from './components/Items';
import ItemDetail from './components/ItemDetail';

const ColorTitle = ({
  color,
  backgroundColor,
}: {
  color: string;
  backgroundColor: string;
}) => {
  console.log('@@@ ColorTitle!!', color);
  return (
    <h2 className='text-2xl' style={{ color, backgroundColor }}>
      MEMO
    </h2>
  );
};

const MemoedColorTitle = memo(ColorTitle, ({ color: a }, { color: b }) => {
  console.log('🚀  a b:', a, b);

  return a === b;
});

function App() {
  const [friend, setFriend] = useState(10);
  const [, toggleReRender] = useToggle();
  const myHandleRef = useRef<MyHandler>(null);

  const [color, changeColor] = useReducer(() => 'blue', 'red');

  const friendRef = useRef<HTMLInputElement>(null);
  useDebounce(
    () => {
      // console.log('useDebounce>>>>>>>', friendRef.current?.value);
      setFriend(+(friendRef.current?.value || 0));
    },
    1000,
    [friendRef.current?.value]
  );

  // const { reset, clear } = useInterval(() => depArr((pre) => pre + 1), 1000);

  const location = useLocation();
  const { pathname } = location;
  console.log('🚀  pathname:', pathname);

  return (
    <div className='flex flex-col items-center'>
      {/* <h1 className='text-2xl'>F: {friend}</h1>
      <div className='flex'>
        <Button onClick={reset}>Reset</Button>
        <Button onClick={clear}>Clear</Button>
      </div> */}

      <SessionProvider>
        <Nav />
        <div className='mt-12 w-4/5 text-center'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/my' element={<My />} />
            <Route path='/items' element={<Items />} />
            <Route path='/items/:id' element={<ItemDetail />} />
            <Route
              path='/hello'
              element={
                <Hello
                  friend={+(friendRef.current?.value || 0)}
                  ref={myHandleRef}
                />
              }
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>

        <h1 className='mt-20'>{pathname}</h1>
        {pathname.startsWith('/hello') && (
          <div className='mt-3 flex w-full items-center justify-center px-5'>
            <label htmlFor='friendid' className='w-64'>
              Hello FriendID:
            </label>
            <input
              id='friendid'
              type='number'
              defaultValue={friend}
              // onChange={(e) => setFriend(+e.currentTarget.value)}
              onChange={toggleReRender}
              ref={friendRef}
              placeholder='friend id...'
              className='inp ml-3'
            />
          </div>
        )}

        {/* <Hello friend={friend} ref={myHandleRef} />
        <hr />
        <My /> */}
      </SessionProvider>

      <div className='mt-10 flex gap-2'>
        <MemoedColorTitle color='white' backgroundColor={color} />
        <Button onClick={changeColor}>ChangeColor</Button>
      </div>

      {/* <div className='card'>
        <button
          onClick={() => {
            plusCount();
            if (session.loginUser) session.loginUser.name = 'XXX' + count;
            // console.table(session.loginUser);
            myHandleRef.current?.jumpHelloState();
          }}
          className='btn'
        >
          App.count is {count}
        </button>
      </div> */}
    </div>
  );
}

export default App;
