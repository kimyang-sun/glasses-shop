import React, { createContext } from 'react';
import { ProductProvider } from './products_context';

const StoreContext = createContext();

export function StoreProvider({ children }) {
  return (
    <StoreContext.Provider>
      <ProductProvider>{children}</ProductProvider>
    </StoreContext.Provider>
  );
}
