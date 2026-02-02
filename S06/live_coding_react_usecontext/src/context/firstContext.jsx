import { createContext, useState } from "react";
// creer un context
// eslint-disable-next-line react-refresh/only-export-components
export const FirstContext = createContext();

export default function FirstContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <FirstContext.Provider value={{ count, setCount }}>
      {children}
    </FirstContext.Provider>
  );
}
