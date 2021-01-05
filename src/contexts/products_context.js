import { createContext, useContext, useReducer } from 'react';
import item1 from 'images/item_1.jpg';
import item2 from 'images/item_2.jpg';
import item3 from 'images/item_3.jpg';
import item4 from 'images/item_4.jpg';
import item5 from 'images/item_5.jpg';
import item6 from 'images/item_6.jpg';
import item7 from 'images/item_7.jpg';
import item8 from 'images/item_8.jpg';
import item9 from 'images/item_9.jpg';
import item10 from 'images/item_10.jpg';
import item11 from 'images/item_11.jpg';
import item12 from 'images/item_12.jpg';
import item13 from 'images/item_13.jpg';
import item14 from 'images/item_14.jpg';
import item15 from 'images/item_15.jpg';
import item16 from 'images/item_16.jpg';

// State
const initialProducts = [
  {
    id: 1,
    name: '버킷리스트 루나',
    url: item1,
    price: 195000,
    coupon: 20000,
    cart: false,
  },
  {
    id: 2,
    name: '발망 하금테',
    url: item2,
    price: 314000,
    coupon: false,
    cart: false,
  },
  {
    id: 3,
    name: '키오야마토 메탈테',
    url: item3,
    price: 452000,
    coupon: 50000,
    cart: false,
  },
  {
    id: 4,
    name: '오엔엑스 뿔테',
    url: item4,
    price: 198000,
    coupon: 20000,
    cart: false,
  },
  {
    id: 5,
    name: '구찌 원형 뿔테 선글라스',
    url: item5,
    price: 240000,
    coupon: false,
    cart: false,
  },
  {
    id: 6,
    name: '구찌 로이 선글라스',
    url: item6,
    price: 250000,
    coupon: false,
    cart: false,
  },
  {
    id: 7,
    name: '레이벤 보잉 선글라스',
    url: item7,
    price: 175000,
    coupon: false,
    cart: false,
  },
  {
    id: 8,
    name: '비비안웨스트우드 선글라스',
    url: item8,
    price: 230000,
    coupon: 30000,
    cart: false,
  },
  {
    id: 9,
    name: '펍 원형 하금테',
    url: item9,
    price: 184000,
    coupon: false,
    cart: false,
  },
  {
    id: 10,
    name: '몽블랑 안경테',
    url: item10,
    price: 250000,
    coupon: false,
    cart: false,
  },
  {
    id: 11,
    name: '레이벤 투브릿지 보잉',
    url: item11,
    price: '119,000',
    coupon: false,
    cart: false,
  },
  {
    id: 12,
    name: '페누메탈 쿠에노 원형테',
    url: item12,
    price: 220000,
    coupon: 25000,
    cart: false,
  },
  {
    id: 13,
    name: '에스티듀퐁 선글라스',
    url: item13,
    price: 198000,
    coupon: false,
    cart: false,
  },
  {
    id: 14,
    name: '구찌 사각 뿔테 선글라스',
    url: item14,
    price: 250000,
    coupon: false,
    cart: false,
  },
  {
    id: 15,
    name: '구찌 하금테 선글라스',
    url: item15,
    price: 490000,
    coupon: 50000,
    cart: false,
  },
  {
    id: 16,
    name: '발망 콤비테 선글라스',
    url: item16,
    price: 260000,
    coupon: 30000,
    cart: false,
  },
];

// Reducer
function productReducer(state, action) {
  switch (action.type) {
    // 상품 업데이트 (장바구니 상태)
    case 'CART_IMPORT':
      return state.map(product =>
        action.ids.includes(product.id) ? { ...product, cart: true } : product
      );

    // 장바구니 추가
    case 'CART_ADD':
      return state.map(product =>
        product.id === action.id ? { ...product, cart: true } : product
      );

    // 장바구니 삭제
    case 'CART_REMOVE':
      return state.map(product =>
        product.id === action.id ? { ...product, cart: false } : product
      );

    // 장바구니 선택 삭제
    case 'CART_SELECT_REMOVE':
      const checkedIds = action.checked.map(check => check.id);
      console.log(checkedIds);
      return state.map(product =>
        checkedIds.includes(product.id) ? { ...product, cart: false } : product
      );
    default:
      throw new Error(`Invalid action type ${action.type}`);
  }
}

// Context API
const ProductStateContext = createContext();
const ProductDispatchContext = createContext();

// useContext
export function useProductState() {
  const context = useContext(ProductStateContext);
  if (!context) throw new Error('Cannot find ProductState');
  return context;
}

export function useProductDispatch() {
  const context = useContext(ProductDispatchContext);
  if (!context) throw new Error('Cannot find ProductDispatch');
  return context;
}

// Provider
export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, initialProducts);
  return (
    <ProductStateContext.Provider value={state}>
      <ProductDispatchContext.Provider value={dispatch}>
        {children}
      </ProductDispatchContext.Provider>
    </ProductStateContext.Provider>
  );
}
