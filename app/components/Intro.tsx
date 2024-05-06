'use client'
import { MessageCircleQuestion } from 'lucide-react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export default function Intro() {
  // return <MessageCircleQuestion className="w-8 h-8" />
  return (
    <Dialog>
      <DialogTrigger asChild>
        <MessageCircleQuestion className="w-8 h-8" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <div>
          歡迎來到 NCCUCS Test Papers Client ！
          <br />
          填入資料後即可查看各科考古題。請注意信箱查看來信，盡可能提供自己有的考古題以維持社群運作，造福大眾！！
          <br />
          Email 請填寫自己申請 GitHub 的帳號，以方便加入我們的 Private Repo 。
        </div>
        <DialogFooter>
          如果有任何問題歡迎來信至 chaotingchen10@gmail.com 詢問。
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
