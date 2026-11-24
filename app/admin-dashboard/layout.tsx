export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-10">
      {children}
    </div>
  )
}