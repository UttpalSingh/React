import { createContext,useContext } from "react";

export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme:() => {},
    lightTheme:() => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}
 
// Provider is a component that makes data (state, functions, etc.) available to all its nested components, no matter how deep they are in the component tree, without having to pass props manually at every level (known as "prop drilling").