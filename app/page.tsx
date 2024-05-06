'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import emailjs from '@emailjs/browser'

type PropT = {
  dept: string
  stuId: string
  name: string
  email: string
}
const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY

async function sendMail(prop: PropT) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.log(
      'emailjs error: either SERVICE_ID, TEMPLATE_ID or PUBLIC_KEY is not set.'
    )
    return
  }

  const message = `dept: ${prop.dept}
    stuId: ${prop.stuId}
    name: ${prop.name}
    email: ${prop.email}
    `

  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        message: message,
        from: prop.email,
        reply_to: prop.email,
        reply_name: prop.name,
      },
      PUBLIC_KEY
    )
  } catch (err) {
    console.log('emailjs error: ', err)
  }

  window.alert('申請成功，請確認你所提供的信箱')
}

const FormSchema = z.object({
  dept: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  stuId: z.string().min(9),
  name: z.string().min(2),
  email: z.string().email(),
})

type FieldVal = { name: string; type: string; label: string; ph: string }
const fields: FieldVal[] = [
  { name: 'dept', type: 'text', label: '系級', ph: '資訊二' },
  { name: 'stuId', type: 'text', label: '學號', ph: '110703099' },
  { name: 'name', type: 'text', label: '姓名', ph: '王小明' },
  { name: 'email', type: 'text', label: 'Email', ph: 'example@example.com' },
]

export default function Home() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const prop = {
      dept: data.dept,
      stuId: data.stuId,
      name: data.name,
      email: data.email,
    }
    sendMail(prop)
  }

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          {fields.map((f) => {
            return (
              <FormField
                key={f.name}
                control={form.control}
                name={f.name as any}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{f.label}</FormLabel>
                    <FormControl>
                      <Input placeholder={f.ph} type={f.type} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )
          })}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </main>
  )
}
