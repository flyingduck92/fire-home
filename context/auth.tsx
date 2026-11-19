"use client"

import { auth } from '@/firebase/client'
import { GoogleAuthProvider, ParsedToken, signInWithPopup, User } from 'firebase/auth'
import { createContext, useContext, useEffect, useState } from 'react'
import { removeToken, setToken } from './actions'

type AuthContextType = {
  currentUser: User | null
  logout: () => Promise<void>
  loginWithGoogle: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [customClaims, setCustomClaims] = useState<ParsedToken | null>(null)

  useEffect(() => {
    const unsubsribe = auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user ?? null)

      // if user found
      if (user) {
        const tokenResult = await user.getIdTokenResult() // getIdTokenResult from user
        const token = tokenResult.token // get token from tokenResult
        const refreshToken = user.refreshToken // get refreshToken from user

        const claims = tokenResult.claims // get customClaims (role) from tokenResult
        setCustomClaims(claims ?? null)

        if (token && refreshToken) {
          await setToken({ token, refreshToken })
        }
        // otherwise remove token  
      } else {
        await removeToken()
      }
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