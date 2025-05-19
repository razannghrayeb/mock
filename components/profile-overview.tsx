"use client"

import type React from "react"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CalendarIcon, CreditCardIcon, FileTextIcon, PalmtreeIcon, PencilIcon } from "lucide-react"
import { AttendanceCalendar } from "@/components/attendance-calendar"
import { LeaveBalanceCard } from "@/components/leave-balance-card"
import { RecentActivityCard } from "@/components/recent-activity-card"
import { UpcomingHolidaysCard } from "@/components/upcoming-holidays-card"
import { PayslipCard } from "@/components/payslip-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Timeline } from "@/components/timeline"
import { ImageCropper } from "@/components/image-cropper"

export function ProfileOverview() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isCropperOpen, setIsCropperOpen] = useState(false)
  const [cropperImage, setCropperImage] = useState("")
  const [cropperType, setCropperType] = useState<"cover" | "profile">("cover")
  const [coverPhoto, setCoverPhoto] = useState("/cover-background.png")
  const [profilePhoto, setProfilePhoto] = useState("/diverse-person-portrait.png")

  const handleCoverPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader()
      reader.onload = () => {
        setCropperImage(reader.result as string)
        setCropperType("cover")
        setIsCropperOpen(true)
      }
      reader.readAsDataURL(e.target.files[0])
    }
  }

  const handleProfilePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader()
      reader.onload = () => {
        setCropperImage(reader.result as string)
        setCropperType("profile")
        setIsCropperOpen(true)
      }
      reader.readAsDataURL(e.target.files[0])
    }
  }

  const handleCropComplete = (croppedImage: string) => {
    if (cropperType === "cover") {
      setCoverPhoto(croppedImage)
    } else {
      setProfilePhoto(croppedImage)
    }
    setIsCropperOpen(false)
  }

  return (
    <div className="space-y-6">
      {/* Profile Header with Cover Image */}
      <div className="relative rounded-xl overflow-hidden">
        {/* Cover Image */}
        <div className="h-48 md:h-64 w-full relative">
          <img src={coverPhoto || "/placeholder.svg"} alt="Cover" className="w-full h-full object-cover" />
          <Button
            size="sm"
            variant="outline"
            className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm"
            onClick={() => document.getElementById("cover-upload").click()}
          >
            <PencilIcon className="h-4 w-4 mr-2" />
            Edit Cover
            <input
              id="cover-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleCoverPhotoChange}
            />
          </Button>
        </div>

        {/* Profile Info */}
        <div className="relative px-4 pb-4 -mt-16 md:-mt-20">
          <div className="flex flex-col md:flex-row md:items-end gap-4">
            <Avatar
              className="h-24 w-24 md:h-32 md:w-32 border-4 border-background cursor-pointer"
              onClick={() => document.getElementById("avatar-upload").click()}
            >
              <AvatarImage src={profilePhoto || "/placeholder.svg"} alt="User" />
              <AvatarFallback>JD</AvatarFallback>
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleProfilePhotoChange}
              />
            </Avatar>
            <div className="md:mb-2 flex-1">
              <div className="bg-background/80 backdrop-blur-sm inline-block px-3 py-1 rounded-md">
                <h2 className="text-2xl font-bold tracking-tight">Jane Doe</h2>
                <p className="text-muted-foreground">Product Designer • San Francisco, CA</p>
              </div>
            </div>
            <div className="flex gap-2 md:mb-2">
              <Button size="sm">
                <PencilIcon className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hours This Week</CardTitle>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32.5 / 40</div>
            <Progress value={81.25} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">81.25% of weekly target</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Leave Balance</CardTitle>
            <FileTextIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18 days</div>
            <Progress value={75} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">75% remaining for the year</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Holiday</CardTitle>
            <PalmtreeIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">May 27</div>
            <p className="text-xs text-muted-foreground mt-2">Memorial Day (Monday)</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Payslip</CardTitle>
            <CreditCardIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4,250.00</div>
            <p className="text-xs text-muted-foreground mt-2">Processed on April 30, 2025</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="leaves">Leaves</TabsTrigger>
          <TabsTrigger value="compensation">Compensation</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <RecentActivityCard />
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Upcoming Holidays</CardTitle>
              </CardHeader>
              <CardContent>
                <UpcomingHolidaysCard />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="attendance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Calendar</CardTitle>
              <CardDescription>View and manage your attendance records</CardDescription>
            </CardHeader>
            <CardContent>
              <AttendanceCalendar />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="leaves" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Leave Balance</CardTitle>
              <CardDescription>Track your leave balance and history</CardDescription>
            </CardHeader>
            <CardContent>
              <LeaveBalanceCard />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compensation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payslips</CardTitle>
              <CardDescription>View and download your payslips</CardDescription>
            </CardHeader>
            <CardContent>
              <PayslipCard />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Timeline Section */}
      <Card>
        <CardHeader>
          <CardTitle>Timeline</CardTitle>
          <CardDescription>Recent activities and updates</CardDescription>
        </CardHeader>
        <CardContent>
          <Timeline />
        </CardContent>
      </Card>

      {isCropperOpen && (
        <ImageCropper
          image={cropperImage}
          type={cropperType}
          onComplete={handleCropComplete}
          onCancel={() => setIsCropperOpen(false)}
        />
      )}
    </div>
  )
}
