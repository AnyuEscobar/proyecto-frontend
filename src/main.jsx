import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterApp } from './router/RouterApp'
import { UserProvider } from './context/UserContext'
import "./styles/pages/home.css"
import "./styles/pages/header.css"
import "./styles/pages/login.css"
import "./styles/pages/register.css"
import "./styles/components/footer.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RouterApp />
    </UserProvider>
  </StrictMode>,
)
