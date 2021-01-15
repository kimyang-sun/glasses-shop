import { createContext, useContext, useReducer, useRef } from 'react';

// State
const initialBoard = [];

// Reducer
function boardReducer(state, action) {
  switch (action.type) {
    case 'IMPORT':
      return [...action.board];
    case 'WRITE':
      return [...state, action.temp];
    case 'EDIT':
      const edit = state.map(writing => {
        if (writing.id === action.id) {
          return { ...writing, title: action.title, content: action.content };
        } else {
          return writing;
        }
      });
      return edit;
    case 'DELETE':
      return state.filter(writing => writing.id !== action.id);
    case 'COMMENT_ADD':
      return state.map(writing => {
        if (writing.id === action.id) {
          const comments = [...writing.comments, action.temp];
          return { ...writing, comments: comments };
        } else {
          return writing;
        }
      });
    case 'COMMENT_EDIT':
      return state.map(writing => {
        if (writing.id === action.id) {
          return { ...writing, comments: action.temp };
        } else {
          return writing;
        }
      });
    case 'COMMENT_DELETE':
      return state.map(writing => {
        if (writing.id === action.id) {
          return { ...writing, comments: action.temp };
        } else {
          return writing;
        }
      });
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
