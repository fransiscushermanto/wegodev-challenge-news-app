import React, { createContext, useState } from "react";

export interface NavProviderProps {
  children: React.ReactNode;
}

const NavContext = createContext<
  [string, React.Dispatch<React.SetStateAction<string>>]
>(["", () => {}]);

const NavProvider: React.SFC<NavProviderProps> = ({ children }) => {
  const [active, setActive] = useState<string>('apple');

  return (
    <NavContext.Provider value={[active, setActive]}>
      {children}
    </NavContext.Provider>
  );
};

const useNav = () => {
    return React.useContext(NavContext);
}

export {NavProvider, useNav};
