import { createContext, useContext, useReducer } from 'react';

// State
const initialProfile = {
  name: '',
  message: '',
};

// Reducer
function profileReducer(state, action) {
  switch (action.type) {
    case 'IMPORT':
      return { ...action.profile };
    case 'SAVE':
      return { ...action.profile };
    default:
      throw new Error(`Invaild action type ${action.type}`);
  }
}

// Context API
const ProfileStateContext = createContext();
const ProfileDispatchContext = createContext();

// useContext
export function useProfileState() {
  const context = useContext(ProfileStateContext);
  if (!context) throw new Error('Cannot find ProfileState');
  return context;
}

export function useProfileDispatch() {
  const context = useContext(ProfileDispatchContext);
  if (!context) throw new Error('Cannot find ProfileDispatch');
  return context;
}

// Provider
export function ProfileProvider({ children }) {
  const [state, dispatch] = useReducer(profileReducer, initialProfile);
  return (
    <ProfileStateContext.Provider value={state}>
      <ProfileDispatchContext.Provider value={dispatch}>
        {children}
      </ProfileDispatchContext.Provider>
    </ProfileStateContext.Provider>
  );
}
