import { createContext, useContext, ReactNode } from "react";
const StylesContext = createContext<null | ReactNode>(null);
export const StylesProvider = StylesContext.Provider;
export const useStyles = () => useContext(StylesContext);
