import { createContext, FC, PropsWithChildren, useContext } from 'react'
import { createTheme, Theme } from '@mui/material'
import { PaletteMode } from '@mui/material'
import { useTheme } from './useTheme'

type ThemeContextType = {
  mode: PaletteMode
  theme: Theme
  toggleMode: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
  mode: 'light',
  theme: createTheme(),
  toggleMode: () => {},
})

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const value = useTheme()

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useThemeContext = () => {
  return useContext(ThemeContext)
}
