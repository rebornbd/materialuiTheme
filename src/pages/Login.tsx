import React from 'react'
import TextField from '@mui/material/TextField'
import PasswordField from '../components/PasswordField'
import Button from '@mui/material/Button'

const Login = () => {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '0 30%',
      }}
    >
      <TextField label="Username" variant="outlined" size='small' />
      <TextField label="Password" variant="outlined" size='small' type='password' />
      <PasswordField />
      <Button variant="contained" size='small'>Login</Button>
    </div>
  )
}

export default Login
