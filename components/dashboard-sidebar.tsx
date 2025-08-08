import { Home,ShoppingCart,User,AlarmClockPlus,BookOpen,LogOut, User2} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut } from "next-auth/react";
import { AlertDialog,AlertDialogTrigger,AlertDialogContent,AlertDialogHeader,AlertDialogFooter,AlertDialogTitle,AlertDialogDescription,AlertDialogCancel,AlertDialogAction,} from "@/components/ui/alert-dialog";
import { useSession } from "next-auth/react";



export default function Sidebar() {
  // logout
  const handleLogout = () => signOut({ callbackUrl: "/" });

  // fetch user data
  const { data: session } = useSession();
  const username = session?.user?.name ?? "User";
  const email = session?.user?.email ?? "Email"

  return (
    <aside className="hidden border-r md:block">
      <div className="flex h-full flex-col gap-2">
        {/* admin name */}
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6 py-10">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback><User2 className="w-5 h-5"/></AvatarFallback>
            </Avatar>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-medium text-muted-foreground">
                {username}
              </span>
              <span className="text-xs text-muted-foreground max-w-[130px] lg:max-w-[180px] truncate">
                {email}
              </span>
            </div>
          </div>
        </div>

        {/* sidebar elements */}
        <div className="flex-1 py-2">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4 space-y-1">
            <Link href="/dashboard" className="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary">
              <Home className="h-4 w-4" />
              Dashboard
            </Link>

            <Link href="/dashboard/manage" className="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary">
              <ShoppingCart className="h-4 w-4" />
              Manage Blogs
            </Link>

            <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary">
              <BookOpen className="h-4 w-4" />
              Resources
            </Link>

            <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary">
              <AlarmClockPlus className="h-4 w-4" />
              Future Posts
            </Link>

            <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary">
              <User className="h-4 w-4" />
              Profile
            </Link>
          </nav>
        </div>

        {/* logout confirmation dialog */}
        <div className="mt-auto p-6">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" size="lg" className="w-full">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure you want to log out?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will end your current session and redirect you to the homepage.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleLogout}>Logout</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

      </div>
    </aside>
  );
}
