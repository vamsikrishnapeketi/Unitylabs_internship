import { createContext, useState } from "react";

export const Selitem = createContext({});

const SelitemProvider = ({ children }) => {
  const [selObj, setSelobj] = useState({
    title: "",
    points: null,
  });

  return (
    <Selitem.Provider value={{ selObj, setSelobj }}>
      {children}
    </Selitem.Provider>
  );
};

export default SelitemProvider;
