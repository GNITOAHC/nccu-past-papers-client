import { ModeToggle } from '@/app/components/providers/ThemeProvider'
import Intro from './Intro'

export default function Topbar() {
  return (
    <header className="flex items-center justify-between w-full h-16 px-8 bg-gray-800 sticky top-0 z-50">
      <h1 className="scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl text-white flex">
        NCCU Test Papers Client &nbsp; <Intro />
      </h1>
      <ModeToggle />
    </header>
  )
}
