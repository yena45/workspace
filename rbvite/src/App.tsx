import { useRef } from 'react';
import Hello, { MyHandler } from './components/Hello';
import My from './components/My';
import { SessionProvider } from './components/hooks/session-context';
// import { useCounter } from './hooks/counter-hook';

function App() {
  const myHandleRef = useRef<MyHandler>(null);
  return (
    <div className='flex flex-col items-center'>
      <SessionProvider>
        <Hello age={33} ref={myHandleRef} />
        <hr />
        <My />
      </SessionProvider>

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
