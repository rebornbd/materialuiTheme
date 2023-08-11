import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { useThemeContext } from './assets/theme/ThemeContextProvider'
import routes, { IRouteProps } from './routes'
import Navbar from './components/Navbar'

const App = () => {
  const { theme } = useThemeContext()

  const getRoutes = (routes: IRouteProps[]) => {
    return routes.map(route => {
      if (route.route) {
        return (
          <Route
            path={route.route}
            element={route.component}
            key={route.key}
          />
        )
      }
      return null
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '50px 250px',
      }}>
        <Routes>
          {getRoutes(routes)}
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
