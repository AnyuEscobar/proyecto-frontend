import { createContext, useContext, useState } from "react"


const UserContext = createContext()

const UserProvider = (props) => {
  const [user, setUser] = useState(null)

  const login = async (username, password) => {
    // realizar una petición al backend 
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })

    if (response.ok) {
      const token = await response.json()
      setUser(true)
      return token
    } else {
      return false
    }
  }

  // petición del register al backend
  const register = async (username, email, password) => {
    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, username, password })
      })

      if (!response.ok) throw new Error("Error en el registro")

      const data = await response.json()
      console.log("Usuario creado:", data)

      // Simula login
      setUser(true)
      return data
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  const logout = () => {
    setUser(null)
  }


  return (
    <UserContext.Provider value={{ login, register, logout, user }}>
      {props.children}
    </UserContext.Provider>
  )
}

const useAuth = () => useContext(UserContext)

export { UserProvider, useAuth }