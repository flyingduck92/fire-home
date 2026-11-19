export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full max-w-screen-sm mx-auto p-5'>
      {children}
    </div>
  )
}