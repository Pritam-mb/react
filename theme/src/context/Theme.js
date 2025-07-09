import { createContext,useContext } from "react";
export const ThemeContext= createContext({
    thememode : "light",
    darktheme :() => {},
    lighttheme: () => {},
})

export const Themeprovider= ThemeContext.Provider
export default function useTheme(){
return useContext(ThemeContext)
}