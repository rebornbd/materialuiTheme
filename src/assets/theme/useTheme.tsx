import React, { useState, useMemo } from 'react'
import { createTheme, PaletteMode } from "@mui/material"
import { getDesignTokens } from './theme'

export const useTheme = () => {
  const [mode, setMode] = useState<PaletteMode>('light')

  const toggleMode = () => {
    setMode((prevMode) => prevMode === 'light' ? 'dark' : 'light')
  }

  const modifiedTheme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  return {
    theme: modifiedTheme,
    mode,
    toggleMode
  }
}
