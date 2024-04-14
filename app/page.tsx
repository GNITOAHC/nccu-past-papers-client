import { ModeToggle } from '@/app/components/providers/ThemeProvider'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ModeToggle />
    </main>
  )
}
