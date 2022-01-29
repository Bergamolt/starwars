import React, { useContext, useState } from 'react'
import { changeCssVariables } from '../services/changeCssVariables'

export const THEME_DARK = 'dark'
export const THEME_LIGHT = 'light'
export const THEME_NEUTRAL = 'neutral'

const ThemeContext = React.createContext()

export const ThemeProvider = ({ children }) => {
  const [ theme, setTheme ] = useState(THEME_NEUTRAL)

  const changeTheme = (theme) => {
    setTheme(theme)
    changeCssVariables(theme)
  }

  return (
    <ThemeContext.Provider value={ { theme, changeTheme } }>
      { children }
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)