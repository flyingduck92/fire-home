"use client"

import { auth } from '@/firebase/client'
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth'
import { createContext, useContext, useEffect, useState } from 'react'

type AuthContextType = {
  currentUser: User | null
  logout: () => Promise<void>
  loginWithGoogle: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubsribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user ?? null)
    })

    return () => unsubsribe()
  }, [])

  const logout = async () => {
    await auth.signOut()
  }

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
  }

  return (
    <AuthContext.Provider value={{
      currentUser,
      logout,
      loginWithGoogle
    }} >
      {children}
    </AuthContext.Provider >
  )
}

export const useAuth = () => useContext(AuthContext)