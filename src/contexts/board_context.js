import { createContext, useContext, useReducer, useRef } from 'react';

// State
const initialBoard = [
  {
    id: 1,
    title: '글 테스트 1',
    writer: '어드민',
    img: null,
    date: '2021-01-01',
    content: '내용 1',
  },
  {
    id: 2,
    title: '글 테스트 2',
    writer: '어드민',
    img: null,
    date: '2021-01-01',
    content: '내용 2',
  },
  {
    id: 3,
    title: '글 테스트 3',
    writer: '어드민',
    img: null,
    date: '2021-01-01',
    content: '내용 3',
  },
  {
    id: 4,
    title: '글 테스트 4',
    writer: '어드민',
    img: null,
    date: '2021-01-01',
    content: '내용 4',
  },
  {
    id: 5,
    title: '글 테스트 5',
    writer: '어드민',
    img: null,
    date: '2021-01-01',
    content: '내용 5',
  },
  {
    id: 6,
    title: '글 테스트 6',
    writer: '어드민',
    img: null,
    date: '2021-01-01',
    content: '내용 6',
  },
  {
    id: 7,
    title: '글 테스트 7',
    writer: '어드민',
    img: null,
    date: '2021-01-01',
    content: '내용 7',
  },
  {
    id: 8,
    title: '글 테스트 8',
    writer: '어드민',
    img: null,
    date: '2021-01-01',
    content: '내용 8',
  },
];

// Reducer
function boardReducer(state, action) {
  switch (action.type) {
    case 'WRITE':
      return [...state, action.temp];
    case 'EDIT':
      return;
    case 'DELETE':
      return;
    default:
      throw new Error(`Invaild action type ${action.type}`);
  }
}

// Context API
const BoardStateContext = createContext();
const BoardDispatchContext = createContext();
const BoardNextIdContext = createContext();

// useContext
export function useBoardState() {
  const context = useContext(BoardStateContext);
  if (!context) throw new Error('Cannot find BoardState');
  return context;
}

export function useBoardDispatch() {
  const context = useContext(BoardDispatchContext);
  if (!context) throw new Error('Cannot find BoardDispatch');
  return context;
}

export function useBoardNextId() {
  const context = useContext(BoardNextIdContext);
  if (!context) throw new Error('Cannot find BoardNextId');
  return context;
}

// Provider
export function BoardProvider({ children }) {
  const [state, dispatch] = useReducer(boardReducer, initialBoard);
  const nextId = useRef(parseInt(state.length + 1));
  return (
    <BoardStateContext.Provider value={state}>
      <BoardDispatchContext.Provider value={dispatch}>
        <BoardNextIdContext.Provider value={nextId}>
          {children}
        </BoardNextIdContext.Provider>
      </BoardDispatchContext.Provider>
    </BoardStateContext.Provider>
  );
}
