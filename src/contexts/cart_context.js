import { createContext, useContext, useReducer } from 'react';

// State
const initialCarts = [];

// Reducer
function cartReducer(state, action) {
  switch (action.type) {
    // 장바구니 불러오기
    case 'IMPORT':
      return [...action.carts];

    // 장바구니 추가
    case 'ADD':
      return [...state, action.item];

    // 장바구니 삭제
    case 'REMOVE':
      return state.filter(item => item.id !== action.id);

    // 장바구니 선택 삭제
    case 'SELECT_REMOVE':
      const checkedIds = action.checked.map(check => check.id);
      return state.filter(item => !checkedIds.includes(item.id));

    // 상품수량 추가
    case 'INCREASE':
      return state.map(item =>
        item.id === action.id ? { ...item, count: item.count + 1 } : item
      );

    // 상품수량 감소
    case 'DECREASE':
      return state.map(item => {
        if (item.id === action.id && item.count > 0) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      });

    default:
      throw new Error(`Invaild action type ${action.type}`);
  }
}

// Context API
const CartStateContext = createContext();
const CartDispatchContext = createContext();

// useContext
export function useCartState() {
  const context = useContext(CartStateContext);
  if (!context) throw new Error('Cannot find CartState');
  return context;
}

export function useCartDispatch() {
  const context = useContext(CartDispatchContext);
  if (!context) throw new Error('Cannot find CartDispatch');
  return context;
}

// Provider
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialCarts);
  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
}
