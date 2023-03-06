import React, { useState } from "react";

const TitleContext = React.createContext("Home");

export const TitleProvider = ({ children }) => {
  const [title, setTitle] = useState("Home");

  const updateTitle = (newTitle) => setTitle(newTitle);

  return <TitleContext.Provider value={{ title, updateTitle }}>{children}</TitleContext.Provider>;
};

export default TitleContext;
