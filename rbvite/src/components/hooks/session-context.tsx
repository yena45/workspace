import {
  createContext,
  createRef,
  PropsWithChildren,
  useContext,
  useLayoutEffect,
  useRef,
} from 'react';
import { LoginHandler } from '../Login';
import { useFetch } from './fetch-hook';
import useToggle from './toggle';
import { useMyReducer } from '../../libs/my-uses';

// const SampleSession = {
//   loginUser: { id: 1, name: '홍길동' },
//   cart: [
//     { id: 100, name: '라면', price: 3000 },
//     { id: 101, name: '컵라면', price: 2000 },
//     { id: 200, name: '파', price: 5000 },
//   ],
// };
const SampleSession: Session = {
  loginUser: { id: 0, name: '' },
  cart: [],
};

type LoginUser = { id: number; name: string };
export type CartItem = { id: number; name: string; price: number };
export type Session = { loginUser: LoginUser | null; cart: CartItem[] };

const contextInitValue = {
  session: SampleSession,
  logout: () => {},
  login: (id: number, name: string) => {
    console.log(id, name);
  },
  removeCartItem: (id: number) => console.log(id),
  addCartItem: (name: string, price: number) => console.log(name, price),
  editCartItem: (item: CartItem) => console.log(item),
  loginRef: createRef<LoginHandler>(),
  toggleReloadSession: () => {},
};

type SessionContextProps = Omit<typeof contextInitValue, 'session'> & {
  session: Session;
};

type Action =
  | { type: 'intialize'; payload: Session }
  | {
      type: 'login';
      payload: LoginUser;
    }
  | {
      type: 'logout';
      payload: null;
    }
  | { type: 'addCartItem'; payload: CartItem }
  | { type: 'editCartItem'; payload: CartItem }
  | { type: 'removeCartItem'; payload: number };

const reducer = (session: Session, { type, payload }: Action) => {
  switch (type) {
    case 'intialize':
      return payload;
    case 'login':
      return { ...session, loginUser: payload };
    case 'logout':
      return { ...session, loginUser: null };
    case 'addCartItem':
      return { ...session, cart: [...session.cart, payload] };
    case 'removeCartItem':
      return {
        ...session,
        cart: session.cart.filter(({ id }) => id !== payload),
      };
    case 'editCartItem':
      return {
        ...session,
        cart: session.cart.map((oldItem) =>
          oldItem.id === payload.id ? payload : oldItem
        ),
      };
    default:
      return session;
  }
};

const SessionContext = createContext<SessionContextProps>(contextInitValue);

export const SessionProvider = ({ children }: PropsWithChildren) => {
  // const [session, setSession] = useState<Session>(SampleSession);
  // const [session, dispatch] = useReducer(reducer, SampleSession);
  const [session, dispatch] = useMyReducer(reducer, SampleSession);
  const [reloadSession, toggleReloadSession] = useToggle();

  const { data } = useFetch<Session>('/data/sample.json', true, [
    reloadSession,
  ]);
  // console.log('🚀  data:', data);
  useLayoutEffect(() => {
    // setSession(data || SampleSession);
    dispatch({ type: 'intialize', payload: data || SampleSession });
  }, [data, dispatch]);

  const loginRef = useRef<LoginHandler>(null);

  // const logout = () => setSession({ ...session, loginUser: null });
  const logout = () => dispatch({ type: 'logout', payload: null });

  const login = (id: number, name: string) => {
    if (!id) {
      alert('사용자 ID를 입력하세요!');
      console.log('>>>', loginRef.current);
      return loginRef.current?.focus('id');
    }

    if (!name) {
      alert('Name을 입력하세요!');
      return loginRef.current?.focus('name');
    }

    // setSession({
    //   ...session,
    //   loginUser: { id, name },
    // });

    dispatch({ type: 'login', payload: { id, name } });
  };

  const addCartItem = (name: string, price: number) => {
    const id = Math.max(...session.cart.map(({ id }) => id), 0) + 1;
    // setSession({ ...session, cart: [...session.cart, { id, name, price }] });
    dispatch({ type: 'addCartItem', payload: { id, name, price } });
  };

  const removeCartItem = (toRemoveId: number) => {
    dispatch({ type: 'removeCartItem', payload: toRemoveId });
  };

  const editCartItem = (item: CartItem) => {
    dispatch({
      type: 'editCartItem',
      payload: item,
    });
  };

  return (
    <SessionContext.Provider
      value={{
        session,
        logout,
        login,
        removeCartItem,
        addCartItem,
        editCartItem,
        loginRef,
        toggleReloadSession,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSession = () => useContext(SessionContext);
