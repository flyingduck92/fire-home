export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-sm max-w-(--breakpoint-lg) mx-auto px-4 py-10">
      {children}
    </div>
  )
}