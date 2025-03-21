import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createTheme, ThemeProvider } from '@mui/material/styles'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
