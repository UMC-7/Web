import { createContext } from 'react';

// 데이터를 담고 있음.
export const TodoContext = createContext();

// 우산을 만듦.
export function TodoContextProvider({ children }) {
  return <TodoContext.Provider>{children}</TodoContext.Provider>;
}
