import React from 'react'
import { amber, deepOrange, grey } from '@mui/material/colors'
import { PaletteMode, ThemeOptions } from '@mui/material'

const theme = {
  palette: {
    primary: amber,
  },
}

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          primary: grey,
          divider: grey[700],
          background: {
            default: grey[900],
            paper: grey[900],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
  },
})

export default theme
