"use client"


import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LogInIcon } from "lucide-react"
import { useRouter } from "next/navigation";
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { signIn } from "next-auth/react";
import { toast } from "@/hooks/use-toast" 



// 1. schema
const loginSchema = z.object({
  email: z.string().email("Invalid email").max(50),
  password: z.string().max(50),
})

// 2. types
type LoginSchema = z.infer<typeof loginSchema>

// 3. component
export function LoginDialog() {
  // open & close dialog
  const [open, setOpen] = useState(false)
  // used to navigate to another page
  const router = useRouter()
  // form schema
  const form = useForm<LoginSchema>({ resolver: zodResolver(loginSchema), defaultValues: { email: "", password: "" }, })

  // form submit
  const onSubmit = async (data: LoginSchema) => {
    const res = await signIn("credentials", { email: data.email, password: data.password, redirect: false });
    if (res?.ok) {
      router.push("/dashboard")
      setOpen(false)
      toast({ variant: "default", title: "Login Successful", description: "Welcome back! Loading your dashboard...", duration: 5000,});
    }
    if (res?.error) {
      toast({ variant: "destructive", title: "Login Failed", description: res.error || "Invalid credentials. Please try again.", duration: 5000, });
    }   
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Trigger */}
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="text-foreground">
          <LogInIcon />
        </Button>
      </DialogTrigger>

      {/* Dialog Content */}
      <DialogContent className="sm:max-w-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" >
            <DialogHeader>
              <DialogTitle>Login to your account</DialogTitle>
              <DialogDescription>
                Enter your email and password below to login.
              </DialogDescription>
            </DialogHeader>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="user@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="flex gap-2">
              <DialogClose asChild>
                <Button variant="outline" type="button">Cancel</Button>
              </DialogClose>
              <Button type="submit">Login</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}