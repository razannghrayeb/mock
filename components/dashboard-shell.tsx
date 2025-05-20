"use client"

import type { ReactNode } from "react"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarInset,
  SidebarTrigger,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  BellIcon,
  CalendarIcon,
  CreditCardIcon,
  FileTextIcon,
  GraduationCapIcon,
  HomeIcon,
  LandmarkIcon,
  LayoutDashboardIcon,
  MessageCircleIcon,
  PalmtreeIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "@/components/mode-toggle"

export function DashboardShell({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  const sidebarItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboardIcon,
      href: "/",
    },
    {
      title: "Personal Info",
      icon: UserIcon,
      href: "/personal-info",
    },
    {
      title: "Compensation",
      icon: LandmarkIcon,
      href: "/compensation",
    },
    {
      title: "Time Management",
      icon: CalendarIcon,
      href: "/time-management",
    },
    {
      title: "Holidays",
      icon: PalmtreeIcon,
      href: "/holidays",
    },
    {
      title: "Leaves",
      icon: FileTextIcon,
      href: "/leaves",
    },
    {
      title: "Settings",
      icon: SettingsIcon,
      href: "/settings",
    },
  ]

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden">
        <Sidebar variant="inset" collapsible="icon">
          <SidebarHeader className="flex flex-col gap-0 py-4">
            <div className="flex items-center px-4">
              <div className="flex items-center gap-2">
                <HomeIcon className="h-6 w-6" />
                <span className="font-semibold">ProfilePortal</span>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarItems.map((item) => (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                        <Link href={item.href}>
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarRail />
        </Sidebar>
        <SidebarInset>
          <header className="flex h-16 items-center justify-between border-b px-6">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <h1 className="text-xl font-semibold">Employee Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <ModeToggle />
              <button className="relative">
                <BellIcon className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                  3
                </span>
              </button>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/diverse-person-portrait.png" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                  <p className="text-sm font-medium">Jane Doe</p>
                  <p className="text-xs text-muted-foreground">Product Designer</p>
                </div>
              </div>
            </div>
          </header>
          <main className="h-[calc(100vh-4rem)] overflow-auto p-6">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
