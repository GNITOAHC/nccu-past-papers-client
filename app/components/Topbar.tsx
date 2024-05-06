import { ModeToggle } from '@/app/components/providers/ThemeProvider'
import Intro from './Intro'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

function GitHubIcon() {
  return (
    <TooltipProvider delayDuration={10}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <a href="https://github.com/GNITOAHC/nccu-past-papers-client">
              <Github className="h-6 w-6" />
            </a>
            <span className="sr-only">GitHub</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Star me!!!</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default function Topbar() {
  return (
    <header className="flex items-center justify-between w-full h-16 px-8 bg-gray-800 sticky top-0 z-50">
      <h1 className="scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl text-white flex">
        NCCU Test Papers Client &nbsp; <Intro />
      </h1>
      <div className="flex">
        <ModeToggle />
        <GitHubIcon />
      </div>
    </header>
  )
}
