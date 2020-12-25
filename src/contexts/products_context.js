import { createContext, useContext, useReducer } from 'react';
import { project } from '../../node_modules/gcp-metadata/build/src/index';

// State
const initialProducts = [
  {
    id: 1,
    name: '버킷리스트 루나',
    url: require('images/item_1.jpg').default,
    price: '195,000',
    coupon: true,
    cart: false,
  },
  {
    id: 2,
    name: '발망 하금테',
    url: require('images/item_2.jpg').default,
    price: '314,000',
    coupon: false,
    cart: false,
  },
  {
    id: 3,
    name: '키오야마토 메탈테',
    url: require('images/item_3.jpg').default,
    price: '452,000',
    coupon: true,
    cart: false,
  },
  {
    id: 4,
    name: '오엔엑스 뿔테',
    url: require('images/item_4.jpg').default,
    price: '198,000',
    coupon: true,
    cart: false,
  },
  {
    id: 5,
    name: '구찌 원형 뿔테 선글라스',
    url: require('images/item_5.jpg').default,
    price: '240,000',
    coupon: false,
    cart: false,
  },
  {
    id: 6,
    name: '구찌 로이 선글라스',
    url: require('images/item_6.jpg').default,
    price: '250,000',
    coupon: false,
    cart: false,
  },
  {
    id: 7,
    name: '레이벤 보잉 선글라스',
    url: require('images/item_7.jpg').default,
    price: '175,000',
    coupon: false,
    cart: false,
  },
  {
    id: 8,
    name: '비비안웨스트우드 선글라스',
    url: require('images/item_8.jpg').default,
    price: '230,000',
    coupon: true,
    cart: false,
  },
  {
    id: 9,
    name: '펍 원형 하금테',
    url: require('images/item_9.jpg').default,
    price: '184,000',
    coupon: false,
    cart: false,
  },
  {
    id: 10,
    name: '몽블랑 안경테',
    url: require('images/item_10.jpg').default,
    price: '250,000',
    coupon: false,
    cart: false,
  },
  {
    id: 11,
    name: '레이벤 투브릿지 보잉',
    url: require('images/item_11.jpg').default,
    price: '119,000',
    coupon: false,
    cart: false,
  },
  {
    id: 12,
    name: '페누메탈 쿠에노 원형테',
    url: require('images/item_12.jpg').default,
    price: '220,000',
    coupon: true,
    cart: false,
  },
  {
    id: 13,
    name: '에스티듀퐁 선글라스',
    url: require('images/item_13.jpg').default,
    price: '198,000',
    coupon: false,
    cart: false,
  },
  {
    id: 14,
    name: '구찌 사각 뿔테 선글라스',
    url: require('images/item_14.jpg').default,
    price: '250,000',
    coupon: false,
    cart: false,
  },
  {
    id: 15,
    name: '구찌 하금테 선글라스',
    url: require('images/item_15.jpg').default,
    price: '490,000',
    coupon: true,
    cart: false,
  },
  {
    id: 16,
    name: '발망 콤비테 선글라스',
    url: require('images/item_16.jpg').default,
    price: '260,000',
    coupon: true,
    cart: false,
  },
];

// Reducer
function productReducer(state, action) {
  switch (action.type) {
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
