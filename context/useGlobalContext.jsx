import { createContext, useContext, useState } from "react";


const MyContext = createContext();
export const useGlobalContext = ()=> {
  return useContext(MyContext);
}
function ContextProvider({children}) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const provideValue = {
    isOpenMenu,
    setIsOpenMenu
  }
  return (
    <MyContext.Provider value={provideValue} >
      {children}
    </MyContext.Provider>
  )
}

export default ContextProvider