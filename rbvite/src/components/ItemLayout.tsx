import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { CartItem } from './hooks/session-context';

// export default function ItemLayout() {
//     const navigate = useNavigate();
//     const [currItem, setCurrItem] = useState<CartItem>(cart[0]);
//   const goItem = (id:number) => {
//     setCurrItem(cart.find({id} => id===Number(itemId)))

//   };
//   return (
//     <div className='flex justify-center'>
//       <div className='w-full border'>List</div>
//       <div className='w-full border'>
//         <Outlet />
//       </div>
//     </div>
//   );
// }
