import React from 'react'
import { useNavigate } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useThemeContext } from '../assets/theme/ThemeContextProvider'
import routes from '../routes'

const Navbar = () => {
  const { mode, toggleMode } = useThemeContext()
  const navigate = useNavigate()

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        justifyItems: 'center',
        flexDirection: 'row',
        gap: '20px',
        marginTop: '10px',
      }}
    >
      <>
        {routes &&
          routes.map(route => (
            <div
              key={route.key}
              onClick={() => navigate(route.route)}
              style={{
                background: '#000',
                color: '#fff',
                padding: '10px 100px',
                cursor: 'pointer',
                borderRadius: '5px',
              }}
            >
              <span>{route.name}</span>
            </div>
          ))}
        
        <IconButton sx={{ ml: 1 }} onClick={toggleMode} color="inherit">
          {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </>
    </div>
  )
}

export default Navbar
