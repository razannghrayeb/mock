"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { KeyIcon, LockIcon, LogOutIcon, MoonIcon, SunIcon, UploadIcon, UserIcon } from "lucide-react"

export function SettingsScreen() {
  const [activeTab, setActiveTab] = useState("account")

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">Manage your account settings and preferences.</p>
      </div>

      <Tabs defaultValue="account" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          {/*<TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>*/}
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>Update your personal information and profile picture</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-6 md:flex-row">
                <div className="flex flex-col items-center gap-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/diverse-person-portrait.png" alt="Profile" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm">
                    <UploadIcon className="mr-2 h-4 w-4" />
                    Change Photo
                  </Button>
                </div>

                <div className="grid flex-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="Jane" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="jane.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue="+1 (555) 123-4567" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Input
                      id="bio"
                      defaultValue="Product designer with 5+ years of experience in creating user-centered digital products."
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Language and Region</CardTitle>
              <CardDescription>Set your language and regional preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger id="language">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                      <SelectItem value="zh">Chinese</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Time Zone</Label>
                  <Select defaultValue="america-los_angeles">
                    <SelectTrigger id="timezone">
                      <SelectValue placeholder="Select time zone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="america-los_angeles">Pacific Time (US & Canada)</SelectItem>
                      <SelectItem value="america-new_york">Eastern Time (US & Canada)</SelectItem>
                      <SelectItem value="europe-london">London</SelectItem>
                      <SelectItem value="europe-paris">Paris</SelectItem>
                      <SelectItem value="asia-tokyo">Tokyo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dateFormat">Date Format</Label>
                  <Select defaultValue="mm-dd-yyyy">
                    <SelectTrigger id="dateFormat">
                      <SelectValue placeholder="Select date format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
                      <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
                      <SelectItem value="yyyy-mm-dd">YYYY/MM/DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeFormat">Time Format</Label>
                  <Select defaultValue="12h">
                    <SelectTrigger id="timeFormat">
                      <SelectValue placeholder="Select time format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12h">12-hour (AM/PM)</SelectItem>
                      <SelectItem value="24h">24-hour</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <Button>Save Preferences</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Theme</CardTitle>
              <CardDescription>Customize the appearance of the application</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <SunIcon className="h-5 w-5" />
                    <Label htmlFor="theme-light">Light Theme</Label>
                  </div>
                  <Switch id="theme-light" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MoonIcon className="h-5 w-5" />
                    <Label htmlFor="theme-dark">Dark Theme</Label>
                  </div>
                  <Switch id="theme-dark" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <UserIcon className="h-5 w-5" />
                    <Label htmlFor="theme-system">Use System Settings</Label>
                  </div>
                  <Switch id="theme-system" />
                </div>
              </div>

              <div className="mt-6">
                <h3 className="mb-4 text-sm font-medium">Color Scheme</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-primary"></div>
                    <Label className="text-xs">Default</Label>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-purple-500"></div>
                    <Label className="text-xs">Purple</Label>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-green-500"></div>
                    <Label className="text-xs">Green</Label>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="mb-4 text-sm font-medium">Font Size</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="font-small">Small</Label>
                    <Switch id="font-small" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="font-medium">Medium</Label>
                    <Switch id="font-medium" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="font-large">Large</Label>
                    <Switch id="font-large" />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <Button>Save Appearance</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/*<TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-4 text-sm font-medium">Email Notifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-payslips" className="font-medium">
                          Payslips
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications when new payslips are available
                        </p>
                      </div>
                      <Switch id="email-payslips" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-leave" className="font-medium">
                          Leave Requests
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications about leave request status changes
                        </p>
                      </div>
                      <Switch id="email-leave" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-training" className="font-medium">
                          Training & Development
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications about new courses and training opportunities
                        </p>
                      </div>
                      <Switch id="email-training" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-announcements" className="font-medium">
                          Company Announcements
                        </Label>
                        <p className="text-sm text-muted-foreground">Receive company-wide announcements and updates</p>
                      </div>
                      <Switch id="email-announcements" defaultChecked />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-sm font-medium">In-App Notifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="app-payslips" className="font-medium">
                          Payslips
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Show notifications when new payslips are available
                        </p>
                      </div>
                      <Switch id="app-payslips" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="app-leave" className="font-medium">
                          Leave Requests
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Show notifications about leave request status changes
                        </p>
                      </div>
                      <Switch id="app-leave" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="app-training" className="font-medium">
                          Training & Development
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Show notifications about new courses and training opportunities
                        </p>
                      </div>
                      <Switch id="app-training" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="app-announcements" className="font-medium">
                          Company Announcements
                        </Label>
                        <p className="text-sm text-muted-foreground">Show company-wide announcements and updates</p>
                      </div>
                      <Switch id="app-announcements" defaultChecked />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-sm font-medium">Notification Frequency</h3>
                  <div className="space-y-2">
                    <Label htmlFor="frequency">Email Digest Frequency</Label>
                    <Select defaultValue="daily">
                      <SelectTrigger id="frequency">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate</SelectItem>
                        <SelectItem value="daily">Daily Digest</SelectItem>
                        <SelectItem value="weekly">Weekly Digest</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <Button>Save Notification Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>*/}

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Change your password</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <div className="relative">
                    <Input id="current-password" type="password" />
                    <LockIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <div className="relative">
                    <Input id="new-password" type="password" />
                    <KeyIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <div className="relative">
                    <Input id="confirm-password" type="password" />
                    <KeyIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button>Change Password</Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/*
          <Card>
            <CardHeader>
              <CardTitle>Two-Factor Authentication</CardTitle>
              <CardDescription>Add an extra layer of security to your account</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="enable-2fa" className="font-medium">
                      Enable Two-Factor Authentication
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Require a verification code when signing in to your account
                    </p>
                  </div>
                  <Switch id="enable-2fa" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="sms-2fa" className="font-medium">
                      SMS Authentication
                    </Label>
                    <p className="text-sm text-muted-foreground">Receive verification codes via SMS</p>
                  </div>
                  <Switch id="sms-2fa" disabled />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="app-2fa" className="font-medium">
                      Authenticator App
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Use an authenticator app to generate verification codes
                    </p>
                  </div>
                  <Switch id="app-2fa" disabled />
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <Button variant="outline">Set Up Two-Factor Authentication</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sessions</CardTitle>
              <CardDescription>Manage your active sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Current Session</h4>
                      <p className="text-sm text-muted-foreground">San Francisco, CA, USA • Chrome on macOS</p>
                    </div>
                    <Badge variant="outline" className="bg-green-50">
                      Active
                    </Badge>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">Started: May 8, 2025, 10:30 AM</p>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Mobile Session</h4>
                      <p className="text-sm text-muted-foreground">San Francisco, CA, USA • Employee App on iOS</p>
                    </div>
                    <Badge variant="outline" className="bg-green-50">
                      Active
                    </Badge>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">Started: May 7, 2025, 8:15 AM</p>
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-2">
                <Button variant="outline">Sign Out Other Sessions</Button>
                <Button variant="destructive">
                  <LogOutIcon className="mr-2 h-4 w-4" />
                  Sign Out Everywhere
                </Button>
              </div>
            </CardContent>
          </Card>
          */}
        </TabsContent>
      </Tabs>
    </div>
  )
}
