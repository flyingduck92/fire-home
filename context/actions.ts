"use server"

import { auth } from '@/firebase/server'
import { cookies } from 'next/headers'

interface IToken {
  token: string
  refreshToken: string
}

export async function removeToken() {
  const cookieStore = await cookies()
  cookieStore.delete("firebaseAuthToken")
  cookieStore.delete("firebaseAuthRefreshToken")
}

export async function setToken({ token, refreshToken }: IToken) {
  try {
    const verifiedToken = await auth.verifyIdToken(token)
    if (!verifiedToken) return

    const userRecord = await auth.getUser(verifiedToken.uid)
    if (process.env.ADMIN_EMAIL === userRecord.email && !userRecord.customClaims?.admin) {
      auth.setCustomUserClaims(userRecord.uid, { admin: true })
    }

    const cookieStore = await cookies()
    cookieStore.set("firebaseAuthToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production"
    })
    cookieStore.set("firebaseAuthRefreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production"
    })

  } catch (error) {
    console.log(error)
  }

}