"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, InfoIcon } from "lucide-react"

export function HolidaysScreen() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [activeTab, setActiveTab] = useState("calendar")

  // Mock holidays data
  const holidays = [
    {
      id: 1,
      name: "New Year's Day",
      date: "January 1, 2025",
      day: "Wednesday",
      type: "Federal",
      observed: true,
    },
    {
      id: 2,
      name: "Martin Luther King Jr. Day",
      date: "January 20, 2025",
      day: "Monday",
      type: "Federal",
      observed: true,
    },
    {
      id: 3,
      name: "Presidents' Day",
      date: "February 17, 2025",
      day: "Monday",
      type: "Federal",
      observed: true,
    },
    {
      id: 4,
      name: "Memorial Day",
      date: "May 26, 2025",
      day: "Monday",
      type: "Federal",
      observed: true,
    },
    {
      id: 5,
      name: "Independence Day",
      date: "July 4, 2025",
      day: "Friday",
      type: "Federal",
      observed: true,
    },
    {
      id: 6,
      name: "Labor Day",
      date: "September 1, 2025",
      day: "Monday",
      type: "Federal",
      observed: true,
    },
    {
      id: 7,
      name: "Veterans Day",
      date: "November 11, 2025",
      day: "Tuesday",
      type: "Federal",
      observed: true,
    },
    {
      id: 8,
      name: "Thanksgiving Day",
      date: "November 27, 2025",
      day: "Thursday",
      type: "Federal",
      observed: true,
    },
    {
      id: 9,
      name: "Day after Thanksgiving",
      date: "November 28, 2025",
      day: "Friday",
      type: "Company",
      observed: true,
    },
    {
      id: 10,
      name: "Christmas Eve",
      date: "December 24, 2025",
      day: "Wednesday",
      type: "Company",
      observed: true,
    },
    {
      id: 11,
      name: "Christmas Day",
      date: "December 25, 2025",
      day: "Thursday",
      type: "Federal",
      observed: true,
    },
    {
      id: 12,
      name: "New Year's Eve",
      date: "December 31, 2025",
      day: "Wednesday",
      type: "Company",
      observed: true,
    },
  ]

  // Mock upcoming holidays
  const upcomingHolidays = holidays.filter((_, index) => index >= 3 && index <= 6)

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Holidays</h2>
        <p className="text-muted-foreground">View company holidays and observances for the year.</p>
      </div>

      <Tabs defaultValue="calendar" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="policy">Holiday Policy</TabsTrigger>
        </TabsList>

        <TabsContent value="calendar" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Holiday Calendar</CardTitle>
                    <CardDescription>Company holidays for 2025</CardDescription>
                  </div>
                  <Select defaultValue="2025">
                    <SelectTrigger className="w-[100px]">
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2025">2025</SelectItem>
                      <SelectItem value="2026">2026</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                  modifiers={{
                    holiday: [
                      new Date(2025, 0, 1),
                      new Date(2025, 0, 20),
                      new Date(2025, 1, 17),
                      new Date(2025, 4, 26),
                      new Date(2025, 6, 4),
                      new Date(2025, 8, 1),
                      new Date(2025, 10, 11),
                      new Date(2025, 10, 27),
                      new Date(2025, 10, 28),
                      new Date(2025, 11, 24),
                      new Date(2025, 11, 25),
                      new Date(2025, 11, 31),
                    ],
                  }}
                  modifiersStyles={{
                    holiday: { backgroundColor: "#fee2e2", color: "#991b1b", fontWeight: "bold" },
                  }}
                />
                <div className="mt-4 flex items-center justify-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-100"></div>
                    <span className="text-xs">Company Holiday</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-gray-100"></div>
                    <span className="text-xs">Weekend</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Holidays</CardTitle>
                <CardDescription>Next few company holidays</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingHolidays.map((holiday) => (
                    <div key={holiday.id} className="flex items-start gap-4 rounded-lg border p-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <CalendarIcon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{holiday.name}</p>
                          <Badge variant="outline" className="bg-red-50">
                            {holiday.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {holiday.date} ({holiday.day})
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Holiday Details</CardTitle>
                  <CardDescription>Information about selected holiday</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {date ? (
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Date:</span>
                    <span className="font-medium">{date.toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Holiday:</span>
                    <span>Memorial Day</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Type:</span>
                    <Badge variant="outline" className="bg-red-50">
                      Federal
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Observed:</span>
                    <span>Yes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Office Status:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              ) : (
                <p className="text-center text-muted-foreground">Select a date to view holiday details</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="list" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Company Holidays</CardTitle>
                  <CardDescription>Complete list of holidays for 2025</CardDescription>
                </div>
                <Select defaultValue="2025">
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2026">2026</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Holiday</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Day</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Observed</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {holidays.map((holiday) => (
                      <TableRow key={holiday.id}>
                        <TableCell className="font-medium">{holiday.name}</TableCell>
                        <TableCell>{holiday.date}</TableCell>
                        <TableCell>{holiday.day}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-red-50">
                            {holiday.type}
                          </Badge>
                        </TableCell>
                        <TableCell>{holiday.observed ? "Yes" : "No"}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="mt-4 flex items-center">
                <InfoIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Federal holidays are observed by all employees. Company holidays are additional days provided by the
                  company.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="policy" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Holiday Policy</CardTitle>
              <CardDescription>Company policy regarding holidays and observances</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Overview</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    The company observes 12 paid holidays per year, which includes all federal holidays and additional
                    company-specific holidays. All regular full-time and part-time employees are eligible for paid
                    holidays immediately upon hire.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Holiday Pay</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Eligible employees will receive holiday pay at their regular rate for the number of hours they would
                    normally work on that day. Employees who are required to work on a company holiday will receive
                    holiday pay plus regular pay for the hours worked.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Weekend Holidays</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    When a holiday falls on a Saturday, it will typically be observed on the preceding Friday. When a
                    holiday falls on a Sunday, it will typically be observed on the following Monday.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Religious Accommodations</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    The company respects the religious diversity of our employees and will make reasonable
                    accommodations for employees who wish to observe religious holidays not included in the company
                    holiday schedule. Employees may use vacation time or unpaid time off for these observances with
                    proper advance notice to their manager.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Floating Holidays</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    In addition to the scheduled company holidays, full-time employees receive two floating holidays per
                    calendar year. Floating holidays must be scheduled in advance and approved by the employee's
                    manager. Unused floating holidays do not carry over to the next year.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Holiday During Paid Time Off</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    If a company holiday falls during an employee's scheduled vacation, the day will be counted as a
                    holiday rather than a vacation day. The employee will not be charged a vacation day for the holiday.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
