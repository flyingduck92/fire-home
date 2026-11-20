"use client"

import { useAuth } from '@/context/auth'
import Link from 'next/link'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

function AuthButtons() {
  const auth = useAuth()

  return (
    <div>
      {!!auth?.currentUser && (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                {!!auth.currentUser.photoURL &&
                  <AvatarImage src={auth.currentUser?.photoURL} alt={`${auth.currentUser.displayName} avatar`} width={70} height={70} />
                }
                <AvatarFallback>
                  {(auth.currentUser.displayName || auth.currentUser.email)?.[0]}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent onCloseAutoFocus={e => e.preventDefault()} align='end'
              className='min-w-55 bg-sky-950 text-white shadow-sky-200'>
              <DropdownMenuLabel className='flex flex-col text-white'>
                <span>{auth.currentUser.displayName}</span>
                <span className='font-normal text-xs'>{auth.currentUser.email}</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/account">My Account</Link>
              </DropdownMenuItem>
              {!!auth.customClaims?.admin &&
                <DropdownMenuItem asChild>
                  <Link href="/admin-dashboard">Admin Dashboard</Link>
                </DropdownMenuItem>
              }
              {!auth.customClaims?.admin &&
                <DropdownMenuItem asChild>
                  <Link href="/account/my-favourite">My Favourite</Link>
                </DropdownMenuItem>
              }
              <DropdownMenuItem onClick={async () => await auth.logout()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      )}
      {!auth?.currentUser && (
        <div className='flex gap-2 items-center'>
          <Link href="/login"
            className='uppercase tracking-widest hover:underline'
          >
            Login
          </Link>
          <div className="h-8 w-0.5 bg-white/50" />
          <Link href="/register"
            className='uppercase tracking-widest hover:underline'
          >
            Register
          </Link>
        </div >
      )
      }
    </div >
  )
}

export default AuthButtons